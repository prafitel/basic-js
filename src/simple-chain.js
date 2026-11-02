const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    const linkValue = value !== undefined ? String(value) : "";
    this.chain.push(`( ${linkValue} )`);

    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join("~~");

    this.chain = [];

    return result;
  },
};

module.exports = {
  chainMaker,
};
