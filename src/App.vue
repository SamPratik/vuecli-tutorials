<template>
  <div>
    <form-helper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph text...</p>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  name: 'app',
  components: {
    'form-helper': FormHelper
  },
  data() {
    return {
      title: "I am dynamic title"
    }
  }
}
</script>

<style scoped>

</style>
