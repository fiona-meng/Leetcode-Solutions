<template><div><h1 id="_53-maximum-subarray" tabindex="-1"><a class="header-anchor" href="#_53-maximum-subarray"><span>53 Maximum Subarray</span></a></h1>
<p><a href="https://leetcode.com/problems/maximum-subarray" target="_blank" rel="noopener noreferrer">Problem: 53 Maximum Subarray</a></p>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array nums, find the subarray with the largest sum, and return its sum.</p>
<p>Example 1:</p>
<p>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:</p>
<p>Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:</p>
<p>Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 105
-104 &lt;= nums[i] &lt;= 104</p>
<p>Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<h3 id="intuition" tabindex="-1"><a class="header-anchor" href="#intuition"><span>Intuition</span></a></h3>
<p>Iterate twice to find every possible subarray and record current maximum subarray</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'-inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">+=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n^2)</code></li>
<li>Spcae Complexity: <code v-pre>O(1)</code></li>
</ul>
<h2 id="approach-2-kadane-s-algorithm" tabindex="-1"><a class="header-anchor" href="#approach-2-kadane-s-algorithm"><span>Approach 2: Kadane's Algorithm</span></a></h2>
<h3 id="intuition-1" tabindex="-1"><a class="header-anchor" href="#intuition-1"><span>Intuition</span></a></h3>
<p>The idea is to iterate through the array while maintaining a running sum of the current subarray. If the running sum becomes negative, it is reset to zero, as any negative sum would decrease the sum of a future subarray. The maximum sum encountered during the iteration is the result.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'-inf'</span><span class="token punctuation">)</span></span>
<span class="line">    curr_max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        curr_max <span class="token operator">+=</span> n</span>
<span class="line">        result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr_max<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr_max <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            curr_max <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


