-- MySQL dump 10.13  Distrib 5.5.34, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: bible
-- ------------------------------------------------------
-- Server version	5.5.34-0ubuntu0.13.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bible_version_key`
--

drop table IF EXISTS `bible_version_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create TABLE `bible_version_key` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `table` text NOT NULL COMMENT 'Database Table Name ',
  `abbreviation` text NOT NULL COMMENT 'Version Abbreviation',
  `language` text NOT NULL COMMENT 'Language of bible translation (used for language key tables)',
  `version` text NOT NULL COMMENT 'Version Name',
  `info_text` text NOT NULL COMMENT 'About / Info',
  `info_url` text NOT NULL COMMENT 'Info URL',
  `publisher` text NOT NULL COMMENT 'Publisher',
  `copyright` text NOT NULL COMMENT 'Copyright ',
  `copyright_info` text NOT NULL COMMENT 'Extended Copyright info',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='This is the general translation information and db links';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bible_version_key`
--
-- WHERE:  1 limit 1000000

LOCK TABLES `bible_version_key` WRITE;
/*!40000 ALTER TABLE `bible_version_key` DISABLE KEYS */;
insert into `bible_version_key` VALUES (001,'en_asv','ASV','english','American Standard-ASV1901','','http://en.wikipedia.org/wiki/American_Standard_Version','','Public Domain',''),
(002,'en_bbe','BBE','english','Bible in Basic English','','http://en.wikipedia.org/wiki/Bible_in_Basic_English','','Public Domain',''),
(003,'en_dby','DARBY','english','Darby English Bible','','http://en.wikipedia.org/wiki/Darby_Bible','','Public Domain',''),
(004,'en_kjv','KJV','english','King James Version','','http://en.wikipedia.org/wiki/King_James_Version','','Public Domain',''),
(005,'en_wbt','WBT','english','Webster\'s Bible','','http://en.wikipedia.org/wiki/Webster%27s_Revision','','Public Domain',''),
(006,'en_web','WEB','english','World English Bible','','http://en.wikipedia.org/wiki/World_English_Bible','','Public Domain',''),
(007,'en_ylt','YLT','english','Young\'s Literal Translation','','http://en.wikipedia.org/wiki/Young%27s_Literal_Translation','','Public Domain',''),
(008,'ar_svd','SVD','arabic','Smith Van Dyke Arabic Version','','https://en.wikipedia.org/wiki/Bible_translations_into_Arabic','','Public Domain',''),
(009,'de_schlachter','SCHLACHTER','german','Bible of Schlachter','','https://fr.wikipedia.org/wiki/Bible_de_Schlachter','','Public Domain',''),
(010,'el_greek','GREEK','greek','Greek Bible','','https://en.wikipedia.org/wiki/Greek_Bible','','Public Domain',''),
(011,'eo_esperanto','ESPERANTO','esperanto','Bible into Esperanto','','https://en.wikipedia.org/wiki/Bible_translations_into_Esperanto','','Public Domain',''),
(012,'es_rvr','RVR', 'spanish','Reina Valeria','','https://en.wikipedia.org/wiki/Reina-Valera','','Public Domain',''),
(014,'fi_finnish','FIN','finnish','Bible in Finish','','https://en.wikipedia.org/wiki/Bible_translations_into_Finnish','','Public Domain',''),
(015,'fi_pr','FPR','finnish','Bible in Finish PR','','https://en.wikipedia.org/wiki/Bible_translations_into_Finnish','','Public Domain',''),
(016,'fr_apee','APEE','french','Bible en Français','','https://fr.wikipedia.org/wiki/Traductions_de_la_Bible_en_fran%C3%A7ais','','Public Domain',''),
(017,'ko_ko','KO','korean','Bible in Korean','','https://en.wikipedia.org/wiki/Bible_translations_into_Korean','','Public Domain',''),
(018,'pt_aa','PAA','Portuguese','Bible in Portuguese PAA','','https://en.wikipedia.org/wiki/Bible_translations_into_Portuguese','','Public Domain',''),
(019,'pt_acf','ACF','Portuguese','Bible in Portuguese AVF','','https://en.wikipedia.org/wiki/Bible_translations_into_Portuguese','','Public Domain',''),
(020,'pt_nvi','NVI','Portuguese','Bible in Portuguese NVI','','https://en.wikipedia.org/wiki/Bible_translations_into_Portuguese','','Public Domain',''),
(021,'ro_cornilesu','CORNILESU','romanian','Dumitru_Cornilescu','','https://ro.wikipedia.org/wiki/Dumitru_Cornilescu','','Public Domain',''),
(022,'ru_synodal','SYNODAL','russian','Russian Synodal Bible','','https://en.wikipedia.org/wiki/Russian_Synodal_Bible','','Public Domain',''),
(023,'vi_vietnamese','VIE','Vietnamese','Bible in Vietnamese','','http://en.wikipedia.org/wiki/American_Standard_Version','','Public Domain',''),
(024,'zh_ncv','NCV','chinese','Bible in Chinese NCV','','https://fr.wikipedia.org/wiki/Traduction_de_la_Bible_en_chinois','','Public Domain',''),
(025,'zh_cuv','CUV','chinese','Bible in Chinese CUV','','https://fr.wikipedia.org/wiki/Traduction_de_la_Bible_en_chinois','','Public Domain','');


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

-- Dump completed on 2014-01-13 19:46:49
