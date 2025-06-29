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
          '/problems/118.Pascals-Triangle.md',
          '/problems/229.Majority-Element-II.md',
          '/problems/15.3Sum.md',
          '/problems/56.Merge-Intervals.md',
          '/problems/18.4Sum.md',
          '/problems/152.Maximum-Product-Subarray.md',
          '/problems/493.Reverse-Pairs.md',
          '/problems/704.Binary-Search.md',
          '/problems/35.Search-Insert-Position.md',
          '/problems/33.Search-in-Rotated-Sorted-Array.md',
          '/problems/81.Search-in-Rotated-Sorted-Array-II.md',
          '/problems/153.Find-Minimum-in-Rotated-Sorted-Array.md',
          
        ],
      },
    ],
  }),
  bundler: viteBundler(),
})
