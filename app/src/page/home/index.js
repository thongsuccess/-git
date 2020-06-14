import diaLog from '@/components/diaLog/index.vue'
import Header from '@/components/header/index.vue'
import Page from '@/components/page/index.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      visible: false,
      list: [1, 2, 3, 4],
      shop: {}
    }
  },
  mounted() {
    const query = this.$route.query;
    console.log(query, 'query');
    console.log(this.$store);

  },
  computed: {
    ...mapState({
      name: state => state.count,
      isLogin: state => state.isLogin,
    })
  },
  methods: {
    ...mapActions({
      "addtext": "addBtn"
    }),
    // addtext() {
    //   this.$store.dispatch('addBtn');
    // },
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
    },
    nativeShop() {
      this.$router.push('/shop')
    }
  },
  components: {
    diaLog,
    Header,
    Page
  }
}