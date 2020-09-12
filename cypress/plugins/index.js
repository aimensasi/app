const swap = require('./swap-env');

module.exports = on => {
	on('task', swap);
};
