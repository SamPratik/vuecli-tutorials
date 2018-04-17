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
    //do something after creating vue instance
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
