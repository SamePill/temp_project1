// import axios from 'axios'
// import moment from 'moment'
// import * as types from '@/store/mutation-types'
// import { store } from '@/store'
// const baseUrl = "http://localhost:9999"

import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";
// import { common } from "@/store/common";
// import { storeToRefs } from "pinia";

var qmeetMixin = {
  data: function() {
    return {
      TRUE_VALUE: "Y",
      FALSE_VALUE: "N",
      // CODES: store.getters.commCode,
      //ID :  storeToRefs(common().getId()),
      gfn_utils: gfnUtils,
      gfn_rules: gfnRules
    };
  },
  methods: {
    mixintest() {
      alert("mixin success");
    }
  },
  computed: {
    // CODES: {
    //   get: function() {
    //     return store.getters.commCode;
    //   }
    // },
    // CATG:{
    //   get: function() {
    //     return store.getters.catCode;
    //   }
    // },
    // CATG_CHILD:{
    //   get: function() {
    //     return store.getters.catChildCode;
    //   }
    // },
  },
  /* instant lifecycle hook*/
  beforeCreate: function() {

    if(window.$cookies.set("clientId").length == 0){
      this.$router.replace({ name: "Login" });
    }

    // console.log(":::::::: mixin beforeCreate ::::::::");
    // if (!store.getters.hasCommCode) {
    //   gfnUtils.getCommCodeList();
    // }
    
    // if(store.getters.hasMenuList == false ){
    //   //store.commit(types.SET_HAS_MENU_LIST, true);
    //   gfnUtils.getMenuList(false);
    // }else{
    //     gfnUtils.setPageTitleRoute();
    // }
  },
  created: function() {
    //console.log(":::::::: mixin created ::::::::");
  },
  beforeMount: function() {
    //console.log(":::::::: mixin beforeMount ::::::::");
  },
  mounted: function() {
    //console.log(":::::::: mixin mounted ::::::::");
  },
  beforeUpdate: function() {
    //console.log(":::::::: mixin beforeUpdate ::::::::");
  },
  updated: function() {
    //console.log(":::::::: mixin updated ::::::::");
  },
  beforeDestroy: function() {
    //console.log(":::::::: mixin beforeDestroy ::::::::");
  },
  destroyed: function() {
    //console.log(":::::::: mixin destroyed ::::::::");
  }
};

export default qmeetMixin;
