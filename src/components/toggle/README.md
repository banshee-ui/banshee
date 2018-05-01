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

## Props

### default-on

The initial "on" state. Defaults to `false`.
**type**: `Boolean`

### on

The Banshee toggle component will manage it's own state internally. If you need to control the component's state yourself set the `on` prop to `true` or `false` and control the toggle yourself through events or `on-toggle` prop.

**type**: `Boolean`

### on-toggle

Callback function fired when using `toggle` function provided by render prop. This function receives the current toggle state (`true`/`false`) as a parameter.

**type**: `Function`

**@params**: `Boolean` - Toggle state

## Events

### @setOn

Fired when the `setOn` function provided by the render prop is invoked.

**@params**: `Boolean` - Toggle state

### @setOff

Fired when the `setOff` function provided by the render prop is invoked.

**@params**: `Boolean` - Toggle state

### @onToggle

Fired when the `toggle` function provided by the render prop is invoked.

**@params**: `Boolean` - Toggle state

## Other Examples

### Accessibility

We can use `v-bind` object syntax to receive the `attrs` parameter from the render prop. The `attrs` object contains a `tabIndex` and `aria-expanded` property to give your toggle element better accessibility. It is recommended you always set this.

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

### Controlled

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
  components: { BansheeToggle },
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
