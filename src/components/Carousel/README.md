# Carousel

A basic carousel component for looping through slides of images or text.

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

The carousel requires two tags:

- `<banshee-carousel>`
- `<banshee-carousel-slide>`

The `<banshee-carousel>` tag marks an area as a Banshee carousel and provides the functionality for any child `<banshee-carousel-slide>` components to properly function.  The `<banshee-carousel-slide>` must be a direct child of the `<banshee-carousel>` to be part of the "sliding" content.

As with everything Banshee, no CSS is being applied and no default transitions.  You will have to provide your own.

With a custom transition:

```html
<banshee-carousel transition-name="fade" 
                  transition-mode="out-in">
  <banshee-carousel-slide v-for="slide in slides" :key="slide.id">
    <img :src="slide.src">
  </banshee-carousel-slide>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

[![Edit Banshee - Carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o7zpp38815)

## Carousel

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| autoplay | `false` | Boolean | `false` | automatically loop through each slide |
| id | `false` | String | `null` | HTML `id` attribute to set on the carousel |
| pause-on-over | `false` | Boolean | `false` | whether to pause the carousel on mouse hover |
| speed | `false` | [String, Number] | `5000` | time in ms for duration of each slide to display |
| start-slide | `false` | [String, Number] | `0` | which slide to start on |
| tag | `false` | String | `ul` | HTML tag for carousel |
| transition-appear | `false` | Boolean | `false` | appear property on Vue transition tag |
| transition-name | `false` | String | n/a | name for your Vue transition |
| transition-mode | `false` | String | n/a | mode for your Vue transition |

### Events

| Event | Parameters | Description |
| ---   | ---        | ---         |
| onChange | the current index of the carousel | triggers when the carousel plays, pauses, or changes slides |

### Scoped Slots

| Property | Description |
| ---      | ---         |
| activeIndex | the current active slide index |
| btnAttrs.buttons | aria labels for group of buttons that control slideshow |
| btnAttrs.next | aria labels for 'next' button |
| btnAttrs.pause | aria labels for 'pause' button |
| btnAttrs.play | aria labels for 'play' button | 
| btnAttrs.previous | aria labels for 'previous' button |
| length | total number of slides in carousel |
| next | method to make the next slide active | 
| pause | method to pause the carousel if autoplaying |
| play | method to play the carousel if paused |
| previous | method to make the previous slide active

## Carousel Slide

### Attributes & Props

| Name | Required | Type | Default | Description |
| ---  | ---      | ---  | ---     | ---         |
| tag  | `false`  | String | `li`  | HTML tag for carousel slide |

## More Examples

### Carousel with Buttons

```html
<banshee-carousel autoplay transition-name="fade" transition-mode="out-in">
  <banshee-carousel-slide>
    ...
  </banshee-carousel-slide>

  <banshee-carousel-slide>
    ...
  </banshee-carousel-slide>

  <banshee-carousel-slide>
    ...
  </banshee-carousel-slide>

  <template slot-scope="{ next, pause, play, previous, btnAttrs }">
    <button @click="previous" v-bind="btnAttrs.previous">Previous</button>
    <button @click="play" v-bind="btnAttrs.play">Play</button>
    <button @click="pause" v-bind="btnAttrs.pause">Pause</button>
    <button @click="next" v-bind="btnAttrs.next">Next</button>
  </template>
</banshee-carousel>
```

### Bootstrap 4

[![Edit Banshee - Bootstrap 4 Carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/38mokl6k4m?module=%2Fsrc%2FApp.vue)

```html
<banshee-carousel autoplay transition-name="fade" transition-mode="out-in" tag="div" class="carousel slide">  
  <banshee-carousel-slide v-for="slide in slides" :key="slide.id" tag="div" class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="slide.src">
    </div>
  </banshee-carousel-slide>

  <template slot-scope="{ next, pause, play, previous, btnAttrs }">
    <a class="carousel-control-prev" role="button"
        @click="previous" v-bind="btnAttrs.previous">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" role="button"
        @click="next" v-bind="btnAttrs.next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </template>
</banshee-carousel>   
```
