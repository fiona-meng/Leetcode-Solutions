<template><div><h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql"><span>SQL</span></a></h1>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h2>
<p>is used to select data from a database</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2</span>
<span class="line"><span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="select-all" tabindex="-1"><a class="header-anchor" href="#select-all"><span>Select All</span></a></h2>
<p>If you want to return all columns, without specifying every column name, you can use <code v-pre>SELECT *</code></p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="select-distinct" tabindex="-1"><a class="header-anchor" href="#select-distinct"><span>SELECT DISTINCT</span></a></h2>
<p>is used to return onoy distinct values</p>
<p>Inside the tabel, a column often contains many duplicate values and sometimes you only want to list the distinct values.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="select-where" tabindex="-1"><a class="header-anchor" href="#select-where"><span>SELECT WHERE</span></a></h2>
<p>is used to filter</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


