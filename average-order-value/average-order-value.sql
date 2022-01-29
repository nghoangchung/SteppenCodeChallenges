select customers.name,
    count(DISTINCT order_line_items.order_id) as num_orders,
    SUM((order_line_items.unit_price * order_line_items.quantity)) as total_order_value,
    (SUM((order_line_items.unit_price * order_line_items.quantity)) / count(DISTINCT order_line_items.order_id)) as avg_order_value
from orders 
INNER JOIN customers
        on orders.customer_id = customers.customer_id
INNER JOIN order_line_items
        on orders.order_id = order_line_items.order_id
GROUP BY customers.name            
ORDER BY avg_order_value DESC