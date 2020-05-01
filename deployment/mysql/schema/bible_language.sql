
-- Options

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Language sql Table
--
drop table if exists `bible_language`;
create table `bible_language` (
  `id` int not null comment 'Identifier of the bible_language',
  `name` varchar(255) comment 'Name of the bible_language',
  primary key (`id`)
);


LOCK TABLES `bible_language` WRITE;
/*!40000 ALTER TABLE `bible_language` DISABLE KEYS */;
insert into `bible_language` VALUES (1,'english'),
(2, 'french'),
(3, 'spanish'),
(4, 'german'),
(5, 'portoguese'),
(6, 'russian'),
(7, 'finnish'),
(8, 'romanian'),
(9, 'vietnamise'),
(10, 'chinese'),
(11, 'korean'),
(12, 'greek'),
(13, 'arabic'),
(14, 'esperanto');

/*!40000 ALTER TABLE `bible_version_key` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
