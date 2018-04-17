<template>
  <div id="">
    <footer>
      <p>{{copyright}}{{title}}</p>
    </footer>
  </div>
</template>
<script>
import {bus} from '../main';

export default {
  name: "",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    copyright: 'Copyright 2017 @'
  }),
  created() {
    //do something after creating vue instance...
    // Listening to the event fired from 'Header' component and using the
    // data sent from 'Header' component to update the 'title'...
    bus.$on('changeTitle', (data) => {
      this.title = data;
    });
  }
}
</script>
<style scoped>
  footer{
      background: #222;
      padding: 6px;
  }
  p{
      color: lightgreen;
      text-align: center;
  }
</style>
