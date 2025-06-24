<template><div><h1 id="_121-best-time-to-buy-and-sell-stock" tabindex="-1"><a class="header-anchor" href="#_121-best-time-to-buy-and-sell-stock"><span>121 Best Time to Buy and Sell Stock</span></a></h1>
<p><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock" target="_blank" rel="noopener noreferrer">Problem 121: Best Time to Buy and Sell Stock</a></p>
<p>You are given an array prices where prices[i] is the price of a given stock on the ith day.</p>
<p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
<p>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.</p>
<p>Example 1:</p>
<p>Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:</p>
<p>Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.</p>
<p>Constraints:</p>
<p>1 &lt;= prices.length &lt;= 105
0 &lt;= prices[i] &lt;= 104</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<h3 id="intuition" tabindex="-1"><a class="header-anchor" href="#intuition"><span>Intuition</span></a></h3>
<p>The simplest way to solve this problem is by iterating all the possible combination and find which largest profit.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> prices<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>prices<span class="token punctuation">)</span></span>
<span class="line">  result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">          diff <span class="token operator">=</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">          result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> diff<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="approach-2-kadane-s-algorithm" tabindex="-1"><a class="header-anchor" href="#approach-2-kadane-s-algorithm"><span>Approach 2: Kadane's Algorithm</span></a></h2>
<p>To solve this problem using a variation of Kadane's Algorithm, we first define <code v-pre>diff[i]</code> as the difference between consecutive days' prices, specifically <code v-pre>diff[i] = prices[i] - prices[i - 1]</code>. We then initialize a variable <code v-pre>curr</code> to keep track of the current sum of these differences. As we iterate through the price differences, if <code v-pre>curr</code> becomes negative, we reset it to zero. This reset is crucial because a negative <code v-pre>curr</code> would decrease the potential profit from future transactions. By maintaining the maximum value of <code v-pre>curr</code>, we can determine the maximum profit possible.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> prices<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>prices<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        diff <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">        curr <span class="token operator">+=</span> diff</span>
<span class="line">        result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> curr<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> curr <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


