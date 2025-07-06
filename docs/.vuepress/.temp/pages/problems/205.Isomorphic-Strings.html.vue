<template><div><h1 id="_205-isomorphic-strings" tabindex="-1"><a class="header-anchor" href="#_205-isomorphic-strings"><span>205 Isomorphic Strings</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given two strings s and t, determine if they are isomorphic.</p>
<p>Two strings s and t are isomorphic if the characters in s can be replaced to get t.</p>
<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p>
<p>Example 1:</p>
<p>Input: s = &quot;egg&quot;, t = &quot;add&quot;</p>
<p>Output: true</p>
<p>Explanation:</p>
<p>The strings s and t can be made identical by:</p>
<p>Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:</p>
<p>Input: s = &quot;foo&quot;, t = &quot;bar&quot;</p>
<p>Output: false</p>
<p>Explanation:</p>
<p>The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.</p>
<p>Example 3:</p>
<p>Input: s = &quot;paper&quot;, t = &quot;title&quot;</p>
<p>Output: true</p>
<p>Constraints:</p>
<p>1 &lt;= s.length &lt;= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach:</span></a></h2>
<p>To determine if two strings <code v-pre>s</code> and <code v-pre>t</code> are isomorphic, we need to ensure that there is a one-to-one mapping between every character in <code v-pre>s</code> and every character in <code v-pre>t</code>. This means that each character in <code v-pre>s</code> can be replaced to get <code v-pre>t</code>, and no two characters in <code v-pre>s</code> map to the same character in <code v-pre>t</code>.</p>
<p>The provided solution uses two dictionaries, <code v-pre>a</code> and <code v-pre>b</code>, to keep track of the mapping of characters from <code v-pre>s</code> to <code v-pre>t</code> and vice versa. It also uses counters <code v-pre>a_cnt</code> and <code v-pre>b_cnt</code> to assign unique codes to each character as they are encountered.</p>
<p>For each character in <code v-pre>s</code>, if it hasn't been seen before, it is assigned a new code using <code v-pre>a_cnt</code>, and this code is appended to <code v-pre>s_code</code>. Similarly, for each character in <code v-pre>t</code>, a new code is assigned using <code v-pre>b_cnt</code> and appended to <code v-pre>t_code</code>.</p>
<p>Finally, the function checks if the generated codes <code v-pre>s_code</code> and <code v-pre>t_code</code> are identical. If they are, it means that the strings <code v-pre>s</code> and <code v-pre>t</code> are isomorphic, as the pattern of character mapping is consistent between the two strings. If not, the strings are not isomorphic.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">isIsomorphic</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> t<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">  a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  a_cnt<span class="token punctuation">,</span> b_cnt <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span></span>
<span class="line">  s_code<span class="token punctuation">,</span> t_code <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> i <span class="token keyword">not</span> <span class="token keyword">in</span> a<span class="token punctuation">:</span></span>
<span class="line">          a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a_cnt</span>
<span class="line">          a_cnt <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      s_code <span class="token operator">+=</span> <span class="token string">'0'</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> t<span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> i <span class="token keyword">not</span> <span class="token keyword">in</span> b<span class="token punctuation">:</span></span>
<span class="line">          b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b_cnt</span>
<span class="line">          b_cnt <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">      t_code <span class="token operator">+=</span> <span class="token string">'0'</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> s_code <span class="token operator">==</span> t_code</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


