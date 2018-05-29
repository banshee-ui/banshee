<script>
import BansheeCarouselSlide from './CarouselSlide'
import toPascal from '@/utils/hyphenToPascal'

export default {
  name: 'BansheeCarousel',
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    speed: {
      type: [String, Number],
      default: 5000
    },
    startSlide: {
      type: [String, Number],
      default: 0,
      validator: value => value >= 0
    },
    tag: {
      type: String,
      default: 'ul'
    },
    transitionAppear: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String
    },
    transitionMode: {
      type: String
    }
  },
  data: () => ({
    autoplayTime: null,
    currentIndex: 0
  }),
  mounted () {
    this.currentIndex = this.startSlide

    if (this.autoplay) {
      this.play()
    }

    if (this.pauseOnHover) {
      this.$el.addEventListener('mouseenter', this.pause)
      this.$el.addEventListener('mouseleave', this.play)
    }
  },
  computed: {
    activeSlide () {
      return this.carouselSlides[this.currentIndex]
    },
    carouselSlides () {
      return this.$slots.default.filter(child => {
        const options = child.componentOptions
        if (options && toPascal(BansheeCarouselSlide.name)) {
          return child
        }
      })
    },
    length () {
      return this.carouselSlides.length
    },
    otherCarouselContent () {
      return this.$slots.default.filter(child => !child.componentOptions ? child : null)
    }
  },
  methods: {
    nextSlide () {
      this.currentIndex += 1

      if (this.currentIndex > this.length - 1) {
        this.currentIndex = 0
      }

      this.$emit('onChange', this.currentIndex)
    },
    pause () {
      this.autoplayTime = clearInterval(this.autoplayTime)
      this.$emit('onChange', this.currentIndex)
    },
    play () {
      this.autoplayTime = setInterval(this.nextSlide, this.speed)
      this.$emit('onChange', this.currentIndex)
    },
    previousSlide () {
      this.currentIndex -= 1

      if (this.currentIndex < 0) {
        this.currentIndex = this.length - 1
      }

      this.$emit('onChange', this.currentIndex)
    }
  },
  render (h) {
    const scopedSlots = this.$scopedSlots.default
      ? this.$scopedSlots.default({
        activeIndex: this.currentIndex,
        btnAttrs: {
          buttons: {
            'aria-label': 'Carousel Buttons',
            'aria-controls': this.id
          },
          next: {
            'aria-label': 'next'
          },
          pause: {
            'aria-label': 'pause'
          },
          play: {
            'aria-label': 'play'
          },
          previous: {
            'aria-label': 'previous'
          }
        },
        length: this.length,
        next: this.nextSlide,
        pause: this.pause,
        play: this.play,
        previous: this.previousSlide
      })
      : null

    const slide = h('transition', {
      props: {
        name: this.transitionName,
        mode: this.transitionMode
      }
    }, [this.activeSlide])

    return h(this.tag, {
      attrs: {
        'aria-live': 'polite',
        id: this.id,
        tabindex: 0
      }
    }, [slide, this.otherCarouselContent, scopedSlots])
  }
}
</script>
