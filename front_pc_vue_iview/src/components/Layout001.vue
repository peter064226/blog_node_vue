<template>
    <div>
        <Header></Header>
        <div style="min-height:800px;">
            <keep-alive><router-view /></keep-alive>
        </div>
        <BackTop></BackTop>
        <footer style="line-height:100px;text-align:center;color:gray;">
          copyright 2020
        </footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {BackTop} from 'view-design'
export default {
    components:{Header,BackTop}
}
</script>

<style>

</style>