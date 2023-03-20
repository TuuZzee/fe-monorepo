// Script to copy the namespace service package.json version
// to the service deploy package.json

const { execSync } = require('child_process');

const serviceName = process.argv.slice(2);

const servicePjson = require(`../${serviceName}/package.json`);
const deployPjson = require(`../${serviceName}/build/deploy/package.json`);

try {
  if (servicePjson.version !== deployPjson.version) {
    console.debug(`Release version v${servicePjson.version}`);
    execSync(`yarn version --new-version ${servicePjson.version} --no-git-tag-version`, {
      cwd: `${serviceName}/build/deploy`,
    });
  }
} catch (error) {
  console.error(`versionCopy.js ${serviceName} error: `, error);
}
