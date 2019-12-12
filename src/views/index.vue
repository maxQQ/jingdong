<template>
  <div>
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <cube-slide :auto-play="false" ref="slidelists" :data="lists" @change="changePage">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li class="listsli" v-for="(item,index1) in list" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt />
              <p>{{item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      lists: []
    };
  },
  methods: {
    changePage(current) {
      //console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      //console.log(item, index);
    },
    //获取banner图
    async getbanner() {
      try {
        var items = await this.$http.get("/api/banner");
        this.items = items.data;
      } catch (error) {
        console.log(error);
      }
    },
    //获取分类列表
    async getslidelists() {
      try {
        var lists = await this.$http.get("/api/slideLists");
        this.lists = lists.data;
        console.log(this.lists);
      } catch (error) {}
    }
  },
  mounted() {
    this.getbanner();
    this.getslidelists();
  }
};
</script>
<style lang="stylus" scoped>
.cube-slide-item > a > img {
  width: 100%;
  height: auto;
}

.listul {
  display: flex;
  flex-wrap: wrap;

  .listsli {
    width: 20%;
    font-size: 14px;
    text-align: center;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 5px 0;
    }

    p {
      padding-bottom: 5px;
    }
  }
}
</style>