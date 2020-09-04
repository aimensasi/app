import './commands';
import './laravel-commands';
import './assertions';

before(() => {
	cy.task('activateCypressEnvFile', {}, { log: false });
	cy.artisan('migrate');
});

after(() => {
	cy.task('activateLocalEnvFile', {}, { log: false });
});
