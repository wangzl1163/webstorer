// 参考：https://jsstore.net/tutorial/get-started/
import * as JsStore from 'jsstore'
// 参考：https://github.com/ujjwalguptaofficial/sqlweb/wiki
import SqlWeb from 'sqlweb'
import { DbSchema, TableSchema, OrderBy, Where, Join, QueryModel } from './Interfaces'

const isDev = process.env.NODE_ENV === 'development'

let connection
let originalInsert
let originalUpdate
let originalRemove
let originalSelect
let originalCount
let originalUnion
let originalIntersect
let originalClear
let originalDropDb
let orderByExpress = null
let whereExpress = null
let joinExpress = null
let top = 20
let aggregateExpress = null
let groupByExpress = null

/**
 * @description 创建数据库连接
 * @returns {Object} 返回创建的数据库连接
 */
function connect (workerPath:string = ''): Promise<any> {
   try {
      // 连接不存在时创建连接
      // The connection variable will be used to execute the further query.
      // A connection will handle one db at a time.
      // Do not create multiple connection for one db.
      if (!connection) {
         connection = new JsStore.Connection(new Worker(workerPath))
         connection.setLogStatus(isDev)
         // add SqlWeb
         connection.addPlugin(SqlWeb)

         originalInsert = connection.insert.bind(connection)
         originalUpdate = connection.update.bind(connection)
         originalRemove = connection.remove.bind(connection)
         originalSelect = connection.select.bind(connection)
         originalCount = connection.count.bind(connection)
         originalUnion = connection.union.bind(connection)
         originalIntersect = connection.intersect.bind(connection)
         originalClear = connection.clear.bind(connection)
         originalDropDb = connection.dropDb.bind(connection)

         connection.createDb = createDb
         connection.createDbSchema = createDbSchema
         connection.createTable = createTable
         connection.insert = insert
         connection.update = update
         connection.remove = remove
         connection.select = select
         connection.paging = paging
         connection.orderBy = orderBy
         connection.where = where
         connection.limit = limit
         connection.aggregate = aggregate
         connection.join = join
         connection.union = union
         connection.intersect = intersect
         connection.clear = clear
         connection.dropDb = dropDb
      }

      return Promise.resolve(connection)
   } catch (error) {
      return Promise.reject(error)
   }
}

/**
 * 生成数据库元数据
 * @param {String} dbName 数据库名
 * @param {Array} tableSchemaList 数据库表范式，包含表名和表的各个字段及其约束定义，值格式为：[{
 *    name: 'string',
		columns: {
			id: { notNull: true, dataType: 'number' },
			itemName: { notNull: true, dataType: 'string' },
			price: { notNull: true, dataType: 'number' },
			quantity: { notNull: true, dataType: 'number' },
			...
		}
 * },...]
 */
function createDbSchema (dbName: string, tableSchemaList: TableSchema[]): DbSchema {
   const tables = tableSchemaList.map(tm => {
      // Here "_id" is name of column
      tm.columns._id = { primaryKey: true, autoIncrement: true }
      return tm
   })

   const db = {
      name: dbName,
      tables
   }

   return db
}

/**
 * 初始化数据库
 * @param {Object} dbSchema 数据库范式
 * @returns 返回数据库连接对象。
 */
async function createDb (dbSchema: DbSchema): Promise<any> {
   const database = dbSchema // createDbSchema();
   const isDbCreated = await connection.initDb(database)

   if (isDbCreated === true) {
      console.log('db created')
   } else {
      console.log('db opened')
   }

   return connection
}

/**
 * 创建数据库表
 * @param dbName 数据库名
 * @param tableSchema 数据库表范式。{
 *    name: 'string',
		columns: {
			id: { notNull: true, dataType: 'number' },
			itemName: { notNull: true, dataType: 'string' },
			price: { notNull: true, dataType: 'number' },
			quantity: { notNull: true, dataType: 'number' },
			...
		}
 * }
 * @returns 返回一个Promise对象。值为jsStore的connection对象。
 */
async function createTable (dbName: string, tableSchema: TableSchema): Promise<any> {
   const version = await connection.getDbVersion(dbName)
   const dbSchema = await connection.getDbSchema(dbName)
   tableSchema.columns._id = { primaryKey: true, autoIncrement: true }
   dbSchema.tables.push({ ...tableSchema, version: version + 1 })
   const newConnection = await createDb(dbSchema)

   return newConnection
}

/**
 * 向表中插入数据
 * @param {String} tableName 表名
 * @param {Array} data 要插入表中的数据。数组的元素应与创建表时columns对象拥有相同属性
 * @returns 返回一个Promise对象。插入成功时值为插入的数据的行数。
 */
async function insert (tableName: string, data: any[]): Promise<number|undefined> {
   const noOfDataInserted = await originalInsert({
      into: tableName,
      values: data
   })

   if (noOfDataInserted > 0) {
      return Promise.resolve(noOfDataInserted)
   }

   return Promise.reject()
}

/**
 * 更新数据
 * @param {String} tableName 表名
 * @param {Object} expression 更新操作的表达式对象，值格式为：{
 * set: {
        column1: value1,
        column2: value2,
        column3: { // 支持四则运算操作符—— +、-、*、/
           '+': value3
        }
    },
    where: {
        column4: some_value,
        column5: some_another_value
    }
 * }
 * @returns 返回一个Promise对象。值为更新操作影响的行数。
 */
async function update (tableName: string, expression: any): Promise<number|undefined> {
   const rowsUpdated = await originalUpdate({
      in: tableName,
      ...expression
   })

   if (rowsUpdated) {
      return Promise.resolve(rowsUpdated)
   }

   return Promise.reject()
}

/**
 * 删除数据
 * @param {String} tableName 表名
 * @param {Object} expression 删除操作的表达式对象，值格式为：{
 * where: {
        column1: some_value,
        column2: some_another_value
    }
 * }
 * @returns 返回一个Promise对象。值为删除操作影响的行数。
 */
async function remove (tableName: string, expression: any): Promise<number|undefined> {
   const rowsDeleted = await originalRemove({
      from: tableName,
      ...expression
   })

   if (rowsDeleted) {
      return Promise.resolve(rowsDeleted)
   }

   return Promise.reject()
}

/**
 * 查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象，默认值为空对象。值格式为：
 * 普通查询：
 * where条件默认为and关系，表示且
 * 若要使用or关系——表示或，则需要在where对象中增加or属性其值为以表字段为属性的对象；
 * 若要使用like模糊查询，则添加以like为属性模糊值为值的对象。
 * {
 *    where: {
        column1: some_value,
        column2: some_another_value,
        or: {
           column3: value
        },
        column4: { // 模糊查询，like值可为：'%a'，'a%'，'%a%'三种形式
            like: 'a%'
        },
      }
 * }
   聚合函数查询：
   支持的聚合函数——max、min、count、sum、avg
   {
      aggregate：{
         // 如果要结合多个列查询，则传入一个以列名为元素的数组，例如：count:['column1','column2']
         min: Column_Name
      }
   }
 * @returns 返回一个Promise对象。值为查询出的数据的数组，默认查询结果数量上限为20，可通过limit函数设置。
 */
async function select (tableName: string, expression: any = {}): Promise<any[]|undefined> {
   const results = await originalSelect({
      from: tableName,
      limit: top,
      ...whereExpress,
      ...orderByExpress,
      ...aggregateExpress,
      ...joinExpress,
      ...groupByExpress,
      ...expression
   })

   // 执行了select后把指定查询条件的变量重置
   groupByExpress = joinExpress = whereExpress = orderByExpress = aggregateExpress = null
   top = 20

   if (results.length) {
      return Promise.resolve(results)
   }

   return Promise.reject()
}

/**
 * 查询记录的数量
 * @param tableName 数据库表名
 * @param filedValue 字段值对，示例：{ column1: 'value1', column2: 'value2 }
 * @returns 返回Promise对象。值为数据库表中查询到的记录的数量。
 */
async function count (tableName: string, filedValue: any): number {
   const count = await originalCount({
      from: tableName,
      where: filedValue
   })

   return count
}

/**
 * 分页查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象，默认值为空对象，值格式为：{ where: {column1:字段名, ...}, ...}
 * @param {Int} pageIndex 页码，默认值为1
 * @param {Int} pageSize 页面展示条数，默认值为10
 * @returns 返回一个Promise对象。值为分页查询出的数据的数组。
 */
async function paging (tableName: string, expression:any = {}, pageIndex:number = 1, pageSize:number = 10): Promise<any[]|undefined> {
   const results = await select(tableName, {
      limit: pageSize,
      skip: (pageIndex - 1) * pageSize,
      ...expression
   })

   if (results.length) {
      return Promise.resolve(results)
   }

   return Promise.reject()
}

/**
 * 指定查询排序条件
 * @param {OrderBy|OrderBy[]} expression 排序表达式。
 * @returns 返回带新查询排序条件的数据库连接对象
 *
 * 示例代码：
 * const expression = {}
 * connection.orderBy(expression).select(tableName).then(...)
 *
 * expression有以下两种形式
 * 单个排序条件：
 *  {
        by: column_name,
        type: sort_type //supprted sort type is - asc,desc
    }

 * 多个排序条件：
    [{
        by: column_name1,
        type: sort_type //supprted sort type is - asc,desc
    },
    {
        by: column_name2,
        type: sort_type //supprted sort type is - asc,desc
    }]
 */
async function orderBy (expression: OrderBy | OrderBy[]): Object {
   orderByExpress = {
      order: expression
   }

   return connection
}

/**
 * 指定查询条件
 * @param {Where} expression 查询条件表达式
 * @returns 返回带新查询条件的数据库连接对象
 *
 * 示例：
 * const whereExpress = {}
 * connection.where().select(tableName).then(...)
 *
 * whereExpress可以为以下几种表达式对象：
 * 不包含or的查询条件
 * {
      Column1: some_value,
      Column2: some_another_value
   }

   包含or的查询条件
   {
      Column1: some_value,
      or: {
         Column2: some_another_value
      }
   }

   包含like的模糊查询条件
   {
      Column1: {
         like: 'a%'
      },
   }

   包含between的查询条件
   {
      Column1: {
         '-': {
            low: low-value,
            high: high-value
         }
      },
   }

   包含in的查询条件
   {
      Column1: {
         in: [value1, value2, ...]
      }
   }

   包含运算符的查询条件，支持的运算符：>、<、>=、<=、!=
   {
      Column1: {
         '>': some_value
      }
   }
 */
async function where (expression: Where): Object {
   whereExpress = {
      where: expression
   }

   return connection
}

/**
 * 排序条件
 * @param columnName 列名
 */
async function groupBy (columnName:string|string[]): Object {
   groupByExpress = {
      // You can specify multiple columns at a time by giving the columns name in an array.
      // groupBy:['column1','column2']
      groupBy: columnName
   }

   return connection
}

/**
 * 指定查询结果集数量上限
 * @param {number} limit 结果集数量上限
 * @returns 返回指定了查询结果集数量上限的数据库连接对象
 */
async function limit (limit: number): Object {
   top = limit
   return connection
}

/**
 * 指定查询的聚合函数
 * @param aggregateFun 聚合函数名称，支持的聚合函数：count、sum、avg、max、min
 * @param columnName 表字段，可以为字符串或字符串数组
 * @returns 返回带有指定聚合函数的数据库连接
 * 示例：
 * connection.aggregate('min', 'column1').select(tableName).then(...)
 */
async function aggregate (aggregateFun:string, columnName: string | string[]): Object {
   aggregateExpress = {
      [aggregateFun]: columnName
   }
   return connection
}

/**
 * 指定查询join条件
 * @param {Join|Join[]} joinConfig join配置
 * @returns 返回带新join查询条件的数据库连接对象
 *
 * 示例代码：
 * const joinConfig = {}
 * connection.join(joinConfig).select(tableName).then(...)
 *
 * joinConfig有以下两种形式
 * 单个条件：
 *  {
      with: table2_name,
      on: "table1.common_field=table2.common_field",
      type:"inner",
      where: {
         [column name]: some value
      },
      as: {
         customerId: table2_customerId
      }
    }

 * 多个条件：
    [{
        with:table2_name,
        on: "table1.common_field=table2.common_field"
    },{
        with:table3_name,
        on: "table1.common_field=table3.common_field"
    }]
 */
async function join (joinConfig: Join | Join[]): Object {
   joinExpress = {
      join: joinConfig
   }

   return connection
}

/**
 * 执行union查询
 * @param unionExpressionArr union查询表达式数组
 * @returns 返回Promise对象。值为查询到的结果
 */
async function union (unionExpressionArr: QueryModel[]): Promise<any> {
   const res = await originalUnion(unionExpressionArr)
   if (res.length) {
      return res
   }

   return Promise.reject()
}

/**
 * 获取多个查询结果的并集
 * @param expressionArr 查询表达式数组
 * @returns 返回Promise对象。值为查询到的结果
 */
async function intersect (expressionArr: QueryModel[]): Promise<any> {
   const res = await originalIntersect({ queries: expressionArr })
   if (res.length) {
      return res
   }

   return Promise.reject()
}

/**
 * 清除表中所有记录
 * @param tableName 数据库表名
 * @returns void
 */
async function clear (tableName: string): void {
   await originalClear(tableName)
}

/**
 * 删除当前数据库
 * @returns void
 */
async function dropDb (): void {
   await originalDropDb()
}

/**
 * 执行原生sql语句来操作indexedDB
 * @param {String} sqlExpression sql语句
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */
function runSql (sqlExpression: string): any {
   return connection.$sql.run(sqlExpression)
}

/**
 * @description 获取参数化的sql
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回参数化的sql
 */
function getParameterizedSqlExpression (sqlExpression: string, parameters: any): any {
   const query = new connection.$sql.Query(sqlExpression)
   Object.entries(parameters).forEach((param) => {
      query.map('@' + param[0], param[1])
   })

   return query
}

/**
 * @description 执行经过参数化的sql语句
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */
function runParameterizedSql (sqlExpression: string, parameters: any): any {
   return runSql(getParameterizedSqlExpression(sqlExpression, parameters))
}

export {
   connect,
   createDbSchema,
   createDb,
   createTable,
   insert,
   update,
   remove,
   select,
   count,
   paging,
   where,
   orderBy,
   groupBy,
   limit,
   aggregate,
   join,
   union,
   clear,
   dropDb,
   runSql,
   getParameterizedSqlExpression,
   runParameterizedSql
}
