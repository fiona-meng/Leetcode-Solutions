<template><div><h1 id="_169-majority-element" tabindex="-1"><a class="header-anchor" href="#_169-majority-element"><span>169 Majority Element</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an array nums of size n, return the majority element.</p>
<p>The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.</p>
<p>Example 1:</p>
<p>Input: nums = [3,2,3]
Output: 3
Example 2:</p>
<p>Input: nums = [2,2,1,1,1,2,2]
Output: 2</p>
<p>Constraints:</p>
<p>n == nums.length
1 &lt;= n &lt;= 5 * 104
-109 &lt;= nums[i] &lt;= 109</p>
<p>Follow-up: Could you solve the problem in linear time and in O(1) space?</p>
<h2 id="approach-1-sorting" tabindex="-1"><a class="header-anchor" href="#approach-1-sorting"><span>Approach 1: Sorting</span></a></h2>
<h3 id="intution" tabindex="-1"><a class="header-anchor" href="#intution"><span>Intution</span></a></h3>
<p>Since the majority element will appear more than <code v-pre>⌊n / 2⌋</code> times, it will always occupy the middle position when the array is sorted. Therefore, we can sort the array and return the element at index n/2.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> nums<span class="token punctuation">[</span>n <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complecity-analysis" tabindex="-1"><a class="header-anchor" href="#complecity-analysis"><span>Complecity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(nlogn)</code> since sorting requires <code v-pre>nlogn</code></li>
<li>Space Complecity: <code v-pre>O(1)</code></li>
</ul>
<h2 id="approch-2-hashing" tabindex="-1"><a class="header-anchor" href="#approch-2-hashing"><span>Approch 2: Hashing</span></a></h2>
<h3 id="intution-1" tabindex="-1"><a class="header-anchor" href="#intution-1"><span>Intution</span></a></h3>
<p>We can simply count appearance for each elements. If the element appear more than <code v-pre>⌊n / 2⌋</code> times, then it will be majority element.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> dic<span class="token punctuation">:</span></span>
<span class="line">            dic<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        dic<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span></span>
<span class="line">    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> dic<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> value <span class="token operator">></span> n<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> key</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<p>-Time Complexity: <code v-pre>O(n)</code>
-Space Complexity: <code v-pre>O(n)</code></p>
<h2 id="approach-moore-voting-algorithm" tabindex="-1"><a class="header-anchor" href="#approach-moore-voting-algorithm"><span>Approach: Moore Voting Algorithm</span></a></h2>
<h3 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it works:</span></a></h3>
<ul>
<li>
<p>Initalization: initalize two varibles: candidate and count
candidate can be arbitary number and count set to <code v-pre>0</code></p>
</li>
<li>
<p>Iteration:
If <code v-pre>count == 0</code>, set current number as candidate and increment count by 1</p>
</li>
</ul>
<p>If <code v-pre>current element == candidate</code>, then increment count by 1</p>
<p>If <code v-pre>current element != candidate</code>, then decrement count by 1</p>
<ul>
<li>Result:
Return the candidate as result. The candidate is the majority element.</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">    <span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">        count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        candidate <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">'inf'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">                candidate <span class="token operator">=</span> n</span>
<span class="line">            <span class="token keyword">if</span> n <span class="token operator">==</span> candidate<span class="token punctuation">:</span></span>
<span class="line">                count <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">elif</span> n <span class="token operator">!=</span> candidate<span class="token punctuation">:</span></span>
<span class="line">                count <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">return</span> candidate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


