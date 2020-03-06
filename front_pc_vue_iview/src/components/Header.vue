<template>
  <div style="margin-bottom:10px;border-bottom:1px solid gainsboro;">
    <Row type="flex" justify="center">
      <Col span="18" style="display:flex;justify-content: space-between;">
        <router-link
          to="/"
          class="layout-logo"
          style="display: flex;justify-content: center;align-items: center;"
        >
          <span style="font-size:30px;">匠造</span>
          <span
            style="font-size:12px;margin-top: 18px;font-style: italic;color:#adadad;text-indent: 8px;"
          >&nbsp;&nbsp;Full Stack Web Developer</span>
        </router-link>

        <Menu
          mode="horizontal"
          theme="light"
          active-name="1"
          @on-select="name=>{name=='logout' && logout()}"
        >
          <div class="layout-nav">
            <MenuItem
              v-for="ele in types"
              :key="ele.id"
              :to="`/blogs/${ele.id}`"
              :name="ele.id"
              style="display:flex;align-items: center;"
            >
              <i v-html="ele.svg" class="ivu-icon"></i>
              <span>{{ele.name}}</span>
            </MenuItem>
            <!-- <MenuItem name="3">
              <Icon size="20" type="ios-analytics"></Icon>
              <router-link to="/about">关于本人</router-link>
            </MenuItem>-->
            <template v-if="user.username">
              <Submenu name="4" >
                <template slot="title">
                  <Icon size="20" :type="{github:'logo-github',local:'ios-contact'}[user.oauthName]"></Icon>
                  {{user.username}}
                </template>
                <MenuItem name="logout" :on-select="e=>alert(9090)">退出</MenuItem>
              </Submenu>
              <MenuItem v-if="user.username" name="8" style="display:flex;align-items: center;">
                <Icon size="20" type="ios-settings" />
                <a href="/public/admin/index.html" style="color:#515a6e;">管理博客</a>
              </MenuItem>
            </template>
            <template v-else>
              <MenuItem name="5"  style="display:flex;align-items: center;">
                <Icon size="20" type="logo-github"></Icon>
                <a href="/api/github/login" style="color:#515a6e;">用github登陆</a>
              </MenuItem>
              <MenuItem name="5as"  style="display:flex;align-items: center;">
                <Icon style="font-size:22px;" type="ios-contact" />
                <a href="#/login" style="color:#515a6e;">普通登陆</a>
              </MenuItem>
            </template>
          </div>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      types: []
    };
  },
  created() {
    this.getUser();
    this.getTypes();
  },
  methods: {
    getUser() {
      axios("/api/getCurrentUser").then(res => {
        // this.user
        this.user = res.data;
        console.log(this.user);
      });
    },
    async getTypes() {
      const res = await axios.get("/api/types");
      this.types = res.data;
    },
    async logout() {
      await axios("/api/logout");
      location.reload();
    }
  }
};
</script>

<style>
.ivu-menu-item {
  fill: #515a6e;
}
.ivu-menu-item-active,
 .ivu-menu-item:hover{
  fill: #2d8cf0;
}
</style>