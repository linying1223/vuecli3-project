<template>
  <div class="home">
    <Header></Header>
    <el-container :style="{height:docheight-50+'px'}">
      <Leftnav></Leftnav>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Leftnav from '@/components/Leftnav.vue'

export default {
  name: 'home',
  components: {
    Header,
    Leftnav
  },
  computed: {
    docheight() {
      return window.innerHeight 
    }
  }
}
</script>
