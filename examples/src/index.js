// import * as webstorer from 'webstorer'
import * as webstorer from '../../dist/webStorer.min.js'
// import * as webstorer from '../../dist/webStorer.js'

console.log('----- webstorer: ', webstorer)

webstorer.connect().then(conn => {
   console.log('----- conn: ', conn)
   const schema = webstorer.createDbSchema('webstorer-example', [{
      name: 'tb1',
      columns: [
         {
            id: { notNull: true, dataType: 'number' }
         }
      ]
   }])

   console.log('----- schema: ', schema)

   conn.createDb(schema)
})
