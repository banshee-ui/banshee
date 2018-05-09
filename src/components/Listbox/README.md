# Banshee Listbox

## Basic Usage

```html
<banshee-listbox :items="items">
  <div  slot-scope="{ list, onKeyboard, onFocus, focused, focusedIndex, optionsAria }">
    <strong>Currently Selected: {{ focused.item }}</strong>
    <ul tabindex="0"
      role="listbox"
      class="listbox"
      v-on="onKeyboard">
      <li v-for="(character, i) in list"
        :class="{ active: i === focusedIndex }"
        class="listbox-item"
        v-bind="optionsAria"
        :aria-selected="i === focusedIndex"
        @click="onFocus(i)"
        :key="character">
        {{ character }}
      </li>
    </ul>
  </div>
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
