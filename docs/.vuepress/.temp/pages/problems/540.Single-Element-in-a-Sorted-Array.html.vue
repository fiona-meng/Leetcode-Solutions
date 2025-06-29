<template><div><h1 id="_540-single-element-in-a-sorted-array" tabindex="-1"><a class="header-anchor" href="#_540-single-element-in-a-sorted-array"><span>540 Single Element in a Sorted Array</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.</p>
<p>Return the single element that appears only once.</p>
<p>Your solution must run in O(log n) time and O(1) space.</p>
<p>Example 1:</p>
<p>Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:</p>
<p>Input: nums = [3,3,7,7,10,11,11]
Output: 10</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 105
0 &lt;= nums[i] &lt;= 105</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>In this approach, we iterate through the sorted array and for each element, we compare it with its neighboring elements (the one before and the one after) to determine if it is the unique element. This method requires <code v-pre>O(n)</code> runtime because it involves examining each element in the array sequentially.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>We can use a binary search to efficiently find the unique element in the array. The array can be divided into three parts: <code v-pre>[left part], [middle element], [right part]</code>.</p>
<p>Given that every element appears exactly twice except for one, the total length of the array is <code v-pre>2n + 1</code>, where <code v-pre>n</code> is the number of pairs.</p>
<p>The left and right parts of the array will have the same length, <code v-pre>n</code>.</p>
<ul>
<li>
<p>If <code v-pre>n</code> is odd:</p>
<ul>
<li>If the middle element is the same as the element before it, the unique element must be in the right part.</li>
<li>Otherwise, the unique element is in the left part.</li>
</ul>
</li>
<li>
<p>If <code v-pre>n</code> is even:</p>
<ul>
<li>If the middle element is the same as the element before it, the unique element must be in the left part.</li>
<li>Otherwise, it is in the right part.</li>
</ul>
</li>
</ul>
<p>If the middle element is different from both its preceding and succeeding elements, then the middle element itself is the unique element.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">singleNonDuplicate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        odd <span class="token operator">=</span> mid <span class="token operator">%</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">elif</span> odd <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                right <span class="token operator">=</span> mid</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                right <span class="token operator">=</span> mid</span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(logn)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


