const fs = require('fs');

module.exports = {
	activateCypressEnvFile() {
		console.log("WTF IS HAPPENING...", fs.existsSync('.env.cypress'));
		if (fs.existsSync('.env.cypress')) {
			fs.renameSync('.env', '.env.backup');
			fs.renameSync('.env.cypress', '.env');
		}

		try {
			const data = fs.readFileSync('.env', 'utf8');
			console.log(data);
		} catch (e) {
			console.log('Error:', e.stack);
		}

		return null;
	},

	activateLocalEnvFile() {
		if (fs.existsSync('.env.backup')) {
			fs.renameSync('.env', '.env.cypress');
			fs.renameSync('.env.backup', '.env');
		}

		return null;
	},
};
