import chalk from "chalk";

const babelMessage: string = 'Transpiled With Babel';
const webpackMessage: string = 'Bundled by the Webpack';
console.log(chalk.black.bgGreenBright(babelMessage));
console.log(chalk.white.bgBlueBright(webpackMessage));