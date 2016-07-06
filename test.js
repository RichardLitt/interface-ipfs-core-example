var test = require('interface-ipfs-core')

var common = {
  setup: function (cb) {
    cb(null, yourIPFSInstance)
  },
  teardown: function (cb) {
    cb()
  }
}

// use all of the test suits
test.all(common)
