<template>
  <div class="home">
    <List v-model="loading" finished-text="没有更多了">
      <Cell v-for="(ele,idx) in blogs" :key="ele.id" >
        <div
          class="card"
          dis-hover
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
                <div style="font-size:12px;display: flex;align-items: center;">
                  <Icon name="user-o" />
                  <span>&nbsp;{{ele.user.username}}&nbsp;</span>
                  <Icon name="clock-o" />
                  <span>&nbsp;{{ele.createdAt && new Date(ele.createdAt).toLocaleString()}}&nbsp;</span>
                  <Icon name="fire-o" />
                  <span>&nbsp;{{ele.viewCount}}&nbsp;</span>
                </div>
              </span>
            </div>
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
              style="width: 100%;height: 130px;padding: 0 10px;position:absolute;display:flex;justify-content: center;align-items: center;"
            >
              <span style="font-size:50px;display: flex;" v-html="ele.svg"></span>
              &nbsp;&nbsp;
              <div
                style="margin-left:10px;font-size:20px;color:white;background:rgba(0, 0, 0, 0.1);padding: 0px 10px;
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
        </div>
      </Cell>
    </List>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { List, Cell ,Icon} from "vant";
import { Trianglify } from "vue-trianglify";

export default {
  components: { List, Cell ,Icon,Trianglify },
  name: "Home",
  data() {
    return {
      blogs: [],
      loading: false
    };
  },
  created() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      const res = await axios.get("/api/blogs");
      this.blogs = res.data;
    }
  }
};
</script>
