<script>
export default {
  name: 'BansheeFetch',
  props: {
    body: {
      type: Object,
      default: () => ({})
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    lazy: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      default: 'GET'
    },
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    errors: null,
    loading: false,
    response: null
  }),
  created () {
    if (!this.lazy) {
      this.fetch()
    }
  },
  methods: {
    fetch () {
      return fetch(this.url, {
        body: JSON.stringify(this.body),
        method: this.method,
        headers: this.headers
      })
        .then(res => res.json())
    }
  },
  render () {
    return this.$scopedSlots.default({
      errors: this.errors,
      loading: this.loading,
      response: this.response
    })
  }
}
</script>
