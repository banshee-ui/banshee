<script>
export default {
  name: 'BansheeSmartList',
  props: {
    filterMethod: {
      type: Function
    },
    items: {
      type: Array,
      required: true
    },
    itemKey: {
      type: String,
      default: 'id'
    },
    sortMethod: {
      type: Function
    },
    sortKey: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    sort: {
      by: this.sortKey,
      order: -1
    }
  }),
  computed: {
    filteredItems () {
      let data = this.items

      if (this.query) {
        data = data.filter(row => {
          if (typeof row === 'object') {
            return Object.keys(row).some(key => {
              return String(row[key]).toLowerCase().includes(this.query.toLowerCase())
            })
          }

          return String(row).toLowerCase().includes(this.query.toLowerCase())
        })
      }

      if (this.sort.by) {
        data = data.slice().sort((a, b) => {
          if (typeof a === 'object' && typeof b === 'object') {
            a = a[this.sort.by]
            b = b[this.sort.by]
          }
          return (a === b ? 0 : a > b ? 1 : -1) * this.sort.order
        })
      }

      return data
    }
  },
  methods: {
    sortBy (by) {
      this.sort.by = by
      this.sort.order = this.sort.order * -1
    }
  },
  render () {
    return this.$scopedSlots.default({
      items: this.filteredItems,
      sort: this.sortBy
    })
  }
}
</script>
