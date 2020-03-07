<template>
    <div>
        <Header></Header>
        <router-view/>
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