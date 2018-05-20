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
