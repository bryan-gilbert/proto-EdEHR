import mongoose from 'mongoose'

export default function (config) {
  return new Promise(function (resolve, reject) {
    // const dbName = config.databaseName
    const uri = config.database.uri
    const options = config.database.options
    console.log('DB URN', uri)

    mongoose
    .connect(uri, options)
    .then((conn) => {
      console.log('MongoDB Connected to ' + uri)
      resolve(conn)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
