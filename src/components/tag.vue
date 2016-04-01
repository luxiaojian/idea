<template>
  <div class="form-control tag" @click="focus">
    <span class="label label-info" v-for="label in tags" track-by="$index">
      {{label}}<span class="glyphicon glyphicon-remove" @click="del($index)"></span>
    </span>
    <input type="text" size="{{inputSize}}" v-model="tag" placeholder="输入(空格结束)"
    @keydown.enter="add" @blur="blur" @keydown.delete="remove" v-el:input>
  </div>
</template>

<style scoped>
  .tag {
    min-height: 100px;
    height: auto;
    cursor: text;

    span.label {
      margin-top: 6px;
      margin-left: 4px;
      text-align: center;
      white-space: nowrap;
      display: inline-block;

      span {
        margin-left: inherit;
        &:hover {
          color: #000;
        }
      }
    }

    input {
      border: none;
      box-shadow: none;
      outline: none;
      background-color: transparent;
      padding: 0 6px;
      margin: 0;
      width: auto;
    }
  }
</style>

<script>
  export default {
    props: {
      value: {
        type: Array,
        required: true,
        default: []
      }
    },

    data() {
      return {
        tag: '',
        tags: []
      }
    },

    computed: {
      inputSize() {
        if(this.tag.length === 0) return 12;
        return this.tag.length;
      }
    },

    methods: {
      add() {
        if(this.tag){
          this.tags.push(this.tag);
          this.tag = '';
        }
      },

      blur() {
        this.value = this.tags;
      },

      del(index) {
        this.tags.splice(index, 1);
      },

      remove() {
        this.tags.pop();
      },

      focus() {
        this.$els.input.focus();
      }
    },

    ready() {
      if(this.value && !!this.value.length) this.tags = [].concat(this.value);
    }
  }
</script>