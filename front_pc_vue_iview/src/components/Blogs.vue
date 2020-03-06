<template>
  <section style="min-height:1000px;">
    <Card
      class="card"
      dis-hover
      v-for="(ele,idx) in blogs"
      :key="ele.id"
      style="margin:20px 0px;border-bottom: 1px solid #E2EAF1;"
    >
      <div
        class="title"
        style="min-height:26px;display:flex;justify-content: space-between;align-items: center;border-left: 0px solid silver;padding-left: 5px;margin: 8px 0 18px;"
      >
        <div style="display:flex;flex-direction:column;">
          <router-link
            :to="`/blog/${ele.id}`"
            class="big"
            style="font-size:16px;text-decoration:none;margin-bottom:4px;"
            v-cloak
          >{{ele.title}}</router-link>
          <span style="display: flex;color: rgb(135, 157, 175);">
            <!-- <span style="display:flex;align-items: center;margin-right:5px;">
              <span v-html="ele.svg" style="margin-right:5px;font-size:20px;"></span>
              <span>Web</span>
            </span>
            <span v-if="ele.title.match(/mac/ig)" style="display:flex;align-items: center;margin-right:5px;">
              <svg class="icon" style="margin-right:5px;width: 20px; height: 20px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3871"><path d="M804.99749 544.146417C806.485912 698.993591 947.424043 750.523774 949.066439 751.242323 947.783317 754.78374 926.48349 824.688231 874.696682 896.902343 829.941384 959.313401 783.595014 1021.365186 710.457055 1022.648308 638.499568 1023.93143 615.454695 981.999 533.232231 981.999 451.061092 981.999 425.347326 1021.365186 357.341855 1023.93143 286.821464 1026.497674 233.032986 956.593183 187.918414 894.438748 95.636273 767.255687 25.218532 535.113238 119.861618 378.418368 166.823886 300.558519 250.842721 251.337956 341.94439 250.003509 411.284307 248.823036 476.774859 294.604832 519.066563 294.604832 561.512242 294.604832 641.014487 239.584557 724.622722 247.642564 759.574968 249.028336 857.862121 261.089683 920.940403 349.060534 915.910564 352.191352 803.663043 414.397111 804.99749 544.146417ZM510.597957 235.991815C502.488626 177.122174 532.872957 115.942912 567.568578 77.500574 606.318865 34.233697 671.706767 2.052995 725.700545 0 732.629404 59.947464 707.274912 120.151553 669.859072 163.521079 632.340582 206.736632 570.853371 240.45708 510.597957 235.991815Z" p-id="3872"></path></svg>
              <span style="margin-right:5px;">Mac</span>
            </span>
            <span v-if="ele.title.match(/linux|ubuntu/ig)" style="display:flex;align-items: center;margin-right:5px;">
              <svg class="icon" style="margin-right:5px;width: 20px; height: 20px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4690"><path d="M512 0c282.581333 0 512 229.418667 512 512s-229.418667 512-512 512S0 794.581333 0 512 229.418667 0 512 0z m139.904 754.346667a68.352 68.352 0 1 0 68.309333 118.4 68.352 68.352 0 0 0-68.309333-118.4z m-139.904-42.666667a199.04 199.04 0 0 1-84.096-18.56L380.416 778.24c39.68 19.584 84.394667 30.762667 131.584 30.762667a294.826667 294.826667 0 0 0 79.36-10.922667 95.573333 95.573333 0 0 1 46.72-67.712 95.744 95.744 0 0 1 81.92-6.656 295.765333 295.765333 0 0 0 88.32-192.64l-97.493333-1.408A199.637333 199.637333 0 0 1 512 711.68zM312.32 512a199.68 199.68 0 0 1 84.906667-163.413333L347.306667 264.917333a297.344 297.344 0 0 0-122.922667 172.16 94.72 94.72 0 0 1 35.413333 74.24c0 30.037333-13.824 56.277333-35.413333 74.197334a297.386667 297.386667 0 0 0 122.922667 172.117333l49.92-83.84A195.626667 195.626667 0 0 1 312.32 512z m-148.48-68.352a68.352 68.352 0 1 0 0 136.661333 68.352 68.352 0 0 0 0-136.661333zM512 312.32a199.637333 199.637333 0 0 1 198.826667 181.973333l97.493333-1.450666a296.490667 296.490667 0 0 0-88.32-192.682667A95.829333 95.829333 0 0 1 591.36 225.706667 303.957333 303.957333 0 0 0 512 215.04c-47.36 0-91.946667 11.093333-131.584 30.72l47.488 85.12A198.954667 198.954667 0 0 1 512 312.32z m139.904-42.709333a68.394667 68.394667 0 0 0 93.397333-24.96 68.437333 68.437333 0 0 0-118.485333-68.309334 68.266667 68.266667 0 0 0 25.088 93.269334z" fill="" p-id="4691"></path></svg>
              <span style="margin-right:5px;">Linux</span>
            </span>
            <span v-if="ele.title.match(/win/ig)" style="display:flex;align-items: center;margin-right:5px;">
              <svg t="1542857339171" class="icon" style="margin-right:5px;width: 20px; height: 20px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3271"><path d="M426.285714 574.857143v372L36.571429 893.142857v-318.285714h389.714285z m0-424.571429v376.571429H36.571429V204z m561.142857 424.571429v449.142857l-518.285714-71.428571v-377.714286h518.285714z m0-501.714286v453.714286H469.142857V144.571429z" p-id="3272"></path></svg>
              <span style="margin-right:5px;">Windows</span>
            </span>-->
            <div style="font-size:12px;">
              <Icon type="ios-contact" />
              <span>&nbsp;{{ele.user.username}}&nbsp;</span>
              <Icon type="md-timer" />
              <span>&nbsp;{{new Date(ele.createdAt).toLocaleString()}}&nbsp;</span>
              <Icon type="ios-bonfire" />
              <span>&nbsp;{{ele.viewCount}}&nbsp;</span>
            </div>
          </span>
        </div>
        <!-- <div class="sub" style="line-height:26px;color: #879DAF;" v-cloak>{{ele.createdAt}}</div> -->
      </div>
      <router-link
        :to="`/blog/${ele.id}`"
        class="img"
        style="height: 130px;display: block;position:relative;border-radius:0px;overflow:hidden;"
      >
        <div class="canvasbg" :id="'cardbg'+idx" style="position:absolute;">
          <trianglify :width="1000" :height="130" :cellSize="20" />
        </div>
        <div
          class="mesh"
          style="width:100%;height:100%;opacity:0.2;position:absolute;background: url(overlay.png) repeat right bottom;"
        ></div>

        <div
          class="front"
          style="width: 680px;height: 130px;position:absolute;display:flex;justify-content: center;align-items: center;"
        >
          <span style="font-size:100px;display: flex;" v-html="ele.svg"></span>
          &nbsp;&nbsp;
          <div
            style="margin-left:10px;font-size:25px;color:white;background:rgba(0, 0, 0, 0.1);padding: 0px 10px;
            border-radius:0px;"
            v-cloak
          >{{ele.title}}</div>
        </div>
      </router-link>
      <div
        class="desc"
        style="min-height:70px;margin: 22px 0;    line-height: 26px;
        color: #888;
        font-size: 14px;
        overflow: hidden;"
      >
        <span v-cloak>{{ele.intro}}</span>
      </div>
      <div class="more" style="display:flex;justify-content: space-between;margin-bottom:20px;">
        <a
          style="    margin-left: 6px;
          display: inline-block;font-size:13px;
          border: 1px solid #dfdfdf;text-decoration:none;
          padding: 5px 13px;
          border-radius: 4px;
          font-weight: 700;
          color: #b5b5b5;"
          class="entry-readmore"
        >
          <i class="ipsicon ipsicon-read ipsicon-rspace"></i>
          分类名称
        </a>
        <router-link
          :to="`/blog/${ele.id}`"
          style="    margin-left: 6px;
          display: inline-block;font-size:13px;
          border: 1px solid #8fc740;text-decoration:none;
          padding: 5px 13px;
          border-radius: 4px;
          font-weight: 700;
          color: #8fc740;"
          class="entry-readmore"
        >
          <i class="ipsicon ipsicon-read ipsicon-rspace"></i>
          阅读全文
        </router-link>
      </div>
    </Card>
  </section>
</template>

<script>
import { Trianglify } from "vue-trianglify";

export default {
  name: "HelloWorld",
  props: ["blogs"],
  components: {
    Trianglify
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*card*/
.card .img:hover {
  cursor: pointer;
}
.card .img {
  transition: 0.5s all;
  outline: 0px solid silver;
  outline-offset: -1px;
}
.card .img:hover {
  outline-offset: 10px;
  outline: 0px solid white;
}
.card .img .front {
  transition: 0.5s all;
}
.card .img:hover .front {
  transform: scale(2);
}
.card .img .mesh {
  transition: 0.5s all;
  box-shadow: inset 0px 0px 10px 5px gray;
  /* box-shadow: inset 0px 0px 10px 20px white; */
}
.card .img:hover .mesh {
  opacity: 0 !important;
}
.card .img .canvasbg {
  transform: scale(2);
  transition: 0.5s all;
}
.card .img:hover .canvasbg {
  transform: scale(1);
}
</style>
