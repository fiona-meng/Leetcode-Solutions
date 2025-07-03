<template><div><h1 id="_14-longest-common-prefix" tabindex="-1"><a class="header-anchor" href="#_14-longest-common-prefix"><span>14 Longest Common Prefix</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Write a function to find the longest common prefix string amongst an array of strings.</p>
<p>If there is no common prefix, return an empty string &quot;&quot;.</p>
<p>Example 1:</p>
<p>Input: strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
Output: &quot;fl&quot;
Example 2:</p>
<p>Input: strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
Output: &quot;&quot;
Explanation: There is no common prefix among the input strings.</p>
<p>Constraints:</p>
<p>1 &lt;= strs.length &lt;= 200
0 &lt;= strs[i].length &lt;= 200
strs[i] consists of only lowercase English letters if it is non-empty.</p>
<p>Approach:</p>
<p>To find the longest common prefix among an array of strings, begin by identifying the shortest string in the list, as the longest possible prefix cannot exceed its length.</p>
<p>Starting with the first character of this shortest string, compare it with the corresponding character in all other strings.</p>
<p>If all strings share this character at the same position, proceed to the next character.</p>
<p>Continue this process until a mismatch is found or the end of the shortest string is reached.</p>
<p>The common characters up to this point form the longest common prefix. If no common prefix exists, return an empty string.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> strs<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">  length <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">for</span> s <span class="token keyword">in</span> strs<span class="token punctuation">:</span></span>
<span class="line">      length<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  min_val <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span></span>
<span class="line">  min_index <span class="token operator">=</span> length<span class="token punctuation">.</span>index<span class="token punctuation">(</span>min_val<span class="token punctuation">)</span></span>
<span class="line">  min_element <span class="token operator">=</span> strs<span class="token punctuation">[</span>min_index<span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>min_element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      char <span class="token operator">=</span> min_element<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">if</span> strs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> char<span class="token punctuation">:</span></span>
<span class="line">              <span class="token keyword">return</span> min_element<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">return</span> min_element</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


