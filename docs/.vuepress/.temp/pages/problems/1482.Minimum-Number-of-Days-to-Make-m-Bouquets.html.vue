<template><div><h1 id="_1482-minimum-number-of-days-to-make-m-bouquets" tabindex="-1"><a class="header-anchor" href="#_1482-minimum-number-of-days-to-make-m-bouquets"><span>1482 Minimum Number of Days to Make m Bouquets</span></a></h1>
<p>You are given an integer array bloomDay, an integer m and an integer k.</p>
<p>You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.</p>
<p>The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.</p>
<p>Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.</p>
<p>Example 1:</p>
<p>Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
Output: 3
Explanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _] // we can only make one bouquet.
After day 2: [x, _, _, _, x] // we can only make two bouquets.
After day 3: [x, _, x, _, x] // we can make 3 bouquets. The answer is 3.
Example 2:</p>
<p>Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
Output: -1
Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.
Example 3:</p>
<p>Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
Output: 12
Explanation: We need 2 bouquets each should have 3 flowers.
Here is the garden after the 7 and 12 days:
After day 7: [x, x, x, x, _, x, x]
We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
After day 12: [x, x, x, x, x, x, x]
It is obvious that we can make two bouquets in different ways.</p>
<p>Constraints:</p>
<p>bloomDay.length == n
1 &lt;= n &lt;= 105
1 &lt;= bloomDay[i] &lt;= 109
1 &lt;= m &lt;= 106
1 &lt;= k &lt;= n</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<h2 id="approach-brute-force-1" tabindex="-1"><a class="header-anchor" href="#approach-brute-force-1"><span>Approach: Brute Force</span></a></h2>
<p>In the brute force approach, we simulate each day and check if we can make the required number of bouquets. For each day, we iterate through the bloomDay array and count the number of adjacent flowers that have bloomed. If the count reaches k, we increment the bouquet count and reset the adjacent flower count. This process is repeated until we either make m bouquets or exhaust all possible days. The time complexity of this approach is O(n * max(bloomDay)), which is inefficient for large inputs.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>In the binary search approach, we set our initial search range with <code v-pre>left</code> as 1 and <code v-pre>right</code> as the maximum value in bloomDay. We then calculate the middle value <code v-pre>mid</code> of this range, which represents a potential number of days. We simulate the bouquet-making process similar to the brute force approach by counting the number of adjacent flowers that have bloomed by the mid day and checking if we can make m bouquets. If we can, it means we might be able to find a smaller feasible number of days, so we adjust our search range by setting <code v-pre>right</code> to <code v-pre>mid - 1</code>. If we cannot, it means the number of days is too few, so we adjust by setting <code v-pre>left</code> to <code v-pre>mid + 1</code>. This approach significantly reduces the time complexity to O(n log(max(bloomDay))), making it suitable for large inputs.</p>
<p>...</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">minDays</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> bloomDay<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">(</span>bloomDay<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        curr_k <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        curr_m <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> b <span class="token keyword">in</span> bloomDay<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> b <span class="token operator">&lt;=</span> mid<span class="token punctuation">:</span></span>
<span class="line">                  curr_k <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">                curr_k <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            <span class="token keyword">if</span> curr_k <span class="token operator">==</span> k<span class="token punctuation">:</span></span>
<span class="line">                curr_m <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">                curr_k <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">if</span> curr_m <span class="token operator">>=</span> m<span class="token punctuation">:</span></span>
<span class="line">            res <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> mid<span class="token punctuation">)</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">if</span> res <span class="token operator">==</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code> since max function</li>
</ul>
</div></template>


