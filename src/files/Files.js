const Files = {
  // eslint-disable-next-line no-bitwise
  getExtension: (filename) => filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2),
};

module.exports = Files;
