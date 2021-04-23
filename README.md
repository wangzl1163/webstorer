# webstorer

a web storer based on indexedDB

## Usage

1. install library: jsstore

    ```bash
    npm i jsstore
    ```

2. install webstorer

    ```bash
   npm i webstorer
   ```

3. create a connection object
   * Width Web Worker
   (1) Install file-loader - npm i file-loader -D
   (2) Write below code:

     ```javascript
      import * as webstorer from 'webstorer'
      
      const getWorkerPath = () => {
          // return dev build when env is development
          if (process.env.NODE_ENV === 'development') {
              return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
          }
          else { // return prod build when env is production
             return require("file-loader?name=scripts/[name].[hash]. js!jsstore/dist/jsstore.worker.min.js");
          }
       }
       const workerPath = getWorkerPath().default
       webstorer.connect(workerPath).then(conn => {
        // your code
      })
     ```

   * Without Web Worker
   (1) make sure you have included jsstore.worker file in your app.

      ```html
      <script src="scripts/jsstore.worker.js"></script>
      ```

       (2) Write below code:

       ```javascript
       import * as webstorer from 'webstorer'
       webstorer.connect().then(conn => {
        // your code
       })
       ```
