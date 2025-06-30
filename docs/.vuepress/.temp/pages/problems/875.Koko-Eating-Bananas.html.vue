<template><div><h1 id="_875-koko-eating-bananas" tabindex="-1"><a class="header-anchor" href="#_875-koko-eating-bananas"><span>875 Koko Eating Bananas</span></a></h1>
<p>Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.</p>
<p>Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.</p>
<p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p>
<p>Return the minimum integer k such that she can eat all the bananas within h hours.</p>
<p>Example 1:</p>
<p>Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:</p>
<p>Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:</p>
<p>Input: piles = [30,11,23,4,20], h = 6
Output: 23</p>
<p>Constraints:</p>
<p>1 &lt;= piles.length &lt;= 104
piles.length &lt;= h &lt;= 109
1 &lt;= piles[i] &lt;= 109</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>In the brute force approach, we start with an eating speed <code v-pre>k</code> of 1 and incrementally increase it. For each value of <code v-pre>k</code>, we check if Koko can finish eating all the bananas within <code v-pre>h</code> hours. We continue this process until we find the smallest <code v-pre>k</code> that allows Koko to finish on time.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>In the binary search approach, we set our initial search range with <code v-pre>left</code> as 1 and <code v-pre>right</code> as the maximum number of bananas in any pile. We then calculate the middle value <code v-pre>mid</code> of this range, which represents a potential eating speed. We check if Koko can finish all the bananas at this speed within <code v-pre>h</code> hours. If she can, it means we might be able to find a smaller feasible speed, so we adjust our search range by setting <code v-pre>right</code> to <code v-pre>mid - 1</code>. If she cannot, it means the speed is too slow, so we adjust by setting <code v-pre>left</code> to <code v-pre>mid + 1</code>. We continue this process until we find the minimum speed <code v-pre>k</code> that allows Koko to finish eating all the bananas within the given time.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">minEatingSpeed</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> piles<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> h<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">(</span>piles<span class="token punctuation">)</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> p <span class="token keyword">in</span> piles<span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">+=</span> math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span>p <span class="token operator">/</span> mid<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr <span class="token operator">&lt;=</span> h<span class="token punctuation">:</span></span>
<span class="line">            result <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> mid<span class="token punctuation">)</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code> since maximum number of bananas in any pile</li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


