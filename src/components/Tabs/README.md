# Banshee Tabs

### Controlled

```html
<template>
  <div id="app">
    <banshee-tabs defaultSelected="Home" :tabs="tabs">
      <div v-bind="attrs" slot-scope="{ attrs, select, selected }">
        <banshee-tab :active="selected" tab="Home">
          <template slot-scope="{ attrs, tab }">
            <button v-bind="attrs" @click="select(tab)">{{ tab }}</button>
          </template>
        </banshee-tab>

        <banshee-tab :active="selected" tab="Settings">
          <template slot-scope="{ attrs, tab }">
            <button v-bind="attrs" @click="select(tab)">{{ tab }}</button>
          </template>
        </banshee-tab>

        <banshee-tab-pane :active="selected" for="Home">
          <div v-bind="attrs" slot-scope="{ attrs }">
            Home Selected
          </div>
        </banshee-tab-pane>
        <banshee-tab-pane :active="selected" for="Settings">
          <div v-bind="attrs" slot-scope="{ attrs }">
            Settings Selected
          </div>
        </banshee-tab-pane>
      </div>
    </banshee-tabs>
  </div>
</template>
```
