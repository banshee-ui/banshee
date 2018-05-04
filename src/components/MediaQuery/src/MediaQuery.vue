<script>
export default {
  name: 'BansheeMediaQuery',
  props: {
    at: {
      type: [String, Number],
      required: true
    },
    display: {
      type: String,
      default: 'visible',
      validator: value => ['visible', 'hidden'].includes(value)
    },
    maxWidth: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: 'px',
      validator: value => ['px', 'em'].includes(value)
    }
  },
  data () {
    return {
      width: null
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.width = this.unit === 'px'
        ? window.innerWidth
        : window.innerWidth / 16
    }
  },
  render () {
    if (!this.maxWidth && !this.minWidth) {
      console.warn(`You must set one of the props, 'max-width' or 'min-width' to true.`)
      return
    }

    if (this.maxWidth && this.minWidth) {
      console.warn(`The props 'max-width' and 'min-width' are active when only one is allowed.`)
      return
    }

    let toRender = false

    if ((this.maxWidth && this.display === 'hidden') || (this.minWidth && this.display === 'visible')) {
      toRender = this.width <= this.at
    } else {
      toRender = this.width >= this.at
    }

    return toRender ? this.$slots.default[0] : null
  }
}
</script>
