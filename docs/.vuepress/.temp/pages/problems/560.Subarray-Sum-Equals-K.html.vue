<template><div><h1 id="_560-subarray-sum-equals-k" tabindex="-1"><a class="header-anchor" href="#_560-subarray-sum-equals-k"><span>560 Subarray Sum Equals K</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.com/problems/subarray-sum-equals-k" target="_blank" rel="noopener noreferrer">Problem: 560 Subarray Sum Equals k</a></p>
<p>The problem requires finding the total number of continuous subarrays whose sum equals a given integer <code v-pre>k</code>.</p>
<p>For example:</p>
<ul>
<li><strong>Input:</strong> nums = [1, 1, 1], k = 2</li>
<li><strong>Output:</strong> 2</li>
</ul>
<p>In this case, the subarrays [1, 1] and [1, 1] both sum to 2, so the output is 2.</p>
<p>Constraints:</p>
<ul>
<li>The length of the array <code v-pre>nums</code> is between 1 and 2 * 10^4.</li>
<li>The integer elements of <code v-pre>nums</code> are between -1000 and 1000.</li>
<li>The integer <code v-pre>k</code> is between -10^7 and 10^7.</li>
</ul>
<h2 id="mistake" tabindex="-1"><a class="header-anchor" href="#mistake"><span>Mistake</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">subarraySum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    left <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    curr_sum <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    cnt <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> right <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        curr_sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">if</span> curr_sum <span class="token operator">==</span> k<span class="token punctuation">:</span></span>
<span class="line">            cnt <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">elif</span> curr_sum <span class="token operator">></span> k<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">while</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">:</span></span>
<span class="line">                curr_sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span></span>
<span class="line">                left <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">                <span class="token keyword">if</span> curr_sum <span class="token operator">==</span> k<span class="token punctuation">:</span></span>
<span class="line">                    cnt <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> cnt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><ul>
<li>Since we are looking for subarray sums, I should not sort the <code v-pre>nums</code> in the first place.</li>
<li>Be careful, the elements can be negative, so the sliding window approach does not apply here.</li>
</ul>
<h2 id="brute-force" tabindex="-1"><a class="header-anchor" href="#brute-force"><span>Brute Force</span></a></h2>
<p>Calculate every possible subarray and check whether they are equal to <code v-pre>k</code>.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">subarraySum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    cnt <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        curr_sum <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            curr_sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> curr_sum <span class="token operator">==</span> k<span class="token punctuation">:</span></span>
<span class="line">                cnt <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> cnt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Time Complexity:</p>
<ul>
<li>Time Complexity: O(n^2)</li>
<li>Space Complexity: O(1)</li>
</ul>
<h2 id="optimal-solution-1" tabindex="-1"><a class="header-anchor" href="#optimal-solution-1"><span>Optimal Solution 1:</span></a></h2>
<p>Let's define <code v-pre>dic[i] = sum(nums[0] + nums[1] + ... + nums[i])</code>.</p>
<p>So that the subarray sum from <code v-pre>i + 1</code> to <code v-pre>j</code> can be calculated as <code v-pre>dic[j] - dic[i]</code>.</p>
<p>If <code v-pre>dic[j] - dic[i] == k</code>, then it means this subarray sum is equal to <code v-pre>k</code>.</p>
<p>We rearrange to <code v-pre>dic[j] - k</code>.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">subarraySum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    cnt <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    dic <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span></span>
<span class="line">    dic<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    curr_sum <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> n <span class="token keyword">in</span> nums<span class="token punctuation">:</span></span>
<span class="line">        curr_sum <span class="token operator">+=</span> n</span>
<span class="line">        <span class="token comment"># if curr_sum - k does not exist, then it will return 0 by default in python</span></span>
<span class="line">        cnt <span class="token operator">+=</span> dic<span class="token punctuation">[</span>curr_sum <span class="token operator">-</span> k<span class="token punctuation">]</span></span>
<span class="line">        dic<span class="token punctuation">[</span>curr_sum<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> cnt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Time Complexity:</p>
<ul>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
</div></template>


