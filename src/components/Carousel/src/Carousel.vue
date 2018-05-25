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
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    show: {
      type: [String, Number],
      default: 1,
      validator: value => value > 0
    },
    speed: {
      type: [String, Number],
      default: 3000
    },
    startSlide: {
      type: [String, Number],
      default: 0
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
    currentIndex: 0
  }),
  mounted () {
    this.currentIndex = this.startSlide
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
    },
    previousSlide () {
      this.currentIndex -= 1

      if (this.currentIndex < 0) {
        this.currentIndex = this.length - 1
      }
    }
  },
  render (h) {
    const scopedSlots = this.$scopedSlots.default
      ? this.$scopedSlots.default({
        activeIndex: this.currentIndex,
        length: this.length,
        next: this.nextSlide,
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
        tabindex: 0
      }
    }, [slide, this.otherCarouselContent, scopedSlots])
  }
}
</script>
