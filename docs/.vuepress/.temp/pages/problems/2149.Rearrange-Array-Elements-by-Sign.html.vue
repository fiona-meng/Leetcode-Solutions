<template><div><h1 id="_2149-rearrange-array-elements-by-sign" tabindex="-1"><a class="header-anchor" href="#_2149-rearrange-array-elements-by-sign"><span>2149 Rearrange Array Elements by Sign</span></a></h1>
<p><a href="https://leetcode.com/problems/rearrange-array-elements-by-sign" target="_blank" rel="noopener noreferrer">Problem 2149: Rearrange Array Elements by Sign</a></p>
<p>You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.</p>
<p>You should return the array of nums such that the the array follows the given conditions:</p>
<p>Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.</p>
<p>Example 1:</p>
<p>Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.<br>
Example 2:</p>
<p>Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].</p>
<p>Constraints:</p>
<p>2 &lt;= nums.length &lt;= 2 * 105
nums.length is even
1 &lt;= |nums[i]| &lt;= 105
nums consists of equal number of positive and negative integers.</p>
<p>It is not required to do the modifications in-place.</p>
<h2 id="approach-1" tabindex="-1"><a class="header-anchor" href="#approach-1"><span>Approach 1:</span></a></h2>
<p>Inital two array to store positive and negative element respectively. Then, merge the two arrays.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">rearrangeArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    pos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    neg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> n <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            pos<span class="token punctuation">.</span>append<span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            neg<span class="token punctuation">.</span>append<span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>pos<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>neg<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
<h2 id="approach-2-two-pointers" tabindex="-1"><a class="header-anchor" href="#approach-2-two-pointers"><span>Approach 2: Two Pointers</span></a></h2>
<p>Initialize an empty array with length <code v-pre>n</code> as the result, and use two pointers to mark positions for positive and negative elements.</p>
<p>Iterate over the array:</p>
<ul>
<li>If the element is positive, place the element at the position where the positive pointer points, and increase the positive pointer by 2.</li>
<li>If the element is negative, place the element at the position where the negative pointer points, and increase the negative pointer by 2.</li>
</ul>
<p>Return the list as the final result.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">rearrangeArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">  n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">  ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> n</span>
<span class="line">  pos<span class="token punctuation">,</span> neg <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">          ans<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> i</span>
<span class="line">          pos <span class="token operator">+=</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          ans<span class="token punctuation">[</span>neg<span class="token punctuation">]</span> <span class="token operator">=</span> i</span>
<span class="line">          neg <span class="token operator">+=</span> <span class="token number">2</span></span>
<span class="line">  <span class="token keyword">return</span> ans</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


