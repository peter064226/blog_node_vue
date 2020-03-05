<template>
  <section style="height:100%;margin-top:100px;background:#f8f8f9;">
    <Row type="flex" justify="center" align="middle">
      <Col :xs="22" :sm="22" :md="14" :lg="8">
        <Card>
          <p slot="title">博客后台管理中心</p>
          <Form ref="userForm" :model="user" :rules="userRules" :label-width="80">
            <FormItem label="USERNAME" prop="username">
              <Input type="text" v-model="user.username"></Input>
            </FormItem>
            <FormItem label="PASSWORD" prop="password">
              <Input type="password" v-model="user.password"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="login">LOGIN</Button>
              <Button @click="e=>$refs['userForm'].resetFields()" style="margin-left: 8px">RESET</Button>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        username: "admin",
        password: "a123456",
      },
      userRules: {
        username: [{ validator: () => {}, trigger: "blur" }],
        password: [{ validator: () => {}, trigger: "blur" }],
      }
    };
  },
  methods:{
    async login(){
        let res = await axios.post('/api/admin/login',this.user)
        if(res.data.success){
          this.$Message.success(res.data.msg)
          this.$router.push('/')
        }else{
          this.$Message.error(res.data.msg)
        }
    }
  }
};
</script>
