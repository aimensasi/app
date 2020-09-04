const swap = require("./swap-env");

module.exports = (on, config) => {
	on("task", swap);
};
