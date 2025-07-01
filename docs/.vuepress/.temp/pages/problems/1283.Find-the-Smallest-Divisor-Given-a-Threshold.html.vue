<template><div><h1 id="_1283-find-the-smallest-divisor-given-a-threshold" tabindex="-1"><a class="header-anchor" href="#_1283-find-the-smallest-divisor-given-a-threshold"><span>1283 Find the Smallest Divisor Given a Threshold</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.</p>
<p>Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).</p>
<p>The test cases are generated so that there will be an answer.</p>
<p>Example 1:</p>
<p>Input: nums = [1,2,5,9], threshold = 6
Output: 5
Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).
Example 2:</p>
<p>Input: nums = [44,22,33,11,1], threshold = 5
Output: 44</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 5 * 104
1 &lt;= nums[i] &lt;= 106
nums.length &lt;= threshold &lt;= 106</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>In the brute force approach, we start with a divisor of 1 and incrementally increase it. For each divisor, we divide each element in the array by the divisor, round up the result, and sum these values. We continue this process until we find the smallest divisor that results in a sum less than or equal to the threshold. This approach is inefficient for large inputs due to its high time complexity.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>In the binary search approach, we set our initial search range with <code v-pre>left</code> as 1 and <code v-pre>right</code> as the maximum value in the nums array. We then calculate the middle value <code v-pre>mid</code> of this range, which represents a potential divisor. We divide each element in the array by <code v-pre>mid</code>, round up the result, and sum these values. If the sum is less than or equal to the threshold, it means we might be able to find a smaller feasible divisor, so we adjust our search range by setting <code v-pre>right</code> to <code v-pre>mid - 1</code>. If the sum is greater than the threshold, it means the divisor is too small, so we adjust by setting <code v-pre>left</code> to <code v-pre>mid + 1</code>. This approach significantly reduces the time complexity, making it suitable for large inputs.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">smallestDivisor</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> threshold<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span><span class="token number">2</span></span>
<span class="line">        curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">+=</span> math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span>n <span class="token operator">/</span> mid<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr <span class="token operator">&lt;=</span> threshold<span class="token punctuation">:</span></span>
<span class="line">            res <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> mid<span class="token punctuation">)</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(n log(max(nums)))</code> due to the binary search over the range of possible divisors and the linear scan to compute the sum for each divisor.</li>
<li>Space Complexity: <code v-pre>O(1)</code> as we are using a constant amount of extra space.</li>
</ul>
</div></template>


