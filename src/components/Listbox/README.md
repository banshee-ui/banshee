# Banshee Listbox

## Basic Usage

```html
<banshee-listbox :items="characters">
  <banshee-listbox-item>
    <template slot-scope="{ item, index, selected }">
      <span :class="{ active: selected }" >{{ index }} : {{ item }}</span>
    </template>
  </banshee-listbox-item>
</banshee-listbox>

<script>
  //...
   data () {
    return {
      characters: [
        'Varian', 'Sylvanas', 'Thrall', 'Saurfang',
        'Malfurion', 'Tyrande', 'Greyman', 'Nathanos',
        'Anduin', 'Illidan', 'Khadgar', 'Vol\'jin',
        'Chen', 'Garrosh', 'Velen', 'Bolvar',
        'Arthas', 'Jaina', 'Muradin', 'Mograine'
      ]
    }
   }
</script>
```

## Example: List Transfer

```html
<template>
  <div id="app">
    <banshee-listbox @transfer="transfer" :items="characters">
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
      filter: '',
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