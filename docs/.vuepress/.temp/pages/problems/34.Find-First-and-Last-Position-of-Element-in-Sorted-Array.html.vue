<template><div><h1 id="_34-find-first-and-last-position-of-element-in-sorted-array" tabindex="-1"><a class="header-anchor" href="#_34-find-first-and-last-position-of-element-in-sorted-array"><span>34 Find First and Last Position of Element in Sorted Array</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.</p>
<p>If target is not found in the array, return [-1, -1].</p>
<p>You must write an algorithm with O(log n) runtime complexity.</p>
<p>Example 1:</p>
<p>Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:</p>
<p>Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:</p>
<p>Input: nums = [], target = 0
Output: [-1,-1]</p>
<p>Constraints:</p>
<p>0 &lt;= nums.length &lt;= 105
-109 &lt;= nums[i] &lt;= 109
nums is a non-decreasing array.
-109 &lt;= target &lt;= 109</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<h2 id="approach-brute-force-1" tabindex="-1"><a class="header-anchor" href="#approach-brute-force-1"><span>Approach: Brute Force</span></a></h2>
<p>Iterate through the array to find the first and last occurrence of the target value. Record the index of the first appearance and continue until the last appearance is found. This approach has a time complexity of <code v-pre>O(n)</code>.</p>
<h2 id="approach-optimal-solution-using-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-optimal-solution-using-binary-search"><span>Approach: Optimal Solution Using Binary Search</span></a></h2>
<p>Perform a binary search to locate the target value. Once found, expand outwards from the found index to determine the first and last positions of the target element in the array.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">searchRange</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">  left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">      mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">          l<span class="token punctuation">,</span> r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">while</span> l <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token keyword">if</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">!=</span> target<span class="token punctuation">:</span></span>
<span class="line">                  <span class="token keyword">break</span></span>
<span class="line">              l <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">while</span> r <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token keyword">if</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">!=</span> target<span class="token punctuation">:</span></span>
<span class="line">                  <span class="token keyword">break</span></span>
<span class="line">              r <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">[</span>l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">:</span></span>
<span class="line">          right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(logn)</li>
<li>Space Complexity: O(1)</li>
</ul>
</div></template>


