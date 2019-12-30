

import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import classes from './class'
import settings from './settings'
import supports from './supports'
import service_category from './service_category'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      category,
      service_category,
      classes,
      settings,
      supports
    }

  })
}

export default store
