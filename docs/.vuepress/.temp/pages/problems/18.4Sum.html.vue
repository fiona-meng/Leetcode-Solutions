<template><div><h1 id="_18-4sum" tabindex="-1"><a class="header-anchor" href="#_18-4sum"><span>18 4Sum</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:</p>
<p>0 &lt;= a, b, c, d &lt; n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.</p>
<p>Example 1:</p>
<p>Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:</p>
<p>Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 200
-109 &lt;= nums[i] &lt;= 109
-109 &lt;= target &lt;= 109</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach</span></a></h2>
<p>The 4Sum problem is an extension of the 3Sum problem. In the 4Sum solution, we use two nested loops to iterate over pairs of numbers. This approach helps us fix two numbers and then find the remaining two numbers that sum up to the target value minus the sum of the fixed numbers.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">    <span class="token keyword">def</span> <span class="token function">fourSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">        nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> i <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">continue</span></span>
<span class="line">            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                curr_target <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">                seen <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">for</span> a <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token keyword">if</span> curr_target <span class="token operator">-</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token keyword">in</span> seen<span class="token punctuation">:</span></span>
<span class="line">                        result<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">,</span> curr_target <span class="token operator">-</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                    seen<span class="token punctuation">.</span>add<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token keyword">for</span> res <span class="token keyword">in</span> result<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><ul>
<li>Time Complexity: <code v-pre>O(n^3)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


