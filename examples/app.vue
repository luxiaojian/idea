<template>
  <div class="container">
    <div id="tag">
      <h4>tag组件</h4>
      <div>已经选择tag是: {{tags}}</div>
      <tag :value.sync="tags"></tag>
    </div>

    <div id="pagination">
      <h4>分页组件</h4>
      <div>当前页:{{pagination.currentPage}}, 总共{{pagination.total}}数据, 一页{{pagination.pageSize}}条数据</div>
      <pagination :current-page.sync="pagination.currentPage" :total="pagination.total" :page-size="pagination.pageSize"></pagnition>
    </div>

    <div id="typehead">
      <h4>Typehead</h4>
      <div>已经选择的城市是: {{typehead.value}}</div>
      <typehead :items="typehead.data" placeholder="选择城市" :value.sync="typehead.value"></typehead>
    </div>
  </div>
</template>

<style scoped>
  main {
    margin-top: 80px;
  }
</style>

<script>
  import cities from './data/city';
  export default {
    replace: false,

    data() {
      return {
        tags: [],
        pagination: {
          currentPage: 3,
          total: 50,
          pageSize: 10
        },
        typehead: {
          data: cities,
          value: ''
        }
      }
    }
  }
</script>