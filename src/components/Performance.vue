<template>
  <div class="hello">
    <div class="dropdown">
      <div class="dropdown__drawer">
        <ul class="menu">
          <li>
            <router-link to="self-assessment">乙方自评</router-link>
          </li>
          <li>
            <router-link to="dynamic">绩效动态</router-link>
          </li>
          <li>
            <router-link to="evaluation">甲方评估</router-link>
          </li>
          <li>
            <router-link to="report">考核报告</router-link>
          </li>
          <li>
            <router-link to="analysis">对照分析</router-link>
          </li>
          <li>
            <router-link to="rule">考核标准</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'performance',
  data () {
    return {
      msg: '绩效考核模块'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a{
  text-decoration: none;
  color: #787878;
}

.dropdown__toggle {
  padding: 0.5em 2em 0.5em 1.5em;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #eee;
}

.dropdown__toggle::after {
  content: "";
  /* position: absolute; */
  right: 1em;
  top: 1em;
  border: 0.3em solid;
  border-color: black transparent transparent;
}
.dropdown__drawer {
  /* display: none; */
  /* position: absolute; */
  left: 0;
  min-width: 100%;
  background-color: #eee;
}
.dropdown.is‐open .dropdown__toggle::after {
  top: 0.7em;
  border-color: transparent transparent black;
}
.dropdown.is‐open .dropdown__drawer {
  display: block;
}

.list-active{
  color: #42b983;
}
</style>
