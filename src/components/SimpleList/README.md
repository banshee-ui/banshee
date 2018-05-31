# Banshee Simple List

A functional component list iterator.

## Basic Usage

```html
<banshee-simple-list :items="people">
  <template slot-scope="{ index, item }">
    {{ index }} -- {{ item }}
  </template>
</banshee-simple-list>

<script>
// ...
data: () => ({
  people: ['Sylvanas', 'Nathanos', 'Putress', 'Barov', 'Voss']
})
</script>
```

The `<banshee-simple-list>` is a very simple iterator for arrays of data.  If you are looking for more robust list solution with methods like sorting, grouping, and filtering of data you may want to look into the `<banshee-smart-list>` component.

### Scoped Slots

| Property | Description |
| ---      | ---         |
| index    | the index of the item within the array |
| item     | each element in the array |
