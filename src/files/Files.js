const Files = {
	get_extension: filename => filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2),
};

module.exports = Files;
