<template>
  <div>
      <keep-alive>
          <component v-bind:is="component"></component>
      </keep-alive>
      <button type="button" v-on:click="component = 'form-one'">Form One</button>
      <button type="button" v-on:click="component = 'form-two'">Form Two</button>
  </div>
</template>

<script>
import FormOne from './components/form-one'
import FormTwo from './components/form-two'

export default {
  name: 'app',
  components: {
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      component: 'form-one'
    }
  }
}
</script>

<style scoped>

</style>
