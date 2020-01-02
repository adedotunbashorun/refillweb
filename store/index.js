

import Vuex from 'vuex'
import auth from './auth'
import classes from './class'
import settings from './settings'
import supports from './supports'
import orders from './orders'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      classes,
      settings,
      supports,
      orders
    }

  })
}

export default store
