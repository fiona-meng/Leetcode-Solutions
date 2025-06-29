<template><div><h1 id="_81-search-in-rotated-sorted-array-ii" tabindex="-1"><a class="header-anchor" href="#_81-search-in-rotated-sorted-array-ii"><span>81 Search in Rotated Sorted Array II</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).</p>
<p>Before being passed to your function, nums is rotated at an unknown pivot index k (0 &lt;= k &lt; nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].</p>
<p>Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.</p>
<p>You must decrease the overall operation steps as much as possible.</p>
<p>Example 1:</p>
<p>Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:</p>
<p>Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 5000
-104 &lt;= nums[i] &lt;= 104
nums is guaranteed to be rotated at some pivot.
-104 &lt;= target &lt;= 104</p>
<p>Follow up: This problem is an extension of the Search in Rotated Sorted Array, with the added complexity that <code v-pre>nums</code> may contain duplicate values. This presence of duplicates can affect the runtime complexity. Let's explore how and why.</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>In the brute force approach, we iterate through the entire array to check if the target value exists. This method has a time complexity of <code v-pre>O(n)</code> because we may need to examine each element in the array.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>The binary search approach is similar to the one used in the Search in Rotated Sorted Array, but with the added challenge of handling duplicates in <code v-pre>nums</code>.</p>
<p>Consider an array like <code v-pre>[1, 0, 1, 1, 1]</code>. In such cases, we cannot determine if the array is sorted by simply comparing the leftmost and middle values, as duplicates can obscure the sorted order.</p>
<p>Therefore, when <code v-pre>nums[left] == nums[mid] == nums[right]</code>, we cannot decide which half of the array is sorted. The only option is to increment the <code v-pre>left</code> pointer by 1 (<code v-pre>left + 1</code>) and decrement the <code v-pre>right</code> pointer by 1 (<code v-pre>right - 1</code>) to potentially bypass the duplicates and continue the search.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">  left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">      mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token boolean">True</span></span>
<span class="line">      <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">          left <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">          right <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># left side sorted</span></span>
<span class="line">          <span class="token keyword">if</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">              left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">              right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


