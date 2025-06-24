<template><div><h1 id="_31-next-permutation" tabindex="-1"><a class="header-anchor" href="#_31-next-permutation"><span>31 Next Permutation</span></a></h1>
<p><a href="https://leetcode.com/problems/next-permutation" target="_blank" rel="noopener noreferrer">Problem 31: Next Permutation</a></p>
<p>A permutation of an array of integers is an arrangement of its members into a sequence or linear order.</p>
<p>For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).</p>
<p>For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.</p>
<p>The replacement must be in place and use only constant extra memory.</p>
<p>Example 1:</p>
<p>Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:</p>
<p>Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:</p>
<p>Input: nums = [1,1,5]
Output: [1,5,1]</p>
<p>Constraints:</p>
<p>1 &lt;= nums.length &lt;= 100
0 &lt;= nums[i] &lt;= 100</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>List all the permutations in sorted order and find the next permutation.</p>
<h2 id="approach-2-optimal-solution" tabindex="-1"><a class="header-anchor" href="#approach-2-optimal-solution"><span>Approach 2: Optimal Solution</span></a></h2>
<p>To determine the next permutation, consider the following scenarios:</p>
<ul>
<li>
<p>If the array is sorted in ascending order: Swap the last two elements to get the next permutation.
Example: [1, 2, 3] becomes [1, 3, 2].</p>
</li>
<li>
<p>If the array is sorted in descending order: Reverse the entire array to get the smallest permutation.
Example: [3, 2, 1] becomes [1, 2, 3].</p>
</li>
<li>
<p>If the array has a mix of increasing and decreasing order:</p>
</li>
</ul>
<ol>
<li>Identify the first element from the end that is smaller than its next element.</li>
<li>Find the smallest element larger than this identified element and swap them.</li>
<li>Reverse the sequence after the original position of the identified element to get the next permutation.
Example: [1, 3, 2] becomes [2, 1, 3].
Here, 1 is the first element smaller than its next, and 2 is the smallest larger element. Swap them to get [2, 3, 1], then reverse the part after 2 to get [2, 1, 3], and finally [3, 1, 2].</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">nextPermutation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    Do not return anything, modify nums in-place instead.</span>
<span class="line">    """</span></span>
<span class="line">    increasing <span class="token operator">=</span> <span class="token boolean">None</span></span>
<span class="line">    decreasing <span class="token operator">=</span> <span class="token boolean">None</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            decreasing <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">            <span class="token keyword">if</span> increasing <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">                <span class="token keyword">return</span></span>
<span class="line">            <span class="token keyword">if</span> increasing<span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                    <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                        nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">                        res <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span></span>
<span class="line">                        res<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                        nums<span class="token punctuation">[</span>i<span class="token punctuation">:</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> res</span>
<span class="line">                        <span class="token keyword">return</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            increasing <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line">    nums<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


