# `neutrino-preset-postcss-autoprefixer`
[![neutrino](https://img.shields.io/badge/neutrino-v5-blue.svg)]()
[![npm](https://img.shields.io/npm/dt/neutrino-preset-postcss-autoprefixer.svg)]()

## Requirements

- Installed `neutrino` version 5+


## What is it?
Neutrino preset for supporting postcss autoprefixer

Input:
```css
  display: flex;
  flex-direction: column;
```


Output:
```css
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
```
## How to use?
Use it is very simple. Just to add `neutrino-preset-postcss-autoprefixer` after your main `neutrino-preset-(web|react|node|etc.)`

```
// package.json
{
  ...
  "browserslist": [
    "> 5%",
    "last 4 versions"
  ],
  "neutrino": {
    "use": [
      "neutrino-preset-web",
      "neutrino-preset-postcss-autoprefixer"
    ]
  }
  ...
}
```

> `browserlist` you may set maintained browsers

## Other my presets:

- [Output dev errors](https://www.npmjs.com/package/neutrino-preset-dev-errors)
