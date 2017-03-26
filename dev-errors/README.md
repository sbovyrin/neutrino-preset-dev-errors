# neutrino-preset-dev-errors
[![neutrino](https://img.shields.io/badge/neutrino-v5-blue.svg)]()
[![npm](https://img.shields.io/npm/dt/neutrino-preset-dev-errors.svg)]()


## What is it?
Neutrino preset to output error on the browser window

<a href="https://www.npmjs.com/package/neutrino-preset-dev-errors">
    <img src="https://raw.githubusercontent.com/sbovyrin/neutrino-presets/master/dev-errors/demo.png" alt="demo dev error"/>
</a>


## Requirements

- Installed `neutrino` version 5+


## How to use?
Use it is very simple. Just to add `neutrino-preset-dev-errors` after your main `neutrino-preset-(web|react|node|etc.)`

```
// package.json
{
  ...
  "neutrino": {
    "use": [
      "neutrino-preset-web",
      "neutrino-preset-dev-errors"
    ]
  }
  ...
}
```

## Other my presets:

- [postcss-autoprefixer](https://www.npmjs.com/package/neutrino-preset-postcss-autoprefixer)
- [postcss-next](https://www.npmjs.com/package/neutrino-preset-postcss-cssnext)