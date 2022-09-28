1. select * from stock_mgt.items where weight = (select min(weight) from stock_mgt.items);

2. select distinct(w.wname) from stock_mgt.warehouses as w join stock_mgt.cities as c on (w.ct_id = c.ct_id) where c.city = 'Pune';

3. select * from stock_mgt.customer as c join stock_mgt.orders as o on c.cno = o.cno
join stock_mgt.items_order as io on o.ono = io.ono join stock_mgt.items as i on io.ino = i.ino where c.cname = 'Mr. Patil'.

4. SELECT * FROM stock_mgt.warehouses WHERE wid = (
    SELECT wid FROM stock_mgt.stores WHERE wid = (
        SELECT wid FROM stock_mgt.stores GROUP BY wid ORDER BY COUNT(*) DESC LIMIT 1
    ) LIMIT 1
);

5. SELECT * FROM stock_mgt.items WHERE ino = (
    SELECT ino FROM stock_mgt.items_order GROUP BY ino ORDER BY COUNT(*) ASC LIMIT 1
) LIMIT 1;


6. select * from stock_mgt.customer as c join stock_mgt.orders as o on c.cno = o.cno
join stock_mgt.items_order as io on o.ono = io.ono join stock_mgt.items as i on io.ino = i.ino;
