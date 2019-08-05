<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">美团规则</router-link>
        <dl>
          <dd>规则中心</dd>
          <dd>规则目录</dd>
          <dd>规则评议院</dd>
        </dl>
      </li>
      <li class="list site">
        <router-link to="/">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link to="/">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="/">火车票</router-link>
            </dd>
            <dd>
              <router-link to="/">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link to="/">经济型酒店</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link to="/">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="/">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="/">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="/">自助餐</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link to="/">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/">国内票房榜</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                alt="美团app"
                title="美团app"
              >
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                alt="外卖app"
                title="外卖app"
                class="appicon"
              >
            </dd>
            <dd>
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                alt="榛果app"
                title="榛果app"
                class="appicon"
              >
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                alt="点评app"
                title="点评app"
                class="appicon"
              >
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                alt="猫眼app"
                title="猫眼app"
                class="appicon"
              >
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
