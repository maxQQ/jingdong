<template>
  <div id="test">
    <cube-tab-bar
      class="botnav"
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    ></cube-tab-bar>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      switch (label) {
        case "首页":
          this.$router.push({ path: "/botnav/index" });
          break;
        case "分类":
          this.$router.push({ path: "/botnav/list" });
          break;
        case "搜索":
          this.$router.push({ path: "/botnav/search" });
          break;
        case "购物车":
          this.$router.push({ path: "/botnav/cart" });
          break;
        case "我的":
          this.$router.push({ path: "/botnav/mine" });
          break;
      }
    }
  }
};
</script>

<style lang="stylus">
#test {
  position: relative;
  width: 100%;

  .cube-tab-bar.botnav {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    left: 0;
    background: #ffffff;

    .cube-tab div {
      font-size: 16px;
      padding-top: 3px;
    }

    i {
      font-size: 20px;
    }
  }

  .Router {
    position: absolute;
    width: 100%;
    transition: all 0.8s ease;
  }

  .slide-left-enter, .slide-right-leave-to {
    opacity: 0;
    transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
  }

  .slide-left-leave-to, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}
</style>