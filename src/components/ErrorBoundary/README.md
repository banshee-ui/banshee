# Banshee Error Boundary

A reusable error boundary component for catching JavaScript errors and displaying fallback UIs.

The ErrorBoundary component is based on [React's example component](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) featuring a new component hook in React 16 called `componentDidCatch`.

Fortunately, in Vue 2.5.0+ we have access to something similar with `errorCaptured`.  For more information on this hook refer to the API [here](https://vuejs.org/v2/api/#errorCaptured).

## Usage

To use this component simply wrap any other component which may throw an Error.

```html
<BansheeErrorBoundary>
  <ImUnstable />
</BansheeErrorBoundary>
```

Errors thrown in child components will automatically bubble up to the `BansheeErrorBoundary` component.

### Fallback UI via fall-back

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
  <BansheeErrorBoundary :on-error="handleError">...</BansheeErrorBoundary>
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
<BansheeErrorBoundary @errorCaptured="...">
```

### Stop Propagation

The `errorCaptured` hook will continue to propagate errors up the component tree unless it returns `false`.  Doing so will stop any additional `errorCaptured` hooks to execute **and** the global `errorHandler` from being invoked for the error.  To do this we can use the `stop-propagation` prop.

```html
<BansheeErrorBoundary stop-propagation>
  ...
</BansheeErrorBoundary>
```
