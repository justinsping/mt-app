<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index" :id="'city-' + index">
            <dt>{{index}}</dt>
            <dd>
                <span v-for="city in item" :key="city.id">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList: [],
            cityGroup: {}
        }
    },
    created() {
        var data = [{
            "id": 55,
            "name": "南京",
            "pinyin": "nanjing",
            "acronym": "nj",
            "rank": "A",
            "firstChar": "n"
        },{
            "id": 57,
            "name": "武汉",
            "pinyin": "wuhan",
            "acronym": "wh",
            "rank": "A",
            "firstChar": "w"
        },{
            "id": 59,
            "name": "成都",
            "pinyin": "chengdu",
            "acronym": "cd",
            "rank": "A",
            "firstChar": "c"
        }];
        var obj = {}
        data.forEach((item,index) => {
            if(!obj[item.firstChar.toUpperCase()]) {
                obj[item.firstChar.toUpperCase()] = [];
            }
            obj[item.firstChar.toUpperCase()].push(item);
        });
        // console.log(obj);
        this.cityGroup = obj;
    },
    methods: {

    }

}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>


