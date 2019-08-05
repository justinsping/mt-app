<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <category />
                <list />
            </el-col>
            <el-col :span="5">
                map + fav
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
import category from '@/components/products/category.vue'
import List from '@/components/products/list.vue'
export default {
    components: {
        crumbs,
        category,
        List,
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss';
    // @import '@/assets/css/products/list.scss';
</style>
