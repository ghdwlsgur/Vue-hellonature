<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Section from './components/layout/Section.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Section
  }
}

</script>
<template>
  <div id="app">
    <div class="container">
      <Header />
      <div class="contents">
        <Section />         
          <router-view id="router-view" />            
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="css">
@import './assets/css/common.css';
.wrap { margin: 0 auto; margin-top: 50px; margin-bottom: 200px; display: flex; justify-content: space-between;}
.main { margin: 0 auto; margin-top: 50px; margin-bottom: 200px; display: flex; justify-content: space-between;}
.main_leftaside { width: 200px;}
.main_contents { width: 820px;}
#app { overflow: hidden; height: 100%;}
</style>
