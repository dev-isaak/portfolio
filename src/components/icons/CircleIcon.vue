<template>
  <svg-icon type="mdi" :path="path" color="teal"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCircle } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiCircle,
    }
  }
}
</script>