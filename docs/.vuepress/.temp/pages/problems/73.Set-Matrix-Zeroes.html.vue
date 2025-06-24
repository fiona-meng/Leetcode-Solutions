<template><div><h1 id="_73-set-matrix-zeroes" tabindex="-1"><a class="header-anchor" href="#_73-set-matrix-zeroes"><span>73 Set Matrix Zeroes</span></a></h1>
<p><a href="https://leetcode.com/problems/set-matrix-zeroes" target="_blank" rel="noopener noreferrer">Problem 73: Set Matrix Zeroes</a></p>
<p>Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.</p>
<p>You must do it in place.</p>
<p>Example 1:</p>
<p>Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:</p>
<p>Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]</p>
<p>Constraints:</p>
<p>m == matrix.length
n == matrix[0].length
1 &lt;= m, n &lt;= 200
-231 &lt;= matrix[i][j] &lt;= 231 - 1</p>
<p>Follow up:</p>
<p>A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?</p>
<h2 id="approach-1-using-constant-space" tabindex="-1"><a class="header-anchor" href="#approach-1-using-constant-space"><span>Approach 1: Using Constant Space</span></a></h2>
<p>Step 1: Traverse the matrix to identify all rows and columns that contain at least one zero. Store the indices of these rows and columns in two separate sets, <code v-pre>row</code> and <code v-pre>col</code>.</p>
<p>Step 2: Iterate over the matrix again, setting the entire row and column to zero for each index found in the <code v-pre>row</code> and <code v-pre>col</code> sets.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">setZeroes</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> matrix<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    Do not return anything, modify matrix in-place instead.</span>
<span class="line">    """</span></span>
<span class="line">    col <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    row <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    n<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            curr <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> curr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">                row<span class="token punctuation">.</span>add<span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">                col<span class="token punctuation">.</span>add<span class="token punctuation">(</span>j<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> e <span class="token keyword">in</span> row<span class="token punctuation">:</span></span>
<span class="line">        matrix<span class="token punctuation">[</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> m</span>
<span class="line">    <span class="token keyword">for</span> e <span class="token keyword">in</span> col<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(nm)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


