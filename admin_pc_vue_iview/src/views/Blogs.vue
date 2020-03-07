<template>
  <div>
    <Table :columns="columns" :loading="loading" :data="list">
      <template slot-scope="{ row }" slot="svg">
        <div style="font-size:60px;" v-html="row.svg"></div>
      </template>
      <template slot-scope="{ row }" slot="username">
        <div >{{row.user.username}}</div>
      </template>
      <template slot-scope="{ row }" slot="type">
        <div  >{{types.filter(e=>e.id==row.typeId)[0].name}}</div>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <!-- <Button size="small" style="margin-right: 5px">详细</Button> -->
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="e=>$router.push(`/addBlog/${row.id}`)"
        >详细</Button>
        <Button type="error" size="small" @click="removeBlog(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      types:[],
      loading:false,
      columns: [
        {
          title: "图标",
          slot: "svg",
          width:100,
        },
        {
          title: "作者",
          slot: "username",
          width:150,
        },
        {
          title: "分类",
          slot: "type",
          width:100,
        },
        {
          title: "标题",
          key: "title"
        },
        {
          title: "简介",
          key: "intro"
        },
        {
          title: "操作",
          slot: "action"
        }
      ],
      list: []
    };
  },
  async created() {
    await this.getTypes()
    await this.getBlogs()
  },
  methods: {
    async getTypes() {
      const res = await axios.get("/api/types")
      this.types = res.data;
    },
    async getBlogs() {
      this.loading = true
      const res = await axios.get("/api/blogs")
      this.list = res.data
      this.loading = false
    },
    async removeBlog(idx) {
        const res = await axios.delete(`/api/blogs/${this.list[idx].id}`)
        this.list.splice(idx,1)
    }
  }
};
</script>

<style lang="scss" >
.ivu-table table{
  min-height: 300px;
}
</style>