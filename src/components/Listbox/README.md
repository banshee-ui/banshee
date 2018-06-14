# Listbox

The listbox displays a list of items/options that are selectable to the user.

## Basic Usage

[![Edit Banshee - Listbox Basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/237lz66rj?module=%2Fsrc%2FApp.vue)

```html
<banshee-listbox :items="forsaken">
  <banshee-listbox-item>
    <template slot-scope="{ active, item }">
      <span :class="{ active }">{{ item }}</span>
    </template>
  </banshee-listbox-item>
</banshee-listbox>

<script>
  //...
  data: () => ({
    forsaken: ['Sylvanas', 'Nathanos', 'Belmont', 'Mortuus', 'Voss']
  })
</script>
```

The listbox is composed of two tags:

- `<banshee-listbox>` - parent tag, designates area to be a listbox and initializes internal state + keyboard interactions
- `<banshee-listbox-item>` - direct child of `<banshee-listbox>`, exposes scoped slot for content rendering helpers

## Listbox

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| default-focus | `false` | [String, Number] | `0` | Default index of item to focus on mounted |
| default-selected | `false` | [String, Number, Array] | `null` | Default index(es) of item(s) to be selected on mounted |
| items | `true` | Array | `null` | Items to be presented within listbox |
| item-key | `false` | String | `'id'` | If each element in items is an object, what to key each `listbox-item` by |
| tag | `false` | String | `div` | HTML tag for listbox |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onFocus | (index, item)  | triggers when you focus an item within the listbox, provides the index of that item and the item itself |
| onSelectItem | (item, selected) | triggers when you select an item from the listbox, provides the current item and all the selected items |
| onRemoveItem | (removed, selected) | triggers when you remove an item from the selected items, provides the removed item and all the selected items |
| onTransfer | (selected) | triggers when you transfer items between listboxes, provides the selected items |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| items    | the items in the listbox |
| focus    | method for focusing an item, expects an index |
| focused  | the currently focused index |
| selectItem | method for selecting an item |
| selectedItems | the array of currently selected items |
| total | the length of the items array |
| totalSelected | the length of the selected array |
| transfer | method to setup new focus and reset internal state on item transfers |

## Listbox Item

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `div` | HTML tag for listbox-item |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| active   | boolean whether the current item is actively being focused or not |
| item     | each individual element in the items array |
| index    | the item's index |
| selected | boolean whether the current item is selected | 

## Example: List Transfer

```html
<template>
  <div id="app">
    <banshee-listbox @onTransfer="transfer" :items="characters">
      <banshee-listbox-item>
        <template slot-scope="{ active, item, selected }">
          <template v-if="selected">&#10004;</template> <span :class="{ active }">{{ item }}</span>
        </template>
      </banshee-listbox-item>

      <template slot-scope="{ transfer }">
        <button @click="transfer">Transfer</button>
      </template>
    </banshee-listbox>

    <banshee-listbox :items="favoriteCharacters">
      <p>My favorite:</p>
      <banshee-listbox-item>
        <template slot-scope="{ item }">
          {{ item }}
        </template>
      </banshee-listbox-item>
    </banshee-listbox>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      characters: [
        'Varian', 'Sylvanas', 'Thrall', 'Saurfang',
        'Malfurion', 'Tyrande', 'Greymane', 'Nathanos',
        'Anduin', 'Illidan', 'Khadgar', 'Vol\'jin',
        'Chen', 'Garrosh', 'Velen', 'Bolvar',
        'Arthas', 'Jaina', 'Muradin', 'Mograine'
      ],
      favoriteCharacters: []
    }
  },
  methods: {
    transfer ({ selected }) {
      this.characters = this.characters.filter(x => !selected.includes(x))
      this.favoriteCharacters.push(...selected)
    }
  }
}
</script>
```