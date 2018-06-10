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
| default-sort | `false` | String | `null` | sort the items on component creation either via `'asc'` or `'desc'` values |
| filter-method | `false` | Function | `null` | custom function to filter items by |
| items | `true` | Array | n/a | the collection you want to manipulate |
| sort-method | `false` | Function | `null` | custom function to sort items by |
| sort-key | `false` | String | `''` | object key to sort by with | 
| query | `false` | String | `''` | query string to search/filter your items by |

#### Custom Filter & Sort

By default, the `bashee-smart-list` component provides basic filtering and sorting methods. You can provide your own filter and sorting methods for the component to use via the `filter-method` and `sort-method` props.

#### Filtering    
The function you provide for filtering will get two arguments:

- `query` - the current query string used to filter through the data
- `data` - the entire array of items provided via the `items` prop

#### Sorting   
The function you provide for the sorting will get two arguments:

- `sort` - the sorting object used internally by the component
- `data` - the list of items provided via the `items` prop, if a `query` prop exists the `data` will be an array of the currently filtered items

**The `sort` object in-depth**    
The internal `sort` object used by the component looks like:

```javascript
sort: {
  by: this.sortKey,
  order: 1
}
```

- `sort.by` - if your array of items are objects, this is the key you want to sort with
- `sort.order` - ascending (a positive number) or descending order (a negative number)

### More Examples

#### Bootstrap 4 - Data Table

```html
<template>
  <div class="card">
    <div class="p-2">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="filter-table">Filter</span>
        </div>
        <input type="text" class="form-control" 
              aria-label="Filter" aria-describedby="filter-table"
              v-model="query">
      </div>
    </div>

    <banshee-smart-list :items="units" :query="query">
      <table class="table" slot-scope="{ items, sort }">
        <thead>
          <tr>
            <th @click="sort('name')">Name</th>
            <th @click="sort('faction')">Faction</th>
            <th @click="sort('gold')">Gold</th>
            <th @click="sort('lumber')">Lumber</th>
            <th @click="sort('food')">Food</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in items" :key="unit.id">
            <td>{{ unit.name }}</td>
            <td>{{ unit.faction }}</td>
            <td>{{ unit.gold }}</td>
            <td>{{ unit.lumber }}</td>
            <td>{{ unit.food }}</td>
          </tr>
        </tbody>
      </table>
    </banshee-smart-list>
  </div>
</template>

<script>
//...
data: () => ({
  units: [
    { id: 1, name: 'Abomination', faction: 'Undead', gold: 240, lumber: 40, food: 4 },
    { id: 2, name: 'Gryphon Rider', faction: 'Human', gold: 280, lumber: 70, food: 4 },
    { id: 3, name: 'Black Citadel', faction: 'Undead', gold: 325, lumber: 230, food: 10 },
    { id: 4, name: 'Keeper of the Grove', faction: 'Night Elf', gold: 425, lumber: 100, food: 5 },
    { id: 5, name: 'Blademaster', faction: 'Orc', gold: 425, lumber: 100, food: 5 },
    { id: 6, name: 'Gargoyle', faction: 'Undead', gold: 185, lumber: 30, food: 2 },
    { id: 7, name: 'Town Hall', faction: 'Human', gold: 385, lumber: 205, food: 12 },
    { id: 8, name: 'Boneyard', faction: 'Undead', gold: 175, lumber: 200, food: 0 },
    { id: 9, name: 'Crypt Fiend', faction: 'Undead', gold: 215, lumber: 40, food: 3 },
    { id: 10, name: 'Ancient of Lore', faction: 'Night Elf', gold: 155, lumber: 145, food: 0 },
  ]
})
</script>
```
