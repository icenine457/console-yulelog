const yulelog = function() {
  console.yulelog = function(...args) {
    const [msgOrObject, ...rest] = args;
    console.log(`🎄☃️🔥 ${msgOrObject} 🎄☃️🔥`, ...rest);
  }
}

module.exports = yulelog;

yulelog();