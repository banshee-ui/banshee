# Banshee Tabs

### Controlled

```html
<template>
  <div id="app">
    <banshee-tabs @tabSelect="onSelect" :selected="selected" :tabs="tabs">
      <template slot-scope="{ select, selected }">
        <span v-for="tab in tabs" :key="tab">
          <strong :class="{ 'active': tab === selected }" @click="select(tab)">{{ tab }}</strong>
        </span>
      </template>
      <div slot="home">My Home</div>
      <div slot="documents">Important Documents</div>
      <div slot="settings">Cool settings</div>
    </banshee-tabs>
  </div>
</template>
```
