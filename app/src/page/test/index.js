import Header from '@/components/header/index.vue'

export default {
  data() {
    return {
      bankList: [
        {
          bankName: '招商银行'
        },
        {
          bankName: '民生银行'
        },
        {
          bankName: '平安联名'
        },
        {
          bankName: '兴业银行'
        },
        {
          bankName: '上海银行'
        },
        {
          bankName: '交通银行'
        },
        {
          bankName: '光大银行'
        },
        {
          bankName: '全部银行'
        },
        {
          bankName: '招商银行'
        },
        {
          bankName: '民生银行'
        },
        {
          bankName: '平安联名'
        },
        {
          bankName: '兴业银行'
        },
        {
          bankName: '上海银行'
        },
        {
          bankName: '交通银行'
        },
        {
          bankName: '光大银行'
        },
        {
          bankName: '全部银行'
        }
      ],
      defaultOffset: 50,
      scrollIsToTop: 0,
      startY: 0,
      top: 0,
      isDropDown: false, // 是否下拉
      isRefreshing: false, // 是否正在刷新
      dropDownState: 1, // 显示1:下拉可以刷新, 2:松开立即刷新, 3:正在刷新数据中...
      dropDownInfo: {
        downText: '下拉可以刷新',
        upText: '松开立即刷新',
        refreshText: '正在刷新数据...'
      }
    }
  },
  mounted() {
  },
  methods: {
    /*
      触摸开始，手指点击屏幕时
     * @param {object} e Touch 对象包含的属性
     */
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY
      console.log(this.startY);
    },
    touchMove(e) {
      this.scrollIsToTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop // safari 获取scrollTop用window.pageYOffset
      if (e.targetTouches[0].pageY > this.startY) {
        // 下拉
        this.isDropDown = true
        if (this.scrollIsToTop === 0 && !this.isRefreshing) {
          // 拉动的距离
          const diff = e.targetTouches[0].pageY - this.startY - this.scrollIsToTop
          this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0)
          if (this.top >= this.defaultOffset) {
            this.dropDownState = 2
            e.preventDefault()
          } else {
            this.dropDownState = 1
            // 去掉会导致ios无法刷新
            e.preventDefault()
          }
        }
      } else {
        this.isDropDown = false
        this.dropDownState = 1
      }
    },
    touchEnd() {
      if (this.isDropDown && !this.isRefreshing) {
        if (this.top >= this.defaultOffset) {
          // do refresh
          this.refresh()
          this.isRefreshing = true
        } else {
          // cancel refresh
          this.isRefreshing = false
          this.isDropDown = false
          this.dropDownState = 1
          this.top = 0
        }
      }
    },
    // 刷新
    refresh () {
      this.dropDownState = 3
      this.top = this.defaultOffset
      // 这是全是静态数据,延时1200毫秒，给用户一个刷新的感觉，如果是接口数据的话，直接调接口即可
      setTimeout(() => {
        this.onRefresh(this.refreshDone)
      }, 1200)
    },
    // 刷新完成
    refreshDone () {
      this.isRefreshing = false
      this.isDropDown = false
      this.dropDownState = 1
      this.top = 0
    }
  },
  components: {
    Header
  }
}