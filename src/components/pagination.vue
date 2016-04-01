<template>
  <div class="text-center">
    <ul class="pagination">
      <li @click="setPage(item)" track-by="$index" v-for="item in pages" :class="item.class"
          :disabled="item.disabled">
        <a href="Javascript:">
          <span v-if="item.isPrev">上一页</span>
          <span v-text="item.content" v-if="item.content && !item.isPrev && !item.isNext"></span>
          <span v-if="item.isNext">下一页</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: {
      currentPage: {
        type: Number,
        default: 10
      },
      total: Number,
      pageSize: Number
    },

    data() {
      return {
        pages: [],
        totalPages: null
      }
    },

    computed: {
      pages() {
        let pages = [];
        let hasPrev = this.currentPage > 1;
        let hasNext = this.currentPage < this.totalPages;

        let prevPage = {
          'isPrev': true,
          'isNext': false,
          'class': hasPrev ? '' : 'disabled',
          'content': hasPrev ? this.currentPage - 1 : this.currentPage
        };

        let nextPage = {
          'isPrev': false,
          'isNext': true,
          'class': hasNext ? '' : 'disabled',
          'content': hasNext ? this.currentPage + 1 : this.currentPage
        };

        let totalPage = {
          'isPrev': false,
          'isNext': false,
          'total': true,
          'class': 'disabled',
          'content': `共${this.totalPages}条/${this.currentPage}页`
        };

        pages.push(prevPage);
        for(let page = 0; page < this.totalPages; page++) {
          pages.push({
            'isPrev': false,
            'isNext': false,
            'disabled': false,
            'class': (page + 1) === this.currentPage ? 'active' : '',
            'content': page + 1
          })
        }

        pages.push(nextPage, totalPage);
        return pages;
      }
    },

    methods: {
      setPage(page) {
        if(page.total) return;
        if(page && page.content === this.currentPage) return;
        this.currentPage = page.content;
      }
    },

    ready() {
      this.totalPages = Math.ceil(this.total / this.pageSize)
    }
  }
</script>
