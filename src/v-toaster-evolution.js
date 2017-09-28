const ToasterEvolution = require('./ToasterEvolution.vue')

ToasterEvolution.install = (Vue, options) => {
  Vue.prototype.$toasterE = new (Vue.extend(ToasterEvolution))({propsData: options})
  if (process.env.NODE_ENV === 'development') window.$toasterE = Vue.prototype.$toasterE
}
module.exports = ToasterEvolution
