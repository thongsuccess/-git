export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    changeBackBtn() {
      if (this.$route.path === '/') {
        this.show = false
      } else {
        this.$router.back(-1)
      }
    }
  }
}