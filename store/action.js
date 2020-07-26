import {
  getCarlist,
} from '@/util/axios'

export default {
  getActionCarList({
    commit
  }) {
    getCarlist({
      istree: 1
    })
      .then(res => {
        if (res.data.code == 200) {
          commit('reqCarList', res.data.list)
        }
      })
  }
}