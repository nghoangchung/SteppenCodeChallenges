SELECT
    CAST(SUBSTR(ordered_at, 1, 4) AS integer) as year,
    CAST(SUBSTR(ordered_at, 6, 7) AS integer) as month,
    customer_id,
--    unit_price,
--    quantity,
    SUM((unit_price * quantity)) as total_monthly_order_value
FROM
    order_line_items
    INNER JOIN orders ON order_line_items.order_id = orders.order_id
GROUP BY
    customer_id

-- It not a perfect answer, but i try my best    

-- test "Good Binary Strings - Intermediate Problem Solving" i don't no how to work