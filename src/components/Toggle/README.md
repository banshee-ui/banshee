# Banshee Toggle

Banshee toggle component.

## Basic Usage

```html
<template>
  <div id="app">
    <banshee-toggle>
      <div slot-scope="{ toggle, on }">
        <button v-on="toggle">Toggle Me</button> {{ on }}
      </div>
    </banshee-toggle>
  </div>
</template>
```

## Toggle

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| default-on | `false` | Boolean | `false` | the initial `on` state |
| on | `false` | Boolean | `undefined` | makes toggle state controlled by you rather internally, aka makes it a "controlled component" |
| on-toggle | `false` | Function | `() => ({})` | function to execute every time the toggle component is toggled |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onSetOn | (on) | occurs when the toggle is set to "on" state, aka `true`, provides current on state as parameter |
| onSetOff | (on) | occurs when the toggle is set to "off" state, aka `false`, provides current on state as parameter |
| onToggle | (on) | occurs when the toggle is toggled, provides current on state as parameter |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| attrs    | aria helpers for accessiblity, use `v-bind="attrs"` to attach to an element |
| on       | current state of the toggle component's `on` state |
| setOn    | set the toggle component's `on` state to `true` |
| setOff   | set the toggle component's `on` state to `false` |
| toggle   | toggle the current state of the component's `on` state |
| inputToggle | handlers for attaching internal click/keyup actions to the element, use `v-on="inputActions"` |

## More Examples

### Accessibility

We can use `v-bind` object syntax to receive the `attrs` parameter from the render prop. The `attrs` object contains a `tabIndex` and `aria-expanded` property to give your toggle element better accessibility. It is recommended you always set this.

```html
<template>
  <div id="app">
    <banshee-toggle>
      <div slot-scope="{ attrs, toggle, on }">
        <button v-bind="attrs" v-on="toggle">Toggle Me</button>
        <br/>
        {{ on }}
      </div>
    </banshee-toggle>
  </div>
</template>
```

### Controlled Toggle Component

```html
<template>
  <div id="app">
    <banshee-toggle :on-toggle="toggle" :on="on">
      <div slot-scope="{ toggle, on }">
        <button v-on="toggle">Toggle Me</button>
        <br/>
        {{ on }}
      </div>
    </banshee-toggle>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    on: false
  }),
  methods: {
    toggle () {
      this.on = !this.on
    }
  }
}
</script>
```
