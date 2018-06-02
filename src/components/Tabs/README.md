# Banshee Tabs

Banshee tabs are grouped sections of content that display one panel of content at a time.

## Basic Usage

```html
<banshee-tabs>
  <banshee-tab-list>
    <banshee-tab>Ghosts</banshee-tab>
    <banshee-tab>Goblins</banshee-tab>
    <banshee-tab>Ghouls</banshee-tab>
  </banshee-tab-list>
  <banshee-tab-panes>
    <banshee-tab-pane>Ghosts can be scary.</banshee-tab-pane>
    <banshee-tab-pane>Goblins are sneaky.</banshee-tab-pane>
    <banshee-tab-pane>Ghouls are dangerous!</banshee-tab-pane>
  </banshee-tab-panes>
</banshee-tabs>
```

The tabs are composed of the following components:

- `<banshee-tabs>` - the wrapper component, designates the content will be tabs
- `<banshee-tab-list>` - a set of tab elements, these are the elements that are clicked to activate their associated pane
- `<banshee-tab>` - the tab element itself
- `<banshee-tab-panes>` - a set of tab panes or panels, these hold the content that will be displayed
- `<banshee-tab-pane>` - a single content pane that is associated with a tab

Tabs are associated with their panes via index, so order defined matters. For example, the tab `<banshee-tab>Ghosts</banshee-tab>` is associated with `<banshee-tab-pane>Ghosts can be scary.</banshee-tab-pane>` because they are the same index within their respective parent component.

## Banshee Tabs

Wrapper component that controls and initalizes the tab's state.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| active | `false` | Number | `undefined` | controlled component prop, the active index of the tab |
| default-active | `false` | Number | `0` | the default active tab index |
| tag | `false` | String | `'div'` | HTML tag for wrapping element of tabs and tab panes |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onTabChange | (currentIndex, previousIndex) | triggers when active tab is changed |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| active   | current active index |
| updateActiveIndex | method to update the active index, takes an index as a parameter |

## Banshee Tab List

Component that controls each individual tab.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'div'` | HTML tag for wrapping element of tabs |

## Banshee Tab Panes

Component that controls each individual tab content pane.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'div'` | HTML tag for wrapping element of tab panes |

## Banshee Tab

Each clickable tab. Activates associated tab pane. *Must be a direct child of `<banshee-tab-list>`*.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'button'` | HTML tag for the tab |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| index    | the tab's index |
| updateActiveIndex | method to update the active index, takes an index as a parameter |

## Banshee Tab Pane

Content for the associated tab.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'div'` | HTML tag for the tab content area |

---

## More Examples

### Bootstrap 4 

```html
<banshee-tabs>
  <template slot-scope="{ active }">
    <banshee-tab-list class="nav nav-tabs" tag="ul">
      <banshee-tab tag="li" class="nav-item">
        <template slot-scope="{ index }">
          <a class="nav-link" :class="{ active: active === index }">Ghosts</a>
        </template>
      </banshee-tab>
      <banshee-tab tag="li" class="nav-item">
        <template slot-scope="{ index }">
          <a class="nav-link" :class="{ active: active === index }">Goblins</a> 
        </template>
      </banshee-tab>
      <banshee-tab tag="li" class="nav-item">
        <template slot-scope="{ index }">
          <a class="nav-link" :class="{ active: active === index }">Ghouls</a>
        </template>
      </banshee-tab>
    </banshee-tab-list>
    <banshee-tab-panes>
      <transition name="fade" mode="out-in">
        <banshee-tab-pane>Ghosts can be scary.</banshee-tab-pane>
      </transition>
      <transition name="fade" mode="out-in">
        <banshee-tab-pane>Goblins are sneaky.</banshee-tab-pane>
      </transition>
      <transition name="fade" mode="out-in">
        <banshee-tab-pane>Ghouls are dangerous!</banshee-tab-pane>
      </transition>
    </banshee-tab-panes>
  </template>
</banshee-tabs>
```