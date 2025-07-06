<template><div><h1 id="rotate-string" tabindex="-1"><a class="header-anchor" href="#rotate-string"><span>Rotate String</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.</p>
<p>A shift on s consists of moving the leftmost character of s to the rightmost position.</p>
<p>For example, if s = &quot;abcde&quot;, then it will be &quot;bcdea&quot; after one shift.</p>
<p>Example 1:</p>
<p>Input: s = &quot;abcde&quot;, goal = &quot;cdeab&quot;
Output: true
Example 2:</p>
<p>Input: s = &quot;abcde&quot;, goal = &quot;abced&quot;
Output: false</p>
<p>Constraints:</p>
<p>1 &lt;= s.length, goal.length &lt;= 100
s and goal consist of lowercase English letters.</p>
<h2 id="approach" tabindex="-1"><a class="header-anchor" href="#approach"><span>Approach:</span></a></h2>
<p>Concatenate the string s with itself and check if the string goal is a substring of this new string.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">rotateString</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> goal<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>goal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">False</span></span>
<span class="line">  <span class="token keyword">return</span> goal <span class="token keyword">in</span> s <span class="token operator">+</span> s</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


