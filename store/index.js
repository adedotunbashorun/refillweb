

import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import classes from './class'
import settings from './settings'
import supports from './supports'
import service_category from './service_category'
import orders from './orders'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      category,
      service_category,
      classes,
      settings,
      supports,
      orders
    }

  })
}

export default store
