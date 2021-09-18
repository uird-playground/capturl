# Capturl - Screenshot from url

Capturl is an npm package that returns a PNG or BASE64 image of any website by providing the url. It was created using Google's puppeteer.

## Installation

```js
$ npm install capturl
```

## Usage

```js
var capturl = require("capturl");

let image = await capturl([url], [option]);
```

[url]: link of the website to render
[options]:

- width: (number | default to 1920) width of the navigator's window used to render the website
- height: (number | default to 1080) height of the navigator's window used to render the website
- encoding: (enumeration png/base64 | default to PNG)

## Example

```js
var capturl = require("capturl");

let image = await capturl("https://www.google.com", {
  width: 1920,
  height: 1080,
  encoding: "base64",
});
```

## Credits

[GoogleChrome/puppeteer](https://github.com/puppeteer/puppeteer)

## License

MIT License

Copyright (c) 2021 Omar Mokhfi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
