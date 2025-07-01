<template><div><h1 id="_1011-capacity-to-ship-packages-within-d-days" tabindex="-1"><a class="header-anchor" href="#_1011-capacity-to-ship-packages-within-d-days"><span>1011 Capacity To Ship Packages Within D Days</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>A conveyor belt has packages that must be shipped from one port to another within days days.</p>
<p>The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.</p>
<p>Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.</p>
<p>Example 1:</p>
<p>Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10</p>
<p>Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
Example 2:</p>
<p>Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:</p>
<p>Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1</p>
<p>Constraints:</p>
<p>1 &lt;= days &lt;= weights.length &lt;= 5 * 104
1 &lt;= weights[i] &lt;= 500</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>In the brute force approach, we try every possible ship capacity from the maximum weight in the weights array to the sum of all weights. For each capacity, we simulate the shipping process to check if all packages can be shipped within the given number of days. This involves iterating through the weights and counting the number of days required for each capacity. The smallest capacity that allows shipping within the given days is the answer. This approach is inefficient due to its high time complexity.</p>
<h2 id="approach-optimal-solution" tabindex="-1"><a class="header-anchor" href="#approach-optimal-solution"><span>Approach: Optimal Solution</span></a></h2>
<p>The optimal solution uses a binary search approach to efficiently find the minimum ship capacity. We set our initial search range with <code v-pre>left</code> as the maximum weight in the weights array and <code v-pre>right</code> as the sum of all weights. We then calculate the middle value <code v-pre>mid</code> of this range, which represents a potential ship capacity. We simulate the shipping process by iterating through the weights and counting the number of days required for this capacity. If the number of days is less than or equal to the given days, it means we might be able to find a smaller feasible capacity, so we adjust our search range by setting <code v-pre>right</code> to <code v-pre>mid - 1</code>. If the number of days is greater, it means the capacity is too small, so we adjust by setting <code v-pre>left</code> to <code v-pre>mid + 1</code>. This approach significantly reduces the time complexity, making it suitable for large inputs.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">shipWithinDays</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> weights<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> days<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>weights<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>weights<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        curr_day <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> w <span class="token keyword">in</span> weights<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> curr <span class="token operator">+</span> w <span class="token operator">></span> mid<span class="token punctuation">:</span></span>
<span class="line">                curr_day <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">                curr <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            curr <span class="token operator">+=</span> w</span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> curr_day <span class="token operator">&lt;=</span> days<span class="token punctuation">:</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">            res <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> mid<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


