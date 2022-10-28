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

function createNewPackageJson() {
  const packageObject = {
    name: projectName,
    private: true,
    version: '0.0.0',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
      test: 'jest --watchAll',
    },
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
    },
    devDependencies: {
      '@babel/preset-env': '^7.19.4',
      '@babel/preset-react': '^7.18.6',
      '@testing-library/jest-dom': '^5.16.5',
      '@testing-library/react': '^13.4.0',
      '@testing-library/user-event': '^14.4.3',
      '@types/react': '^18.0.22',
      '@types/react-dom': '^18.0.7',
      '@vitejs/plugin-react': '^2.2.0',
      'babel-jest': '^29.2.2',
      'identity-obj-proxy': '^3.0.0',
      jest: '^29.2.2',
      'jest-environment-jsdom': '^29.2.2',
      vite: '^3.2.0',
    },
  };
  fs.writeFileSync(
    `${process.cwd()}/package.json`,
    JSON.stringify(packageObject, null, 2),
    'utf8'
  );
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
    createNewPackageJson();
    console.log(`${chalk.green('Done. Now Run:')}`);
    console.log(`      ${chalk.bold.yellow(`cd ${projectName}`)}`);
    console.log(`      ${chalk.bold.yellow(`yarn || npm install`)}`);
    console.log(
      `      ${chalk.bold.yellow(
        `npm run dev || npm run test <> yarn dev || yarn test`
      )}`
    );
  } catch (error) {
    console.log(error);
  }
}
main();
