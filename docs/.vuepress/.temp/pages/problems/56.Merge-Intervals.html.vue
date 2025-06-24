<template><div><h1 id="_56-merge-intervals" tabindex="-1"><a class="header-anchor" href="#_56-merge-intervals"><span>56 Merge Intervals</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>
<p>Example 1:</p>
<p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:</p>
<p>Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.</p>
<p>Constraints:</p>
<p>1 &lt;= intervals.length &lt;= 104
intervals[i].length == 2
0 &lt;= starti &lt;= endi &lt;= 104</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach:</span></a></h2>
<p>Initialize two pointers, <code v-pre>left</code> and <code v-pre>right</code>, to keep track of the current interval's boundaries.
Initially, set them to <code v-pre>None</code>. As you iterate through the sorted intervals, update these pointers:</p>
<ul>
<li>If <code v-pre>left</code> and <code v-pre>right</code> are <code v-pre>None</code>, assign them the values of the current interval's start and end.</li>
<li>If the current interval's start is less than or equal to the <code v-pre>right</code> boundary, it indicates an overlap. In this case, extend the <code v-pre>right</code> boundary to the maximum of the current <code v-pre>right</code> and the current interval's end.</li>
<li>If there is no overlap, append the current interval <code v-pre>[left, right]</code> to the result list, and update <code v-pre>left</code> and <code v-pre>right</code> to the current interval's start and end.</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">merge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> intervals<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    intervals<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> intervals<span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">        curr_left<span class="token punctuation">,</span> curr_right <span class="token operator">=</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">if</span> left <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> curr_left</span>
<span class="line">            right <span class="token operator">=</span> curr_right</span>
<span class="line">        <span class="token keyword">elif</span> right <span class="token operator">>=</span> curr_left<span class="token punctuation">:</span></span>
<span class="line">            right <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> curr_right<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            left<span class="token punctuation">,</span> right <span class="token operator">=</span> curr_left<span class="token punctuation">,</span> curr_right</span>
<span class="line">    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


