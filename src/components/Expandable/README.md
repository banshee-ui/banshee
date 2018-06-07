# Banshee Expandable

Toggle the visibility of content within Banshee expandables.

## Basic Usage

```html
<banshee-expandable>
  <banshee-expandable-item>
    <banshee-expandable-title>Content One</banshee-expandable-title>
    <banshee-expandable-body>
      Mollit eiusmod ut tempor amet Lorem cillum sint irure qui adipisicing. Anim fugiat aute ex aliquip ut minim dolore culpa.
    </banshee-expandable-body>
  </banshee-expandable-item>

  <banshee-expandable-item>
    <banshee-expandable-title>Content Two</banshee-expandable-title>
    <banshee-expandable-body>
      Adipisicing est non id laboris cupidatat veniam minim consequat enim.
    </banshee-expandable-body>
  </banshee-expandable-item>
</banshee-expandable>
```

To create some expandable content within your application you utilize a few tags:

- `<banshee-expandable>` - designates area of app that will hold expandable content
- `<banshee-expandable-item>` - each individual expandable area
- `<banshee-expandable-title>` - the title of the content area and the portion of the expandable that is always showing
- `<banshee-expandable-body>` - the hidden content of the expandable that is shown once an item has been expanded

**The only requirement is that a `<banshee-expandable-item>` is a direct child of `<banshee-expandable>`.**

It is fair game to wrap other HTML/Components on our `<banshee-expandable-body>` as shown below.

```html
<banshee-expandable>
  <banshee-expandable-item>
    <banshee-expandable-title>expandable 1</banshee-expandable-title>
    <transition name="fade">
      <banshee-expandable-body>
        <h2>This is the first expandable</h2>
        <p>some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repudiandae ratione debitis blanditiis magni voluptates ex dolor nemo, ad quo odit quibusdam dicta inventore sunt necessitatibus impedit incidunt aliquam eligendi.</p>
      </banshee-expandable-body>
    </transition>
  </banshee-expandable-item>

  <banshee-expandable-item>
    <banshee-expandable-title>expandable 2</banshee-expandable-title>
    <transition name="fade">
      <banshee-expandable-body>
        <h2>This is the second expandable</h2>
        <ol>
          <li>One</li>
          <li>Two</li>
        </ol>
      </banshee-expandable-body>
    </transition>
  </banshee-expandable-item>
</banshee-expandable>
```

## Expandable

Designates area of app that will hold expandable content.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| accordion | `false` | Boolean | `false` | designates the expandables as accordions, allowing only one to be open at a time |
| active | `false` | [Array, Number] | N/A | control prop, control which expandable-items are open |
| tag | `false` | String | `'div'` | HTML tag for wrapping expandable element |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onOpen | (activeIndexes: Array) | the currently active indexes |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| active   | the active index(es) |
| update   | method which takes an index or array of indexes to update the current set of active indexes |  

## Expandable Item

Designates an area as an expandable section. Must be a direct child of the `<banshee-expandable>` component.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'div'` | HTML tag for wrapping expandable title and content body |

## Expandable Title

The always visible section of the expandable item. This is the clickable portion to toggle the visibility of the content area.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag | `false` | String | `'dt'` | HTML tag for the expandable title |

## Expandable Body

The expandable's content area that is toggled between being shown or hidden.

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| label-by | `false` | String | `null` | The `id` of the element triggering the panel to open/close |
| tag | `false` | String | `'dd'` | HTML tag for the expandable's content body |

## More Examples

### Bootstrap 4

```html
<banshee-expandable tag="div">
  <banshee-expandable-item>
    <p>
      <banshee-expandable-title tag="button" class="btn btn-primary" controls="example1">
        Button
      </banshee-expandable-title>
    </p>
    <transition name="fade">
      <banshee-expandable-body id="example1" tag="div" class="collapse show">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </banshee-expandable-body>
    </transition>
  </banshee-expandable-item>
</banshee-expandable>
```