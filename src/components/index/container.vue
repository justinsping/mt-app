<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://p0.meituan.net/msmerchant/6fb7e5afaed2a15ad5afea9f9d27eab8497563.jpg@368w_208h_1e_1c",
          title: "北京金茂万丽酒店 燃餐厅",
          sub_title: "健康早餐自助/周一至日早餐自助2选1",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: '人均',
          },
          rentNum: 88,
          address: "王府井/东单"
        },
        {
          image:
            "https://p0.meituan.net/msmerchant/7fed2224f3b8ac93de4f5cd29d0331fe113913.jpg@368w_208h_1e_1c",
          title: "北京金茂万丽酒店 燃餐厅",
          sub_title: "健康早餐自助/周一至日早餐自助2选1",
          price_info: {
            current_price: 88,
            old_price: 128,
            avg_price: null,
            units: null,
          },
          rentNum: 88,
          address: "梨园"
        }
      ]
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

