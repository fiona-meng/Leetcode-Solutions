<template><div><h1 id="_162-find-peak-element" tabindex="-1"><a class="header-anchor" href="#_162-find-peak-element"><span>162 Find Peak Element</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>A peak element is an element that is strictly greater than its neighbors.</p>
<p>Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.</p>
<p>You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.</p>
<p>You must write an algorithm that runs in O(log n) time.</p>
<p>Example 1:</p>
<p>Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:</p>
<p>Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 1000
-231 &lt;= nums[i] &lt;= 231 - 1
nums[i] != nums[i + 1] for all valid i.</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>Iterate over the array to find a element such as <code v-pre>nums[i - 1] &lt; nums[i] and nums[i + 1] &gt; nums[i]</code>.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary search</span></a></h2>
<p>Case 1:</p>
<p>If nums[mid] &gt; nums[mid + 1], then a peak must be on the left (could be mid itself).</p>
<p>So we move right to mid (not mid - 1, because mid might still be the peak).</p>
<p>Case 2:</p>
<p>If nums[mid] &lt; nums[mid + 1], we are in an ascending slope, so a peak must be right of mid.</p>
<p>So we move left to mid + 1.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">findPeakElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            right <span class="token operator">=</span> mid</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> left</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(logn)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


