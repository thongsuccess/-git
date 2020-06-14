export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      cur: 1
    }
  },
  methods: {
    changePageLeft() {
      if (this.cur == 1) return
      this.cur--
    },
    changePageRight() {
      if (this.cur === this.list.length) return
      this.cur++
    },
    changePageItem(idx) {
      this.cur = idx + 1
    }
  }
}