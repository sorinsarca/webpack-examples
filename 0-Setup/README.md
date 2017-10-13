# Setup


## Prerequisites

#### nodejs (8.x) & npm

Ubuntu

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Others

https://nodejs.org/en/download/package-manager/

#### yarn

```bash
npm install -g yarn
```

## Basic setup

Create `webpack.config.js` file

```js
module.exports = {
    // webpack config
};
```

Create `package.json`

```json
{
  "main": "webpack.config.js",
  "scripts": {
    "build": "webpack"
  }
}
```

Add webpack to dev dependencies

```bash
yarn add webpack --dev
```

Building

```bash
yarn run build
```
