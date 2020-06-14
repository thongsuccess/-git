export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$store.dispatch('login', this.loginForm).then(code => {
        if (code) {
          /* 登陆成功重定向 */
          const path = this.$route.query.path || '/'
          this.$router.push(path)
        }
      }).catch(Error => {
        console.log('error', new Error())
      })
    }
  }
}