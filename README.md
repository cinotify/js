# CI Notify Node JS Client

This package is used by the [CI Notify GitHub Action](https://github.com/cinotify/github-action).

## Installation

```
$ npm install -s @cinotify/email
```

## Usage

```js
const {email} = require("@cinotify/email");
email({
  to: 'example@example.com',
  subject: 'hello',
  body: 'hey there from js'
})
```