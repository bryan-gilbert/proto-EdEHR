export default class Helper {
  constructor () {
    this.clear = true
  }
  setClear(bool) {
    this.clear = bool
  }

  before(done, mongoose) {
    mongoose.connect(
      'mongodb://localhost:27018/unittest',
      { useNewUrlParser: true }
    );
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
      // console.log('We are connected to test database!');
      done();
    });
  }

  after(done, mongoose, collection) {
    function close() {
      mongoose.connection.close(function () {
        // console.log('Close test database!');
        done();
      });
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropCollection(collection, function (err) {
        // console.log(`dropped collection ${collection}!`);
        close()
      });
    } else {
      close()
    }
  }

}