<template>
  <div
    class="yi-numrangepicker"
    :class="{
      'yi-numrangepicker-range': range,
      'disabled': disabled
    }"
    :style="{
      'width': computedWidth
    }"
    v-clickoutside="closePopup"
  >
    <div class="yi-input-wrapper" @click.stop="showPopup">
      <input
        :class="inputClass"
        :name="inputName"
        v-bind="inputAttr"
        ref="input"
        :type="inputType"
        autocomplete="off"
        :disabled="disabled"
        :readonly="!editable"
        :value="text"
        :placeholder="innerPlaceholder"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
      />
      <span v-if="showClearIcon" class="yi-input-append yi-clear-wrapper" @click.stop="clearDate">
        <slot name="yi-clear-icon">
          <i class="yi-input-icon yi-clear-icon"></i>
        </slot>
      </span>
      <span class="yi-input-append">
        <slot name="numpanel-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 200 200"
            class="yi-numpanel-icon"
            v-if="!range"
          >
            <path
              d="M 35.21 59.16 L 42.47 59.16 L 42.47 127.36 L 55.56 127.36 L 55.56 136.16 L 16.84 136.16 L 16.84 127.36 L 32.57 127.36 L 32.57 71.81 L 17.83 82.92 L 12.44 75.55 L 35.21 59.16 ZM 121.339 136.16 L 76.679 136.16 C 76.459 134.84 76.349 133.483 76.349 132.09 C 76.349 127.397 77.212 123.143 78.939 119.33 C 80.659 115.517 82.802 112.05 85.369 108.93 C 87.935 105.817 90.705 102.923 93.679 100.25 C 96.645 97.57 99.412 95 101.979 92.54 C 104.545 90.087 106.689 87.633 108.409 85.18 C 110.135 82.72 110.999 80.097 110.999 77.31 C 110.999 74.23 109.862 71.68 107.589 69.66 C 105.315 67.647 102.382 66.64 98.789 66.64 C 95.709 66.64 92.905 67.247 90.379 68.46 C 87.845 69.667 85.479 71.297 83.279 73.35 L 77.779 66.64 C 80.712 64 83.959 61.873 87.519 60.26 C 91.072 58.647 95.195 57.84 99.889 57.84 C 103.115 57.84 106.065 58.317 108.739 59.27 C 111.419 60.223 113.692 61.56 115.559 63.28 C 117.432 65.007 118.882 67.007 119.909 69.28 C 120.935 71.553 121.449 74.01 121.449 76.65 C 121.449 80.17 120.662 83.417 119.089 86.39 C 117.509 89.357 115.529 92.18 113.149 94.86 C 110.762 97.533 108.159 100.1 105.339 102.56 C 102.512 105.013 99.852 107.523 97.359 110.09 C 94.865 112.657 92.685 115.333 90.819 118.12 C 88.945 120.907 87.825 123.913 87.459 127.14 L 121.339 127.14 L 121.339 136.16 ZM 161.487 137.48 C 156.647 137.48 152.484 136.84 148.997 135.56 C 145.517 134.273 142.53 132.713 140.037 130.88 L 144.547 122.63 C 146.6 124.17 148.964 125.527 151.637 126.7 C 154.317 127.873 157.637 128.46 161.597 128.46 C 166.437 128.46 170.267 127.197 173.087 124.67 C 175.914 122.137 177.327 118.927 177.327 115.04 C 177.327 113.06 176.924 111.153 176.117 109.32 C 175.31 107.487 174.047 105.89 172.327 104.53 C 170.6 103.177 168.437 102.097 165.837 101.29 C 163.23 100.483 160.13 100.08 156.537 100.08 L 150.377 100.08 L 150.377 92.05 L 156.097 92.05 C 159.324 92.05 162.147 91.663 164.567 90.89 C 166.987 90.123 168.984 89.08 170.557 87.76 C 172.137 86.44 173.314 84.957 174.087 83.31 C 174.854 81.657 175.237 79.95 175.237 78.19 C 175.237 74.743 173.937 71.957 171.337 69.83 C 168.73 67.703 165.52 66.64 161.707 66.64 C 158.187 66.64 155.107 67.21 152.467 68.35 C 149.827 69.483 147.664 70.747 145.977 72.14 L 141.907 64.33 C 144.107 62.863 146.93 61.417 150.377 59.99 C 153.824 58.557 157.857 57.84 162.477 57.84 C 166.07 57.84 169.277 58.353 172.097 59.38 C 174.924 60.407 177.31 61.8 179.257 63.56 C 181.197 65.32 182.68 67.353 183.707 69.66 C 184.734 71.973 185.247 74.377 185.247 76.87 C 185.247 81.27 184.167 84.92 182.007 87.82 C 179.84 90.713 176.777 93.113 172.817 95.02 C 177.437 96.78 181.05 99.347 183.657 102.72 C 186.257 106.093 187.557 110.09 187.557 114.71 C 187.557 117.57 187.027 120.373 185.967 123.12 C 184.9 125.873 183.304 128.313 181.177 130.44 C 179.05 132.567 176.337 134.273 173.037 135.56 C 169.737 136.84 165.887 137.48 161.487 137.48 Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 200 200"
            class="yi-numpanel-icon"
            v-else
          >
            <path
              d="M 6.694 130.77 L 32.544 97 L 7.794 64.66 L 16.484 58.17 L 38.814 89.41 L 60.924 58.5 L 69.064 64.66 L 45.084 96.45 L 71.264 130.77 L 62.794 137.26 L 38.484 104.26 L 14.944 137.04 L 6.694 130.77 ZM 120.763 102.94 L 83.363 102.94 L 83.363 93.92 L 120.763 93.92 L 120.763 102.94 ZM 137.261 58.17 L 160.801 97.22 L 183.901 58.61 L 192.151 63.45 L 165.641 106.9 L 165.641 136.16 L 155.191 136.16 L 155.191 106.9 L 128.461 63.45 L 137.261 58.17 Z"
            />
          </svg>
        </slot>
      </span>
    </div>
    <div
      class="yi-numrangepicker-popup"
      :style="innerPopupStyle"
      v-show="popupVisible"
      @click.stop.prevent
      ref="numpanel"
    >
      <slot name="header">
        <div class="yi-shortcuts-wrapper" v-if="range && innerShortcuts.length">
          <button
            type="button"
            class="yi-shortcuts"
            v-for="(range, index) in innerShortcuts"
            :key="index"
            @click="selectRange(range)"
          >{{range.text}}</button>
        </div>
      </slot>
      <div v-if="!range"></div>
      <div class="yi-range-wrapper" v-else>
        <span class="label">{{this.t('from')}}</span>
        <input
          id="from"
          type="number"
          class="input"
          :value="getCurrentValue0"
          @change="selectStartDate($event.target.value)"
        />

        <span class="label">{{this.t('to')}}</span>
        <input
          id="to"
          type="number"
          class="input"
          :value="getCurrentValue1"
          @change="selectEndDate($event.target.value)"
        />
      </div>
      <slot name="footer" :confirm="confirmDate">
        <div class="yi-numrangepicker-footer" v-if="confirm">
          <button
            type="button"
            class="yi-numrangepicker-btn yi-numrangepicker-btn-confirm"
            @click="confirmDate"
          >{{ confirmText }}</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import clickoutside from '@/directives/clickoutside'
import {
  isValidDate,
  isValidRangeDate,
  isDateObejct,
  isPlainObject,
  formatDate,
  parseDate,
  throttle
} from '@/utils/index'
import { transformDate } from '@/utils/transform'
import locale from '@/mixins/locale'
import Languages from '@/locale/languages'

export default {
  name: 'NumRangePicker',
  mixins: [locale],
  directives: {
    clickoutside
  },
  props: {
    value: null,
    valueType: {
      default: 'number',
      validator: function(value) {
        return (
          ['format', 'number'].indexOf(value) !== -1 || isPlainObject(value)
        )
      }
    },
    placeholder: {
      type: String,
      default: null
    },
    lang: {
      type: [String, Object],
      default: 'en'
    },
    format: {
      type: [String, Object],
      default: ''
    },
    range: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String,
      default: '~'
    },
    width: {
      type: [String, Number],
      default: null
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    confirm: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    shortcuts: {
      type: [Boolean, Array],
      default: true
    },
    inputName: {
      type: String,
      default: 'number'
    },
    inputClass: {
      type: [String, Array],
      default: 'yi-input'
    },
    inputAttr: Object,
    appendToBody: {
      type: Boolean,
      default: false
    },
    popupStyle: {
      type: Object
    }
  },
  data() {
    return {
      currentValue: this.range ? [null, null] : null,
      userInput: null,
      popupVisible: false,
      position: {}
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: 'handleValueChange'
    },
    popupVisible(val) {
      if (val) {
        this.initCalendar()
      } else {
        this.userInput = null
        this.blur()
      }
    }
  },
  computed: {
    transform() {
      const type = this.valueType
      if (isPlainObject(type)) {
        return { ...transformDate.date, ...type }
      }
      if (type === 'format') {
        return {
          value2date: this.parse.bind(this),
          date2value: this.stringify.bind(this)
        }
      }
      return transformDate[type] || transformDate.date
    },
    language() {
      if (isPlainObject(this.lang)) {
        return { ...Languages.en, ...this.lang }
      }
      return Languages[this.lang] || Languages.en
    },
    innerPlaceholder() {
      if (typeof this.placeholder === 'string') {
        return this.placeholder
      }
      return this.range
        ? this.t('placeholder.dateRange')
        : this.t('placeholder.date')
    },
    text() {
      if (this.userInput !== null) {
        return this.userInput
      }
      const { value2date } = this.transform
      if (!this.range) {
        return this.isValidValue(this.value)
          ? this.stringify(value2date(this.value))
          : ''
      }
      return this.isValidRangeValue(this.value)
        ? `${this.stringify(value2date(this.value[0]))} ${
            this.rangeSeparator
          } ${this.stringify(value2date(this.value[1]))}`
        : ''
    },
    computedWidth() {
      if (
        typeof this.width === 'number' ||
        (typeof this.width === 'string' && /^\d+$/.test(this.width))
      ) {
        return this.width + 'px'
      }
      return this.width
    },
    showClearIcon() {
      return (
        !this.disabled &&
        this.clearable &&
        (this.range
          ? this.isValidRangeValue(this.value)
          : this.isValidValue(this.value))
      )
    },
    innerShortcuts() {
      if (Array.isArray(this.shortcuts)) {
        return this.shortcuts
      }
      if (this.shortcuts === false) {
        return []
      }
      return []
    },
    innerPopupStyle() {
      return { ...this.position, ...this.popupStyle }
    },
    inputType() {
      return this.range ? 'text' : 'number'
    },
    getCurrentValue0(i) {
      if (this.currentValue === null || this.currentValue === undefined) {
        return null
      }
      return this.currentValue[0]
    },
    getCurrentValue1(i) {
      if (this.currentValue === null || this.currentValue === undefined) {
        return null
      }
      return this.currentValue[1]
    }
  },
  mounted() {
    if (this.appendToBody) {
      this.popupElm = this.$refs.numpanel
      document.body.appendChild(this.popupElm)
    }
    this._displayPopup = throttle(() => {
      if (this.popupVisible) {
        this.displayPopup()
      }
    }, 200)
    window.addEventListener('resize', this._displayPopup)
    window.addEventListener('scroll', this._displayPopup)
  },
  beforeDestroy() {
    if (this.popupElm && this.popupElm.parentNode === document.body) {
      document.body.removeChild(this.popupElm)
    }
    window.removeEventListener('resize', this._displayPopup)
    window.removeEventListener('scroll', this._displayPopup)
  },
  methods: {
    initCalendar() {
      this.handleValueChange(this.value)
      this.displayPopup()
    },
    stringify(date) {
      return isPlainObject(this.format) &&
        typeof this.format.stringify === 'function'
        ? this.format.stringify(date)
        : formatDate(date, this.format)
    },
    parse(value) {
      return isPlainObject(this.format) &&
        typeof this.format.parse === 'function'
        ? this.format.parse(value)
        : parseDate(value, this.format)
    },
    isValidValue(value) {
      const { value2date } = this.transform
      return isValidDate(value2date(value))
    },
    isValidRangeValue(value) {
      const { value2date } = this.transform
      return (
        Array.isArray(value) &&
        value.length === 2 &&
        this.isValidValue(value[0]) &&
        this.isValidValue(value[1]) &&
        value2date(value[1].valueOf()) >= value2date(value[0]).valueOf()
      )
    },
    dateEqual(a, b) {
      return isDateObejct(a) && isDateObejct(b) && a.valueOf() === b.valueOf()
    },
    rangeEqual(a, b) {
      return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((item, index) => this.dateEqual(item, b[index]))
      )
    },
    selectRange(range) {
      if (typeof range.onClick === 'function') {
        const close = range.onClick(this)
        if (close !== false) {
          this.closePopup()
        }
      } else {
        this.currentValue = [new Number(range.start), new Number(range.end)]
        this.updateDate(true)
        this.closePopup()
      }
    },
    clearDate() {
      const date = this.range ? [null, null] : null
      this.currentValue = date
      this.updateDate(true)
      this.$emit('clear')
    },
    confirmDate() {
      const valid = this.range
        ? isValidRangeDate(this.currentValue)
        : isValidDate(this.currentValue)
      if (valid || this.isNullRange()) {
        this.updateDate(true)
      }
      this.emitDate('confirm')
      this.closePopup()
    },
    updateDate(confirm = false) {
      if ((this.confirm && !confirm) || this.disabled) {
        return false
      }
      const equal = this.range
        ? this.rangeEqual(this.value, this.currentValue)
        : this.dateEqual(this.value, this.currentValue)
      if (equal) {
        return false
      }
      this.emitDate('input')
      this.emitDate('change')
      return true
    },
    emitDate(eventName) {
      const { date2value } = this.transform
      const value = this.range
        ? this.currentValue.map(date2value)
        : date2value(this.currentValue)
      this.$emit(eventName, value)
    },
    handleValueChange(value) {
      const { value2date } = this.transform
      if (this.range) {
        this.currentValue = this.isValidRangeValue(value)
          ? value.map(value2date)
          : [null, null]
      } else {
        this.currentValue = this.isValidValue(value) ? value2date(value) : null
      }
    },
    selectDate(date) {
      this.currentValue = date
      this.updateDate() && this.closePopup()
    },
    selectStartDate(date) {
      this.$set(this.currentValue, 0, parseDate(date))
      if (isValidRangeDate(this.currentValue) || this.isNullRange()) {
        this.updateDate()
      }
    },
    selectEndDate(date) {
      this.$set(this.currentValue, 1, parseDate(date))
      if (isValidRangeDate(this.currentValue) || this.isNullRange()) {
        this.updateDate()
      }
    },
    isNullRange() {
      return this.range
        ? this.currentValue[0] == null && this.currentValue[1] == null
        : this.currentValue == null
    },
    showPopup() {
      if (!this.range) {
        return
      }
      if (this.disabled) {
        return
      }
      this.popupVisible = true
    },
    closePopup() {
      this.popupVisible = false
    },
    getPopupSize(element) {
      const originalDisplay = element.style.display
      const originalVisibility = element.style.visibility
      element.style.display = 'block'
      element.style.visibility = 'hidden'
      const styles = window.getComputedStyle(element)
      const width =
        element.offsetWidth +
        parseInt(styles.marginLeft) +
        parseInt(styles.marginRight)
      const height =
        element.offsetHeight +
        parseInt(styles.marginTop) +
        parseInt(styles.marginBottom)
      const result = { width, height }
      element.style.display = originalDisplay
      element.style.visibility = originalVisibility
      return result
    },
    displayPopup() {
      const dw = document.documentElement.clientWidth
      const dh = document.documentElement.clientHeight
      const InputRect = this.$el.getBoundingClientRect()
      const PopupRect =
        this._popupRect ||
        (this._popupRect = this.getPopupSize(this.$refs.numpanel))
      const position = {}
      let offsetRelativeToInputX = 0
      let offsetRelativeToInputY = 0
      if (this.appendToBody) {
        offsetRelativeToInputX = window.pageXOffset + InputRect.left
        offsetRelativeToInputY = window.pageYOffset + InputRect.top
      }
      if (
        dw - InputRect.left < PopupRect.width &&
        InputRect.right < PopupRect.width
      ) {
        position.left = offsetRelativeToInputX - InputRect.left + 1 + 'px'
      } else if (InputRect.left + InputRect.width / 2 <= dw / 2) {
        position.left = offsetRelativeToInputX + 'px'
      } else {
        position.left =
          offsetRelativeToInputX + InputRect.width - PopupRect.width + 'px'
      }
      if (
        InputRect.top <= PopupRect.height &&
        dh - InputRect.bottom <= PopupRect.height
      ) {
        position.top =
          offsetRelativeToInputY + dh - InputRect.top - PopupRect.height + 'px'
      } else if (InputRect.top + InputRect.height / 2 <= dh / 2) {
        position.top = offsetRelativeToInputY + InputRect.height + 'px'
      } else {
        position.top = offsetRelativeToInputY - PopupRect.height + 'px'
      }
      if (
        position.top !== this.position.top ||
        position.left !== this.position.left
      ) {
        this.position = position
      }
    },
    blur() {
      this.$refs.input.blur()
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleFocus(event) {
      if (!this.popupVisible) {
        this.showPopup()
      }
      this.$emit('focus', event)
    },
    handleKeydown(event) {
      const keyCode = event.keyCode
      // Tab 9 or Enter 13
      if (keyCode === 9 || keyCode === 13) {
        // ie emit the watch before the change event
        event.stopPropagation()
        this.handleChange()
        this.userInput = null
        this.closePopup()
      }
    },
    handleInput(event) {
      this.userInput = event.target.value
    },
    handleChange() {
      if (this.editable && this.userInput !== null) {
        const value = this.text
        if (value === '' || value === null) {
          this.clearDate()
          return
        }
        if (this.range) {
          const range = value.split(` ${this.rangeSeparator} `)
          if (range.length === 2) {
            const start = this.parse(range[0])
            const end = this.parse(range[1])
            if (isValidRangeDate([start, end])) {
              this.currentValue = [start, end]
              this.updateDate(true)
              this.userInput = null
              this.closePopup()
              return
            }
          }
        } else {
          const date = this.parse(value)
          if (isValidDate(date)) {
            this.currentValue = date
            this.updateDate(true)
            this.userInput = null
            this.closePopup()
            return
          }
        }
        this.$emit('input-error', value)
      }
    }
  }
}
</script>
