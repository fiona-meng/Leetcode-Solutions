<template><div><h1 id="_229-majority-element-ii" tabindex="-1"><a class="header-anchor" href="#_229-majority-element-ii"><span>229 Majority Element II</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.</p>
<p>Example 1:</p>
<p>Input: nums = [3,2,3]
Output: [3]
Example 2:</p>
<p>Input: nums = [1]
Output: [1]
Example 3:</p>
<p>Input: nums = [1,2]
Output: [1,2]</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 5 * 104
-109 &lt;= nums[i] &lt;= 109</p>
<p>Follow up: Could you solve the problem in linear time and in O(1) space?</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>Use a dictionary to keep track of the frequency of each element in the array.
After populating the dictionary, iterate through it to find and collect all elements that appear more than ⌊ n/3 ⌋ times.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    count <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> count<span class="token punctuation">:</span></span>
<span class="line">            count<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        count<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> key<span class="token punctuation">,</span> c <span class="token keyword">in</span> count<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> c <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">:</span></span>
<span class="line">            res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
<h2 id="approach-2-moore-voting-algorithm" tabindex="-1"><a class="header-anchor" href="#approach-2-moore-voting-algorithm"><span>Approach 2: Moore Voting Algorithm</span></a></h2>
<p>To solve this problem, we need to identify elements that appear more than ⌊ n/3 ⌋ times in the array. Since an element must appear more than ⌊ n/3 ⌋ times to be considered, there can be at most two such elements in the array.</p>
<p>Consider a scenario where we have three distinct elements, each appearing exactly <code v-pre>n // 3</code> times. In this case, none of them would qualify as appearing more than ⌊ n/3 ⌋ times.</p>
<p>To implement this approach, we maintain two potential candidates and their respective counts. Here's how it works:</p>
<ol>
<li>Initialize two candidate variables and their counts to zero.</li>
<li>Iterate through the array:
<ul>
<li>If the current element matches one of the candidates, increment the corresponding count.</li>
<li>If the current element does not match either candidate and one of the counts is zero, set the current element as the new candidate and reset its count to one.</li>
<li>If the current element does not match either candidate and both counts are non-zero, decrement both counts.</li>
</ul>
</li>
<li>After processing the array, verify the counts of the two candidates to ensure they appear more than ⌊ n/3 ⌋ times.</li>
</ol>
<p>This method efficiently narrows down the potential majority elements and verifies their counts in a second pass through the array.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    candidate1<span class="token punctuation">,</span> candidate2 <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span></span>
<span class="line">    count1<span class="token punctuation">,</span> count2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> n <span class="token operator">==</span> candidate1<span class="token punctuation">:</span></span>
<span class="line">            count1 <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">elif</span> n <span class="token operator">==</span> candidate2<span class="token punctuation">:</span></span>
<span class="line">            count2 <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">elif</span> count1 <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            candidate1 <span class="token operator">=</span> n</span>
<span class="line">            count1 <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">elif</span> count2 <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            candidate2 <span class="token operator">=</span> n</span>
<span class="line">            count2 <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            count1 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">            count2 <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">    n1 <span class="token operator">=</span> nums<span class="token punctuation">.</span>count<span class="token punctuation">(</span>candidate1<span class="token punctuation">)</span></span>
<span class="line">    n2 <span class="token operator">=</span> nums<span class="token punctuation">.</span>count<span class="token punctuation">(</span>candidate2<span class="token punctuation">)</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> n1 <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">:</span></span>
<span class="line">        res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>candidate1<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> n2 <span class="token operator">></span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">3</span><span class="token punctuation">:</span></span>
<span class="line">        res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>candidate2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


