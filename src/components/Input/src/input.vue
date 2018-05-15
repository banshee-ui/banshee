<template>
  <input :type="type"
    :value="value"
    v-on="listeners" />
</template>

<script>
export default {
  name: 'BansheeInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        blur: e => this.$emit('blur', e.target.value),
        input: e => this.$emit('input', e.target.value)
      }
    }
  }
}
</script>
