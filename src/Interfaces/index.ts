/**
 * 数据库范式
 */
export interface DbSchema {
	name: string;
	tables: any[]
}

/**
 * 表范式
 */
export interface TableSchema {
	name: string;
	columns: any
}
