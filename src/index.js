import NumRangePicker from './index.vue'
import './index.scss'

NumRangePicker.install = function (Vue) {
  Vue.component(NumRangePicker.name, NumRangePicker)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  NumRangePicker.install(window.Vue)
}

export default NumRangePicker
