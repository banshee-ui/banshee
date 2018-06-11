<script>
export default {
  name: 'BansheeFetch',
  props: {
    body: {
      type: Object,
      default: () => ({})
    },
    cache: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'no-cache', 'reload', 'force-cache', 'only-if-cached'].includes(value.toLowerCase())
      }
    },
    credentials: {
      type: String,
      default: 'omit',
      validator (value) {
        return ['include', 'same-origin', 'omit']
      }
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
      default: 'GET',
      validator (value) {
        return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(value.toUpperCase())
      }
    },
    mode: {
      type: String,
      default: 'same-origin',
      validator (value) {
        return ['no-cors', 'cors', 'same-origin'].includes(value.toLowerCase())
      }
    },
    redirect: {
      type: String,
      default: 'follow',
      validator (value) {
        return ['manual', 'follow', 'error'].includes(value.toLowerCase())
      }
    },
    referrer: {
      type: String,
      default: 'client',
      validator (value) {
        return ['client', 'no-referrer'].includes(value.toLowerCase())
      }
    },
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    error: null,
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
      const { body, cache, credentials, headers, method, mode, redirect, referrer } = this
      this.loading = true

      fetch(this.url, {
        body: !['GET', 'HEAD'].includes(method.toUpperCase()) ? JSON.stringify(body) : null,
        cache,
        credentials,
        headers,
        method,
        mode,
        redirect,
        referrer
      })
        .then(res => res.json())
        .then(data => {
          this.loading = false
          this.response = data
          this.$emit('onDataReceived', data)
        })
        .catch(error => {
          this.error = error
          this.$emit('onError', error)
        })
    }
  },
  render () {
    return this.$scopedSlots.default({
      error: this.error,
      loading: this.loading,
      response: this.response,
      fetch: this.lazy ? this.fetch : null
    })
  }
}
</script>
