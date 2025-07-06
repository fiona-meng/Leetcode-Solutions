# SQL

## Select

is used to select data from a database

```sql
SELECT column1, column2
FROM table_name;
```

## Select All

If you want to return all columns, without specifying every column name, you can use `SELECT *`

```sql
SELECT *
FROM table_name;
```

## SELECT DISTINCT

is used to return onoy distinct values

Inside the tabel, a column often contains many duplicate values and sometimes you only want to list the distinct values.

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

## WHERE

is used to filter

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## Order By

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

in ascending order by default

For string values the `ORDER BY` keyword will order alphabetically.

## ORDER BY Several Columns

To sort a result set by multiple columns, list the columns in the `ORDER BY` clause in the desired order. The sorting is performed sequentially based on the order of the columns. For instance, to sort by `column1` in ascending order followed by `column2` in descending order, use the following syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC, column2 DESC;
```

## And

The WHERE clause can contain one or many AND operators.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

## OR

The WHERE clause can contain one or more OR operators.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

## NOT

The NOT operator is used in combination with other operators to give the opposite result, also called the negative result.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

## INSERT INTO

The INSERT INTO statement is used to insert new records in a table.

Approach 1: Specify both the column names and the values to be inserted.

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

Approach 2: If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

Insert Multiple Rows

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');
```

## Null

A field with a NULL value is a field with no value.

If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.

We will have to use the IS NULL and IS NOT NULL operators.

## Update

The UPDATE statement is used to modify the existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.

```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```

## DELETE

The DELETE statement is used to delete existing records in a table.

```sql
DELETE FROM table_name WHERE condition;
```

Delete All Records

It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:

```sql
DELETE FROM table_name;
```

## Delete a Table

```sql
DROP TABLE Table_Name;
```

## SELECT TOP

The SELECT TOP clause is used to specify the number of records to return.

Select the first 3 records of the Customers table:

```sql
SELECT * FROM Customers
LIMIT 3;
```

## Aggregate Functions

MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column

Find the lowest price in the Price column:

```sql
SELECT MIN(Price)
FROM Products;
```

Find the highest price in the Price column:

```sql
SELECT MAX(Price)
FROM Products;
```

Set Column Name (Alias):

When you use MIN() or MAX(), the returned column will not have a descriptive name. To give the column a descriptive name, use the AS keyword:

```sql
SELECT MIN(Price) AS SmallestPrice
FROM Products;
```

Use MIN() with GROUP BY

Here we use the MIN() function and the GROUP BY clause, to return the smallest price for each category in the Products table:

```sql
SELECT MIN(Price) AS SmallestPrice, CategoryID
FROM Products
GROUP BY CategoryID;
```

Count

The COUNT() function returns the number of rows that matches a specified criterion.

```sql
SELECT COUNT(*)
FROM Products;
```

If you specify a column name instead of (\*), NULL values will not be counted.

Return the sum of all Quantity fields in the OrderDetails table:

```sql
SELECT SUM(Quantity)
FROM OrderDetails;
```

## Like

There are two wildcards often used in conjunction with the LIKE operator:

The percent sign % represents zero, one, or multiple characters
The underscore sign \_ represents one, single character

Select all customers that starts with the letter "a":

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';
```

The \_ wildcard represents a single character.

It can be any character or number, but each \_ represents one, and only one, character.

Return all customers from a city that starts with 'L' followed by one wildcard character, then 'nd' and then two wildcard characters:

```sql
SELECT * FROM Customers
WHERE city LIKE 'L_nd__';
```

Return all customers from a city that contains the letter 'L':

```sql
SELECT \* FROM Customers
WHERE city LIKE '%L%';
```

If no wildcard is specified, the phrase has to have an exact match to return a result.

Return all customers from Spain:

```sql
SELECT * FROM Customers
WHERE Country LIKE 'Spain';
```

he [] wildcard returns a result if any of the characters inside gets a match.

Example
Return all customers starting with either "b", "s", or "p":

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';
```

The - wildcard allows you to specify a range of characters inside the [] wildcard.

Example
Return all customers starting with "a", "b", "c", "d", "e" or "f":

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE '[a-f]%';
```

## Regular Expression Symbols

Regular expressions (regex) are sequences of characters that define a search pattern. They are used for string matching and manipulation. Here are some common regex symbols and their meanings:

- `.` : Matches any single character except a newline.
- `^` : Matches the start of a string.
- `$` : Matches the end of a string.
- `*` : Matches 0 or more occurrences of the preceding element.
- `+` : Matches 1 or more occurrences of the preceding element.
- `?` : Matches 0 or 1 occurrence of the preceding element, making it optional.
- `{n}` : Matches exactly n occurrences of the preceding element.
- `{n,}` : Matches n or more occurrences of the preceding element.
- `{n,m}` : Matches between n and m occurrences of the preceding element.
- `[]` : Matches any single character within the brackets. For example, `[abc]` matches 'a', 'b', or 'c'.
- `[^]` : Matches any single character not within the brackets. For example, `[^abc]` matches any character except 'a', 'b', or 'c'.
- `|` : Acts as a logical OR operator. For example, `a|b` matches 'a' or 'b'.
- `()` : Groups multiple tokens together and remembers the matched text.
- `\` : Escapes a special character, allowing it to be used as a literal. For example, `\.` matches a literal period.
- `\d` : Matches any digit, equivalent to `[0-9]`.
- `\D` : Matches any non-digit character.
- `\w` : Matches any word character (alphanumeric plus underscore), equivalent to `[a-zA-Z0-9_]`.
- `\W` : Matches any non-word character.
- `\s` : Matches any whitespace character (spaces, tabs, line breaks).
- `\S` : Matches any non-whitespace character.

These symbols can be combined to create complex search patterns for text processing tasks.

## Examples of Regular Expression Symbols

Here are some examples to illustrate how regular expression symbols work:

1. **`.` (Dot) Example:**

   - Regex: `a.c`
   - Matches: "abc", "a1c", "a-c"
   - Does not match: "ac", "abbc"

2. **`^` (Caret) Example:**

   - Regex: `^Hello`
   - Matches: "Hello world", "Hello"
   - Does not match: "world Hello", "Hi Hello"

3. **`$` (Dollar) Example:**

   - Regex: `world$`
   - Matches: "Hello world", "world"
   - Does not match: "world Hello", "Hello world!"

4. **`*` (Asterisk) Example:**

   - Regex: `ab*c`
   - Matches: "ac", "abc", "abbc", "abbbc"
   - Does not match: "ab", "aabc"

5. **`+` (Plus) Example:**

   - Regex: `ab+c`
   - Matches: "abc", "abbc", "abbbc"
   - Does not match: "ac", "aabc"

6. **`?` (Question Mark) Example:**

   - Regex: `colou?r`
   - Matches: "color", "colour"
   - Does not match: "colouur", "colr"

7. **`{n}` (Exact Count) Example:**

   - Regex: `a{3}`
   - Matches: "aaa"
   - Does not match: "aa", "aaaa"

8. **`{n,}` (At Least n) Example:**

   - Regex: `a{2,}`
   - Matches: "aa", "aaa", "aaaa"
   - Does not match: "a"

9. **`{n,m}` (Range) Example:**

   - Regex: `a{2,4}`
   - Matches: "aa", "aaa", "aaaa"
   - Does not match: "a", "aaaaa"

10. **`[]` (Character Set) Example:**

    - Regex: `[aeiou]`
    - Matches: "a", "e", "i", "o", "u"
    - Does not match: "b", "c", "d"

11. **`[^]` (Negated Character Set) Example:**

    - Regex: `[^aeiou]`
    - Matches: "b", "c", "d"
    - Does not match: "a", "e", "i"

12. **`|` (Alternation) Example:**

    - Regex: `cat|dog`
    - Matches: "cat", "dog"
    - Does not match: "bat", "cog"

13. **`()` (Grouping) Example:**

    - Regex: `(abc)+`
    - Matches: "abc", "abcabc", "abcabcabc"
    - Does not match: "ab", "abcd"

14. **`\` (Escape) Example:**

    - Regex: `\.`
    - Matches: "."
    - Does not match: "a", "b"

15. **`\d` (Digit) Example:**

    - Regex: `\d+`
    - Matches: "123", "4567"
    - Does not match: "abc", "a1b"

16. **`\D` (Non-Digit) Example:**

    - Regex: `\D+`
    - Matches: "abc", "xyz"
    - Does not match: "123", "1a2"

17. **`\w` (Word Character) Example:**

    - Regex: `\w+`
    - Matches: "abc", "123", "a1b2"
    - Does not match: "!", "@", "#"

18. **`\W` (Non-Word Character) Example:**

    - Regex: `\W+`
    - Matches: "!", "@", "#"
    - Does not match: "abc", "123"

19. **`\s` (Whitespace) Example:**

    - Regex: `\s+`
    - Matches: " ", "\t", "\n"
    - Does not match: "a", "1"

20. **`\S` (Non-Whitespace) Example:**

    - Regex: `\S+`
    - Matches: "abc", "123"
    - Does not match: " ", "\t"

21. **Email Validation Example:**
    - Regex: `^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$`
    - Explanation: This regex is used to validate email addresses. It ensures that the email starts

Part of Regex Meaning
^ Start of the string
[A-Za-z0-9._%+-]+ One or more allowed characters before @
@ At symbol
[A-Za-z0-9.-]+ Domain name
\. Dot (.)
[A-Za-z]{2,} At least 2 letters for .com, .org
$ End of the string

## IN

The IN operator allows you to specify multiple values in a WHERE clause.

The IN operator is a shorthand for multiple OR conditions.

Return all customers from 'Germany', 'France', or 'UK'

```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');
```

Return all customers that are NOT from 'Germany', 'France', or 'UK':

```sql
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

## BETWEEN

The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included.

Selects all products with a price between 10 and 20:

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

```sql
SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
```

## JOIN

(INNER) JOIN: Returns records that have matching values in both tables

LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table

RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table

FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

## Inner Join

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

For example:

```sql
SELECT Products.ProductID, Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID;
```

Join Three Tables

```sql
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```
