# Banshee Expandable

Should this have similar API to Tabs?

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

We can wrap other HTML/Components on our `<banshee-expandable-body>`

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
