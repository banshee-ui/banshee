# Banshee Storage

[Local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [session](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) storage component.

## Usage

To use this component simply wrap other components you want to expose to the storage methods.

For example, if I had an array of monsters saved in localStorage under the key `monsters`, I can preload our storage using the `get` prop.

```html
<banshee-storage get="monsters">
  <ul slot-scope="{ result }">
    <banshee-simple-list v-if="result.monsters"
                         :items="result.monsters">
      <template slot-scope="{ item }">
        <li>{{ item }}</li>
      </template>
    </banshee-simple-list>
  </ul>
</banshee-storage>
```

The `result` variable exposed via the `slot-scope` is an object containg all the key/value pairs of data you have set/get from storage during the lifecycle of your component.

## Storage

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| get  | `false`  | [Array, String] | `null` | key(s) to get from data saved in local or session storage on component mount |
| set  | `false`  | [Array, Object] | `null` | object or array of objects containing key/value pairs to save to local or session storage on component mount |
| type | `false`  | String | `'local'` | type of storage you want to operate on, choices are `'local'` or `'session'` |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onClear | n/a | occurs when storage is cleared |
| onGetItem | ({ item, result, store }) | occurs when a value is retrieved from storage, emits an object containing the item retrieved, the entire result object, and the storage object |
| onKeyed   | ({ key, result, store })  | occurs when storage has the `key` operation performed on it, emits an object containing the key result, the result object, and the storage object |
| onRemoveItem | ({ result, store }) | occurs when an item is removed from storage, emits an object containing the result object and the storage object |
| onSetItem | ({ result, store }) | occurs when an item is set in storage, emits an object containing the result object and the storage object |

**The `result` object in depth**    
The `result` property is an object containing all the values obtained as a result of all the storage manipulation you have done over the component's lifecycle.

### Scoped Slots

| Property | Description |
| ---      | ---         |
| clear    | clears out your storage completely |
| getItem  | retrieves an item from storage, takes a `key` parameter to obtain the item from storage |
| key      | returns the nth key in the storage, takes a number `n` of the number key to retrieve |
| length   | the length of the storage object |
| removeItem | removes an item from storage, takes a `key` parameter of the item to remove |
| removeItems | removes multiple items from storage, takes an array of `key` to remove |
| result   | the result object |
| setItem  | saves an item to storage, takes a `key` as the first parameter and the `value` as the second parameter |
| storage  | the storage object |

## More Examples

### Setting to sessionStorage

By default, the `banshee-storage` component uses localStorage.  If you want to set it to sessionStorage you can utilize the `type` prop which will accept one of two possible values: `'local'` or `'session'`.

```html
<banshee-storage type="session">...</banshee-storage>
```

### Pre-set data to storage

In the first example we saw we could preload data from storage using the `get` prop.  We can also save data on component mount using the set prop.

```html
<template>
  <banshee-storage :set="myMonsters">
    <pre slot-scope="{ result }">
      {{ result.monsters }}
    </pre>
  </banshee-storage>
</template>

<script>
// ...
data: () => ({
  myMonsters: {
    monsters: ['Undead', 'Sludge Belcher', 'Bat']
  }
})
</script>
```

The `set` prop expects either a single object or any array of objects where the object's key becomes the key in storage and it's value also becomes the value in storage.  Notice above our `myMonsters` object has a key of `monsters`.  We then use the `monsters` property on our `result` object to access that data.
