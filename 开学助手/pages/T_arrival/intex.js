// pages/T_arrival/intex.js

const order = ['demo1', 'demo2', 'demo3' ,'demo4']

Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'green',
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    change: true,
    animation1:'in',
    animation2:'out',
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /** * 四个点击切换函数*/
  huizong() {
    let that = this
    if (that.data.one) {} else {
      that.setData({
        one: true,
        two: false,
        three: false,
        four: false,
        five:false,
      })
    }
  },
  banji1() {
    let that = this
    if (that.data.two) {} else {
      that.setData({
        one: false,
        two: true,
        three: false,
        four: false,
        five:false
      })
    }
  },

  banji2() {
    let that = this
    if (that.data.three) {} else {
      that.setData({
        one: false,
        two: false,
        three: true,
        four: false,
        five:false
      })
    }
  },
  banji3() {
    let that = this
    if (that.data.four) {} else {
      that.setData({
        one: false,
        two: false,
        three: false,
        four: true,
        five:false
      })
    }
  },
  banji4() {
    let that = this
    if (that.data.five) {} else {
      that.setData({
        one: false,
        two: false,
        three: false,
        four: false,
        five:true
      })
    }
  },

  /*** 点击搜寻按钮*/
  search() {
    let temp = this.data.change
    let that = this
    this.setData({
      change: !temp
    })
    if (that.data.animation1 === 'in'){
      that.setData({
        animation1:'out',
        animation2:'in'
      })
    }
    else {
      that.setData({
        animation1: 'in',
        animation2: 'out'
      })
    }
  },

})

