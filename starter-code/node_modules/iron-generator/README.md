[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Ironhack](https://www.ironhack.com)-flavored [Express](https://www.npmjs.com/package/express) application generator.


## Installation

```sh
$ npm install -g iron-generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `irongenerate(1)` to generate an application as shown below:

Create the app:

```bash
$ irongenerate --view=ejs --database=mongoose --git  awesome-project/
$ cd awesome-project/
```

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help              output usage information
        --version           output the version number
    -e, --ejs               add ejs engine support
        --hbs               add handlebars engine support
        --pug               add pug engine support
    -H, --hogan             add hogan.js engine support
    -v, --view <engine>     add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>      add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    -d, --database <engine> add <engine> database support (mongoose) (defaults to none)
        --git               add .gitignore
    -f, --force             force on non-empty directory

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator
[gratipay-image]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url]: https://gratipay.com/dougwilson/
