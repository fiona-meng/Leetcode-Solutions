<template><div><h1 id="_35-search-insert-position" tabindex="-1"><a class="header-anchor" href="#_35-search-insert-position"><span>35 Search Insert Position</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>
<p>You must write an algorithm with O(log n) runtime complexity.</p>
<p>Example 1:</p>
<p>Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:</p>
<p>Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:</p>
<p>Input: nums = [1,3,5,6], target = 7
Output: 4</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 104
-104 &lt;= nums[i] &lt;= 104
nums contains distinct values sorted in ascending order.
-104 &lt;= target &lt;= 104</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>This problem is similar to the binary search problem. However, instead of returning <code v-pre>-1</code> when the target value is not found in the array, we return the index where the target would be inserted to maintain the sorted order. In our implementation, this index is represented by the <code v-pre>left</code> pointer at the end of the search process.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">searchInsert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">        left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">            mid <span class="token operator">=</span> left <span class="token operator">+</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">return</span> mid</span>
<span class="line">            <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">:</span></span>
<span class="line">                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">return</span> left</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


