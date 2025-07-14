<template><div><h1 id="_240-search-a-2d-matrix-ii" tabindex="-1"><a class="header-anchor" href="#_240-search-a-2d-matrix-ii"><span>240 Search a 2D Matrix II</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:</p>
<p>Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.</p>
<p>Example 1:</p>
<p>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:</p>
<p>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false</p>
<p>Constraints:</p>
<p>m == matrix.length
n == matrix[i].length
1 &lt;= n, m &lt;= 300
-109 &lt;= matrix[i][j] &lt;= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 &lt;= target &lt;= 109</p>
<h2 id="approach-binary-search" tabindex="-1"><a class="header-anchor" href="#approach-binary-search"><span>Approach: Binary Search</span></a></h2>
<p>Consider <code v-pre>m</code> as the number of rows in the matrix and <code v-pre>n</code> as the number of columns.</p>
<p>To efficiently search for the target value, begin at the top-right corner of the matrix. Initialize <code v-pre>row</code> to <code v-pre>0</code> and <code v-pre>col</code> to <code v-pre>n - 1</code>, which corresponds to the first row and the last column.</p>
<p>Why start at the top-right corner? This position allows us to leverage the sorted properties of the matrix. From here, we can easily decide whether to move left or down based on the comparison between the current element and the target. If the current element is greater than the target, move left to decrease the value. If it is less, move down to increase the value. This strategy ensures that each step brings us closer to the target while maintaining the constraints of the matrix's sorted order.
...</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">searchMatrix</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">    m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    row<span class="token punctuation">,</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> row <span class="token operator">&lt;</span> m <span class="token keyword">and</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">True</span></span>
<span class="line">        <span class="token keyword">elif</span> matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">:</span></span>
<span class="line">            col <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            row <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h2>
<ul>
<li>Time Complexity: <code v-pre>O(n + m)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


