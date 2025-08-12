function areThereDuplicates(...args) {
  // Time - O(n), Space - O(n);
  // let Obj = {};
  // for (let val of args) {
  //     Obj[val] = (Obj[val] || 0) + 1;
  // }
  // for (let key in Obj) {
  //     if (Obj[key] > 1) {
  //         return true;
  //     }
  // }
  // return false;

  //Time - O(n log n) Space O(1)
  args.sort();

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }

  return false;
}
