"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      "Welcome to the extraordinary " + chalk.red("generator-typecript-react-webpack") + " generator!"
    ));

    const prompts = [{
      type: "input",
      name: "name",
      message: "What is the project name?",
      default: this.appname
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"), {
        name: this.props.name
      }
    );

    this._copyHelper("tsconfig.json");
    this._copyHelper("tslint.json");
    this._copyHelper("webpack.base.js");
    this._copyHelper("webpack.config.js");
    this._copyHelper("webpack.dev.js");
    this._copyHelper("webpack.prod.js");
    this._copyHelper("app");
  }

  _copyHelper(path) {
    this.fs.copy(
      this.templatePath(path),
      this.destinationPath(path)
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
