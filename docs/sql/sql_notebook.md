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

## SELECT WHERE

is used to filter

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
