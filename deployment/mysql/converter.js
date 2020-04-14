
fs = require('fs');

var path = "/tmp/bible/bible/json/"

var versions = [
    "ar_svd.json",
    "de_schlachter.json",
    "el_greek.json",
    "en_bbe.json",
    "en_kjv.json",
    "eo_esperanto.json",
    "es_rvr.json",
    "fi_finnish.json",
    "fi_pr.json",
    "fr_apee.json",
    "ko_ko.json",
    "pt_aa.json",
    "pt_acf.json",
    "pt_nvi.json",
    "ro_cornilescu.json",
    "ru_synodal.json",
    "vi_vietnamese.json",
    "zh_cuv.json",
    "zh_ncv.json"
]


versions.forEach(version => {
    var versionName = version.split('.')[0]
    var bible = require(path + version);
    var sql =
        '/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n' +
        '/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n' +
        '/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n' +
        '/*!40101 SET NAMES utf8 */;\n' +
        '/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;\n' +
        '/*!40103 SET TIME_ZONE=\'+00:00\'*/;\n' +
        '/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;\n' +
        '/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;\n' +
        '/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=NO_AUTO_VALUE_ON_ZERO */;\n' +
        '/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;\n' +
        '\n' +
        '--\n' +
        '-- Table structure for table `' + versionName + '`\n' +
        '--\n' +
        '\n' +
        'DROP TABLE IF EXISTS `' + versionName + '`;\n' +
        '/*!40101 SET @saved_cs_client     = @@character_set_client */;\n' +
        '/*!40101 SET character_set_client = utf8 */;\n' +
        'CREATE TABLE `' + versionName + '` (\n' +
        '  `id` int(8) unsigned zerofill NOT NULL,\n' +
        '  `b` int(11) NOT NULL,\n' +
        '  `c` int(11) NOT NULL,\n' +
        '  `v` int(11) NOT NULL,\n' +
        '  `t` text NOT NULL,\n' +
        '  PRIMARY KEY (`id`),\n' +
        '  UNIQUE KEY `id_3` (`id`),\n' +
        '  KEY `id` (`id`)\n' +
        ') ENGINE=InnoDB DEFAULT CHARSET=latin1;\n' +
        '/*!40101 SET character_set_client = @saved_cs_client */\n;' +
        '\n' +
        '\n' +
        '\n' +
        'LOCK TABLES `' + versionName + '` WRITE;\n' +
        '/*!40000 ALTER TABLE `' + versionName + '` DISABLE KEYS */;\n' +
        'INSERT INTO `' + versionName + '` VALUES '

    var bookid = 0
    bible.forEach(book => {
        bookid++

        var bookStringId = bookid + ""
        if (bookStringId.length == 1)
            bookStringId = "0" + bookStringId

        var chapters = book.chapters
        var chapterid = 0
        chapters.forEach(chapter => {
            chapterid++

            var chapterStringId = chapterid + ""
            if (chapterStringId.length == 2)
                chapterStringId = "0" + chapterStringId
            if (chapterStringId.length == 1)
                chapterStringId = "00" + chapterStringId

            var verseid = 0
            chapter.forEach(verse => {
                verseid++

                var verseStringId = verseid + ""
                if (verseStringId.length == 2)
                    verseStringId = "0" + verseStringId
                if (verseStringId.length == 1)
                    verseStringId = "00" + verseStringId

                // build id string : 01001001
                var stringID = bookStringId + chapterStringId + verseStringId

                // format verse
                verse = verse.replace(/'/g, "\\'")
                sql += "(" + stringID + "," + bookid + "," + chapterid + "," + verseid + ",\'" + verse + "\'),\n"
            })

        })
    })

    // Remove last coma
    sql = sql.substring(0, sql.length - 2);
    sql += ';\n'
    sql +=
        '\n' +
        '\n' +
        '/*!40000 ALTER TABLE `' + versionName + '` ENABLE KEYS */;\n' +
        'UNLOCK TABLES;\n' +
        '/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;\n' +
        '\n' +
        '/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;\n' +
        '/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;\n' +
        '/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;\n' +
        '/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n' +
        '/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n' +
        '/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n' +
        '/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;\n'

    var sqlFileName = versionName + ".sql"
    fs.writeFile(sqlFileName, sql, function (err) {
        if (err) return console.log(err);
        console.log('Write ' + sqlFileName);
    });
})







