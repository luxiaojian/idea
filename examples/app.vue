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

    <div id="menu">
      <h4>Menu组件</h4>
      <menu size="lg">
        <menu-item text="菜单一" icon="">
          <menu-item text="子菜单一"  path="#/config"></menu-item>
          <menu-item text="子菜单二" path="#/force"></menu-item>
          <menu-item text="子菜单三" path="#/patch"></menu-item>
        </menu-item>
        <menu-item text="菜单二" icon="" path="#/abtest"></menu-item>
        <menu-item text="菜单三" icon="" path="#/mobileconfig"></menu-item>
        <menu-item text="菜单四" icon="" path="#/builds"></menu-item>
      </menu>
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