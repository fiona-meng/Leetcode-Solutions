<template><div><h1 id="_268-missing-number" tabindex="-1"><a class="header-anchor" href="#_268-missing-number"><span>268 Missing Number</span></a></h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2>
<p><a href="https://leetcode.com/problems/missing-number" target="_blank" rel="noopener noreferrer">Problem: 268 Missing Number</a></p>
<p>The problem asks you to find a missing element from a given list of integers, ranging from 0 to ( n ). The list is of length ( n ) and contains ( n ) unique numbers, meaning that exactly one number from the complete range of 0 to ( n ) is missing. Your task is to determine which number is absent.</p>
<p>For example:</p>
<ul>
<li><strong>Input:</strong> nums = [3, 0, 1]</li>
<li><strong>Output:</strong> 2</li>
</ul>
<p>In this case, the numbers range from 0 to 3 (inclusive), and the number 2 is missing from the input array.</p>
<h2 id="brute-force" tabindex="-1"><a class="header-anchor" href="#brute-force"><span>Brute Force</span></a></h2>
<p>We can initialize an array to keep track of which elements have already appeared.</p>
<ol>
<li>
<p><strong>Step 1:</strong> Initialize an array and set all elements to -1 (this is safe since elements range from 0 to ( n )). The length of the array should be ( n + 1 ).</p>
<ul>
<li>Example: <code v-pre>arr = [-1, -1, -1, -1]</code></li>
</ul>
</li>
<li>
<p><strong>Step 2:</strong> Loop over the <code v-pre>nums</code>. If an element appears in <code v-pre>nums</code>, update it in the array.</p>
<ul>
<li>Example: The first element of <code v-pre>nums</code> is 3. Update <code v-pre>arr</code> to <code v-pre>[-1, -1, -1, 3]</code>.</li>
</ul>
</li>
</ol>
<p>By the end of the loop, you should get <code v-pre>arr = [0, 1, -1, 3]</code>. Since -1 appears at index 2, we know that element 2 is missing.</p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        arr<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> i</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
<h2 id="optimal-solution-1-in-place-cyclic-sort" tabindex="-1"><a class="header-anchor" href="#optimal-solution-1-in-place-cyclic-sort"><span>Optimal Solution 1 - In-place Cyclic Sort</span></a></h2>
<h3 id="intuition" tabindex="-1"><a class="header-anchor" href="#intuition"><span>Intuition</span></a></h3>
<p>The above solution requires O(n) space. We can improve this by using only O(1) space by marking elements in place. The idea is to place each number at its correct index, i.e., if <code v-pre>nums[i] = x</code>, then ideally <code v-pre>nums[x] = x</code>. After this rearrangement:</p>
<ul>
<li>If we find <code v-pre>nums[i] != i</code>, then ( i ) is our missing number.</li>
<li>If all numbers match their indices, then ( n ) must be the missing number (since we only have indices 0 to ( n-1 )).</li>
</ul>
<h3 id="algorithm-steps" tabindex="-1"><a class="header-anchor" href="#algorithm-steps"><span>Algorithm Steps</span></a></h3>
<ul>
<li>Loop over <code v-pre>nums</code>. If <code v-pre>nums[i] != i</code>, swap <code v-pre>nums[i]</code> with <code v-pre>nums[nums[i]]</code>.</li>
<li>After arrangement, loop over <code v-pre>nums</code> again: If <code v-pre>nums[i] != i</code>, return ( i ); otherwise, return ( n ).</li>
</ul>
<p><strong>Be careful</strong>: What swap version is correct? (Pause and think for a moment)</p>
<ul>
<li><strong>Version A:</strong> <code v-pre>nums[i], nums[nums[i]] = nums[nums[i]], nums[i]</code></li>
<li><strong>Version B:</strong> <code v-pre>nums[nums[i]], nums[i] = nums[i], nums[nums[i]]</code></li>
</ul>
<p>Version B is correct! Why? If we update <code v-pre>nums[i]</code> first as in Version A, then use <code v-pre>nums[i]</code> again (in <code v-pre>nums[nums[i]]</code>), it now points to the wrong index.</p>
<h3 id="code-1" tabindex="-1"><a class="header-anchor" href="#code-1"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    i <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> n <span class="token keyword">and</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">:</span></span>
<span class="line">            nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> i</span>
<span class="line">    <span class="token keyword">return</span> n</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity-1" tabindex="-1"><a class="header-anchor" href="#time-complexity-1"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
<h2 id="optimal-solution-2-sum-of-all-elements" tabindex="-1"><a class="header-anchor" href="#optimal-solution-2-sum-of-all-elements"><span>Optimal Solution 2 - Sum of All Elements</span></a></h2>
<h3 id="intuition-1" tabindex="-1"><a class="header-anchor" href="#intuition-1"><span>Intuition</span></a></h3>
<p>The idea is simple: if we have all numbers from 0 to ( n ), their sum should be ( n \times (n+1)/2 ) (arithmetic sequence). If one number is missing, the difference between this expected sum and the actual sum of array elements must be our missing number.</p>
<p>For example:</p>
<ul>
<li>If ( n=3 ), the array should contain [0, 1, 2, 3], sum = 6</li>
<li>If the actual array is [3, 0, 1], sum = 4</li>
<li>Missing number = 6 - 4 = 2</li>
</ul>
<h3 id="code-2" tabindex="-1"><a class="header-anchor" href="#code-2"><span>Code</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    expected <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span></span>
<span class="line">    actual <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> expected <span class="token operator">-</span> actual</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="time-complexity-2" tabindex="-1"><a class="header-anchor" href="#time-complexity-2"><span>Time Complexity</span></a></h3>
<ul>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
</div></template>


