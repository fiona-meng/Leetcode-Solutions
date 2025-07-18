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
          '/problems/540.Single-Element-in-a-Sorted-Array.md',
          '/problems/162.Find-Peak-Element.md',
          '/problems/875.Koko-Eating-Bananas.md',
          '/problems/14.Longest-Common-Prefix.md',
          '/problems/1903.Largest-Odd-Number-in-String.md',
          '/problems/151.Reverse-Words-in-a-String.md',
          '/problems/410.Split-Array-Largest-Sum.md',
          '/problems/205.Isomorphic-Strings.md',
          '/problems/242.Valid-Anagram.md',
          '/problems/796.Rotate-String.md',
          '/problems/1539.Kth-Missing-Positive-Number.md',
          '/problems/451.Sort-Characters-By-Frequency.md',
          '/problems/4.Median-of-Two-Sorted-Arrays.md',
          '/problems/1614.Maximum-Nesting-Depth-of-the-Parentheses.md',
          '/problems/74.Search-a-2D-Matrix.md',
        ],
      },
      {
        text: 'SQL Notebooks',
        collapsible: true,
        children: [
          '/sql/sql_notebook.md',
        ],
      },
    ],
  }),
  bundler: viteBundler(),
})
