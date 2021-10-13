# **SQL Query문 / 명령어**

* SELECT 
>> 쿼리문 작성시 대소문자는 구분하지 않아도 된다.
```sql
SELECT * FROM 테이블_이름
// '테이블_이름'이 가진 모든 데이터를 가져옴
mysql> select * from category;
+----+--------+
| id | name   |
+----+--------+
|  1 | soccer |
|  2 | family |
|  3 | health |
+----+--------+
// category의 전체 데이터를 가져옴

SELECT 특성_1 FROM 테이블_이름 
// '특성_1'을 가진 데이터를 '테이블_이름'에서 가져옴
mysql> SELECT id FROM category;
+----+
| id |
+----+
|  1 |
|  2 |
|  3 |
+----+
// id 라는 colum을 가진 데이터를 category라는 테이블에서 가져옴
```

* WHERE
>> 필터역할을 하는 쿼리문 (선택적 사용 가능)
```sql
// id가 1인 데이터를 가져옴
mysql> select * from category where id=1;
+----+--------+
| id | name   |
+----+--------+
|  1 | soccer |
+----+--------+

* NULL: 다음과 같은 테이블이 있다고 하자
+----+-------------+-------------------------------+--------+
| id | name        | email                         | roleId |
+----+-------------+-------------------------------+--------+
|  1 | jiSungPark  | jisung.park@manchester.united |      1 |
|  2 | woonJaeLee  | woonJae.Lee@goal.keeper       |   NULL |
|  3 | youngPyoLee | youngPyo.Lee@shadow.leg       |      2 |
|  4 | myungBoHong | myungBo.Hong@korea.joojang    |      2 |
|  5 | duRiCha     | duRi.Cha@run.fast             |      2 |
+----+-------------+-------------------------------+--------+

// where roleId is null 을 사용할 경우 roleId가 NULL인값을 가져옴
mysql> select * from user where roleId is null;
+----+------------+-------------------------+--------+
| id | name       | email                   | roleId |
+----+------------+-------------------------+--------+
|  2 | woonJaeLee | woonJae.Lee@goal.keeper |   NULL |
+----+------------+-------------------------+--------+

// where roleId is not null 을 사용할 경우 roleI의 값이 있는 데이터 가져옴
mysql> select * from user where roleId is not null;
+----+-------------+-------------------------------+--------+
| id | name        | email                         | roleId |
+----+-------------+-------------------------------+--------+
|  1 | jiSungPark  | jisung.park@manchester.united |      1 |
|  3 | youngPyoLee | youngPyo.Lee@shadow.leg       |      2 |
|  4 | myungBoHong | myungBo.Hong@korea.joojang    |      2 |
|  5 | duRiCha     | duRi.Cha@run.fast             |      2 |
+----+-------------+-------------------------------+--------+
```



