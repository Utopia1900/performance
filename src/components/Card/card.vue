<template>
  <div id="app-common-box" class="card" :class="isAutoHeight">
    <card-header :ctitle="ctitle" :tabNav="tabNav" @fun="getChildData"></card-header>
    <div class="card-body p-0">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CardHeader from './card-header'
export default {
  name: 'card',
  props: ['ctitle', 'autoHeight', 'tabNav', 'triggerFun'],
  components: {
    CardHeader
  },
  computed: {
    isAutoHeight () {
      return {
        app_h_100: this.autoHeight === undefined
      }
    }
  },
  methods: {
    getChildData (data) {
      this.triggerFun(data)
    }
  }
}
</script>

<style scoped>
.app_h_100,
.card-body {
  height: 100%;
}
.card-body{
  -webkit-box-flex: 1;
    flex: 1 1 auto;
}
.card {
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    padding-top: 1rem;
    border-radius: 6px;
}
</style>
