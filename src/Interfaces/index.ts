/**
 * 通用含有任意个属性的值为string类型的对象
 */
export interface StringIndex {
	[key: string]: string
}

/**
 * 数据库范式
 */
export interface DbSchema {
	name: string
	tables: any[]
}

/**
 * 表范式
 */
export interface TableSchema {
	name: string
	columns: any
}

/**
 * 排序条件
 * @field {string} by 字段名
 * @field {string} type 排序类型，支持：asc——升序，desc——降序
 * @field {boolean} idbSorting 是否为indexedDB内部执行排序。默认值：true
 */
export interface OrderBy {
	by: string
	type: string
	idbSorting?: boolean
}

/**
 * 查询条件
 * @field {StringIndex} or or关系查询条件，为包含任意个属性为字段值为具体值的对象
 */
export interface Where extends StringIndex {
	or?: StringIndex
}

/**
 * join配置
 * @field {string} with 数据库表名
 * @field {string} on 对应sql中的on
 * @field {string} type join类型——inner和left
 * @field {Where} where join查询条件
 * @field {any} as 列别名表达式
 */
export interface Join {
	with: string
   on: string
   type?:string
   where?: Where
	as?: any
}

/**
 * union、intersect配置
 * @field {string} from 数据库表名
 * @field {Where} where join查询条件
 */
export interface QueryModel{
	from: string
	where: Where
}
