<template>
  <div class="order">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getAllChannel } from '@/utils/service';
export default {
  data() {
    return {}
  },
  mounted() {
    this.getAllChannel()
  },
  methods: {
    getAllChannel() {
      getAllChannel().then(res => {
        console.log(res)
      })
        .catch(err => {
          this.$message.error(`${err.message}`)
        })
    }
  }
}
</script>
