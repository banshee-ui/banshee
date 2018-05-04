# Banshee Media Query

CSS Media Query for your Vue templates to conditionally render components based on screen width.

## Usage

### Basic Example

```html
<!-- Hide 'hello' text at 600+ pixels  -->
<BansheeMediaQuery min-width at="600" display="hidden">
  hello
</BansheeMediaQuery>
```

## API

### Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| at   | true     | String, Number | N/A | Width at which you want the breakpoint to be set. |
| display | true  | String | `'visible'` | Takes two possible values: `'visible'` or `'hidden'`. Tells the component whether to show or hide contents at specified breakpoint. |
| maxWidth | [true] | Boolean | `false` | Render based on `display` prop at or below the `at` prop. Note either `maxWidth` or `minWidth` must be set. |
| minWidth | [true] | Boolean | `false` | Render based on `display` prop at or above the `at` prop. Note either `maxWidth` or `minWidth` must be set. |
| unit | false | String | `'px'` | Unit to measure `at` prop with. Accepts `'px'` or '`em`'. |
