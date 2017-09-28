<template lang="pug">
.v-toaster
  transition-group(name='v-toast')
    .v-toast(:class="{[t.theme]: t.theme}", v-for='t in items', :key='t.key')
      a.v-toast-btn-clear(@click='remove(t)')
      | {{t.message}}
</template>

<script>

export default {
  props: {
    timeout: {
      type: Number,
      default: 10000
    }
  },
  methods: {
    success (message, option = {}) { this.add(message, {theme: 'v-toast-success', timeout: option.timeout, mark:option.mark } ) },
    info    (message, option = {}) { this.add(message, {theme: 'v-toast-info',    timeout: option.timeout, mark:option.mark } ) },
    warning (message, option = {}) { this.add(message, {theme: 'v-toast-warning', timeout: option.timeout, mark:option.mark } ) },
    error   (message, option = {}) { this.add(message, {theme: 'v-toast-error',   timeout: option.timeout, mark:option.mark } ) },

    add (message, {theme, timeout, mark}) {
      if (!this.$parent) {
        this.$mount()
        document.body.appendChild(this.$el)
      }
      var key = Date.now()-Math.random()
      if( mark ){
        key = mark
        this.search(mark)
      }
      let item = {message, theme, key}
      this.items.push(item)
      setTimeout( () => this.remove(item), timeout || this.timeout)
    },
    remove (item) {
      let i = this.items.indexOf(item)
      if (i >= 0) {
        this.items.splice(i, 1)
      }
    },
    search (mark) {
      for(var i in this.items){
          if(this.items[i].key == mark) this.items.splice(i, 1)
      }
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="stylus">
dark-color = #7b90ef
toast-variant(color)
  background #fff
  border 1px solid color
  border-left 6px solid color

toast-varient-style(color)
  background-color alpha(color, 1)
  font-size 20px
  font-weight bold
  position absolute
  margin-top -5px
  left -2px
  color #fff
  content "!"
  width 30px;
  height 30px;
  border-radius 100%;
  text-align center
  line-height 30px

.v-toaster
  position fixed
  top 50px
  right 0
  z-index 10000
  width 300px
  padding-left 10px
  padding-right 10px
  .v-toast
    margin-bottom 10px
    transition all .3s ease
    border 1px solid dark-color
    border-radius 3px
    color #444
    display block
    padding 1rem
    toast-variant(dark-color)
    &.v-toast-enter, &.v-toast-leave-to
      -webkit-transform translate(100%)
      transform translate(100%)
    &.v-toast-success
      toast-variant(#32b643)
    &.v-toast-warning
      toast-variant(#ffb700)
    &.v-toast-info
      toast-variant(#5bc0de)
    &.v-toast-error
      toast-variant(#e85600)
    &.v-toast-primary
      toast-variant(#428bca)
    &.v-toast-warning
      &::before
        toast-varient-style(#ffb700)
    &.v-toast-error
      &::before
        toast-varient-style(#e85600)
    &.v-toast-success
      &::before
        toast-varient-style(#32b643)
    &.v-toast-info
      &::before
        toast-varient-style(#5bc0de)

    .v-toast-btn-clear
      background transparent
      border 0
      color currentColor
      opacity .45
      text-decoration none
      float right
      cursor pointer
      &:hover
        opacity .85
      &::before
        content "\2715"
@media (max-width: 300px)
  .v-toaster
    width 100%
</style>
