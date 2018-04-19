<template>
  <div>
    <form-helper>
        <div slot="form-header">
            <h3>This is the title of the form</h3>
            <p>Some information about the form</p>
        </div>
        <div slot="form-fields">
            <input type="text" name="" value="" required />
            <input type="password" name="" value="" required />
        </div>
        <div slot="form-control">
            <button type="button" name="button">Submit</button>
        </div>
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
