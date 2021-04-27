import * as webstorer from 'webstorer'

const getWorkerPath = () => {
   // return dev build when env is development
   if (process.env.NODE_ENV === 'development') {
      return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js')
   } else {
      // return prod build when env is production
      return require('file-loader?name=scripts/[name].[hash]. js!jsstore/dist/jsstore.worker.min.js')
   }
}
const workerPath = getWorkerPath().default
console.log('----- workerPath: ', workerPath)
webstorer.connect(workerPath).then(conn => {
   const schema = webstorer.createDbSchema('webstorer_example', [{
      name: 'Employees',
      columns: {
         employeeId: { primaryKey: true, notNull: true, dataType: 'number' }
      }
   }])

   console.log('----- schema: ', schema)

   conn.createDb(schema).then(res => {
      res.insert('tb1', [{ age: 1 }])
   }).catch(err => console.log('----- createDB err: ', err))
})
