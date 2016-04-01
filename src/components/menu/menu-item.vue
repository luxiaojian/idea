<template>
  <div class="menu-item" :class="{ 'expanded': hasChild && expanded, 'active': !hasChild && active }">
    <div class="menu-item-header" @click="handleHeaderClick()">
      <a v-link="{ path: path, exact: exact, activeClass: 'active'}">
        <span v-if="icon" class="iconfont icon-{{icon}}"></span>{{text}}
      </a>
      <span class="iconfont icon-arrow-right" v-if="hasChild"></span>
    </div>
    <div class="menu-item-body" @click="$event.stopPropagation()" v-show="expanded">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .menu-item {
    position: relative;
    display: block;

    &.expanded .menu-item-header > span.icon-arrow-right {
      transform: rotate(90deg);
    }
    .menu-item-header {
      border-bottom: 1px solid #ddd;
      a {
        display: block;
        box-sizing: content-box;
        text-align: center;
        padding: 10px 15px;
        margin-bottom: -1px;
        color: #666;
        font-weight: 500;
        cursor: pointer;

        &.active {
          background-color: #3781E0;
          color: #fff;

          .iconfont {
            color: #fff;
          }
        }

        .iconfont {
          color: #666;
          margin-right: 8px;
        }

        .icon-config {
          font-size: 13px;
        }
      }
    }

    .menu-item-header span.icon-arrow-right {
      position: absolute;
      right: 9px;
      top: 9px;
      font-size: 18px;
      color: #666;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;

      .menu-item-header {
        border-bottom: none;
      }
    }

    .menu-item-body {
      background-color: #f6f6f6;

      .menu-item-header {
        border-bottom: none;
        a {
          color: #666;
          font-size: 13px;
          padding: 5px;
          font-weight: 300;

          &:hover,
          &.active {
            border-bottom: none;
            background-color: transparent;
            text-decoration: underline;
            color: #3781E0;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    props: {
      path: String,
      text: String,
      icon: String,
      exclusive: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        expanded: false,
        exact: true,
        hasChild: false,
        topLevel: false
      }
    },

    methods: {
      handleHeaderClick() {
        if(this.hasChild) this.expanded = !this.expanded;
      },

      handleExclusive(item) {
        if(this.exclusive) {
          let children = this.$children;
          children.forEach(child => {
            if(child !== item) child.expanded = false;
          });
        }
      }
    },

    watch(newVal) {
      if(newVal) this.$parent.handleExclusive(this);
    },

    ready() {
      this.hasChild = this.$children.length > 0;
    }
  }
</script>
