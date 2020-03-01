import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'
Vue.use(Vuex)

const state = {
    username: '',//登录用户名
    cartCount: -1//购物车商品数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});