<template><div><p>#88 Merge Sorted Array</p>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.</p>
<p>Merge nums1 and nums2 into a single array sorted in non-decreasing order.</p>
<p>The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.</p>
<p>Example 1:</p>
<p>Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:</p>
<p>Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:</p>
<p>Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.</p>
<p>Constraints:</p>
<p>nums1.length == m + n
nums2.length == n
0 &lt;= m, n &lt;= 200
1 &lt;= m + n &lt;= 200
-109 &lt;= nums1[i], nums2[j] &lt;= 109</p>
<p>Follow up: Can you come up with an algorithm that runs in O(m + n) time?</p>
<p>Approach:</p>
<p>Initialize two pointers, <code v-pre>p1</code> and <code v-pre>p2</code>, at positions <code v-pre>m-1</code> and <code v-pre>n-1</code> respectively. These pointers will track the current elements being compared in <code v-pre>nums1</code> and <code v-pre>nums2</code>. Additionally, use a pointer <code v-pre>p</code> starting at <code v-pre>m + n - 1</code> to place elements into the correct position in <code v-pre>nums1</code>.</p>
<p>While both <code v-pre>p1</code> and <code v-pre>p2</code> are greater than or equal to zero, compare the elements at these positions. Place the larger element at position <code v-pre>p</code> in <code v-pre>nums1</code>, then decrement the respective pointer (<code v-pre>p1</code> or <code v-pre>p2</code>) and <code v-pre>p</code>.</p>
<p>If <code v-pre>nums1</code> is exhausted (<code v-pre>p1</code> &lt; 0), copy the remaining elements from <code v-pre>nums2</code> into <code v-pre>nums1</code>. If <code v-pre>nums2</code> is exhausted (<code v-pre>p2</code> &lt; 0), the remaining elements in <code v-pre>nums1</code> are already in place.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">merge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums1<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> nums2<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token triple-quoted-string string">"""</span>
<span class="line">  Do not return anything, modify nums1 in-place instead.</span>
<span class="line">  """</span></span>
<span class="line">  p1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  p <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">while</span> p <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> p1 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token keyword">and</span> p2 <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">></span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              nums1<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span></span>
<span class="line">              p <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">              p1 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">              nums1<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span></span>
<span class="line">              p <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">              p2 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">elif</span> p1 <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">          nums1<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span></span>
<span class="line">          p <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">          p2 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          nums1<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span></span>
<span class="line">          p <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">          p1 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n + m)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


