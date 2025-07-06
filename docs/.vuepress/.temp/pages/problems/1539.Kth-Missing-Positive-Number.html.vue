<template><div><h1 id="_1539-kth-missing-positive-number" tabindex="-1"><a class="header-anchor" href="#_1539-kth-missing-positive-number"><span>1539 Kth Missing Positive Number</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.</p>
<p>Return the kth positive integer that is missing from this array.</p>
<p>Example 1:</p>
<p>Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:</p>
<p>Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.</p>
<p>Constraints:</p>
<p>1 &lt;= arr.length &lt;= 1000
1 &lt;= arr[i] &lt;= 1000
1 &lt;= k &lt;= 1000
arr[i] &lt; arr[j] for 1 &lt;= i &lt; j &lt;= arr.length</p>
<h1 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h1>
<p>The binary search approach is used here to efficiently find the kth missing positive number. The idea is to use the properties of the sorted array to determine how many numbers are missing up to a certain point.</p>
<ol>
<li>Initialize two pointers, <code v-pre>left</code> and <code v-pre>right</code>, to the start and end of the array, respectively.</li>
<li>Perform a binary search:
<ul>
<li>Calculate the middle index <code v-pre>mid</code>.</li>
<li>Determine the number of missing numbers up to <code v-pre>arr[mid]</code> using the formula <code v-pre>miss = arr[mid] - mid - 1</code>.</li>
<li>If <code v-pre>miss</code> is greater than or equal to <code v-pre>k</code>, it means the kth missing number is to the left of <code v-pre>mid</code>, so adjust the <code v-pre>right</code> pointer.</li>
<li>Otherwise, adjust the <code v-pre>left</code> pointer to search in the right half.</li>
</ul>
</li>
<li>Once the search is complete, the <code v-pre>left</code> pointer will be positioned at the index where the kth missing number should be. The result is calculated as <code v-pre>left + k</code>, which accounts for the missing numbers before the <code v-pre>left</code> index.</li>
</ol>
<p>This approach efficiently narrows down the search space, making it faster than a linear search, especially for larger arrays.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">findKthPositive</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arr<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">      mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">      miss <span class="token operator">=</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">-</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">if</span> miss <span class="token operator">>=</span> k<span class="token punctuation">:</span></span>
<span class="line">          right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">return</span> left <span class="token operator">+</span> k</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(logn)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


