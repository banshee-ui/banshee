# Banshee Fetch

Banshee component for handling APIs.

## Basic Usage

```html
<template>
  <div id="app">
    <banshee-fetch url="https://jsonplaceholder.typicode.com/posts/1" mode="cors">
      <div slot-scope="{ loading, response }">
        <div v-if="loading">Loading...</div>
        <div v-if="response && !loading">
          <h2>{{ response.title }}</h2>
          <p>{{ response.body }}</p>
        </div>
      </div>
    </banshee-fetch>
  </div>
</template>
```

The `<banshee-fetch>` component is an abstraction over the browser's own `fetch` API. Instead of using methods, mixins, and lifecycle hooks to manage API data you can create services via the `<banshee-fetch>` component.

## Banshee Fetch

### Attributes & Props

The `banshee-fetch` component takes much of the same options that the Browser [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) does since it's built directly on top of it.

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| body   | false     | Object | `{}` | Any body that you want to add to your request. |
| cache | false  | String | `'default'` | The cache mode you want to use for the request: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, or `only-if-cached`.  |
| credentials | false | String | `'omit'` | The request credentials you want to use for the request: `omit`, `same-origin`, or `include`. |
| headers | false | Object | `{}` | Any headers you want to add to your request, contained within a `Headers` object. |
| lazy | false | Boolean | `false` | Whether the component should immediately fetch the data or not. |
| method | false | String | `'GET'` | The request method. |
| mode   | false | String | `'same-origin'` | The mode you want to use for the request, e.g., `cors`, `no-cors`, or `same-origin`. |
| redirect | false | String | `'follow'` | The redirect mode to use: `follow` (automatically follow redirects), `error` (abort with an error if a redirect occurs), or `manual` (handle redirects manually). |
| referrer | false | String | `'client'` | A `USVString` specifying `no-referrer`, `client`, or a URL. |
| url | true | String | N/A | The API url. |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onDataReceived | (data) | occurs on successful ajax call, returns response data from ajax call |
| onError | (error) | occurs when ajax call results in error, returns ajax response error |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| error    | error object if the ajax call caught an error |
| loading  | boolean, whether or not we are still waiting for response from server |
| response | response data from server from successful fetch |
| fetch    | method, if `lazy` prop is present utilize this to trigger fetch |
