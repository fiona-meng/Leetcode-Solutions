<template><div><h1 id="_1614-maximum-nesting-depth-of-the-parentheses" tabindex="-1"><a class="header-anchor" href="#_1614-maximum-nesting-depth-of-the-parentheses"><span>1614 Maximum Nesting Depth of the Parentheses</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.</p>
<p>Example 1:</p>
<p>Input: s = &quot;(1+(2*3)+((8)/4))+1&quot;</p>
<p>Output: 3</p>
<p>Explanation:</p>
<p>Digit 8 is inside of 3 nested parentheses in the string.</p>
<p>Example 2:</p>
<p>Input: s = &quot;(1)+((2))+(((3)))&quot;</p>
<p>Output: 3</p>
<p>Explanation:</p>
<p>Digit 3 is inside of 3 nested parentheses in the string.</p>
<p>Example 3:</p>
<p>Input: s = &quot;()(())((()()))&quot;</p>
<p>Output: 3</p>
<p>Constraints:</p>
<p>1 &lt;= s.length &lt;= 100
s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
It is guaranteed that parentheses expression s is a VPS.</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach:</span></a></h2>
<p>When we encounter a <code v-pre>(</code>, we increase a counter by 1 to represent an increase in nesting depth. Conversely, when we encounter a <code v-pre>)</code>, we decrease the counter by 1, indicating the end of a nesting level. Throughout the iteration, we continuously update and keep track of the maximum value of this counter, which represents the maximum nesting depth of the parentheses.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">  s <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">  k <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token string">'('</span><span class="token punctuation">:</span></span>
<span class="line">          k <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token keyword">elif</span> i <span class="token operator">==</span> <span class="token string">')'</span><span class="token punctuation">:</span></span>
<span class="line">          k <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">      result <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> k<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Complexity:</p>
<ul>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
</div></template>


