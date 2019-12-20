<template>
  <div
    class="card-header bg-white d-flex justify-content-between p-0 align-items-center position-absolute"
  >
    <div v-if="tabNav" class="tabnav">
      <a
        href="javascript:;"
        :class="{active:index == nowIndex}"
        v-for="(vo,index) in tabNav.data"
        :key="vo.id"
        @click="tabClick(index,vo)"
      >{{vo[tabNav.titleKey]}}</a>
    </div>
    <span v-else style="margin-left: 1.8rem;">{{ctitle}}</span>
    <!-- <span class="app-card-header d-flex align-items-center">
      <i class="rounded-circle app-card-header-circle"></i>
      <i class="rounded-circle app-card-header-circle"></i>
      <i class="rounded-circle app-card-header-circle"></i>
      <svg
        t="1573201794781"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3305"
        width="33"
        height="33"
      >
        <path
          d="M512 330.24m-49.92 0a49.92 49.92 0 1 0 99.84 0 49.92 49.92 0 1 0-99.84 0Z"
          p-id="3306"
          fill="#797979"
        />
        <path
          d="M512 512m-49.92 0a49.92 49.92 0 1 0 99.84 0 49.92 49.92 0 1 0-99.84 0Z"
          p-id="3307"
          fill="#797979"
        />
        <path
          d="M512 693.76m-49.92 0a49.92 49.92 0 1 0 99.84 0 49.92 49.92 0 1 0-99.84 0Z"
          p-id="3308"
          fill="#797979"
        />
      </svg>
    </span> -->
  </div>
</template>

<script>
export default {
  name: 'card-header',
  props: ['ctitle', 'tabNav'],
  data () {
    return {
      nowIndex: 0,
      isOpen: false
    }
  },
  mounted () {
    if (this.tabNav !== undefined && this.tabNav.data.length > 0) {
      for (let i = 0; i < this.tabNav.data.length; i++) {
        if (this.tabNav.data[i].primarykey == this.$store.state.tabSelect) {
          this.nowIndex = i
        } else {
          this.nowIndex = 0
        }
      }
    }
  },
  methods: {
    tabClick (index, data) {
      this.nowIndex = index
      this.isOpen = true
      this.$emit('fun', data)
    }
  }
};
</script>

<style scoped>
.card-header {
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  top: 0;
  text-align: left;
}
.app-card-header {
  height: 4rem;
}
.app-card-header i {
  display: inline-block;
  margin-right: 5px;
}
.app-card-header i:nth-of-type(1) {
  background: #6fd8ad;
}
.app-card-header i:nth-of-type(2) {
  background: #ffd21d;
}
.app-card-header i:nth-of-type(3) {
  background: #ff6565;
}
.app-card-header-circle {
  width: 1.3rem;
  height: 1.3rem;
  display: inline-block;
  margin-left: 2px;
}
.tabnav {
  height: 100%;
  left: 0;
  top: 0;
}
.tabnav a {
  color: #676b77;
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  text-decoration: none;
}
.tabnav .active {
  color: rgb(93, 92, 184);
  background: rgba(228, 235, 255, 1);
}
</style>
