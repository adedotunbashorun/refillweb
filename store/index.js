

import Vuex from 'vuex'
import auth from './auth'
import classes from './class'
import settings from './settings'
import supports from './supports'
import orders from './orders'
import company from './company'
import payments from './payments'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      classes,
      company,
      orders,
      payments,
      settings,
      supports,
    }

  })
}

export default store
