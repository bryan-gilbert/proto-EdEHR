import mongoose from 'mongoose'

export default function (callback) {
  const dbName = 'scratch'
  const dbServer = 'localhost:27018'
  const db = dbServer + '/' + dbName
  const urn = 'mongodb://' + db
  console.log('DB URN', urn)
  mongoose
  .connect(urn, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected to ' + db)
    callback()
  })
  .catch(err => console.log(err))
}
