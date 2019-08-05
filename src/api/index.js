import axios from '@/axios.js'

var api = {
    getSearchHotWord(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params)
    },
    getSearchList(params) {
        return axios.get('/api/meituan/header/search.json', params)
    },
    getMenuList(params) {
        return axios.get('/api/meituan/index/nav.json', params)
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json')
    },
    getCurPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },
    login(params) {
        return axios.get('/api/meituan/login',params)
    },
    register(params) {
        return axios.get('/api/meituan/register',params)
    }
}

export default api;