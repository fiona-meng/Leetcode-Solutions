<template><div><h1 id="_15-3sum" tabindex="-1"><a class="header-anchor" href="#_15-3sum"><span>15 3Sum</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.</p>
<p>Notice that the solution set must not contain duplicate triplets.</p>
<p>Example 1:</p>
<p>Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:</p>
<p>Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:</p>
<p>Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.</p>
<p>Constraints:</p>
<p>3 &lt;= nums.length &lt;= 3000
-105 &lt;= nums[i] &lt;= 105</p>
<p>Approach:</p>
<p>In this problem, we need to find three numbers in the array whose sum is zero, similar to the two-sum problem. The task is to identify triplets (n1, n2, n3) such that <code v-pre>n1 + n2 + n3 = 0</code>. We can rearrange this equation to <code v-pre>n1 = -n2 - n3</code>, which allows us to treat <code v-pre>n1</code> as a target value. Our goal is to find two numbers, <code v-pre>n2</code> and <code v-pre>n3</code>, that sum up to <code v-pre>-n1</code>.</p>
<p>To ensure that we do not include duplicate triplets in our solution, we can utilize a set to store the results. This will automatically handle duplicates by only keeping unique triplets.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line">        target <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        seen <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            complement <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> complement <span class="token keyword">in</span> seen<span class="token punctuation">:</span></span>
<span class="line">                res<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> complement<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            seen<span class="token punctuation">.</span>add<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> res<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n^2)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


