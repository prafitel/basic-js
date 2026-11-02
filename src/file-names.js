const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const count = {};
  return names.reduce((acc, name) => {
    let quantity = count[name] || 0;
    let newName = quantity ? `${name}(${quantity})` : name;

    while (count[newName]) {
      newName = `${name}(${++quantity})`;
    }

    count[name] = quantity + 1;
    count[newName] = 1;
    return [...acc, newName];
  }, []);
}

module.exports = {
  renameFiles,
};
