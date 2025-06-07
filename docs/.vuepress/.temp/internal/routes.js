export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to My LeetCode Solutions"} }],
  ["/problems/1.Two-Sum.html", { loader: () => import(/* webpackChunkName: "problems_1.Two-Sum.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/problems/1.Two-Sum.html.js"), meta: {"title":"1 Two Sum"} }],
  ["/problems/136.Single-Number.html", { loader: () => import(/* webpackChunkName: "problems_136.Single-Number.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/problems/136.Single-Number.html.js"), meta: {"title":"136 Single Number"} }],
  ["/problems/268.Missing-Number.html", { loader: () => import(/* webpackChunkName: "problems_268.Missing-Number.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/problems/268.Missing-Number.html.js"), meta: {"title":"268 Missing Number"} }],
  ["/problems/485.Max-Consecutive-Ones.html", { loader: () => import(/* webpackChunkName: "problems_485.Max-Consecutive-Ones.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/problems/485.Max-Consecutive-Ones.html.js"), meta: {"title":"485 Max Consecutive Ones"} }],
  ["/problems/560.Subarray-Sum-Equals-K.html", { loader: () => import(/* webpackChunkName: "problems_560.Subarray-Sum-Equals-K.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/problems/560.Subarray-Sum-Equals-K.html.js"), meta: {"title":"560 Subarray Sum Equals K"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
