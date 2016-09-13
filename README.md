# react-bootstrap-button-loader
Bootstrap Button with Spinner feature

[![react-bootstrap-button-loader](https://github.com/yury-dymov/react-bootstrap-button-loader/raw/master/docs/gifs/demo.gif)](https://github.com/yury-dymov/react-bootstrap-button-loader)

[![npm version](https://img.shields.io/npm/v/react-bootstrap-button-loader.svg?style=flat)](https://www.npmjs.com/package/react-bootstrap-button-loader)
[![Downloads](http://img.shields.io/npm/dm/react-bootstrap-button-loader.svg?style=flat-square)](https://npmjs.org/package/react-bootstrap-button-loader)
[![Build Status](https://img.shields.io/travis/yury-dymov/react-bootstrap-button-loader/master.svg?style=flat)](https://travis-ci.org/yury-dymov/react-bootstrap-button-loader)
[![Coverage Status](https://coveralls.io/repos/github/yury-dymov/react-bootstrap-button-loader/badge.svg?branch=master)](https://coveralls.io/github/yury-dymov/react-bootstrap-button-loader?branch=master)

# Demo
Demo and playground are available [here](https://yury-dymov.github.io/react-bootstrap-button-loader/)

# Usage Example
```
import Button from 'react-bootstrap-button-loader';

<Button loading={this.state.loading}>Press me!</Button>
```

# Configurable Props
*Note*: All props are optional.

### bsStyle: string, default: 'default'
Bootstrap style, supported values: `default`, `primary`, `success`, `info`, `warning`, `danger`, `link`.

### disabled: boolean, default: false
Set this prop `true` to disable button.

*Note:* button in loading state is disabled and this behavior is not overridable even if `false` value is explicitly provided.

### loading: boolean, default: false
This prop controls Button loading state.

While loading, Button is disabled and icon provided via props is replaced with Spinner.

### icon: node, default: null
Buttons with icons are better!

Provided icon is shown if Button is not in a loading state. Otherwise Spinner is rendered.

### spinColor: string, default: '#fff'
Spinner color for loading state.

While white color used by default works fine for most cases, for different bootstrap themes and bsStyles it might be better to use other colors instead.

# License
MIT (c) Yury Dymov
