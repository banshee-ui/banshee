# Banshee Accordion

Should this have similar API to Tabs?

```html
<banshee-accordion>
  <banshee-accordion-item>
    <banshee-accordion-title>Content One</banshee-accordion-title>
    <banshee-accordion-body>
      Mollit eiusmod ut tempor amet Lorem cillum sint irure qui adipisicing. Anim fugiat aute ex aliquip ut minim dolore culpa.
    </banshee-accordion-body>
  </banshee-accordion-item>

  <banshee-accordion-item>
    <banshee-accordion-title>Content Two</banshee-accordion-title>
    <banshee-accordion-body>
      Adipisicing est non id laboris cupidatat veniam minim consequat enim.
    </banshee-accordion-body>
  </banshee-accordion-item>
</banshee-accordion>
```

We can wrap other HTML/Components on our `<banshee-accordion-body>`

```html
<banshee-accordion>
  <banshee-accordion-item>
    <banshee-accordion-title>Accordion 1</banshee-accordion-title>
    <transition name="fade">
      <banshee-accordion-body>
        <h2>This is the first accordion</h2>
        <p>some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repudiandae ratione debitis blanditiis magni voluptates ex dolor nemo, ad quo odit quibusdam dicta inventore sunt necessitatibus impedit incidunt aliquam eligendi.</p>
      </banshee-accordion-body>
    </transition>
  </banshee-accordion-item>

  <banshee-accordion-item>
    <banshee-accordion-title>Accordion 2</banshee-accordion-title>
    <transition name="fade">
      <banshee-accordion-body>
        <h2>This is the second accordion</h2>
        <ol>
          <li>One</li>
          <li>Two</li>
        </ol>
      </banshee-accordion-body>
    </transition>
  </banshee-accordion-item>
</banshee-accordion>
```
