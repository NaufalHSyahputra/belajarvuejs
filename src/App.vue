<template>
  <div id="app">
    <transition name="page" mode="fade">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
// Load layout components dynamically.
const requireContext = require.context("@/layouts", false, /.*\.vue$/);
const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});
export default {
  el: "#app",

  data: () => ({
    layout: null,
    defaultLayout: "default"
  }),

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }
      this.layout = layouts[layout];
    }
  }
};
</script>
