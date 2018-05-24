# Banshee Carousel


## Basic Usage

```html
<banshee-carousel>
  <banshee-carousel-slide>
    content 1
  </banshee-carousel-slide>
  <banshee-carousel-slide>
    content 2
  </banshee-carousel-slide>
  <banshee-carousel-slide>
    content 3
  </banshee-carousel-slide>
</banshee-carousel>
```

With a transition:

```html
<banshee-carousel>
  <template v-for="slide in slides">
    <transition name="fade" mode="out-in" :key="slide.id">
      <banshee-carousel-slide :key="slide.id">
          <img :src="slide.src">
      </banshee-carousel-slide>
    </transition>
  </template>

  <template slot-scope="{ next, previous }">
    <button @click="next">Next</button>
    <button @click="previous">Prev</button>
  </template>
</banshee-carousel>

<script>
// ...
slides: [
  { id: 1, src: 'https://picsum.photos/200?image=1074' },
  { id: 2, src: 'https://picsum.photos/200?image=876' },
  { id: 3, src: 'https://picsum.photos/200?image=1080' },
  { id: 4, src: 'https://picsum.photos/200?image=1011' },
  { id: 5, src: 'https://picsum.photos/200?image=995' }
]
</script>
```

