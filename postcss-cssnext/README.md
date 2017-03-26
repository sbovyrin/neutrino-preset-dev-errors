# `neutrino-preset-postcss-cssnext`
[![neutrino](https://img.shields.io/badge/neutrino-v5-blue.svg)]()
[![npm](https://img.shields.io/npm/dt/neutrino-preset-postcss-cssnext.svg)]()

## Requirements

- Installed `neutrino` version 5+


## What is it?
Neutrino preset for supporting postcss cssnext

## How to use?
Use it is very simple. Just to add `neutrino-preset-postcss-cssnext` after your main `neutrino-preset-(web|react|node|etc.)`

```
// package.json
{
  ...
  "neutrino": {
    "use": [
      "neutrino-preset-web",
      "neutrino-preset-postcss-cssnext"
    ]
  }
  ...
}
```

## Other my presets:

- [Output dev errors](https://www.npmjs.com/package/neutrino-preset-dev-errors)
- [postcss-autoprefixer](https://www.npmjs.com/package/neutrino-preset-postcss-autoprefixer)
