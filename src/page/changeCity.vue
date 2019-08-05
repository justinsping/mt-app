<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot-city title="热门城市 :" :list="hotList"/>
        </el-row>
        <el-row>
            <hot-city title="最近访问 :" :list="recentList"/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hotCity from '@/components/changeCity/hotCity.vue'
import Category from '@/components/changeCity/category.vue'
export default {
    data() {
        return {
            hotList: ["北京","上海","广州","深圳","天津","西安","南京","四川"],
            recentList: ["北京","上海","广州"],
        }
    },
    components: {
        Province,
        hotCity,
        Category,
    }
}
</script>
