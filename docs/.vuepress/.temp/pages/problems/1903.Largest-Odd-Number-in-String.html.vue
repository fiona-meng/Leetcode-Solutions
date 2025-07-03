<template><div><h1 id="_1903-largest-odd-number-in-string" tabindex="-1"><a class="header-anchor" href="#_1903-largest-odd-number-in-string"><span>1903 Largest Odd Number in String</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string &quot;&quot; if no odd integer exists.</p>
<p>A substring is a contiguous sequence of characters within a string.</p>
<p>Example 1:</p>
<p>Input: num = &quot;52&quot;
Output: &quot;5&quot;
Explanation: The only non-empty substrings are &quot;5&quot;, &quot;2&quot;, and &quot;52&quot;. &quot;5&quot; is the only odd number.
Example 2:</p>
<p>Input: num = &quot;4206&quot;
Output: &quot;&quot;
Explanation: There are no odd numbers in &quot;4206&quot;.
Example 3:</p>
<p>Input: num = &quot;35427&quot;
Output: &quot;35427&quot;
Explanation: &quot;35427&quot; is already an odd number.</p>
<p>Constraints:</p>
<p>1 &lt;= num.length &lt;= 105
num only consists of digits and does not contain any leading zeros.</p>
<h2 id="approach-1-brute-force" tabindex="-1"><a class="header-anchor" href="#approach-1-brute-force"><span>Approach 1: Brute Force</span></a></h2>
<p>In this approach, we generate all possible non-empty substrings of the given string <code v-pre>num</code> and check each one to determine if it represents an odd integer. We then compare these odd integers to find the one with the largest value. This method is exhaustive and checks every possible combination to ensure the largest odd integer is found.</p>
<h2 id="approach-2-optimal-solution" tabindex="-1"><a class="header-anchor" href="#approach-2-optimal-solution"><span>Approach 2: Optimal Solution</span></a></h2>
<p>To find the largest odd integer, we should consider that a number with more digits is generally larger. Therefore, we start checking from the end of the string and move backwards. For each digit, we check if it is odd. As soon as we find an odd digit, we return the substring from the start of the string up to and including this digit, as it represents the largest odd integer possible.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">largestOddNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token keyword">return</span> num<span class="token punctuation">[</span><span class="token punctuation">:</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">""</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(n)</code></li>
<li>Space Complexity: <code v-pre>O(1)</code></li>
</ul>
</div></template>


