var should = require("should");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
import User from "../models/user";

/* global describe it */
describe("user mongoose schema testing", function() {
  before(function(done) {
    mongoose.connect(
      "mongodb://localhost:27018/unittest",
      { useNewUrlParser: true }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function() {
      console.log("We are connected to test database!");
      done();
    });
  });

  after(function(done) {
    console.log("After");
    let clear = false;
    if (clear) {
      console.log("Clear test database!");
      mongoose.connection.db.dropDatabase(function() {
        mongoose.connection.close(function() {
          console.log("Close test database!");
          done();
        });
      });
    } else {
      mongoose.connection.close(function() {
        console.log("Close test database!");
        done();
      });
    }
  });

  it("should be invalid if id is empty", function(done) {
    var m = new User();
    m.validate(function(err) {
      should.exist(err);
      done();
    });
  });
  it("can save one ", function(done) {
    const newUser = new User({
      toolConsumer: new ObjectID("56955ca46063c5600627f393"),
      user_id: "1234"
    });
    newUser
      .save()
      .then(() => {
        console.log("Saved user");
        done();
      })
      .catch(err => {
        console.log("Error ", err);
        done();
      });
  });
  it("can find one ", function(done) {
    User.findOne({ user_id: "1234" }, function(err, doc) {
      // console.log('results', err, doc)
      should.exist(doc);
      should.not.exist(err);
      done();
    }).catch(e => {
      console.log("find one error", e);
    });
  });
});
