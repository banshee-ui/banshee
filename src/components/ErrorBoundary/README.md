# Error Boundary

A reusable error boundary component for catching JavaScript errors and displaying fallback UIs.

The ErrorBoundary component is based on [React's example component](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) featuring a new component hook in React 16 called `componentDidCatch`.

## Basic Usage

To use this component simply wrap any other component which may throw an Error.

```html
<banshee-error-boundary>
  <error-prone-component />
</banshee-error-boundary>
```

Errors thrown in child components will automatically bubble up to the `BansheeErrorBoundary` component.

## Error Boundary

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| fall-back | `false` | Object | `<default-fallback>` | the fallback component to show in case of error |
| on-error | `false` | Function | `null` | callback function to execute in case an error is captured |
| stop-propagation | `false` | Boolean | `false` | boolean to stop propagation of the error up the component tree |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onErrorCaptured | (error) | object returning  |

### Fallback UI via `fall-back`

We can provide a fallback UI to display via the `fall-back` prop.  It simply takes a Vue component to render.

```html
<template>
  <BansheeErrorBoundary :fall-back="productError">
    <ProductCard ... />
  </BansheeErrorBoundary>
</template>

<script>
import ProductErrorCard from '...'

export default {
  // ...
  data () {
    return {
      productError: ProductErrorCard
    }
  }
}
</script>
```

Furthermore, we can directly access the contents of the `BansheeErrorBoundary` component's `errorCaptured` hook either throw a callback or Vue's emit.

### Callbacks via on-error

The `BansheeErrorBoundary` can receive a callback function through the `on-error` prop.

```html
<template>
  <banshee-error-boundary :on-error="handleError">...</banshee-error-boundary>
<template>

<script>
// ...
methods: {
  handleError (err, vm, info) {
    // do something
  }
}
// ...
</script>
```

### @errorCaptured event

The callback function will receive the same parameters as the `errorCaptured` method.

We can also listen to a Vue event via an `errorCaptured` event.  This will send the same parameters as above as the event payload.

```html
<banshee-error-boundary @errorCaptured="...">
```

### Stop Propagation

The `errorCaptured` hook will continue to propagate errors up the component tree unless it returns `false`.  Doing so will stop any additional `errorCaptured` hooks to execute **and** the global `errorHandler` from being invoked for the error.  To do this we can use the `stop-propagation` prop.

```html
<banshee-error-boundary stop-propagation>
  ...
</banshee-error-boundary>
```