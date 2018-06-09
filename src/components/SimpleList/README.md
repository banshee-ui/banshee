# Banshee Simple List

A functional component list iterator.  Useful for displaying large lists of data and static lists like menus or navigation.

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

## Banshee Simple List

### Scoped Slots

| Property | Description |
| ---      | ---         |
| index    | the index of the item within the array |
| item     | each element in the array |

## More Examples

### Bootstrap 4

```html
<ul class="list-group">
  <banshee-simple-list :items="people">
    <template slot-scope="{ item }">
      <li class="list-group-item">{{ item }}</li>
    </template>
  </banshee-simple-list>
</ul>
```

### Foundation

```html
<ul class="menu">
  <banshee-simple-list :items="links">
    <template slot-scope="{ item }">
      <li><a href="">{{ item }}</a></li>
    </template>
  </banshee-simple-list>
</ul>
```

### Semantic UI

```html
<ul class="ui list">
  <banshee-simple-list :items="characters">
    <template slot-scope="{ item }">
      <li class="item">{{ item }}</li>
    </template>
  </banshee-simple-list>
</ul>
```

### Bulma

```html
<aside class="menu">
  <ul class="menu-list">
    <banshee-simple-list :items="characters">
      <template slot-scope="{ index, item }">
        <li class="item">
          <a href="item.href"
              :class="{ 'is-active': index === activeLink }">
            {{ item }}
          </a>
        </li>
      </template>
    </banshee-simple-list>
  </ul>
</aside>
```
