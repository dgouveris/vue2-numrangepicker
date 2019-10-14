/* eslint-disable no-new */
import Vue from 'vue'
import NumRangePicker from '@/index'

Vue.use(NumRangePicker)

new Vue({
  el: '#app',
  data () {
    return {
      value1: null,
      value2: '',
      value3: new Date(),
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: new Date(),
      value11: new Date(),
      value12: '',
      value13: '',

      rr: true
    }
  },
  methods: {
    getSource (obj) {
      return Object.keys(obj).map(key => {
        const value = obj[key]
        return (
          <section class="source">
            <label class="label">{key} : </label>
            {Vue.compile(value).render.call(this)}
          </section>
        )
      })
    },
    getPre (obj) {
      return Object.keys(obj).map(key => {
        const value = obj[key].replace(/\n/g, '').replace(/\s+/g, ' ')
        return (
          <pre class="pre">
            <code class="language-html">{value}</code>
          </pre>
        )
      })
    }
  },
  render (h) {
    const example1 = {
      'base': '<NumRangePicker v-model="value1" valueType="format" lang="en" ></NumRangePicker>',
      'range': '<NumRangePicker v-model="value2" range appendToBody></NumRangePicker>',
      'month': '<NumRangePicker v-model="value10" lang="en" type="month" format="YYYY-MM"></NumRangePicker>',
      'year': '<NumRangePicker v-model="value11" lang="en" type="year" format="YYYY"></NumRangePicker>',
      'time': '<NumRangePicker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></NumRangePicker>'
    }
    const example2 = {
      'datetime': `
        <NumRangePicker
          v-model="value3"
          lang="en"
          type="datetime"
          format="[on] MM-DD-YYYY [at] HH:mm"></NumRangePicker>`,
      'datetime with time-picker-options': `
        <NumRangePicker
          v-model="value4"
          lang="en"
          type="datetime"
          appendToBody
          format="YYYY-MM-DD hh:mm:ss a"
          :time-picker-options="{
            start: '00:00',
            step: '00:30',
            end: '23:30'
          }"></NumRangePicker>`,
      'datetime with minute-step': `
        <NumRangePicker
          v-model="value9"
          lang="en"
          type="datetime"
          format="YYYY-MM-DD hh:mm:ss a"
          :minute-step="10"
          ></NumRangePicker>`,
      'datetime with time-select-options': `
        <NumRangePicker
          v-model="value13"
          lang="gr"
          type="datetime"
          format="YYYY-MM-DD hh:mm:ss a"
          :time-select-options="{
            hours: [9, 10, 11, 12, 13, 14, 15, 16],
            minutes: [0, 10,20,30,40,50],
            seconds: []
          }"
          ></NumRangePicker>`,
      'datetime range': `
        <NumRangePicker
          v-model="value5"
          range
          type="datetime"
          lang="gr"
          format="YYYY-MM-DD HH:mm:ss"
          :shortcuts="false"
          ></NumRangePicker>`
    }
    const example3 = {
      'with confirm': `
        <NumRangePicker
          v-model="value6"
          format="YYYY-MM-DD"
          lang="en"
          confirm></NumRangePicker>`,
      'datetime with confirm': `
        <NumRangePicker
          v-model="value7"
          type="datetime"
          lang="en"
          format="YYYY-MM-DD hh:mm:ss"
          confirm></NumRangePicker>`,
      'range width confirm': `
      <div>
        <NumRangePicker
          v-model="value8"
          :range="rr"
          lang="en"
          format="YYYY-MM-DD"
          confirm></NumRangePicker>
          <button @click.submit.prevent="rr = !rr">fff</button>
          </div>
          `
    }
    const arr = [
      {
        exam: example1
      },
      {
        exam: example2,
        tips: 'if you use the datetime, you should set the format to "YYYY-MM-DD HH:mm:ss" which default is "YYY-MM-DD'
      },
      {
        exam: example3,
        tips: 'Recommend to use the confirm option when the type is "datetime" or "range" is true'
      }
    ]
    return (
      <div id="app">
        {arr.map(obj => (
          <div class="example">
            {this.getSource(obj.exam)}
            {
              obj.tips
                ? <blockquote class="tips">{obj.tips}</blockquote>
                : ''
            }
            {this.getPre(obj.exam)}
          </div>
        ))}
      </div>
    )
  }
})
