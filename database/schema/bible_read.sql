-- Options

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Read sql Table
--

drop table if exists `bible_read`;
create table `bible_read` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the read',
  `owner` int not null comment 'Identifier of the read owner',
  
  `version`   int(8) not null,
  `book` int(11) not null,
  `chapter` int(11) not null,

  `created` int(8) not null comment 'Time of the read',
  primary key (`id`)
);
