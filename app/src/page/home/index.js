import diaLog from '@/components/diaLog/index.vue'

export default {
  data() {
    return {
      msg: '首页',
      visible: false
    }
  },
  methods: {
    changeToggleModal() {
      this.visible = true
    },
    cancel() {
      this.visible = false
    },
    confirm() {
      console.log('确定支付');
    }
  },
  components: {
    diaLog
  }
}