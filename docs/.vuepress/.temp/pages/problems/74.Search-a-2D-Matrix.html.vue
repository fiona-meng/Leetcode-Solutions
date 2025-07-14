<template><div><h1 id="_74-search-a-2d-matrix" tabindex="-1"><a class="header-anchor" href="#_74-search-a-2d-matrix"><span>74 Search a 2D Matrix</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>You are given an m x n integer matrix matrix with the following two properties:</p>
<p>Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.</p>
<p>You must write a solution in O(log(m * n)) time complexity.</p>
<p>Example 1:</p>
<p>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:</p>
<p>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false</p>
<p>Constraints:</p>
<p>m == matrix.length
n == matrix[i].length
1 &lt;= m, n &lt;= 100
-104 &lt;= matrix[i][j], target &lt;= 104</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>Consider <code v-pre>m</code> as the number of rows in the matrix and <code v-pre>n</code> as the number of columns.</p>
<p>The matrix can be viewed as a single sorted list with <code v-pre>m * n</code> elements.</p>
<p>To perform binary search, initialize <code v-pre>left</code> to <code v-pre>0</code> and <code v-pre>right</code> to <code v-pre>m * n - 1</code>.</p>
<p>To find the middle element, calculate its position in the matrix using:</p>
<ul>
<li><code v-pre>mid_row = mid // n</code> to determine the row index.</li>
<li><code v-pre>mid_column = mid % n</code> to determine the column index.</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">searchMatrix</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">    m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> m <span class="token operator">*</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">        row <span class="token operator">=</span> mid <span class="token operator">//</span> n</span>
<span class="line">        column <span class="token operator">=</span> mid <span class="token operator">%</span> n</span>
<span class="line">        <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">True</span></span>
<span class="line">        <span class="token keyword">elif</span> matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">:</span></span>
<span class="line">            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(log(n * m))</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


