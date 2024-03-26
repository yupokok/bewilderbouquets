drop database if exists bewilderbouquets;

create database bewilderbouquets;

use bewilderbouquets;

create table orders (
    order_id char(26) not null,
    date timestamp default current_timestamp,
    name varchar(64) not null,
    email char not null,

    primary key(order_id)
);
   
create table packages (

    package_id int auto_increment,
    bouquet_id char(24) not null,
    name varchar(128) not null,
    quantity int ,
    totalPrice int,

    sender_name char not null,
    sender_number char(8) not null, 

    recipient_name char not null,
    recipient_number char not null,
    delivery_address varchar(128) not null,

    occasion char,
    message text,

    order_id char(26) not null,

    constraint composite_pk primary key(order_id, package_id),
    constraint fk_order_id foreign key(order_id) references order(order_id)
);
