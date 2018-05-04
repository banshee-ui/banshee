<template>
  <div>
    <slot name="root" :label="treeData.label"></slot>
    <BansheeTreeNode :children="treeData.children" :level="1">
      <template slot-scope="{ children, level, label }">
        <slot v-if="label" :children="children" :level="level" :label="label"></slot>
      </template>
    </BansheeTreeNode>
  </div>
</template>

<script>
import BansheeTreeNode from './TreeNode'

export default {
  name: 'BansheeTree',
  components: { BansheeTreeNode },
  props: {
    treeData: {
      type: Object,
      default: () => []
    }
  },
  data: () => ({

  }),
  computed: {
    hasChildren () {
      return this.treeData.children
    }
  },
  mounted () {
    console.log(this.treeData)
  }
}
</script>
