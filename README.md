v-toaster-evolution
[![npm](https://img.shields.io/npm/v/v-toaster-evolution.svg?style=flat-square)](https://www.npmjs.com/package/v-toaster-evolution) [![Vue](https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square)](https://vuejs.org/)

=========
> A Vue.js component - Notification

Installation
------------

### Using yarn

`yarn add v-toaster-evolution`

### Using npm

`npm i --save v-toaster-evolution`

Demo
----
[DEMO](http://albertotorre.github.io/v-toaster-evolution/demo-evolution)

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import ToasterE from 'v-toaster-evolution'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(ToasterE, {timeout: 5000})
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="v-toaster-evolution/dist/v-toaster-evolution.css"></link>
<script src="v-toaster-evolution/dist/v-toaster-evolution.js"></script>
<script>
  Vue.use(VToasterEvolution, {timeout: 5000})
</script>
```

### Usage example

```js
// in your component this.$toaster
// ...
this.$toasterE.success('Your toaster success message.')
// or custom timeout
this.$toasterE.success('Your toaster success message.', {timeout: 8000})

this.$toasterE.info('Your toaster info message.')
this.$toasterE.error('Your toaster <b style="color:#cc0000;">error</b> message.', {html:true})
this.$toasterE.warning('Your toaster warning message.')

// or custom add method
this.$toasterE.add('Your toaster theme message.', {theme: 'info', timeout: 10000})

//or custom add method with mark
this.$toasterE.add('Load Document...', {theme: 'info', timeout: 10000, mark:3})
this.$toasterE.add('Process Complete', {theme: 'success', timeout: 1000, mark:3})

//or custom add method with mark and  html
this.$toasterE.add('Hola, esto es una  <i>prueba</i>', {theme: 'info', timeout: 10000, mark:6,html:true})
this.$toasterE.add('Load <i style="color:#cc0000;">prueba</i> ', {theme: 'warning', html:true})
// ...
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
