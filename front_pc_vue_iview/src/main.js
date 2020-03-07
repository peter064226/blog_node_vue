import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Message,LoadingBar} from 'view-design';
import 'view-design/dist/styles/iview.css';
// Vue.use(iview);


import axios from 'axios'
axios.interceptors.response.use(function (response) {
  console.log(response.config.method)
  //add
  // if(response.config.method=='post'){
  //   Message.success('新增成功');
  // }
  //delete
  if(response.config.method=='delete'){
    Message.success('删除成功');
  }
  //put
  if(response.config.method=='put'){
    Message.success('更新成功');
  }
  
  return response;
}, function (error) {
  // debugger
  // console.log(error.response.config.method)

  //add
  // if(error.response.config.method=='post'){
  //   Message.error('新增失败');
  // }
  //delete
  // if(error.response.config.method=='delete'){
  //   Message.error('删除失败');
  // }
  //put
  // if(error.response.config.method=='put'){
  //   Message.error('更新失败');
  // }
  Message.error(error.response.data.message)
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
