import comp from "/Users/fionameng/Documents/Leetcode-Solutions/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Welcome to My LeetCode Solutions\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1748954155000,\"contributors\":[{\"name\":\"fiona-meng\",\"username\":\"fiona-meng\",\"email\":\"fionameng2001@gmail.com\",\"commits\":1,\"url\":\"https://github.com/fiona-meng\"}],\"changelog\":[{\"hash\":\"243c13043ac1aebddb9ea595841c8bb6b0fe5dc2\",\"time\":1748954155000,\"email\":\"fionameng2001@gmail.com\",\"author\":\"fiona-meng\",\"message\":\"more solution\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
