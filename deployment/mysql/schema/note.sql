-- Options

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Note sql Table
--

drop table if exists `note`;
create table `note` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the note',
  `owner` int not null comment 'Identifier of the note owner',
  
  `created` int(8) not null comment 'Creation date time of the note',
  `modified` int(8) not null comment 'Modification date time of the note',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `book` int(11) not null,
  `chapter` int(11) not null,

  `type` varchar(255) not null comment 'Type of the note',
  
  `note` text not null comment 'Note content',
  primary key (`id`)
);
