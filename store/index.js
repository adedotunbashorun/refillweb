

import Vuex from 'vuex'
import auth from './auth'
import classes from './class'
import settings from './settings'
import supports from './supports'
import orders from './orders'
import company from './company'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      classes,
      company,
      settings,
      supports,
      orders
    }

  })
}

export default store
