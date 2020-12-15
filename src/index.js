const yulelog = function() {
  console.yulelog = function(msgOrObject, ...args) {
    console.log(`🎄☃️🔥 ${msgOrObject} 🎄☃️🔥`, ...args);
  }
}

module.exports = yulelog;

yulelog();