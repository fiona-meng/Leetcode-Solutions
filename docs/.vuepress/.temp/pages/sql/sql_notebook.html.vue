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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where"><span>WHERE</span></a></h2>
<p>is used to filter</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by"><span>Order By</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>in ascending order by default</p>
<p>For string values the <code v-pre>ORDER BY</code> keyword will order alphabetically.</p>
<h2 id="order-by-several-columns" tabindex="-1"><a class="header-anchor" href="#order-by-several-columns"><span>ORDER BY Several Columns</span></a></h2>
<p>To sort a result set by multiple columns, list the columns in the <code v-pre>ORDER BY</code> clause in the desired order. The sorting is performed sequentially based on the order of the columns. For instance, to sort by <code v-pre>column1</code> in ascending order followed by <code v-pre>column2</code> in descending order, use the following syntax:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column1 <span class="token keyword">ASC</span><span class="token punctuation">,</span> column2 <span class="token keyword">DESC</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="and" tabindex="-1"><a class="header-anchor" href="#and"><span>And</span></a></h2>
<p>The WHERE clause can contain one or many AND operators.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition1 <span class="token operator">AND</span> condition2 <span class="token operator">AND</span> condition3 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="or" tabindex="-1"><a class="header-anchor" href="#or"><span>OR</span></a></h2>
<p>The WHERE clause can contain one or more OR operators.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition1 <span class="token operator">OR</span> condition2 <span class="token operator">OR</span> condition3 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="not" tabindex="-1"><a class="header-anchor" href="#not"><span>NOT</span></a></h2>
<p>The NOT operator is used in combination with other operators to give the opposite result, also called the negative result.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token operator">NOT</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="insert-into" tabindex="-1"><a class="header-anchor" href="#insert-into"><span>INSERT INTO</span></a></h2>
<p>The INSERT INTO statement is used to insert new records in a table.</p>
<p>Approach 1: Specify both the column names and the values to be inserted.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name <span class="token punctuation">(</span>column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Approach 2: If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name</span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> value3<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Insert Multiple Rows</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Customers <span class="token punctuation">(</span>CustomerName<span class="token punctuation">,</span> ContactName<span class="token punctuation">,</span> Address<span class="token punctuation">,</span> City<span class="token punctuation">,</span> PostalCode<span class="token punctuation">,</span> Country<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Cardinal'</span><span class="token punctuation">,</span> <span class="token string">'Tom B. Erichsen'</span><span class="token punctuation">,</span> <span class="token string">'Skagen 21'</span><span class="token punctuation">,</span> <span class="token string">'Stavanger'</span><span class="token punctuation">,</span> <span class="token string">'4006'</span><span class="token punctuation">,</span> <span class="token string">'Norway'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Greasy Burger'</span><span class="token punctuation">,</span> <span class="token string">'Per Olsen'</span><span class="token punctuation">,</span> <span class="token string">'Gateveien 15'</span><span class="token punctuation">,</span> <span class="token string">'Sandnes'</span><span class="token punctuation">,</span> <span class="token string">'4306'</span><span class="token punctuation">,</span> <span class="token string">'Norway'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Tasty Tee'</span><span class="token punctuation">,</span> <span class="token string">'Finn Egan'</span><span class="token punctuation">,</span> <span class="token string">'Streetroad 19B'</span><span class="token punctuation">,</span> <span class="token string">'Liverpool'</span><span class="token punctuation">,</span> <span class="token string">'L1 0AA'</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>Null</span></a></h2>
<p>A field with a NULL value is a field with no value.</p>
<p>If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.</p>
<p>We will have to use the IS NULL and IS NOT NULL operators.</p>
<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>Update</span></a></h2>
<p>The UPDATE statement is used to modify the existing records in a table.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">UPDATE</span> table_name</span>
<span class="line"><span class="token keyword">SET</span> column1 <span class="token operator">=</span> value1<span class="token punctuation">,</span> column2 <span class="token operator">=</span> value2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">UPDATE</span> Customers</span>
<span class="line"><span class="token keyword">SET</span> ContactName <span class="token operator">=</span> <span class="token string">'Alfred Schmidt'</span><span class="token punctuation">,</span> City<span class="token operator">=</span> <span class="token string">'Frankfurt'</span></span>
<span class="line"><span class="token keyword">WHERE</span> CustomerID <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>DELETE</span></a></h2>
<p>The DELETE statement is used to delete existing records in a table.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Delete All Records</p>
<p>It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="delete-a-table" tabindex="-1"><a class="header-anchor" href="#delete-a-table"><span>Delete a Table</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> Table_Name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="select-top" tabindex="-1"><a class="header-anchor" href="#select-top"><span>SELECT TOP</span></a></h2>
<p>The SELECT TOP clause is used to specify the number of records to return.</p>
<p>Select the first 3 records of the Customers table:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">LIMIT</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions"><span>Aggregate Functions</span></a></h2>
<p>MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column</p>
<p>Find the lowest price in the Price column:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>Price<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> Products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Find the highest price in the Price column:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>Price<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> Products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Set Column Name (Alias):</p>
<p>When you use MIN() or MAX(), the returned column will not have a descriptive name. To give the column a descriptive name, use the AS keyword:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>Price<span class="token punctuation">)</span> <span class="token keyword">AS</span> SmallestPrice</span>
<span class="line"><span class="token keyword">FROM</span> Products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Use MIN() with GROUP BY</p>
<p>Here we use the MIN() function and the GROUP BY clause, to return the smallest price for each category in the Products table:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>Price<span class="token punctuation">)</span> <span class="token keyword">AS</span> SmallestPrice<span class="token punctuation">,</span> CategoryID</span>
<span class="line"><span class="token keyword">FROM</span> Products</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CategoryID<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Count</p>
<p>The COUNT() function returns the number of rows that matches a specified criterion.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> Products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>If you specify a column name instead of (*), NULL values will not be counted.</p>
<p>Return the sum of all Quantity fields in the OrderDetails table:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>Quantity<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> OrderDetails<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="like" tabindex="-1"><a class="header-anchor" href="#like"><span>Like</span></a></h2>
<p>There are two wildcards often used in conjunction with the LIKE operator:</p>
<p>The percent sign % represents zero, one, or multiple characters
The underscore sign _ represents one, single character</p>
<p>Select all customers that starts with the letter &quot;a&quot;:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> CustomerName <span class="token operator">LIKE</span> <span class="token string">'a%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>The _ wildcard represents a single character.</p>
<p>It can be any character or number, but each _ represents one, and only one, character.</p>
<p>Return all customers from a city that starts with 'L' followed by one wildcard character, then 'nd' and then two wildcard characters:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> city <span class="token operator">LIKE</span> <span class="token string">'L_nd__'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Return all customers from a city that contains the letter 'L':</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> \<span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> city <span class="token operator">LIKE</span> <span class="token string">'%L%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>If no wildcard is specified, the phrase has to have an exact match to return a result.</p>
<p>Return all customers from Spain:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> Country <span class="token operator">LIKE</span> <span class="token string">'Spain'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>he [] wildcard returns a result if any of the characters inside gets a match.</p>
<p>Example
Return all customers starting with either &quot;b&quot;, &quot;s&quot;, or &quot;p&quot;:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> CustomerName <span class="token operator">LIKE</span> <span class="token string">'[bsp]%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>The - wildcard allows you to specify a range of characters inside the [] wildcard.</p>
<p>Example
Return all customers starting with &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot; or &quot;f&quot;:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> CustomerName <span class="token operator">LIKE</span> <span class="token string">'[a-f]%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="regular-expression-symbols" tabindex="-1"><a class="header-anchor" href="#regular-expression-symbols"><span>Regular Expression Symbols</span></a></h2>
<p>Regular expressions (regex) are sequences of characters that define a search pattern. They are used for string matching and manipulation. Here are some common regex symbols and their meanings:</p>
<ul>
<li><code v-pre>.</code> : Matches any single character except a newline.</li>
<li><code v-pre>^</code> : Matches the start of a string.</li>
<li><code v-pre>$</code> : Matches the end of a string.</li>
<li><code v-pre>*</code> : Matches 0 or more occurrences of the preceding element.</li>
<li><code v-pre>+</code> : Matches 1 or more occurrences of the preceding element.</li>
<li><code v-pre>?</code> : Matches 0 or 1 occurrence of the preceding element, making it optional.</li>
<li><code v-pre>{n}</code> : Matches exactly n occurrences of the preceding element.</li>
<li><code v-pre>{n,}</code> : Matches n or more occurrences of the preceding element.</li>
<li><code v-pre>{n,m}</code> : Matches between n and m occurrences of the preceding element.</li>
<li><code v-pre>[]</code> : Matches any single character within the brackets. For example, <code v-pre>[abc]</code> matches 'a', 'b', or 'c'.</li>
<li><code v-pre>[^]</code> : Matches any single character not within the brackets. For example, <code v-pre>[^abc]</code> matches any character except 'a', 'b', or 'c'.</li>
<li><code v-pre>|</code> : Acts as a logical OR operator. For example, <code v-pre>a|b</code> matches 'a' or 'b'.</li>
<li><code v-pre>()</code> : Groups multiple tokens together and remembers the matched text.</li>
<li><code v-pre>\</code> : Escapes a special character, allowing it to be used as a literal. For example, <code v-pre>\.</code> matches a literal period.</li>
<li><code v-pre>\d</code> : Matches any digit, equivalent to <code v-pre>[0-9]</code>.</li>
<li><code v-pre>\D</code> : Matches any non-digit character.</li>
<li><code v-pre>\w</code> : Matches any word character (alphanumeric plus underscore), equivalent to <code v-pre>[a-zA-Z0-9_]</code>.</li>
<li><code v-pre>\W</code> : Matches any non-word character.</li>
<li><code v-pre>\s</code> : Matches any whitespace character (spaces, tabs, line breaks).</li>
<li><code v-pre>\S</code> : Matches any non-whitespace character.</li>
</ul>
<p>These symbols can be combined to create complex search patterns for text processing tasks.</p>
<h2 id="examples-of-regular-expression-symbols" tabindex="-1"><a class="header-anchor" href="#examples-of-regular-expression-symbols"><span>Examples of Regular Expression Symbols</span></a></h2>
<p>Here are some examples to illustrate how regular expression symbols work:</p>
<ol>
<li>
<p><strong><code v-pre>.</code> (Dot) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>a.c</code></li>
<li>Matches: &quot;abc&quot;, &quot;a1c&quot;, &quot;a-c&quot;</li>
<li>Does not match: &quot;ac&quot;, &quot;abbc&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>^</code> (Caret) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>^Hello</code></li>
<li>Matches: &quot;Hello world&quot;, &quot;Hello&quot;</li>
<li>Does not match: &quot;world Hello&quot;, &quot;Hi Hello&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>$</code> (Dollar) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>world$</code></li>
<li>Matches: &quot;Hello world&quot;, &quot;world&quot;</li>
<li>Does not match: &quot;world Hello&quot;, &quot;Hello world!&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>*</code> (Asterisk) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>ab*c</code></li>
<li>Matches: &quot;ac&quot;, &quot;abc&quot;, &quot;abbc&quot;, &quot;abbbc&quot;</li>
<li>Does not match: &quot;ab&quot;, &quot;aabc&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>+</code> (Plus) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>ab+c</code></li>
<li>Matches: &quot;abc&quot;, &quot;abbc&quot;, &quot;abbbc&quot;</li>
<li>Does not match: &quot;ac&quot;, &quot;aabc&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>?</code> (Question Mark) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>colou?r</code></li>
<li>Matches: &quot;color&quot;, &quot;colour&quot;</li>
<li>Does not match: &quot;colouur&quot;, &quot;colr&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>{n}</code> (Exact Count) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>a{3}</code></li>
<li>Matches: &quot;aaa&quot;</li>
<li>Does not match: &quot;aa&quot;, &quot;aaaa&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>{n,}</code> (At Least n) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>a{2,}</code></li>
<li>Matches: &quot;aa&quot;, &quot;aaa&quot;, &quot;aaaa&quot;</li>
<li>Does not match: &quot;a&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>{n,m}</code> (Range) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>a{2,4}</code></li>
<li>Matches: &quot;aa&quot;, &quot;aaa&quot;, &quot;aaaa&quot;</li>
<li>Does not match: &quot;a&quot;, &quot;aaaaa&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>[]</code> (Character Set) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>[aeiou]</code></li>
<li>Matches: &quot;a&quot;, &quot;e&quot;, &quot;i&quot;, &quot;o&quot;, &quot;u&quot;</li>
<li>Does not match: &quot;b&quot;, &quot;c&quot;, &quot;d&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>[^]</code> (Negated Character Set) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>[^aeiou]</code></li>
<li>Matches: &quot;b&quot;, &quot;c&quot;, &quot;d&quot;</li>
<li>Does not match: &quot;a&quot;, &quot;e&quot;, &quot;i&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>|</code> (Alternation) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>cat|dog</code></li>
<li>Matches: &quot;cat&quot;, &quot;dog&quot;</li>
<li>Does not match: &quot;bat&quot;, &quot;cog&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>()</code> (Grouping) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>(abc)+</code></li>
<li>Matches: &quot;abc&quot;, &quot;abcabc&quot;, &quot;abcabcabc&quot;</li>
<li>Does not match: &quot;ab&quot;, &quot;abcd&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\</code> (Escape) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\.</code></li>
<li>Matches: &quot;.&quot;</li>
<li>Does not match: &quot;a&quot;, &quot;b&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\d</code> (Digit) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\d+</code></li>
<li>Matches: &quot;123&quot;, &quot;4567&quot;</li>
<li>Does not match: &quot;abc&quot;, &quot;a1b&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\D</code> (Non-Digit) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\D+</code></li>
<li>Matches: &quot;abc&quot;, &quot;xyz&quot;</li>
<li>Does not match: &quot;123&quot;, &quot;1a2&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\w</code> (Word Character) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\w+</code></li>
<li>Matches: &quot;abc&quot;, &quot;123&quot;, &quot;a1b2&quot;</li>
<li>Does not match: &quot;!&quot;, &quot;@&quot;, &quot;#&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\W</code> (Non-Word Character) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\W+</code></li>
<li>Matches: &quot;!&quot;, &quot;@&quot;, &quot;#&quot;</li>
<li>Does not match: &quot;abc&quot;, &quot;123&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\s</code> (Whitespace) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\s+</code></li>
<li>Matches: &quot; &quot;, &quot;\t&quot;, &quot;\n&quot;</li>
<li>Does not match: &quot;a&quot;, &quot;1&quot;</li>
</ul>
</li>
<li>
<p><strong><code v-pre>\S</code> (Non-Whitespace) Example:</strong></p>
<ul>
<li>Regex: <code v-pre>\S+</code></li>
<li>Matches: &quot;abc&quot;, &quot;123&quot;</li>
<li>Does not match: &quot; &quot;, &quot;\t&quot;</li>
</ul>
</li>
<li>
<p><strong>Email Validation Example:</strong></p>
<ul>
<li>Regex: <code v-pre>^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$</code></li>
<li>Explanation: This regex is used to validate email addresses. It ensures that the email starts</li>
</ul>
</li>
</ol>
<p>Part of Regex Meaning
^ Start of the string
[A-Za-z0-9._%+-]+ One or more allowed characters before @
@ At symbol
[A-Za-z0-9.-]+ Domain name
. Dot (.)
[A-Za-z]{2,} At least 2 letters for .com, .org
$ End of the string</p>
<h2 id="in" tabindex="-1"><a class="header-anchor" href="#in"><span>IN</span></a></h2>
<p>The IN operator allows you to specify multiple values in a WHERE clause.</p>
<p>The IN operator is a shorthand for multiple OR conditions.</p>
<p>Return all customers from 'Germany', 'France', or 'UK'</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> Country <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">'Germany'</span><span class="token punctuation">,</span> <span class="token string">'France'</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Return all customers that are NOT from 'Germany', 'France', or 'UK':</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Customers</span>
<span class="line"><span class="token keyword">WHERE</span> Country <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">'Germany'</span><span class="token punctuation">,</span> <span class="token string">'France'</span><span class="token punctuation">,</span> <span class="token string">'UK'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="between" tabindex="-1"><a class="header-anchor" href="#between"><span>BETWEEN</span></a></h2>
<p>The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.</p>
<p>The BETWEEN operator is inclusive: begin and end values are included.</p>
<p>Selects all products with a price between 10 and 20:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Products</span>
<span class="line"><span class="token keyword">WHERE</span> Price <span class="token operator">BETWEEN</span> <span class="token number">10</span> <span class="token operator">AND</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Orders</span>
<span class="line"><span class="token keyword">WHERE</span> OrderDate <span class="token operator">BETWEEN</span> <span class="token string">'1996-07-01'</span> <span class="token operator">AND</span> <span class="token string">'1996-07-31'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>JOIN</span></a></h2>
<p>(INNER) JOIN: Returns records that have matching values in both tables</p>
<p>LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table</p>
<p>RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table</p>
<p>FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table</p>
<h2 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join"><span>Inner Join</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2</span>
<span class="line"><span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>For example:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> Products<span class="token punctuation">.</span>ProductID<span class="token punctuation">,</span> Products<span class="token punctuation">.</span>ProductName<span class="token punctuation">,</span> Categories<span class="token punctuation">.</span>CategoryName</span>
<span class="line"><span class="token keyword">FROM</span> Products</span>
<span class="line"><span class="token keyword">JOIN</span> Categories <span class="token keyword">ON</span> Products<span class="token punctuation">.</span>CategoryID <span class="token operator">=</span> Categories<span class="token punctuation">.</span>CategoryID<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Join Three Tables</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> Orders<span class="token punctuation">.</span>OrderID<span class="token punctuation">,</span> Customers<span class="token punctuation">.</span>CustomerName<span class="token punctuation">,</span> Shippers<span class="token punctuation">.</span>ShipperName</span>
<span class="line"><span class="token keyword">FROM</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>Orders</span>
<span class="line"><span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Customers <span class="token keyword">ON</span> Orders<span class="token punctuation">.</span>CustomerID <span class="token operator">=</span> Customers<span class="token punctuation">.</span>CustomerID<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Shippers <span class="token keyword">ON</span> Orders<span class="token punctuation">.</span>ShipperID <span class="token operator">=</span> Shippers<span class="token punctuation">.</span>ShipperID<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="left-join" tabindex="-1"><a class="header-anchor" href="#left-join"><span>Left Join</span></a></h2>
<p>The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2</span>
<span class="line"><span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="right-join" tabindex="-1"><a class="header-anchor" href="#right-join"><span>Right Join</span></a></h2>
<p>The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> table2</span>
<span class="line"><span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="full-join" tabindex="-1"><a class="header-anchor" href="#full-join"><span>Full Join</span></a></h2>
<p>The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.</p>
<p>Tip: FULL OUTER JOIN and FULL JOIN are the same.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> table2</span>
<span class="line"><span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="self-join" tabindex="-1"><a class="header-anchor" href="#self-join"><span>Self Join</span></a></h2>
<p>The table join itself.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table1 T1<span class="token punctuation">,</span> table1 T2</span>
<span class="line"><span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Example:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> A<span class="token punctuation">.</span>CustomerName <span class="token keyword">AS</span> CustomerName1<span class="token punctuation">,</span> B<span class="token punctuation">.</span>CustomerName <span class="token keyword">AS</span> CustomerName2<span class="token punctuation">,</span> A<span class="token punctuation">.</span>City</span>
<span class="line"><span class="token keyword">FROM</span> Customers A<span class="token punctuation">,</span> Customers B</span>
<span class="line"><span class="token keyword">WHERE</span> A<span class="token punctuation">.</span>CustomerID <span class="token operator">&lt;></span> B<span class="token punctuation">.</span>CustomerID</span>
<span class="line"><span class="token operator">AND</span> A<span class="token punctuation">.</span>City <span class="token operator">=</span> B<span class="token punctuation">.</span>City</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> A<span class="token punctuation">.</span>City<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union"><span>Union</span></a></h2>
<p>Every SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in every SELECT statement must also be in the same order</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">UNION</span></span>
<span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="union-all" tabindex="-1"><a class="header-anchor" href="#union-all"><span>Union All</span></a></h2>
<p>The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table1</span>
<span class="line"><span class="token keyword">UNION</span> <span class="token keyword">ALL</span></span>
<span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by"><span>GROUP BY</span></a></h2>
<p>The GROUP BY statement is often used with aggregate functions
(COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="having" tabindex="-1"><a class="header-anchor" href="#having"><span>Having</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> condition</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">HAVING</span> condition</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists"><span>EXISTS</span></a></h2>
<p>The EXISTS operator is used to test for the existence of any record in a subquery.</p>
<p>The EXISTS operator returns TRUE if the subquery returns one or more records.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> table_name</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">SELECT</span> column_name <span class="token keyword">FROM</span> table_name <span class="token keyword">WHERE</span> condition<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>EXISTS does not output or use any data from those columns. It just asks:</p>
<p>“Did the subquery return anything?”</p>
<p>EXISTS is a boolean test, not a value comparison.</p>
<h1 id="any-and-all" tabindex="-1"><a class="header-anchor" href="#any-and-all"><span>ANY and ALL</span></a></h1>
<table>
<thead>
<tr>
<th>Keyword</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ANY</code> (or <code v-pre>SOME</code>)</td>
<td>TRUE if the condition is TRUE for <strong>at least one</strong> value in the subquery</td>
</tr>
<tr>
<td><code v-pre>ALL</code></td>
<td>TRUE if the condition is TRUE for <strong>every</strong> value in the subquery</td>
</tr>
</tbody>
</table>
<h2 id="select-into" tabindex="-1"><a class="header-anchor" href="#select-into"><span>SELECT INTO</span></a></h2>
<p>The SELECT INTO statement copies data from one table into a new table.</p>
<p>The following SQL statement creates a backup copy of Customers:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">INTO</span> CustomersBackup2017</span>
<span class="line"><span class="token keyword">FROM</span> Customers<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="insert-into-select" tabindex="-1"><a class="header-anchor" href="#insert-into-select"><span>INSERT INTO ... SELECT</span></a></h2>
<p>Feature |INSERT INTO ... |SELECT SELECT ... INTO
Purpose |Copies data into an existing table |Creates a new table and inserts data
Target Table Exists? |✅ Must already exist |❌ Table must not exist yet</p>
<h2 id="case" tabindex="-1"><a class="header-anchor" href="#case"><span>Case</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">CASE</span></span>
<span class="line">    <span class="token keyword">WHEN</span> condition1 <span class="token keyword">THEN</span> result1</span>
<span class="line">    <span class="token keyword">WHEN</span> condition2 <span class="token keyword">THEN</span> result2</span>
<span class="line">    <span class="token keyword">WHEN</span> conditionN <span class="token keyword">THEN</span> resultN</span>
<span class="line">    <span class="token keyword">ELSE</span> result</span>
<span class="line"><span class="token keyword">END</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>Example:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> OrderID<span class="token punctuation">,</span> Quantity<span class="token punctuation">,</span></span>
<span class="line"><span class="token keyword">CASE</span></span>
<span class="line">    <span class="token keyword">WHEN</span> Quantity <span class="token operator">></span> <span class="token number">30</span> <span class="token keyword">THEN</span> <span class="token string">'The quantity is greater than 30'</span></span>
<span class="line">    <span class="token keyword">WHEN</span> Quantity <span class="token operator">=</span> <span class="token number">30</span> <span class="token keyword">THEN</span> <span class="token string">'The quantity is 30'</span></span>
<span class="line">    <span class="token keyword">ELSE</span> <span class="token string">'The quantity is under 30'</span></span>
<span class="line"><span class="token keyword">END</span> <span class="token keyword">AS</span> QuantityText</span>
<span class="line"><span class="token keyword">FROM</span> OrderDetails<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="ifnull" tabindex="-1"><a class="header-anchor" href="#ifnull"><span>IFNULL</span></a></h2>
<p>IFNULL is a function used in SQL to handle NULL values. It allows you to return an alternative value when a NULL is encountered.</p>
<p>Example:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">SELECT</span> ProductName<span class="token punctuation">,</span> UnitPrice <span class="token operator">*</span> <span class="token punctuation">(</span>UnitsInStock <span class="token operator">+</span> IFNULL<span class="token punctuation">(</span>UnitsOnOrder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> Products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


