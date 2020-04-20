import diaLog from '@/components/diaLog/index.vue'
import Header from '@/components/header/index.vue'

export default {
  data() {
    return {
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
    },
    nativePush() {
      this.$router.push('/test')
    }
  },
  components: {
    diaLog,
    Header
  }
}