<template><div><h1 id="_410-split-array-largest-sum" tabindex="-1"><a class="header-anchor" href="#_410-split-array-largest-sum"><span>410 Split Array Largest Sum</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.</p>
<p>Return the minimized largest sum of the split.</p>
<p>A subarray is a contiguous part of the array.</p>
<p>Example 1:</p>
<p>Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
Example 2:</p>
<p>Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 1000
0 &lt;= nums[i] &lt;= 106
1 &lt;= k &lt;= min(50, nums.length)</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>In the brute force approach, we try every possible way to split the array into k subarrays. For each possible split, we calculate the largest sum among the subarrays and keep track of the minimum of these largest sums. This approach is computationally expensive due to the large number of possible splits, making it impractical for large arrays.</p>
<h2 id="approach-2-optimal-solution" tabindex="-1"><a class="header-anchor" href="#approach-2-optimal-solution"><span>Approach 2: Optimal Solution</span></a></h2>
<p>The optimal solution uses a binary search approach to efficiently find the minimized largest sum. We set our initial search range with <code v-pre>left</code> as the maximum number in the array and <code v-pre>right</code> as the sum of all numbers in the array. We then calculate the middle value <code v-pre>mid</code> of this range, which represents a potential largest sum. We simulate the splitting process by iterating through the array and counting the number of subarrays needed for this largest sum. If the number of subarrays is less than or equal to k, it means we might be able to find a smaller feasible largest sum, so we adjust our search range by setting <code v-pre>right</code> to <code v-pre>mid - 1</code>. If the number of subarrays is greater, it means the largest sum is too small, so we adjust by setting <code v-pre>left</code> to <code v-pre>mid + 1</code>. This approach significantly reduces the time complexity, making it suitable for larger inputs.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">splitArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        curr_k <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        curr_sum <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">            curr_sum <span class="token operator">+=</span> n</span>
<span class="line">            <span class="token keyword">if</span> curr_sum <span class="token operator">></span> mid<span class="token punctuation">:</span></span>
<span class="line">                curr_k <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">                curr_sum <span class="token operator">=</span> n</span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> curr_k <span class="token operator">&lt;=</span> k<span class="token punctuation">:</span></span>
<span class="line">            res <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> mid<span class="token punctuation">)</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


