export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 确认按钮文案
    confirmText: {
      type: String,
      default: '确认'
    },
    // 取消按钮文案
    cancleText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    changeCloseBtn() {
      this.$emit('cancel')
    },
    changeConfirmBtn() {
      this.$emit('confirm')
    }
  }
}