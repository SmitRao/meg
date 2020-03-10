-- filter by gender
-- $selected_gender_filter is a varaible for selected gender filter
SELECT *
FROM Products
WHERE Gender = '$selected_gender_filter';

-- filter by price (display price only between min and max)
-- $selected_maxPrice_filter is a varaible for max selected price filter
-- $selected_minPrice_filter is a varaible for min selected price filter
SELECT *
FROM Products
WHERE PriceInEuros BETWEEN $selected_minPrice_filter AND $selected_maxPrice_filter;

-- filter by category
-- $selected_category_filter is a varaible for selected CategoryName filter
SELECT *
FROM Products
WHERE CategoryName = '$selected_category_filter';