/**
 * @desc 发现页面路由
 */
const Found = () => import(/* webpackChunkName: "order-result" */ '../pages/found')
const FeedDetail = () => import(/* webpackChunkName: "feed-detail" */ '../pages/found/feed-detail')
/**
 * @desc 导出路由
 */
export default [
  {
    path: '/found',
    name: 'Found',
    meta: {
      title: '发现'
    },
    component: Found
  },
  {
    path: '/feed-detail',
    name: 'FeedDetail',
    meta: {
      title: '文章详情'
    },
    component: FeedDetail
  }
]