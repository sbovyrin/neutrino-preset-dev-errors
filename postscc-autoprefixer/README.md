# neutrino-preset-postcss-autoprefixer


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

```
// package.json
{
  ...
  "config": {
    "presets": [
      "neutrino-preset-web",
      "neutrino-preset-postcss-autoprefixer"
    ]
  }
  ...
}
```
