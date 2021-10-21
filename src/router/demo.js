// 测试模块
import PgaeA from '../pages/a'
import PgaeB from '../pages/b'
// 
export default [
  {
    path: '/a',
    name: 'PageA',
    meta: {
      title: 'page a'
    },
    component: PgaeA
  },
  {
    path: '/b',
    name: 'PgaeB',
    meta: {
      title: 'page b'
    },
    component: PgaeB
  }
]