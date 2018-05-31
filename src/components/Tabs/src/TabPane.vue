<script>
export default {
  name: 'BansheeTabPane',
  functional: true,
  render (h, { slots }) {
    return slots().default
  }
}
</script>
