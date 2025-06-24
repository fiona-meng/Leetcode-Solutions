<template><div><h1 id="_118-pascal-s-triangle" tabindex="-1"><a class="header-anchor" href="#_118-pascal-s-triangle"><span>118 Pascal's Triangle</span></a></h1>
<p>Given an integer numRows, return the first numRows of Pascal's triangle.</p>
<p>In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:</p>
<p>Example 1:</p>
<p>Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:</p>
<p>Input: numRows = 1
Output: [[1]]</p>
<p>Constraints:</p>
<p>1 &lt;= numRows &lt;= 30</p>
<p>Aproach: Sliding Window</p>
<p><code v-pre>[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]</code></p>
<p>In Pascal's Triangle, the first two rows are always <code v-pre>[1]</code> and <code v-pre>[1, 1]</code>. For each subsequent row, the pattern is as follows: it starts and ends with <code v-pre>1</code>, and each interior element is the sum of the two elements directly above it from the previous row.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">generate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> numRows<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> numRows <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        res<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> numRows <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">:</span></span>
<span class="line">        res<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> numRows <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>numRows <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                temp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> res<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            temp<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">            res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>temp<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Time Complexity:</p>
<ul>
<li>Time Complexity: O(n^2)</li>
<li>Space Complexity: O(n^2)</li>
</ul>
</div></template>


