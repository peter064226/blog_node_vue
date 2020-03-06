<template>
  <section style="height:100%;padding:100px 0px 300px 0px;margin-top:-10px;background:#f8f8f9;">
    <Row type="flex" justify="center" align="middle">
      <Col :xs="22" :sm="22" :md="14" :lg="8">
        <Card>
          <p slot="title">登陆中心</p>
              <Alert type="warning">如帐号不存在，会用当前账号注册新用户</Alert>

          <Form ref="userForm" :model="user"  :label-width="80">
            <FormItem label="USERNAME" prop="username">
              <Input type="text" v-model="user.username"></Input>
            </FormItem>
            <FormItem label="PASSWORD" prop="password">
              <Input type="password" v-model="user.password"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="login">登陆</Button>
              <Button @click="e=>$refs['userForm'].resetFields()" style="margin-left: 8px">重置</Button>
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
        username: "test",
        password: "test",
      },
      userRules: {
        username: [{ validator: () => {}, trigger: "blur" }],
        password: [{ validator: () => {}, trigger: "blur" }],
      }
    };
  },
  methods:{
    async login(){
        let res = await axios.post('/api/local/login',this.user)
        this.$router.push('/')
        setTimeout(e=>location.reload(),100)
        // if(res.data.success){
        //   this.$Message.success(res.data.msg)
        //   this.$router.push('/')
        // }else{
        //   this.$Message.error(res.data.msg)
        // }
    }
  }
};
</script>
