v-toaster-evolution v-toaster-evolution

v-toaster-evolution
=========

> A Vue.js component

Installation
------------

### Using yarn

`yarn add v-toaster-evolution`

### Using npm

`npm i --save v-toaster-evolution`

Demo
----
El mismo que este pero con css y una funcionalidad adicional.
[DEMO](http://albertotorre.github.io/v-toaster-evolution)

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
  Vue.use(VToaster, {timeout: 5000})
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
this.$toasterE.error('Your toaster error message.')
this.$toasterE.warning('Your toaster warning message.')

// or custom add method
this.$toasterE.add('Your toaster theme message.', {theme: 'v-toast-info', timeout: 10000})

//or custom add method with mark
this.$toasterE.add('Load Document...', {theme: 'v-toast-info', timeout: 10000, mark:3})
this.$toasterE.add('Process Complete', {theme: 'v-toast-success', timeout: 1000, mark:3})
// ...
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
