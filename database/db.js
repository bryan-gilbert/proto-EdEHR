import mongoose from 'mongoose'

export default function (callback) {
  const dbName = 'scratch'
  const dbServer = 'localhost:27017'
  const db = dbServer + '/' + dbName
  const urn = 'mongodb://' + db
  mongoose
  .connect(urn, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected to ' + db)
    callback()
  })
  .catch(err => console.log(err))
}
