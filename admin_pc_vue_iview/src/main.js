import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iview from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(iview);

import axios from 'axios'
axios.interceptors.response.use(function (response) {
  console.log(response.config.method)
  //add
  // if(response.config.method=='post'){
  //   iview.Message.success('新增成功');
  // }
  //delete
  if(response.config.method=='delete'){
    iview.Message.success('删除成功');
  }
  //put
  if(response.config.method=='put'){
    iview.Message.success('更新成功');
  }
  
  return response;
}, function (error) {
  // debugger
  // console.log(error.response.config.method)

  //add
  // if(error.response.config.method=='post'){
  //   iview.Message.error('新增失败');
  // }
  //delete
  if(error.response.config.method=='delete'){
    iview.Message.error('删除失败');
  }
  //put
  if(error.response.config.method=='put'){
    iview.Message.error('更新失败');
  }
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
