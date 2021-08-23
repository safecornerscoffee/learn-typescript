import chalk from "chalk";

const babelMessage = 'Transpiled With Babel';
const webpackMessage = 'Bundled by the Webpack';
console.log(chalk.black.bgGreenBright(babelMessage));
console.log(chalk.white.bgBlueBright(webpackMessage));