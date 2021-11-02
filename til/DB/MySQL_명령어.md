# **MySQL 명령어**

* 데이터베이스 접속하기
```js
mysql -u root //계정과 비밀번호를 아직 만들지 않았을 경우
mysql -u root -p //초기 접속시 비밀전호가 없으므로 그냥 'Enter'
```
* 비밀번호 세팅 및 변경
```js
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPassword'; //yourPassword에 변경하고자 하는 비밀번호 입력 e.g. 1q2w3e
```
[비밀번호 세팅 참조](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)

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

[README.md](../../README.md)
