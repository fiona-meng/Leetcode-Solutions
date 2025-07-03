<template><div><h1 id="_151-reverse-words-in-a-string" tabindex="-1"><a class="header-anchor" href="#_151-reverse-words-in-a-string"><span>151 Reverse Words in a String</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given an input string s, reverse the order of the words.</p>
<p>A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.</p>
<p>Return a string of the words in reverse order concatenated by a single space.</p>
<p>Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p>
<p>Example 1:</p>
<p>Input: s = &quot;the sky is blue&quot;
Output: &quot;blue is sky the&quot;
Example 2:</p>
<p>Input: s = &quot; hello world &quot;
Output: &quot;world hello&quot;
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:</p>
<p>Input: s = &quot;a good example&quot;
Output: &quot;example good a&quot;
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.</p>
<p>Constraints:</p>
<p>1 &lt;= s.length &lt;= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.</p>
<p>Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>Convert string into a list and then reverse the list</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">  words <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  words<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>words<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(n)</code></li>
</ul>
</div></template>


