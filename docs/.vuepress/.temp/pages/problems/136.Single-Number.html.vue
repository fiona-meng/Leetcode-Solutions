<template><div><h1 id="_136-single-number" tabindex="-1"><a class="header-anchor" href="#_136-single-number"><span>136 Single Number</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.com/problems/single-number" target="_blank" rel="noopener noreferrer">Problem: 136 Single Number</a></p>
<p>The problem requires finding the single number in an array where every element appears twice, except for one. The task is to identify that single number.</p>
<p>For example:</p>
<ul>
<li><strong>Input:</strong> nums = [2, 2, 1]</li>
<li><strong>Output:</strong> 1</li>
</ul>
<p>In this case, the number 1 is the only number that appears once, while the number 2 appears twice.</p>
<p>The problem requires linear and constant space.</p>
<h2 id="brute-force" tabindex="-1"><a class="header-anchor" href="#brute-force"><span>Brute Force</span></a></h2>
<p>We can first sort the <code v-pre>nums</code> array and then compare adjacent elements.</p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    i <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              i <span class="token operator">+=</span> <span class="token number">2</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">return</span> nums<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(nlogn) because of sort</li>
<li>Space Complexity: O(1)</li>
</ul>
<h2 id="optimal-solution" tabindex="-1"><a class="header-anchor" href="#optimal-solution"><span>Optimal Solution</span></a></h2>
<p>The above solution requires <code v-pre>nlogn</code> running time.
If we use a hash to count how many times each element appears, it will also require <code v-pre>n</code> space.</p>
<p>How can we solve this problem in linear time and constant space?</p>
<p>Answer: XOR operator</p>
<ul>
<li>Fact 1: a ^ 0 = a</li>
<li>Fact 2: a ^ a = 0</li>
</ul>
<p>If we XOR all the elements, the result will be the unique element.</p>
<h3 id="code-1" tabindex="-1"><a class="header-anchor" href="#code-1"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        result <span class="token operator">^</span><span class="token operator">=</span> n</span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


