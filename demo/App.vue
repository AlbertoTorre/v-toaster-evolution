<template lang="pug">
div.toaster-demo(style='text-align: center;')
  p
    textarea(v-model='message', style='width:100%;')
  p HTML:
    select(v-model='html',:class='{["v-toast-"+theme]: true}')
      option(value='', selected="") false
      option(value='true') true
    span MARK:
    select(v-model='mark',:class='{["v-toast-"+theme]: true}')
      option(value='', selected="") false
      option(value='1') true
    select(v-model='theme', :class='{["v-toast-"+theme]: true}')
      option(value='') default
      option(value='info') info
      option(value='success') success
      option(value='warning') warning
      option(value='error') error
    button.btn(@click='show', :class='{["v-toast-"+theme]: true}') show
  p
    button.btn.v-toast-info(@click='$toasterE.info(message, {})') info
    button.btn.v-toast-success(@click='$toasterE.success(message)') success
    button.btn.v-toast-warning(@click='$toasterE.add(message, {theme:"warning", mark:8})') warning
    button.btn.v-toast-error(@click='$toasterE.error(message)') error
    button.btn.v-toast-default(@click='$toasterE.html(message, {theme:"info", html:true})') html
</template>

<script>
import Vue from 'vue'
import Toaster from '../src/v-toaster-evolution.js'
Vue.use(Toaster)

export default {
  data () {
    return {
      theme: 'info',
      message: 'My Toaster-Evolution message.',
      html: '',
      mark: '',
    }
  },
  methods: {
    show () {
      this.$toasterE.add(this.message, {theme:this.theme,mark:this.mark, html:this.html})
    },
  },
}
</script>

<style src="./style.css"></style>
<style lang="stylus">
toast-variant(color)
  color #fff
  background-color color
  border-color color

.toaster-demo
  textarea
    border-radius 5px
    border 2px solid #155799
    min-width 500px
  select
    height 2.2em
  .btn, select
    background-color #454d5d
    font-size 1.5em
    padding 10px
    margin 10px
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

</style>
