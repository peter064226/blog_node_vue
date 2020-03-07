<template>
  <div>
    <NavBar fixed title="内容" left-text="返回" left-arrow @click-left="e=>$router.back()" />
    <div style="margin:50px 0;">
      <div style="min-height:800px;" dis-hover>
        <div slot="title" class="title" @click="fuck">
          <span>{{blog.title}}</span>
          <div style="font-size:12px;color: #797979;margin-top: 10px;margin-bottom: -15px;">
            <Icon name="user-o" />
            <span>&nbsp;{{blog.user && blog.user.username}}&nbsp;</span>
            <Icon name="clock-o" />
            <span>&nbsp;{{new Date(blog.createdAt).toLocaleString()}}&nbsp;</span>
            <Icon name="fire-o" />
            <span>&nbsp;{{blog.viewCount}}&nbsp;</span>
          </div>
        </div>
        <div class="blog-content" style="padding:0 20px;overflow: hidden;" v-html="blog.content"></div>
        <!-- <mavon-editor ref="md" style="height: 600px;" v-model="blog.content"></mavon-editor> -->
        <!-- <div v-html="$refs['md'] && $refs['md'].d_render"></div> -->
      </div>
      <div style="margin-top:10px;">
        <ul class="commentlist" style="display:flex;flex-direction:column;">
          <li class="comment" v-for="ele in comments" :key="ele.id">
            <div class="comment_body">
              <div class="comment_content">
                <div>{{ ele.user && ele.user.username}}说:</div>
                <p>{{ele.content}}</p>
                <div class="comm_meta_div">
                  <span class="commentmetadata" style="display: none;">
                    <a
                      rel="nofollow"
                      class="comment-reply-link"
                      href="#comment-139045"
                      data-commentid="139045"
                      data-postid="1877"
                      data-belowelement="comment-139045"
                      data-respondelement="respond"
                      aria-label="回复给YYannis"
                    >
                      <i class="ipsicon ipsicon-reply ipsicon-rspace"></i>回复他/她&nbsp;&nbsp;
                    </a>
                  </span>
                  <div style="font-size:12px;">
                    <Icon type="ios-timer-outline" />
                    {{new Date(ele.createdAt).toLocaleString()}}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <Form @submit="addComment">
          <Field type="textarea"
            v-model="comment"
            name="用户名"
             placeholder="请填写留言内容"
            :rules="[{ required: true, message: '留言内容不能为空' }]"
          />
          <div style="margin: 16px;">
            <Button round block type="info" native-type="submit">留言</Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
// import marked from "marked";
import { Remarkable } from "remarkable";
import { Icon, NavBar, Form, Field, Button } from "vant";
var md = new Remarkable();
export default {
  components: { Icon, NavBar, Form, Field, Button },
  data() {
    return {
      nav: "",
      blog: {
        content: ""
      },
      comments: [],
      comment: "",
      loading: false
    };
  },
  beforeRouteEnter(to, from, next) {
    let blogId = to.params.id;
    axios(`/api/blogs/${blogId}`).then(res => {
      next(vm => {
        vm.blog = res.data;
        vm.blog.content = md.render(vm.blog.content);
        vm.getComments();
        var docs = [];
        Vue.nextTick(a => {
          docs = document.getElementsByTagName("h1");
          let template = "";
          docs.forEach((ele, idx) => {
            ele.innerText = idx + 1 + ".  " + ele.innerText;
            template += ele.outerHTML;
          });
          template = `<div >${template}</div>`;
          vm.nav = template;
        });
      });
    });
  },
  methods: {
    fucku: function(event) {
      console.dir(event.target);
      if (event.target.tagName === "H1") {
        // 获取触发事件对象的属性
        document.getElementById(event.target.id).scrollIntoView(true);
      }
    },
    fuck() {
      window.md = this.$refs["md"];
    },
    run() {
      document.getElementById("pNode").scrollIntoView(true);
      return false;
    },
    addComment() {
      this.loading = true;
      axios({
        url: "/api/comments",
        method: "post",
        data: {
          blogId: this.$route.params.id,
          content: this.comment
        }
      }).then(res => {
        this.loading = false;
        this.getComments();
      });
      this.comment = "";
    },
    async getComments() {
      const res = await axios(`/api/comments?blogId=${this.$route.params.id}`);
      this.comments = res.data;
    }
  }
};
</script>
<style>
.avatar-box {
  padding: 7px 0;
}
.md-nav h1 {
  font-size: 14px;
  cursor: pointer;
  font-weight: normal;
  line-height: 18px;
  margin-bottom: 10px;
}
.md-nav h1:hover {
  color: #2c8bf0;
}
.blog-content h1 {
  font-size: 20px;
}
</style>
<style scoped>
.title {
  font-size: 20px;
  text-align: center;
  margin: 10px 0px;
}
.commentlist li {
  clear: both;
  overflow: hidden;
  display: inline-block;
  margin: 10px 0 2px;
}

.comment_body {
  /* background: transparent url(images/bg_comment-btm.png) no-repeat scroll right bottom */
}

.comment_meta {
  font-size: 12px;
  float: left;
  width: 100px;
  text-align: center;
}

.comment_meta span {
  display: block;
  margin-top: 1px;
  /* line-height: 14px; */
  word-break: break-all;
}

.comment_content {
  word-break: break-word;
  /* width: 545px; */
  /* background: transparent url(images/bg_comment-top.png) no-repeat scroll right top; */
  background-color: #f5fafe;
  padding: 10px 10px 10px 30px;
  border: 1px solid #d8ebfa;
  border-radius: 5px;
}

.comment_content p {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.comm_meta_div {
  margin-top: 5px;
  color: #c6c6c6;
  min-height: 20px;
}

.commentmetadata {
  display: none;
  color: #aeaeae;
}
</style>