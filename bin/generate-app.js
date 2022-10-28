#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
console.log(chalk.blue('Creating your boilerplate'));

if (process.argv.length < 3) {
  console.log(chalk.green('You have to provide a name to your app.'));
  console.log(chalk.green('For example :'));
  console.log(chalk.green('    npx create-my-boilerplate my-app'));
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo =
  'https://github.com/hyvip-ai/react-vite-testing-boilerplate.git';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      error(
        `The directory "${projectName}" already exist in the current directory, please give it another name.`
      )
    );
  } else {
    console.log(error(err));
  }
  process.exit(1);
}

async function main() {
  try {
    console.log(chalk.green('Downloading files...'));
    console.log(chalk.green('Cloning repository...'));
    execSync(`git clone --depth 1 ${git_repo} ${projectName}`);
    process.chdir(projectPath);
    console.log(chalk.green('Removing useless files'));
    execSync('npx rimraf ./.git');
    fs.rmSync(path.join(projectPath, 'bin'), { recursive: true });
    console.log(`${chalk.green('Done. Now Run:')}`);
    console.log(`      ${chalk.bold.yellow(`cd ${projectName}`)}`);
    console.log(`      ${chalk.bold.yellow(`yarn`)}`);
    console.log(`      ${chalk.bold.yellow(`yarn dev || yarn test`)}`);
  } catch (error) {
    console.log(error);
  }
}
main();
