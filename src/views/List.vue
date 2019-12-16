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
      <ul>
        <li v-for="(tag,index) in tags" :key="index">
          <img :src="tag.image" alt="">
          <p>{{tag.label}}</p>
        </li>
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
          img   
            width 80px
            height 80px
</style>