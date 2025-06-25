<template><div><h1 id="_704-binary-search" tabindex="-1"><a class="header-anchor" href="#_704-binary-search"><span>704 Binary Search</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.</p>
<p>You must write an algorithm with O(log n) runtime complexity.</p>
<p>Example 1:</p>
<p>Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:</p>
<p>Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 104
-104 &lt; nums[i], target &lt; 104
All the integers in nums are unique.
nums is sorted in ascending order.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> mid</span>
<span class="line">        <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">:</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


