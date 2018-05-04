<template>
  <div>
    <slot :level="level" :label="label" children="children"></slot>
    <div v-if="children.length">
      <div v-for="child in children"
          :key="child.label">
        <BansheeTreeNode
          :level="level + 1"
          :children="child.children"
          :label="child.label">
          <template slot-scope="{ level, children, label }">
            <slot :level="level" :children="children" :label="label"></slot>
          </template>
        </BansheeTreeNode>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BansheeTreeNode',
  props: {
    children: {
      type: Array,
      default: () => []
    },
    label: {
      type: String
    },
    level: {
      type: Number,
      default: 0
    }
  }
}
</script>
