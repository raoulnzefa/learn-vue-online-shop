<template>
  <div class="main-wrapper">
    <keep-alive> // Saves the component state when routing
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "v-main-wrapper",
  components: { // Children of _this_ component.

  },
  props: {

  }, // Data from a parent component.
  data() { // Private data
    return {
      title: 'Main Wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},

  mounted() {}
}
</script>

// Без 'scoped' эти стили будут видны во всем проекте. Со 'scoped' стили инкапсулированы.
<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>