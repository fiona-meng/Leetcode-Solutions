<template><div><h1 id="_493-reverse-pairs" tabindex="-1"><a class="header-anchor" href="#_493-reverse-pairs"><span>493 Reverse Pairs</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array nums, return the number of reverse pairs in the array.</p>
<p>A reverse pair is a pair (i, j) where:</p>
<p>0 &lt;= i &lt; j &lt; nums.length and
nums[i] &gt; 2 * nums[j].</p>
<p>Example 1:</p>
<p>Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --&gt; nums[1] = 3, nums[4] = 1, 3 &gt; 2 _ 1
(3, 4) --&gt; nums[3] = 3, nums[4] = 1, 3 &gt; 2 _ 1
Example 2:</p>
<p>Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --&gt; nums[1] = 4, nums[4] = 1, 4 &gt; 2 _ 1
(2, 4) --&gt; nums[2] = 3, nums[4] = 1, 3 &gt; 2 _ 1
(3, 4) --&gt; nums[3] = 5, nums[4] = 1, 5 &gt; 2 * 1</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 5 * 104
-231 &lt;= nums[i] &lt;= 231 - 1</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>Loop through every pair</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            count <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="approach-merge-sort" tabindex="-1"><a class="header-anchor" href="#approach-merge-sort"><span>Approach: Merge Sort</span></a></h2>
<p>Merge sort divides the array into halves, sorts them, and merges.</p>
<p>We enhance the merge step:</p>
<p>Before merging two halves (say left and right), we want to count how many elements l from left have a corresponding r in right where l &gt; 2*r.</p>
<p>Since both halves are sorted:</p>
<p>For a given l, all right[j] values before a certain point will satisfy l &gt; 2 * right[j].</p>
<p>Once 2 * right[j] becomes too large, we can stop scanning — because the rest are too big.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">reversePairs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token function">mergesort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">return</span> nums</span>
<span class="line">      mid <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">      left <span class="token operator">=</span> mergesort<span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      right <span class="token operator">=</span> mergesort<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      j <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">      <span class="token keyword">for</span> n <span class="token keyword">in</span> left<span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">while</span> j <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token keyword">and</span> n <span class="token operator">></span> <span class="token number">2</span> <span class="token operator">*</span> right<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              j <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">          self<span class="token punctuation">.</span>cnt <span class="token operator">+=</span> j</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">return</span> merge<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span></span>
<span class="line">      <span class="token keyword">while</span> a <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token keyword">and</span> b <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">if</span> left<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">              res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>left<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">              a <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">          <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">              res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>right<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">              b <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      res<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>left<span class="token punctuation">[</span>a<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      res<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>right<span class="token punctuation">[</span>b<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> res</span>
<span class="line">  self<span class="token punctuation">.</span>cnt <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  mergesort<span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> self<span class="token punctuation">.</span>cnt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(nlogn) because of merge sort</li>
<li>Space Complexity: O(n) becuase we copy the array</li>
</ul>
</div></template>


