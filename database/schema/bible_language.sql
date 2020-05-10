
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

insert into `bible_language` VALUES (1,'english'),
(2, 'french'),
(3, 'spanish'),
(4, 'german'),
(5, 'portuguese'),
(6, 'russian'),
(7, 'finnish'),
(8, 'romanian'),
(9, 'vietnamese'),
(10, 'chinese'),
(11, 'korean'),
(12, 'greek'),
(13, 'arabic'),
(14, 'esperanto');
