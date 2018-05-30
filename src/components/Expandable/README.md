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
- `<banshee-expandable-item>` - each individual expandable content area
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

## Components

### Expandable

Designates area of app that will hold expandable content

### Expandable Item

### Expandable Title

### Expandable Body