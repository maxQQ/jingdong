<template>
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li v-for="(list,index) in tabslabel" @click="selectlist(index)" :class="list.active?'active':''" :key="index">
          {{list.label}}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul v-if="tags.length>0">
        <li v-for="(tag,index) in tags" :key="index">
          <img :src="tag.image" alt="">
          <p>{{tag.label}}</p>
        </li>
      </ul>
      <ul v-else>
        <li>暂无数据</li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      tabslabel: [
        {
          label: '热门推荐',
          active: true
        },
        {
          label: '手机数码',
          active: ''
        },
        {
          label: '家用电器',
          active: ''
        },
        {
          label: '家用空调',
          active: ''
        },
        {
          label: '电脑产品',
          active: ''
        },
        {
          label: '计生情趣',
          active: ''
        },
        {
          label: '美妆护肤',
          active: ''
        },
        {
          label: '口红',
          active: ''
        },
        {
          label: '手袋',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        },
        {
          label: '金银财宝',
          active: ''
        }
      ]
    }
  },
  methods: {
    selectlist(index) {
      this.tabslabel.forEach((val,idx)=>{
        if(index==idx) {
          val.active=true
        }else {
          val.active=false
        }
      })
      this.getclassify(index)
    },
    async getclassify(index) {
      const result = await this.$http.get('/api/classify',{params:{type:index}})
      if(result.data.length>0) {
        this.tags = result.data
      }else {
        this.tags = []
      }
      console.log(this.tags)
    }
  },
  created() {
    this.getclassify(0)
  },
  mounted() {
    //dom加载完全后的操作
    const leftpanels = document.querySelector('.leftpanels')
    const rightpanels = document.querySelector('.rightpanels')
    const bodyheight = document.documentElement.clientHeight
    leftpanels.style.height = bodyheight - 57+'px'
    rightpanels.style.height = bodyheight - 57+'px'
  }
}
</script>

<style lang="stylus" scoped>
  .panelsbox  
    display flex
    .leftpanels
      width 30%
      li
        height 50px
        line-height 50px
        border-bottom 1px solid #ffffff
        color #333
        background #f8f8f8
        font-size 14px
      .active
        background #ffffff
        color #e93b3d
    .rightpanels
      width 70%
      ul
        display flex
        flex-wrap wrap
        li
          width 50%
          justify-content  center
          align-items center
          font-size 15px
          padding 20px
          box-sizing border-box
          img   
            width 80px
            height 80px
</style>