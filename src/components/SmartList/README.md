# Banshee Smart List

A component for managing collections of data.  It provides helpers for searching and sorting arrays of data.

## Basic Usage

```html
<banshee-smart-list :items="minions">
  <div slot-scope="{ items }">
    <template v-for="minion in items">
      <div :key="minion">
        {{ minion }}
      </div>
    </template>
  </div>
</banshee-smart-list>

<script>
// ...
data: () => ({
  minions: ['Dark Rangers', 'Abominations', 'Val\'kyr', 'Deathstalkers']
})
</script>
```

In its most simple form, the `<banshee-smart-list>` component receives an `items` prop, which must be an array. The scoped slot exposes an `items` array which is your original array of items with any computations, like sorting, already done to it.

## Smart List

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| default-sort | `false` | String | `null` | sort the data on component creation either via `'asc'` or `'desc'` values |
| items | `true` | Array | n/a | the collection you want to manipulate |
| sort-key | `false` | String | `''` | object key to sort by with | 
| query | `false` | String | `''` | query string to search/filter your items by |

 
