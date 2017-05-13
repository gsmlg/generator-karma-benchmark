'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-karma-benchmark') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var files = [
      'package.json',
      'karma.conf.js',
      'ReadMe',
      // 'vendor',
      'benchmark/each.benchmark.js'
    ];

    files.forEach(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    });
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }
};
