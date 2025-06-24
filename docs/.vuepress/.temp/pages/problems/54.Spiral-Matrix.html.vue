<template><div><h1 id="_54-spiral-matrix" tabindex="-1"><a class="header-anchor" href="#_54-spiral-matrix"><span>54 Spiral Matrix</span></a></h1>
<p><a href="https://leetcode.com/problems/spiral-matrix" target="_blank" rel="noopener noreferrer">Problem 54: Spiral Matrix</a></p>
<p>Given an m x n matrix, return all elements of the matrix in spiral order.</p>
<p>Example 1:</p>
<p>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:</p>
<p>Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]</p>
<p>Constraints:</p>
<p>m == matrix.length
n == matrix[i].length
1 &lt;= m, n &lt;= 10
-100 &lt;= matrix[i][j] &lt;= 100</p>
<h1 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach</span></a></h1>
<p>To traverse the matrix in spiral order, follow these steps:</p>
<ol>
<li>Traverse the top row from left to right.</li>
<li>Traverse the right column from top to bottom.</li>
<li>Traverse the bottom row from right to left.</li>
<li>Traverse the left column from bottom to top.</li>
</ol>
<p>Initialization: Define four variables <code v-pre>top</code>, <code v-pre>bottom</code>, <code v-pre>left</code>, and <code v-pre>right</code> to represent the current boundaries of the matrix. Initially, set <code v-pre>top</code> to 0, <code v-pre>bottom</code> to the last row index, <code v-pre>left</code> to 0, and <code v-pre>right</code> to the last column index.</p>
<p>After completing each traversal of a row or column, update the corresponding boundary variable (<code v-pre>top</code>, <code v-pre>bottom</code>, <code v-pre>left</code>, or <code v-pre>right</code>) to narrow the matrix's boundaries for the next loop iteration.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    n<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    top<span class="token punctuation">,</span> bottom <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> m <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">while</span> top <span class="token operator">&lt;=</span> bottom <span class="token keyword">and</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        top <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> bottom <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        right <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">if</span> top <span class="token operator">&lt;=</span> bottom<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            bottom <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">if</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>bottom<span class="token punctuation">,</span> top <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            left <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(nm)</code></li>
<li>Space Complexity: <code v-pre>O(nm)</code></li>
</ul>
</div></template>


