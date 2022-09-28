create table stock_mgt.cities (
	ctid int,
	city varchar(20),
	state varchar(20),
	PRIMARY KEY(ctid)
);


create table stock_mgt.warehouses (
	wid int,
	wname varchar[30],
	wlocation varchar[20],
	extra_data json,
	PRIMARY KEY(wid)
);


create table stock_mgt.stores (
	sid int,
	store_name varchar[20],
	location_city varchar[20],
	PRIMARY KEY(sid)
);

create table stock_mgt.customer (
	cno int,
	cname varchar[50],
	cu_city varchar[20],
	PRIMARY KEY(cno)
);

create table stock_mgt.orders (
	ono int,
	odate date,
	PRIMARY KEY(ono)
);

create table stock_mgt.items_order (
	ino int,
	ono int,
	ordered_quantity int,
	FOREIGN KEY (ino) REFERENCES stock_mgt.items(ino),
	FOREIGN KEY (ono) REFERENCES stock_mgt.orders(ono)
);

create table stock_mgt.store_items (
	ino int,
	sid int,
	quantity int,
	FOREIGN KEY (ino) REFERENCES stock_mgt.items(ino),
	FOREIGN KEY (sid) REFERENCES stock_mgt.stores(sid)
);

create table stock_mgt.items (
	ino int,
	i_desc text,
	weight decimal(5,2),
	cost decimal(5,2),
	PRIMARY KEY(ino)
);

ALTER TABLE stock_mgt.warehouses
ADD COLUMN ct_id int,
ADD FOREIGN KEY (ct_id) REFERENCES stock_mgt.cities(ct_id);

ALTER TABLE stock_mgt.stores
ADD COLUMN wid int,
ADD FOREIGN KEY (wid) REFERENCES stock_mgt.warehouses(wid);



