<template>
<div :class="{'open':showDropdown, 'typeahead': true}">
  <input type="text" class="form-control"
    :placeholder="placeholder"
    autocomplete="off"
    v-model="value"
    @focus="update"
    @keydown.up="up"
    @keydown.down="down"
    @keydown.enter= "hit"
    @keydown.esc="reset"
    @blur="showDropdown = false"
  />
  <ul class="dropdown-menu" v-el:dropdown :style = "{ height: limit * 26 + 'px', overflowY: 'scroll'}">
    <li v-for="item in filterItems" :class="{'active': isActive($index)}">
      <a @mousedown.prevent="hit" @mousemove="setActive($index)">
        <span>{{item}}</span>
      </a>
    </li>
  </ul>
</div>

</template>

<style scoped>
  .typeahead {
    display: inline-block;
    position: relative;
    max-width: 240px;
  }
</style>

<script>
const typeahead = {
    props: {
      items: {
        type: Array,
        required: true
      },

      limit: {
        type: Number,
        default: 8
      },

      value: {
        type: String,
        default: ''
      },

      placeholder: {
        type: String
      }
    },

    data() {
      return {
        showDropdown: false,
        current: 0
      }
    },

    computed: {
      filterItems() {
        if(this.items) {
          if(!this.value) this.value = '';
          return this.items.filter(item => item.indexOf(this.value) !== -1)
        }
      }
    },

    methods: {
      update() {
        if (this.items) {
          this.showDropdown = this.items.length ? true : false
        }
      },

      reset() {
        this.items = [];
        this.value = '';
        this.showDropdown = false;
      },

      setActive(index) {
        this.current = index;
      },

      isActive(index) {
        return this.current === index;
      },

      hit(e) {
        console.log("e", e, "e.targetVm", e.targetVM);
        e.preventDefault();
        this.value = this.items[this.current];
        this.showDropdown = false;
      },

      up() {
        if (this.current > 0) this.current--
      },

      down() {
        if (this.current < this.items.length - 1) this.current++
      }
    }
  };
  export default typeahead
</script>

<style>
.dropdown-menu > li > a {
  cursor: pointer;
}
</style>
