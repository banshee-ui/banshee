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

## Slot-scope Properties and Methods

### clear

The `clear` method uses local/sessionStorage.clear() to clear out the storage completely.  It will also reset the `result` object to an empty object.

### getItem

The `getItem` method returns a key's value when passed a `key` parameter.

### key

The `key` method returns the name of the passed in `index` number in the storage.

The `key` method takes two parameters.  The first is a `property` string.  The `property` is the name of the property you want to save your value to from the result of calling `key()` on your `result` object.  The second paramter is the `index`.

### length

The `length` property just returns the length of items in storage.

### removeItem

The `removeItem` method removes a single item from storage.

### removeItems

The `removeItems` method accepts an array of keys to remove from the storage.

### result

The `result` property is an object containing all the values obtained as a result of all the storage manipulation you have done over the component's lifecycle.

### setItem

The `setItem` method saves data to storage.  It takes a `key` as the first parameter and a `value` as the second.

### storage

The `storage` property is the entire local or session storage.  It is just an alias for window.${storage type}.

## Events

Each method also fires a Vue event under the same name as the method.

#### @clear
payload: void

#### @getItem
_item_ - The item fetched from storage   
_result_ - The current `result` object   
_store_ - Entire storage

#### @key
_key_  - Value returned from `key()`   
_result_ - The current `result` object   
_store_ - Entire storage   

#### @removeItem
_result_ - The current `result` object   
_store_ - Entire storage

#### @setItem
_result_ - The current `result` object   
_store_ - Entire storage
