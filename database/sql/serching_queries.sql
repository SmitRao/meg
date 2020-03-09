-- all keywords should be in lowercase
-- $search_keyword is a variable requested from client
SELECT *
FROM Products
WHERE ProductName LIKE '%$search_keyword%' or ProductInEuros LIKE '%$search_keyword%' or Gender LIKE '%$search_keyword%' or ProductDetail LIKE '%$search_keyword%' or BrandName LIKE '%$search_keyword%' or CategoryName LIKE '%$search_keyword%';