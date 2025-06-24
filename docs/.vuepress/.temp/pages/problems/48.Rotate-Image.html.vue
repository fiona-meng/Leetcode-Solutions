<template><div><h1 id="_48-rotate-image" tabindex="-1"><a class="header-anchor" href="#_48-rotate-image"><span>48 Rotate Image</span></a></h1>
<p><a href="https://leetcode.com/problems/rotate-image" target="_blank" rel="noopener noreferrer">Problem 48: Rotate Image</a></p>
<p>You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).</p>
<p>You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.</p>
<p>Example 1:</p>
<p>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:</p>
<p>Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]</p>
<p>Constraints:</p>
<p>n == matrix.length == matrix[i].length
1 &lt;= n &lt;= 20
-1000 &lt;= matrix[i][j] &lt;= 1000</p>
<h1 id="approach-1" tabindex="-1"><a class="header-anchor" href="#approach-1"><span>Approach 1</span></a></h1>
<p>Step 1: Flip the matrix upside down.</p>
<p>Step 2: Flip the matrix diagonally.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">rotate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    Do not return anything, modify matrix in-place instead.</span>
<span class="line">    """</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(nm)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


