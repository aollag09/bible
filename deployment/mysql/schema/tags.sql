-- Options

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Tags sql Tables
--

drop table if exists `tag_what`;
create table `tag_what` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the tag',
  `owner` int not null comment 'Identifier of the tag owner',
  
  `created` datetime not null comment 'Creation date time of the tag',
  `modified` datetime not null comment 'Modification date time of the tag',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `type` varchar(255) comment 'Type of the who tag',
  `subType` varchar(255) comment 'Sub Type of the who tag',
  
  `what` varchar(255) not null comment 'Value of the what tag',
  `details` text comment 'Details on the what value tag',

  primary key (`id`)
);


drop table if exists `tag_who`;
create table `tag_who` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the tag',
  `owner` int not null comment 'Identifier of the tag owner',
  
  `created` datetime not null comment 'Creation date time of the tag',
  `modified` datetime not null comment 'Modification date time of the tag',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `type` varchar(255) comment 'Type of the who tag',
  `subType` varchar(255) comment 'Sub Type of the who tag',
  
  `who` int(8) not null comment 'Id of the who associated with the tag',

  primary key (`id`)
);




drop table if exists `tag_where`;
create table `tag_where` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the tag',
  `owner` int not null comment 'Identifier of the tag owner',
  
  `created` datetime not null comment 'Creation date time of the tag',
  `modified` datetime not null comment 'Modification date time of the tag',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `type` varchar(255) comment 'Type of the who tag',
  `subType` varchar(255) comment 'Sub Type of the who tag',
  
  `where` varchar(255) not null comment 'Name of the location of the where tag',
  `latitude` real comment 'Latitude of the location',
  `longitude` real comment 'Longitude of the location',

  primary key (`id`)
);


drop table if exists `tag_when`;
create table `tag_when` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the tag',
  `owner` int not null comment 'Identifier of the tag owner',
  
  `created` datetime not null comment 'Creation date time of the tag',
  `modified` datetime not null comment 'Modification date time of the tag',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `type` varchar(255) comment 'Type of the who tag',
  `subType` varchar(255) comment 'Sub Type of the who tag',
  
  `year` int(8) not null comment 'Year of the When tag',

  primary key (`id`)
);

drop table if exists `tag_how`;
create table `tag_how` (
  `id` int not null AUTO_INCREMENT comment 'Identifier of the tag',
  `owner` int not null comment 'Identifier of the tag owner',
  
  `created` datetime not null comment 'Creation date time of the tag',
  `modified` datetime not null comment 'Modification date time of the tag',

  `start` int(8) unsigned zerofill not null comment 'Id of the scripture verse start',
  `end`   int(8) unsigned zerofill not null comment 'Id of the scriptoture verse end',
  
  `type` varchar(255) comment 'Type of the who tag',
  `subType` varchar(255) comment 'Sub Type of the who tag',

  `how` varchar(255) comment 'Value of the what tag',
  `details` text comment 'Details on the what value tag',
  primary key (`id`)
);


