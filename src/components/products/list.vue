<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active' : item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <m-item v-for="(item,index) in productsList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>
<script>
import MItem from "./item.vue";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "价格最低",
          active: false
        }
      ],
      productsList: [
        {
          image: "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: "4.1",
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avg_price: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counter_price: 1150,
              saleNum: 0,
              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  components: {
    MItem
  }
};
</script>

