import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'LeetCode Solutions',
  description: 'My LeetCode Record',
  base: '/Leetcode-Solutions/',
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
          '/problems/75.Sort-Colors.md',
          '/problems/169.Majority-Element.md',
          '/problems/53.Maximum-Subarray.md',
          '/problems/121.Best-Time-to-Buy-and-Sell-Stock.md',
          '/problems/2149.Rearrange-Array-Elements-by-Sign.md',
          '/problems/31.Next-Permutation.md',
          '/problems/73.Set-Matrix-Zeroes.md',
          '/problems/48.Rotate-Image.md',
          '/problems/118.Pascal-Triangle.md',
          '/problems/229.Majority-Element-II.md'
        ],
      },
    ],
  }),
  bundler: viteBundler(),
})
