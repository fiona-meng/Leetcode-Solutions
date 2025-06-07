<template><div><h1 id="_1-two-sum" tabindex="-1"><a class="header-anchor" href="#_1-two-sum"><span>1 Two Sum</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.cn/problems/two-sum" target="_blank" rel="noopener noreferrer">Problem: 1 Two Sum</a></p>
<p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
<p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
<p>You can return the answer in any order.</p>
<p>For example:</p>
<p>Input: nums = [2,7,11,15], target = 9</p>
<p>Output: [0,1]</p>
<p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
<h2 id="brute-force" tabindex="-1"><a class="header-anchor" href="#brute-force"><span>Brute Force</span></a></h2>
<p>Loop through each element x and find if there is another value y that equals to <code v-pre>target - x</code></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        first <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            second <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> first <span class="token operator">+</span> second <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n^2)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
<h2 id="optimal-solution-1" tabindex="-1"><a class="header-anchor" href="#optimal-solution-1"><span>Optimal Solution 1</span></a></h2>
<h3 id="intuition" tabindex="-1"><a class="header-anchor" href="#intuition"><span>Intuition</span></a></h3>
<p>To improve above runtime complexity, we need a more efficient way to check if the <code v-pre>y = target - x</code> exists in the nums. What is the best way to look for value? A Hash Table</p>
<p>By using the Hash Table, we can reduce runtime complexity from <code v-pre>o(n)</code> to <code v-pre>o(1)</code> by trading space for speed. Collision could happen, but overall lookup time should be amortized <code v-pre>o(1)</code>.</p>
<p>Question: Can we use dictionary instead of Hash Table ?</p>
<p>No. Dictionary forms as <code v-pre>key:value</code>. What if we have duplicate value? How will you store the index?</p>
<h3 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm"><span>Algorithm</span></a></h3>
<p>We can do two loop.</p>
<p>First iteration: for each element we will store its value as key and its index as value.
i.e. [1, 1, 2] <code v-pre>hash_table = {1 : [0, 1], 2 : [2]}</code></p>
<p>Second iteration: we will check whether <code v-pre>target - nums[i]</code> exists in the <code v-pre>hash_table </code>. If it exists, then we should return both index. Beware that the complement should not be itself.</p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    index_map <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        index_map<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        complement <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">if</span> complement <span class="token keyword">in</span> index_map<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">for</span> j <span class="token keyword">in</span> index_map<span class="token punctuation">[</span>complement<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">if</span> i <span class="token operator">!=</span> j<span class="token punctuation">:</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>
<p>Time Complexity:
Traverse the list containing <code v-pre>n</code> elements twice. Since the hash table lookup time is <code v-pre>o(1)</code>, the overall time complexity is <code v-pre>o(n)</code></p>
</li>
<li>
<p>Space Complexity:
Since we store n elements in the hash table, the space complexity is <code v-pre>o(n)</code></p>
</li>
</ul>
<h2 id="optimal-solution-2" tabindex="-1"><a class="header-anchor" href="#optimal-solution-2"><span>Optimal Solution 2:</span></a></h2>
<p>It turns out that we can do it in one iteration. While iterating and inserting element to dictionary, we can also check whether complement already exists in the dictionary. If so, return both index</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        complement <span class="token operator">=</span> target <span class="token operator">-</span> n</span>
<span class="line">        <span class="token keyword">if</span> complement <span class="token keyword">in</span> dic<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> dic<span class="token punctuation">[</span>complement<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">elif</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> dic<span class="token punctuation">:</span></span>
<span class="line">            dic<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> i</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis-1" tabindex="-1"><a class="header-anchor" href="#complexity-analysis-1"><span>Complexity Analysis:</span></a></h3>
<ul>
<li>
<p>Time Complexity:
We traverse the list only once and lookup takes <code v-pre>o(1)</code>, so the overall runtime complexity is <code v-pre>O(n)</code></p>
</li>
<li>
<p>Space Complecity:
We require extra space to store element value and its index. There are n elements in the list, so that the space complexity is <code v-pre>o(n)</code>.</p>
</li>
</ul>
</div></template>


