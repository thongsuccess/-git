import Header from '@/components/header/index.vue'
export default {
  data() {
    return {
      goods: [
        { text: '百万年薪架构师', price: 100 },
        { text: 'web全栈架构师', price: 80 },
        { text: 'js高级工程师', price: 70 }
      ],
      lis: [
        {
          text: '',
          price: ''
        }
      ],
      status: false,
      idx: '',
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名输入' }
        ],
        password: [
          { required: true, message: '密码输入' },
          { min: 6, max: 10, message: '6~10位密码' }
        ]
      }
    }
  },
  methods: {
    addGoodsLis() {
      this.goods.push(this.lis)
      this.lis = []
    },
    submitForm(form) {

    }
  },
  components: {
    Header
  }
}