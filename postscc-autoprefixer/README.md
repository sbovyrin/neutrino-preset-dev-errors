# neutrino-preset-postcss-autoprefixer

## What is it?
Neutrino preset for supporting postcss autoprefixer

Input:
```css
  display: flex;
  flex-direction: column;
```

Output:
```css
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
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