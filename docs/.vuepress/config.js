import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'LeetCode Solutions',
  description: 'My LeetCode Record',
  theme: defaultTheme({
    sidebar: [
      {
        text: 'LeetCode Solutions',
        collapsible: true,
        children: [
          '/problems/268.Missing-Number.md',
          '/problems/485.Max-Consecutive-Ones.md',
          '/problems/136.Single-Number.md',
          '/problems/560.Subarray-Sum-Equals-K.md',
          '/problems/1.Two-Sum.md',
        ],
      },
    ],
  }),
  bundler: viteBundler(),
})
