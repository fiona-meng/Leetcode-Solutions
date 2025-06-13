<template><div><h1 id="_75-sort-colors" tabindex="-1"><a class="header-anchor" href="#_75-sort-colors"><span>75 Sort Colors</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.com/problems/sort-colors" target="_blank" rel="noopener noreferrer">Problem: 75 Sort Colors</a></p>
<p>Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p>
<p>We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.</p>
<p>You must solve this problem without using the library's sort function.</p>
<h2 id="mistake" tabindex="-1"><a class="header-anchor" href="#mistake"><span>Mistake</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">sortColors</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    Do not return anything, modify nums in-place instead.</span>
<span class="line">    """</span></span>
<span class="line">    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        dic<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    i <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>dic<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>dic<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>dic<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">        i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>The follow-up requires a one-pass algorithm with constant extra space. The above solution requires two passes: one for counting the elements and another for placing them back into the array.</p>
<p>Note: above algorithm called counting sort</p>
<h2 id="optimal-solution" tabindex="-1"><a class="header-anchor" href="#optimal-solution"><span>optimal solution</span></a></h2>
<p>This problem known as Dutch national flag algorithm, involving sorting the array by partitioning it into 3 segments.</p>
<p><code v-pre>nums[0] ... nums[low - 1]</code> This part should consist of all zeros
<code v-pre>nums[low] ... nums[mid - 1]</code> This part should consist of all ones
<code v-pre>nums[mid] ... nums[high]</code> This par should consist of all twos</p>
<p>We will use mid to loop over the array</p>
<p>There are three cases:</p>
<ul>
<li>If <code v-pre>mid == 0</code>, swap it with <code v-pre>low</code>, and increase both <code v-pre>low</code> and <code v-pre>mid</code>.</li>
<li>If <code v-pre>mid == 1</code>, increase <code v-pre>mid</code> because <code v-pre>1</code> is already in the correct position.</li>
<li>If <code v-pre>mid == 2</code>, swap it with <code v-pre>high</code>, and decrease <code v-pre>high</code>. Do not increase <code v-pre>mid</code> yet since we still need to check the value just swapped.</li>
</ul>
<h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


