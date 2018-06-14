# Media Query

CSS Media Query for your Vue templates to conditionally render components based on screen width.

## Usage

[![Edit Banshee - MediaQuery Basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n21841m64?module=%2Fsrc%2FApp.vue)

```html
<!-- Hide 'hello' text at 600+ pixels  -->
<banshee-media-query min-width at="600" display="hidden">
  hello
</banshee-media-query>
```

The `<banshee-media-query>` component will only return the first child it wraps. For example, if two elements reside within the media query component as siblings, only the first one will be returned.

```html
<banshee-media-query min-width at="600" display="hidden">
  <header>Title</header>
  <div>Some content...</div> <!-- this div will not be displayed -->
</banshee-media-query>
```

To return multiple elements, just wrap them within a root node like so:

```html
<banshee-media-query min-width at="600" display="hidden">
  <section>
    <header>Title</header>
    <div>Some content...</div>
  </section>
</banshee-media-query>
```

## Media Query

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| at   | `true`     | String, Number | N/A | width at which you want the breakpoint to be set. |
| display | `true`  | String | `'visible'` | takes two possible values: `'visible'` or `'hidden'`. Tells the component whether to show or hide contents at specified breakpoint. |
| maxWidth | `[true]` | Boolean | `false` | render based on `display` prop at or below the `at` prop. Note either `maxWidth` or `minWidth` must be set. |
| minWidth | `[true]` | Boolean | `false` | render based on `display` prop at or above the `at` prop. Note either `maxWidth` or `minWidth` must be set. |
| unit | false | String | `'px'` | unit to measure `at` prop with. Accepts `'px'` or '`em`'. |

## More Examples

### Table (Desktop) to Card (Mobile)

[![Edit Banshee - MediaQuery Table/Card Views](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pw404x1rpj?module=%2Fsrc%2FApp.vue)

```html
<banshee-media-query display="hidden" min-width at="787">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Faction</th>
        <th>Gold</th>
        <th>Lumber</th>
        <th>Food</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="unit in units" :key="unit.id">
        <td>{{ unit.name }}</td>
        <td>{{ unit.faction }}</td>
        <td>{{ unit.gold }}</td>
        <td>{{ unit.lumber }}</td>
        <td>{{ unit.food }}</td>
      </tr>
    </tbody>
  </table>
</banshee-media-query>
<banshee-media-query min-width at="787">
  <div>
    <div v-for="unit in units" :key="unit.id">
      <ul>
        <li>Name: {{ unit.name }}</li>
        <li>Faction: {{ unit.faction }}</li>
        <li>Gold: {{ unit.gold }}</li>
        <li>Lumber: {{ unit.lumber }}</li>
        <li>Food: {{ unit.food }}</li>
      </ul>
    </div>
  </div>
</banshee-media-query>
```
