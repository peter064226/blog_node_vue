<template>
  <div>
    <Form ref="blogForm" :model="blog">
      <FormItem label prop="title">
        <Input v-model="blog.title" placeholder="标题">
          <Select v-model="blog.typeId" slot="prepend" style="width: 80px">
            <Option v-for="ele in types" :key="ele.id" :value="ele.id">{{ele.name}}</Option>
          </Select>
        </Input>
      </FormItem>
      <FormItem label prop="svg">
        <Input v-model="blog.svg" placeholder="图标"></Input>
      </FormItem>
      <FormItem label prop="intro">
        <Input v-model="blog.intro" type="textarea" :rows="4" placeholder="简介" />
      </FormItem>
      <FormItem prop="content">
        <mavon-editor style="height: 600px;z-index:0;" v-model="blog.content"></mavon-editor>
      </FormItem>
      <FormItem label style="display:flex;justify-content: flex-end;">
        <div>
          <Button type="primary" @click="addBlog">保存</Button>
          <Button style="margin-left: 8px" @click="e=>$refs['blogForm'].resetFields()">重置</Button>
        </div>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import axios from "axios";
export default {
  name: "addBlog",
  components: { mavonEditor },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        intro: "",
        svg: "",
        typeId: 0
      },
      types: []
    };
  },
  beforeRouteEnter(to, from, next) {
    let blogId = to.params.blogId;
    if (blogId === undefined) {
      next();
    } else {
      axios(`/api/blogs/${blogId}`).then(res => {
        next(vm => {
          vm.blog = res.data;
          vm.rawData = { ...res.data };
          // vm.blog.content = marked(vm.blog.content);
          // vm.getComments();
        });
      });
    }
  },

  beforeRouteUpdate() {
    this.blog = {};
  },
  created() {
    this.getTypes();
  },
  methods: {
    async getTypes() {
      const res = await axios.get("/api/types");
      this.types = res.data;
      if (this.blog.typeId === 0) this.blog.typeId = res.data[0].id;
    },
    getModifyData() {
      let data = undefined;
      for (let k in this.rawData) {
        if (this.rawData[k] !== this.blog[k]) {
          if (!data) data = {};
          data[k] = this.blog[k];
        }
      }
      return data;
    },
    async addBlog() {
      let blogId = this.$route.params.blogId;
      if (blogId) {
        let data = this.getModifyData();
        if (data==undefined) {
          this.$Message.warning("未修改任何数据");
          return
        }
        const res = await axios.put(
          `/api/blogs/${blogId}`,
          this.getModifyData()
        );
        // this.$router.push('/blogs')
        this.$router.back()
      } else {
        const res = await axios.post("/api/blogs", this.blog);
        this.$refs['blogForm'].resetFields()
        this.$Message.success(res.data);
      }
      // if (res.data.success) {
      //   this.$Message.success(res.data.msg);
      //   this.$refs["blogForm"].resetFields();
      // } else {
      //   this.$Message.error(res.data.msg);
      // }
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>