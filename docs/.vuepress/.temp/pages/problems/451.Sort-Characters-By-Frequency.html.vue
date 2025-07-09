<template><div><h1 id="_451-sort-characters-by-frequency" tabindex="-1"><a class="header-anchor" href="#_451-sort-characters-by-frequency"><span>451 Sort Characters By Frequency</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p>Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.</p>
<p>Return the sorted string. If there are multiple answers, return any of them.</p>
<p>Example 1:</p>
<p>Input: s = &quot;tree&quot;
Output: &quot;eert&quot;
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore &quot;eetr&quot; is also a valid answer.
Example 2:</p>
<p>Input: s = &quot;cccaaa&quot;
Output: &quot;aaaccc&quot;
Explanation: Both 'c' and 'a' appear three times, so both &quot;cccaaa&quot; and &quot;aaaccc&quot; are valid answers.
Note that &quot;cacaca&quot; is incorrect, as the same characters must be together.
Example 3:</p>
<p>Input: s = &quot;Aabb&quot;
Output: &quot;bbAa&quot;
Explanation: &quot;bbaA&quot; is also a valid answer, but &quot;Aabb&quot; is incorrect.
Note that 'A' and 'a' are treated as two different characters.</p>
<p>Constraints:</p>
<p>1 &lt;= s.length &lt;= 5 * 105
s consists of uppercase and lowercase English letters and digits.</p>
<h2 id="approach-heap" tabindex="-1"><a class="header-anchor" href="#approach-heap"><span>Approach: Heap</span></a></h2>
<p>We can use a max heap to store character frequencies, ensuring that the character with the highest frequency is always at the top of the heap.</p>
<p>In Python, the heapq module provides a min heap by default. To simulate a max heap, we will store the negative frequencies.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">frequencySort</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">  freq <span class="token operator">=</span> Counter<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">  max_heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">for</span> key<span class="token punctuation">,</span> val <span class="token keyword">in</span> freq<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>max_heap<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span>val<span class="token punctuation">,</span> key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  res <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">  <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>max_heap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">      val<span class="token punctuation">,</span> key <span class="token operator">=</span> heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>max_heap<span class="token punctuation">)</span></span>
<span class="line">      res <span class="token operator">+=</span> <span class="token operator">-</span>val <span class="token operator">*</span> key</span>
<span class="line">  <span class="token keyword">return</span> res</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="complexity-analysis" tabindex="-1"><a class="header-anchor" href="#complexity-analysis"><span>Complexity Analysis</span></a></h3>
<ul>
<li>Time Complexity: <code v-pre>O(k log k)</code>, where <code v-pre>n</code> is the length of the string <code v-pre>s</code> and <code v-pre>k</code> is the number of unique characters in <code v-pre>s</code>.</li>
<li>Space Complexity: <code v-pre>O(n)</code>, as we store the frequency of each character and the heap can contain up to <code v-pre>k</code> elements, where <code v-pre>k</code> is the number of unique characters in <code v-pre>s</code>.</li>
</ul>
</div></template>


