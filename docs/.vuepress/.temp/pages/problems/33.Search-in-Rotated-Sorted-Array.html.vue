<template><div><h1 id="_33-search-in-rotated-sorted-array" tabindex="-1"><a class="header-anchor" href="#_33-search-in-rotated-sorted-array"><span>33 Search in Rotated Sorted Array</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>There is an integer array nums sorted in ascending order (with distinct values).</p>
<p>Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 &lt;= k &lt; nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].</p>
<p>Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.</p>
<p>You must write an algorithm with O(log n) runtime complexity.</p>
<p>Example 1:</p>
<p>Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:</p>
<p>Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:</p>
<p>Input: nums = [1], target = 0
Output: -1</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 5000
-104 &lt;= nums[i] &lt;= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 &lt;= target &lt;= 104</p>
<h1 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h1>
<p>The approach is similar to Binary Search, but with an additional step to determine which side of the array is sorted.</p>
<ol>
<li>
<p>First, check if the left side of the array is sorted by comparing <code v-pre>nums[left]</code> and <code v-pre>nums[mid]</code>.</p>
</li>
<li>
<p>If the left side is sorted, determine if the target is within this sorted portion by checking if <code v-pre>nums[left] &lt;= target &lt; nums[mid]</code>.</p>
<ul>
<li>
<p>If the target is within this range, adjust the <code v-pre>right</code> pointer to <code v-pre>mid - 1</code> to search in the left sorted part.</p>
</li>
<li>
<p>If the target is not within this range, adjust the <code v-pre>left</code> pointer to <code v-pre>mid + 1</code> to search in the right unsorted part.</p>
</li>
</ul>
</li>
<li>
<p>Same for the right side</p>
</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> mid</span>
<span class="line">        <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># left is sorted</span></span>
<span class="line">            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target <span class="token operator">>=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(logn)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


