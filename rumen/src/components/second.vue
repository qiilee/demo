<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for='article in articles'>
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我是HW1',
      articles:''
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {

    }).then(function(res) {
        alert('请求成功')
        console.log(res.data);
        this.articles = res.data.subjects
    }),function(res) {
       alert('请求失败')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

a {
  color: #42b983;
}
</style>
