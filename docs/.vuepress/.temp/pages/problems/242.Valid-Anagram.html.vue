<template><div><h1 id="_242-valid-anagram" tabindex="-1"><a class="header-anchor" href="#_242-valid-anagram"><span>242. Valid Anagram</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given two strings s and t, return true if t is an anagram of s, and false otherwise.</p>
<p>Example 1:</p>
<p>Input: s = &quot;anagram&quot;, t = &quot;nagaram&quot;</p>
<p>Output: true</p>
<p>Example 2:</p>
<p>Input: s = &quot;rat&quot;, t = &quot;car&quot;</p>
<p>Output: false</p>
<p>Constraints:</p>
<p>1 &lt;= s.length, t.length &lt;= 5 * 104
s and t consist of lowercase English letters.</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach:</span></a></h2>
<p>First, check if the lengths of <code v-pre>t</code> and <code v-pre>s</code> are different. If they are, return false because they cannot be anagrams.
Next, create a dictionary to count the occurrences of each character in <code v-pre>s</code>.
Then, iterate over each character in <code v-pre>t</code>, decrementing the corresponding count in the dictionary.
If a character in <code v-pre>t</code> is not found in the dictionary or its count is zero, return false.
Finally, check if all counts in the dictionary are zero, indicating that <code v-pre>t</code> is an anagram of <code v-pre>s</code>. If so, return true.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">isAnagram</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> t<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line">    dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token keyword">not</span> <span class="token keyword">in</span> dic<span class="token punctuation">:</span></span>
<span class="line">            dic<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        dic<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> t<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token keyword">in</span> dic <span class="token keyword">and</span> dic<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            dic<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line">    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token keyword">in</span> dic<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> value <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">True</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


