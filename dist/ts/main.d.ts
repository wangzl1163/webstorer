import { DbSchema, TableSchema } from './Interfaces';
/**
 * @description 创建数据库连接
 * @returns {Object} 返回创建的数据库连接
 */
declare function connect(): Promise<any>;
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
declare function createDbSchema(dbName: string, tableSchemaList: TableSchema[]): DbSchema;
/**
 * 初始化数据库
 * @param {Object} dbSchema 数据库对象
 * @returns 返回数据库连接对象。
 */
declare function createDb(dbSchema: DbSchema): Promise<any>;
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
declare function createTable(dbName: string, tableSchema: TableSchema): Promise<any>;
/**
 * 向表中插入数据
 * @param {String} tableName 表名
 * @param {Array} data 要插入表中的数据。数组的元素应与创建表时columns对象拥有相同属性
 * @returns 返回一个Promise对象。插入成功时值为插入的数据的行数。
 */
declare function insert(tableName: string, data: any[]): Promise<number | undefined>;
/**
 * 更新数据
 * @param {String} tableName 表名
 * @param {Object} expression 更新操作的表达式对象
 * @returns 返回一个Promise对象。值为更新操作影响的行数。
 */
declare function update(tableName: string, expression: any): Promise<number | undefined>;
/**
 * 删除数据
 * @param {String} tableName 表名
 * @param {Object} expression 删除操作的表达式对象
 * @returns 返回一个Promise对象。值为删除操作影响的行数。
 */
declare function remove(tableName: string, expression: any): Promise<number | undefined>;
/**
 * 查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象
 * @returns 返回一个Promise对象。值为查询出的数据的数组。
 */
declare function select(tableName: string, expression: any): Promise<any[] | undefined>;
/**
 * 分页查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象：{from: tableName, where: {column1:字段名, ...}, ...}
 * @param {Int} pageIndex 页码，默认值为1
 * @param {Int} pageSize 页面展示条数，默认值为10
 * @returns 返回一个Promise对象。值为分页查询出的数据的数组。
 */
declare function paging(tableName: string, expression?: any, pageIndex?: number, pageSize?: number): Promise<any[] | undefined>;
/**
 * 执行原生sql语句来操作indexedDB
 * @param {String} sqlExpression sql语句
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */
declare function runSql(sqlExpression: string): any;
/**
 * @description 获取参数化的sql
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回参数化的sql
 */
declare function getParameterizedSqlExpression(sqlExpression: string, parameters: any): any;
/**
 * @description 执行经过参数化的sql语句
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */
declare function runParameterizedSql(sqlExpression: string, parameters: any): any;
export { connect, createDbSchema, createDb, createTable, runSql, getParameterizedSqlExpression, runParameterizedSql, insert, update, remove, select, paging };
