<template>
  <div class="menu menu-{{size}}">
    <slot></slot>
  </div>
</template>

<style scoped>
  .menu {
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .menu-sm {
    width: 180px;
  }

  .menu-lg {
    width: 320px;
  }
</style>

<script>
  export default {
    props: {
      exclusive: {
        type: Boolean,
        default: false
      },

      size: {
        type: String,
        required: true
      }
    },

    methods: {
      handleExclusive(item) {
        if(this.exclusive) {
          let children = this.$children;
          children.forEach(child => {
            if(child !== item) child.expanded = false;
          });
        }
      }
    }
  }
</script>
