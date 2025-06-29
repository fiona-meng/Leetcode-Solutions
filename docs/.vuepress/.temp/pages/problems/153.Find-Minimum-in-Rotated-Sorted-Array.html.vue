<template><div><h1 id="_153-find-minimum-in-rotated-sorted-array" tabindex="-1"><a class="header-anchor" href="#_153-find-minimum-in-rotated-sorted-array"><span>153 Find Minimum in Rotated Sorted Array</span></a></h1>
<h1 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h1>
<p>Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:</p>
<p>[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].</p>
<p>Given the sorted rotated array nums of unique elements, return the minimum element of this array.</p>
<p>You must write an algorithm that runs in O(log n) time.</p>
<p>Example 1:</p>
<p>Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:</p>
<p>Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:</p>
<p>Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.</p>
<p>Constraints:</p>
<p>n == nums.length
1 &lt;= n &lt;= 5000
-5000 &lt;= nums[i] &lt;= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.</p>
<h2 id="approach-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-brute-force"><span>Approach: Brute Force</span></a></h2>
<p>Initialize a variable to store the minimum value found in the array.</p>
<p>Iterate through each element in the array, updating this variable whenever a smaller element is encountered.</p>
<p>This approach has a time complexity of <code v-pre>O(n)</code> because it requires examining each element in the array once.</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>To find the minimum element in a rotated sorted array, we can use a binary search approach.</p>
<ol>
<li>
<p>If the entire array is sorted (i.e., the leftmost element is less than or equal to the rightmost element), then the leftmost element is the minimum.</p>
</li>
<li>
<p>If the array is not entirely sorted, we need to identify the unsorted portion, as it contains the minimum element.</p>
</li>
<li>
<p>If the left portion of the array (from the leftmost element to the middle element) is sorted, then the minimum element must be in the right portion. Therefore, we adjust our search to the right by setting the left boundary to <code v-pre>mid + 1</code>.</p>
</li>
<li>
<p>If the left portion is not sorted, then the minimum element is in the left portion, and we adjust our search to the left by setting the right boundary to <code v-pre>mid</code>.</p>
</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">findMin</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">      mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">      <span class="token keyword">if</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">elif</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># left is sorted</span></span>
<span class="line">          left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">          right <span class="token operator">=</span> mid</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(logn)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


