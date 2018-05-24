<script>
export default {
  name: 'BansheeCarousel',
  props: {
    autoplay: {
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
      default: 'div'
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  mounted () {
    this.currentIndex = this.startSlide
  },
  computed: {
    carouselLength () {
      return this.$slots.default.length
    }
  },
  methods: {
    nextSlide () {
      if (this.currentIndex >= this.carouselLength - 1) {
        this.currentIndex = 0
        return
      }

      this.currentIndex += 1
    },
    previousSlide () {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.carouselLength - 1
        return
      }

      this.currentIndex -= 1
    }
  },
  render (h) {
    const activeSlide = this.$slots.default[this.currentIndex]
    const scopedSlots = this.$scopedSlots.default
      ? this.$scopedSlots.default({
        active: this.currentIndex,
        length: this.carouselLength,
        next: this.nextSlide,
        previous: this.previousSlide
      })
      : null

    return h(this.tag, [
      activeSlide,
      scopedSlots
    ])
  }
}
</script>
