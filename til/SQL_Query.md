# **SQL Query문**

* 데이터베이스 생성
```sql
CREATE DATABASE 데이터베이스_이름
```
* 데이터베이스 사용
```sql
USE 데이터베이스_이름
```
* 테이블 생성
```sql
CREATE TABLE user (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  email varchar(255)
);
```
```
mysql> describe user;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int          | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
| email | varchar(255) | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
```

[README.md로 이동](../README.md)
