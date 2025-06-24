<template><div><h1 id="_152-maximym-product-subarray" tabindex="-1"><a class="header-anchor" href="#_152-maximym-product-subarray"><span>152 Maximym Product Subarray</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array nums, find a subarray that has the largest product, and return the product.</p>
<p>The test cases are generated so that the answer will fit in a 32-bit integer.</p>
<p>Example 1:</p>
<p>Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:</p>
<p>Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 2 * 104
-10 &lt;= nums[i] &lt;= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>Simplipy use two for loop to iterate all the possible combinations</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxProduct</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'-inf'</span><span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        curr <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">*=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n^2)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
<h2 id="approach-2-kadane-s-algorithm" tabindex="-1"><a class="header-anchor" href="#approach-2-kadane-s-algorithm"><span>Approach 2: kadane's algorithm</span></a></h2>
<h3 id="how-it-works-find-maximum-subarray" tabindex="-1"><a class="header-anchor" href="#how-it-works-find-maximum-subarray"><span>How it works (Find Maximum Subarray)</span></a></h3>
<p>Initialization:</p>
<p>max_so_far: Stores the maximum sum found so far (initialized to the smallest possible integer value).</p>
<p>current_max: Stores the maximum sum ending at the current position.</p>
<p>Iteration:
For each element in the array:
Add the current element to current_max.
If current_max is greater than max_so_far, update max_so_far.
If current_max becomes negative, reset it to 0, as a negative sum will only decrease the potential maximum sum.</p>
<p>Result:
max_so_far will hold the maximum sum of any contiguous subarray</p>
<p>To find Maximum Product Subarray, its similar to the Maximum subarray, but need to traverse twice, one from left to right and
from right to left.</p>
<p>Why traverse twice?</p>
<p>For example: <code v-pre>[-2, 2, 3]</code>
If we traverse from left to right, then the maximum will always be negative.
However, if we traverse from right to left, then the maximum will be <code v-pre>6</code>.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxProduct</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'-inf'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'-inf'</span><span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    curr <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        curr <span class="token operator">*=</span> n</span>
<span class="line">        left <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    curr <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        curr <span class="token operator">*=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        right <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


