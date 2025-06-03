<template><div><h1 id="_485-max-consecutive-ones" tabindex="-1"><a class="header-anchor" href="#_485-max-consecutive-ones"><span>485 Max Consecutive Ones</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.com/problems/max-consecutive-ones" target="_blank" rel="noopener noreferrer">Problem: 485 Max Consecutive Ones</a></p>
<p>Given a binary array <code v-pre>nums</code>, return the maximum number of consecutive <code v-pre>1</code>'s in the array.</p>
<p>Example 1:</p>
<p>Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.</p>
<p>Example 2:</p>
<p>Input: nums = [1,0,1,1,0,1]
Output: 2</p>
<p>Constraints:</p>
<ul>
<li><code v-pre>1 &lt;= nums.length &lt;= 105</code></li>
<li><code v-pre>nums[i]</code> is either <code v-pre>0</code> or <code v-pre>1</code></li>
</ul>
<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">findMaxConsecutiveOnes</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


