/*
Navicat MySQL Data Transfer

Source Server         : finalProject
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : finalproject

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-18 16:48:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_account
-- ----------------------------
DROP TABLE IF EXISTS `admin_account`;
CREATE TABLE `admin_account` (
  `admin_user` char(50) DEFAULT NULL,
  `admin_pass` char(50) DEFAULT NULL,
  `admin_level` int(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_account
-- ----------------------------
INSERT INTO `admin_account` VALUES ('admin', '123', '0');
INSERT INTO `admin_account` VALUES ('admin01', '123', '1');
INSERT INTO `admin_account` VALUES ('admin02', '123', '1');

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `qid` int(4) NOT NULL AUTO_INCREMENT,
  `ques_con` varchar(500) NOT NULL,
  `ques_from` char(50) NOT NULL,
  `date` char(50) NOT NULL,
  PRIMARY KEY (`qid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO `feedback` VALUES ('1', '要加油，还有很多地方需要改进', 'zhuzhu', '2017-05-02 23:25:40');
INSERT INTO `feedback` VALUES ('2', '加油！', 'zhuzhu', '2017-05-09 10:36:36');
INSERT INTO `feedback` VALUES ('3', '加油！', 'zhuzhu', '2017-05-09 13:13:05');
INSERT INTO `feedback` VALUES ('4', '加油！', 'zhuzhu', '2017-05-13 16:49:57');
INSERT INTO `feedback` VALUES ('5', '继续努力', 'zhuzhu', '2017-05-14 23:01:14');
INSERT INTO `feedback` VALUES ('6', '细节问题还有不少呢', 'zhuzhu', '2017-05-15 09:21:24');
INSERT INTO `feedback` VALUES ('7', '不错哦', 'zhuzhu', '2017-05-15 09:38:35');
INSERT INTO `feedback` VALUES ('8', '还有问题哦', 'zhuzhu', '2017-05-15 09:39:02');

-- ----------------------------
-- Table structure for login_record
-- ----------------------------
DROP TABLE IF EXISTS `login_record`;
CREATE TABLE `login_record` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` char(50) NOT NULL,
  `date` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_record
-- ----------------------------
INSERT INTO `login_record` VALUES ('6', 'zhuzhu', '2017-04-28 12:02:55');
INSERT INTO `login_record` VALUES ('5', 'zhuzhu', '2017-04-28 11:49:18');
INSERT INTO `login_record` VALUES ('4', 'zhuzhu', '2017-04-27 00:12:58');
INSERT INTO `login_record` VALUES ('7', 'zhuzhu', '2017-04-28 14:46:09');
INSERT INTO `login_record` VALUES ('8', 'zhuzhu', '2017-04-28 14:50:25');
INSERT INTO `login_record` VALUES ('9', 'zhuzhu', '2017-04-28 14:53:45');
INSERT INTO `login_record` VALUES ('10', 'zhuzhu', '2017-04-28 14:55:30');
INSERT INTO `login_record` VALUES ('11', 'zhuzhu', '2017-04-28 15:08:35');
INSERT INTO `login_record` VALUES ('12', 'zhuzhu', '2017-04-28 15:46:02');
INSERT INTO `login_record` VALUES ('13', 'zhuzhu', '2017-04-28 16:12:59');
INSERT INTO `login_record` VALUES ('14', 'zhuzhuo0', '2017-04-28 16:15:46');
INSERT INTO `login_record` VALUES ('15', 'zhuzhu', '2017-04-28 16:36:57');
INSERT INTO `login_record` VALUES ('16', 'zhuzhu', '2017-04-28 16:38:38');
INSERT INTO `login_record` VALUES ('17', 'zhuzhu', '2017-04-28 16:39:33');
INSERT INTO `login_record` VALUES ('18', 'zhuzhu', '2017-04-28 16:39:52');
INSERT INTO `login_record` VALUES ('19', 'zhuzhu', '2017-04-28 16:41:51');
INSERT INTO `login_record` VALUES ('20', 'zhuzhu', '2017-04-28 16:44:04');
INSERT INTO `login_record` VALUES ('21', 'zhuzhu', '2017-04-28 16:44:17');
INSERT INTO `login_record` VALUES ('22', 'zhuzhu', '2017-04-28 16:45:05');
INSERT INTO `login_record` VALUES ('23', 'zhuzhu', '2017-04-28 16:45:13');
INSERT INTO `login_record` VALUES ('24', 'zhuzhu', '2017-04-28 16:45:29');
INSERT INTO `login_record` VALUES ('25', 'zhuzhu', '2017-04-28 16:46:23');
INSERT INTO `login_record` VALUES ('26', 'zhuzhu', '2017-04-28 16:48:15');
INSERT INTO `login_record` VALUES ('27', 'zhuzhu', '2017-04-28 16:52:33');
INSERT INTO `login_record` VALUES ('28', 'zhuzhu', '2017-04-28 17:09:07');
INSERT INTO `login_record` VALUES ('29', 'zhuzhu', '2017-04-28 17:13:29');
INSERT INTO `login_record` VALUES ('30', 'zhuzhu', '2017-04-28 17:13:44');
INSERT INTO `login_record` VALUES ('31', 'zhuzhu', '2017-04-30 17:28:06');
INSERT INTO `login_record` VALUES ('32', 'zhuzhu', '2017-05-01 00:02:53');
INSERT INTO `login_record` VALUES ('33', 'zhuzhu', '2017-05-01 00:06:32');
INSERT INTO `login_record` VALUES ('34', 'zhuzhu', '2017-05-01 00:08:07');
INSERT INTO `login_record` VALUES ('35', 'zhuzhu', '2017-05-01 00:11:36');
INSERT INTO `login_record` VALUES ('36', 'zhuzhu', '2017-05-01 00:16:49');
INSERT INTO `login_record` VALUES ('37', 'zhuzhu', '2017-05-01 00:19:05');
INSERT INTO `login_record` VALUES ('38', 'zhuzhu', '2017-05-01 15:29:13');
INSERT INTO `login_record` VALUES ('39', 'zhuzhu', '2017-05-01 15:30:33');
INSERT INTO `login_record` VALUES ('40', 'zhuzhu', '2017-05-01 16:47:34');
INSERT INTO `login_record` VALUES ('41', 'zhuzhu', '2017-05-01 16:56:06');
INSERT INTO `login_record` VALUES ('42', 'zhuzhu', '2017-05-01 17:11:34');
INSERT INTO `login_record` VALUES ('43', 'zhuzhu', '2017-05-01 17:13:37');
INSERT INTO `login_record` VALUES ('44', 'zhuzhu', '2017-05-01 17:16:16');
INSERT INTO `login_record` VALUES ('45', 'zhuzhu', '2017-05-01 17:32:35');
INSERT INTO `login_record` VALUES ('46', 'zhuzhu', '2017-05-01 19:08:07');
INSERT INTO `login_record` VALUES ('47', 'zhuzhu', '2017-05-01 19:10:22');
INSERT INTO `login_record` VALUES ('48', 'zhuzhu', '2017-05-01 19:12:43');
INSERT INTO `login_record` VALUES ('49', 'zhuzhu', '2017-05-01 22:43:10');
INSERT INTO `login_record` VALUES ('50', 'zhuzhu', '2017-05-01 22:47:08');
INSERT INTO `login_record` VALUES ('51', 'zhuzhu', '2017-05-01 22:48:12');
INSERT INTO `login_record` VALUES ('52', 'zhuzhu', '2017-05-01 22:49:34');
INSERT INTO `login_record` VALUES ('53', 'zhuzhu', '2017-05-01 22:52:35');
INSERT INTO `login_record` VALUES ('54', 'zhuzhu', '2017-05-01 22:54:18');
INSERT INTO `login_record` VALUES ('55', 'zhuzhu', '2017-05-02 10:28:48');
INSERT INTO `login_record` VALUES ('56', 'zhuzhuo0', '2017-05-02 10:31:55');
INSERT INTO `login_record` VALUES ('57', 'zhuzhuhh', '2017-05-02 10:32:23');
INSERT INTO `login_record` VALUES ('58', 'zhuzhuhh', '2017-05-02 10:46:28');
INSERT INTO `login_record` VALUES ('59', 'zhuzhuoo', '2017-05-02 10:57:18');
INSERT INTO `login_record` VALUES ('60', 'zhuzhu', '2017-05-02 11:56:29');
INSERT INTO `login_record` VALUES ('61', 'zhuzhu', '2017-05-02 12:00:09');
INSERT INTO `login_record` VALUES ('62', 'zhuzhu', '2017-05-02 14:53:35');
INSERT INTO `login_record` VALUES ('63', 'zhuzhu', '2017-05-02 14:55:31');
INSERT INTO `login_record` VALUES ('64', 'zhuzhu', '2017-05-02 15:02:21');
INSERT INTO `login_record` VALUES ('65', 'zhuzhu', '2017-05-02 15:03:36');
INSERT INTO `login_record` VALUES ('66', 'zhuzhu', '2017-05-02 15:05:05');
INSERT INTO `login_record` VALUES ('67', 'zhuzhu', '2017-05-02 16:01:59');
INSERT INTO `login_record` VALUES ('68', 'zhuzhu', '2017-05-02 16:03:17');
INSERT INTO `login_record` VALUES ('69', 'zhuzhu', '2017-05-02 16:05:05');
INSERT INTO `login_record` VALUES ('70', 'zhuzhu', '2017-05-02 16:15:50');
INSERT INTO `login_record` VALUES ('71', 'zhuzhu', '2017-05-02 16:20:36');
INSERT INTO `login_record` VALUES ('72', 'zhuzhu', '2017-05-02 16:27:22');
INSERT INTO `login_record` VALUES ('73', 'zhuzhu', '2017-05-02 16:36:16');
INSERT INTO `login_record` VALUES ('74', 'zhuzhu', '2017-05-02 17:52:17');
INSERT INTO `login_record` VALUES ('75', 'zhuzhu', '2017-05-02 17:59:35');
INSERT INTO `login_record` VALUES ('76', 'zhuzhu', '2017-05-02 23:18:53');
INSERT INTO `login_record` VALUES ('77', 'zhuzhu', '2017-05-03 14:06:03');
INSERT INTO `login_record` VALUES ('78', 'zhuzhu', '2017-05-03 22:05:25');
INSERT INTO `login_record` VALUES ('79', 'zhuzhu', '2017-05-03 22:09:33');
INSERT INTO `login_record` VALUES ('80', 'zhuzhu', '2017-05-03 22:12:57');
INSERT INTO `login_record` VALUES ('81', 'zhuzhu', '2017-05-03 22:26:28');
INSERT INTO `login_record` VALUES ('82', 'zhuzhu', '2017-05-03 22:31:08');
INSERT INTO `login_record` VALUES ('83', 'zhuzhu', '2017-05-03 22:32:10');
INSERT INTO `login_record` VALUES ('84', 'zhuzhu', '2017-05-03 22:38:49');
INSERT INTO `login_record` VALUES ('85', 'zhuzhu', '2017-05-03 23:18:33');
INSERT INTO `login_record` VALUES ('86', 'zhuzhu', '2017-05-03 23:20:12');
INSERT INTO `login_record` VALUES ('87', 'zhuzhu', '2017-05-03 23:21:13');
INSERT INTO `login_record` VALUES ('88', 'zhuzhu', '2017-05-03 23:22:11');
INSERT INTO `login_record` VALUES ('89', 'zhuzhu', '2017-05-03 23:45:19');
INSERT INTO `login_record` VALUES ('90', 'zhuzhu', '2017-05-03 23:46:59');
INSERT INTO `login_record` VALUES ('91', 'zhuzhu', '2017-05-04 00:26:38');
INSERT INTO `login_record` VALUES ('92', 'zhuzhu', '2017-05-07 21:34:34');
INSERT INTO `login_record` VALUES ('93', 'zhuzhu', '2017-05-07 22:24:04');
INSERT INTO `login_record` VALUES ('94', 'zhuzhu', '2017-05-07 22:25:35');
INSERT INTO `login_record` VALUES ('95', 'zhuzhu', '2017-05-07 22:28:05');
INSERT INTO `login_record` VALUES ('96', 'zhuzhu', '2017-05-07 22:57:32');
INSERT INTO `login_record` VALUES ('97', 'zhuzhu', '2017-05-07 23:06:28');
INSERT INTO `login_record` VALUES ('98', 'zhuzhu', '2017-05-07 23:36:20');
INSERT INTO `login_record` VALUES ('99', 'zhuzhu', '2017-05-07 23:38:17');
INSERT INTO `login_record` VALUES ('100', 'zhuzhu', '2017-05-08 11:23:23');
INSERT INTO `login_record` VALUES ('101', 'zhuzhu', '2017-05-08 14:03:14');
INSERT INTO `login_record` VALUES ('102', 'zhuzhu', '2017-05-08 14:23:21');
INSERT INTO `login_record` VALUES ('103', 'zhuzhu', '2017-05-08 14:24:35');
INSERT INTO `login_record` VALUES ('104', 'zhuzhu', '2017-05-08 14:25:18');
INSERT INTO `login_record` VALUES ('105', 'zhuzhu', '2017-05-08 14:52:23');
INSERT INTO `login_record` VALUES ('106', 'zhuzhu', '2017-05-10 15:10:50');
INSERT INTO `login_record` VALUES ('107', 'zhuzhu', '2017-05-13 23:49:06');
INSERT INTO `login_record` VALUES ('108', 'zhuzhu', '2017-05-14 14:46:25');
INSERT INTO `login_record` VALUES ('109', 'zhuzhu', '2017-05-14 14:50:20');
INSERT INTO `login_record` VALUES ('110', 'zhuzhu', '2017-05-14 17:08:46');
INSERT INTO `login_record` VALUES ('111', 'zhuzhu', '2017-05-14 22:33:44');
INSERT INTO `login_record` VALUES ('112', 'zhuzhu', '2017-05-14 22:41:52');
INSERT INTO `login_record` VALUES ('113', 'zhuzhu', '2017-05-14 22:50:57');
INSERT INTO `login_record` VALUES ('114', 'zhuzhu', '2017-05-14 22:58:00');
INSERT INTO `login_record` VALUES ('115', 'zhuzhu', '2017-05-15 00:01:28');
INSERT INTO `login_record` VALUES ('116', 'zhuzhu', '2017-05-15 08:44:52');
INSERT INTO `login_record` VALUES ('117', 'zhuzhuoo', '2017-05-15 09:02:05');
INSERT INTO `login_record` VALUES ('118', 'zhuzhuoo', '2017-05-15 09:10:28');
INSERT INTO `login_record` VALUES ('119', 'zhuzhu', '2017-05-15 09:12:17');
INSERT INTO `login_record` VALUES ('120', 'zhuzhu', '2017-05-15 09:38:04');
INSERT INTO `login_record` VALUES ('124', 'zhuzhu', '2017-05-15 14:07:28');
INSERT INTO `login_record` VALUES ('123', 'zhuzhuoo', '2017-05-15 10:24:25');

-- ----------------------------
-- Table structure for rank_china
-- ----------------------------
DROP TABLE IF EXISTS `rank_china`;
CREATE TABLE `rank_china` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  `rank` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rank_china
-- ----------------------------
INSERT INTO `rank_china` VALUES ('16', '刚好遇见你', '李玉刚', 'data/Songs/song16.mp3', '刚好遇见你', '1');
INSERT INTO `rank_china` VALUES ('17', '南山南', '马頔', 'data/Songs/song17.mp3', '孤岛', '2');
INSERT INTO `rank_china` VALUES ('18', '一千个伤心的理由', '张学友', 'data/Songs/song18.mp3', '情缘十载', '3');
INSERT INTO `rank_china` VALUES ('19', '她来听我的演唱会', '张学友', 'data/Songs/song19.mp3', '友情歌', '4');
INSERT INTO `rank_china` VALUES ('20', '空', '汪小敏', 'data/Songs/song20.mp3', '空', '5');
INSERT INTO `rank_china` VALUES ('21', '手心的蔷薇', '林俊杰,G.E.M.邓紫棋', 'data/Songs/song21.mp3', '新地球', '6');
INSERT INTO `rank_china` VALUES ('22', '芊芊', '回音哥', 'data/Songs/song22.mp3', '回音Echo', '7');
INSERT INTO `rank_china` VALUES ('22', '多幸运', '韩安旭', 'data/Songs/song22.mp3', '多幸运', '8');
INSERT INTO `rank_china` VALUES ('24', '燕归巢', '张靓颖，张杰', 'data/Songs/song24.mp3', '燕归巢', '9');
INSERT INTO `rank_china` VALUES ('25', '理想', '赵雷', 'data/Songs/song25.mp3', '理想', '10');

-- ----------------------------
-- Table structure for rank_english
-- ----------------------------
DROP TABLE IF EXISTS `rank_english`;
CREATE TABLE `rank_english` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  `rank` int(4) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rank_english
-- ----------------------------
INSERT INTO `rank_english` VALUES ('26', 'Immortals', 'Fall Out Boy', 'data/Songs/song26.mp3', 'American Beauty', '1');
INSERT INTO `rank_english` VALUES ('27', 'Destiny', 'Jim Brickman', 'data/Songs/song27.mp3', 'Destiny', '2');
INSERT INTO `rank_english` VALUES ('28', 'Because Of You', 'Kelly Clarkson', 'data/Songs/song28.mp3', 'Kelly Clarkson', '3');
INSERT INTO `rank_english` VALUES ('29', 'Him', 'Lily Allen', 'data/Songs/song29.mp3', 'It\'s Not Me, It\'s You', '4');
INSERT INTO `rank_english` VALUES ('30', 'Pretty Boy', 'M2M', 'data/Songs/song30.mp3', 'The Day You Went Away', '5');
INSERT INTO `rank_english` VALUES ('31', 'Love to be loved by you', 'Marc Terenzi', 'data/Songs/song31.mp3', '1999 hoho', '6');
INSERT INTO `rank_english` VALUES ('32', 'Burning', 'Maria Arredondo', 'data/Songs/song32.mp3', 'Not Going Under', '7');
INSERT INTO `rank_english` VALUES ('33', 'Sometimes When We Touch', 'Olivia', 'data/Songs/song33.mp3', 'Fall in love with', '8');
INSERT INTO `rank_english` VALUES ('34', 'Counting Stars', 'OneRepublic', 'data/Songs/song34.mp3', 'Native', '9');
INSERT INTO `rank_english` VALUES ('35', 'I Still Believe', '常石磊', 'data/Songs/song35.mp3', '华语流行在线', '10');

-- ----------------------------
-- Table structure for rank_japan
-- ----------------------------
DROP TABLE IF EXISTS `rank_japan`;
CREATE TABLE `rank_japan` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  `rank` int(4) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rank_japan
-- ----------------------------
INSERT INTO `rank_japan` VALUES ('6', 'オキノタユウ', '和楽器バンド', 'data/Songs/song06.mp3', 'オキノタユウ', '1');
INSERT INTO `rank_japan` VALUES ('7', 'ワタシ・至上主義', '和楽器バンド', 'data/Songs/song07.mp3', '四季彩-shikisai-', '2');
INSERT INTO `rank_japan` VALUES ('8', '風鈴の唄うたい', '和楽器バンド', 'data/Songs/song08.mp3', '八奏絵巻', '3');
INSERT INTO `rank_japan` VALUES ('9', '空の極みへ', '和楽器バンド', 'data/Songs/song09.mp3', '四季彩-shikisai-', '4');
INSERT INTO `rank_japan` VALUES ('10', '鳥のように', '和楽器バンド', 'data/Songs/song10.mp3', '四季彩-shikisai-', '5');
INSERT INTO `rank_japan` VALUES ('11', '望月', '和楽器バンド', 'data/Songs/song11.mp3', '四季彩-shikisai-', '6');
INSERT INTO `rank_japan` VALUES ('12', '暁ノ糸', '和楽器バンド', 'data/Songs/song12.mp3', '八奏絵巻', '7');
INSERT INTO `rank_japan` VALUES ('13', '雪よ舞い散れ其方に向けて', '和楽器バンド', 'data/Songs/song13.mp3', '四季彩-shikisai-', '8');
INSERT INTO `rank_japan` VALUES ('14', '虹色蝶々', '和楽器バンド', 'data/Songs/song14.mp3', '序章', '9');
INSERT INTO `rank_japan` VALUES ('15', '永世のクレイドル', '鈴華優子', 'data/Songs/song15.mp3', 'CRADLE OF ETERNITY', '10');

-- ----------------------------
-- Table structure for songlist
-- ----------------------------
DROP TABLE IF EXISTS `songlist`;
CREATE TABLE `songlist` (
  `sid` int(4) NOT NULL AUTO_INCREMENT,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of songlist
-- ----------------------------
INSERT INTO `songlist` VALUES ('1', 'It is Amazing', 'Jem', 'data/Songs/song01.mp3', 'Sex And The City');
INSERT INTO `songlist` VALUES ('2', 'K歌之王', '陈奕迅', 'data/Songs/song02.mp3', 'Get A Life 演唱会');
INSERT INTO `songlist` VALUES ('3', '方圆几里', '薛之谦', 'data/Songs/song03.mp3', '意外');
INSERT INTO `songlist` VALUES ('4', '刚刚好', '薛之谦', 'data/Songs/song04.mp3', '初学者');
INSERT INTO `songlist` VALUES ('5', '绅士', '薛之谦', 'data/Songs/song05.mp3', '初学者');
INSERT INTO `songlist` VALUES ('6', 'オキノタユウ', '和楽器バンド', 'data/Songs/song06.mp3', 'オキノタユウ');
INSERT INTO `songlist` VALUES ('7', 'ワタシ・至上主義', '和楽器バンド', 'data/Songs/song07.mp3', '四季彩-shikisai-');
INSERT INTO `songlist` VALUES ('8', '風鈴の唄うたい', '和楽器バンド', 'data/Songs/song08.mp3', '八奏絵巻');
INSERT INTO `songlist` VALUES ('9', '空の極みへ', '和楽器バンド', 'data/Songs/song09.mp3', '四季彩-shikisai-');
INSERT INTO `songlist` VALUES ('10', '鳥のように', '和楽器バンド', 'data/Songs/song10.mp3', '四季彩-shikisai-');
INSERT INTO `songlist` VALUES ('11', '望月', '和楽器バンド', 'data/Songs/song11.mp3', '四季彩-shikisai-');
INSERT INTO `songlist` VALUES ('12', '暁ノ糸', '和楽器バンド', 'data/Songs/song12.mp3', '八奏絵巻');
INSERT INTO `songlist` VALUES ('13', '雪よ舞い散れ其方に向けて', '和楽器バンド', 'data/Songs/song13.mp3', '四季彩-shikisai-');
INSERT INTO `songlist` VALUES ('14', '虹色蝶々', '和楽器バンド', 'data/Songs/song14.mp3', '序章');
INSERT INTO `songlist` VALUES ('15', '永世のクレイドル', '鈴華優子', 'data/Songs/song15.mp3', 'CRADLE OF ETERNITY');
INSERT INTO `songlist` VALUES ('16', '刚好遇见你', '李玉刚', 'data/Songs/song16.mp3', '刚好遇见你');
INSERT INTO `songlist` VALUES ('17', '南山南', '马頔', 'data/Songs/song17.mp3', '孤岛');
INSERT INTO `songlist` VALUES ('18', '一千个伤心的理由', '张学友', 'data/Songs/song18.mp3', '情缘十载');
INSERT INTO `songlist` VALUES ('19', '她来听我的演唱会', '张学友', 'data/Songs/song19.mp3', '友情歌');
INSERT INTO `songlist` VALUES ('20', '空', '汪小敏', 'data/Songs/song20.mp3', '空');
INSERT INTO `songlist` VALUES ('21', '手心的蔷薇', '林俊杰,G.E.M.邓紫棋', 'data/Songs/song21.mp3', '新地球');
INSERT INTO `songlist` VALUES ('22', '芊芊', '回音哥', 'data/Songs/song22.mp3', '回音Echo');
INSERT INTO `songlist` VALUES ('23', '多幸运', '韩安旭', 'data/Songs/song23.mp3', '多幸运');
INSERT INTO `songlist` VALUES ('24', '燕归巢', '张靓颖,张杰', 'data/Songs/song24.mp3', '燕归巢');
INSERT INTO `songlist` VALUES ('25', '成都', '赵雷', 'data/Songs/song25.mp3', '成都');
INSERT INTO `songlist` VALUES ('26', 'Immortals', 'Fall Out Boy', 'data/Songs/song26.mp3', 'American Beauty');
INSERT INTO `songlist` VALUES ('27', 'Destiny', 'Jim Brickman', 'data/Songs/song27.mp3', 'Destiny');
INSERT INTO `songlist` VALUES ('28', 'Because Of You', 'Kelly Clarkson', 'data/Songs/song28.mp3', 'Kelly Clarkson');
INSERT INTO `songlist` VALUES ('29', 'Him', 'Lily Allen', 'data/Songs/song29.mp3', 'It\'s Not Me, It\'s You');
INSERT INTO `songlist` VALUES ('30', 'Pretty Boy', 'M2M', 'data/Songs/song30.mp3', 'The Day You Went Away');
INSERT INTO `songlist` VALUES ('31', 'Love to be loved by you', 'Marc Terenzi', 'data/Songs/song31.mp3', '1999 hoho');
INSERT INTO `songlist` VALUES ('32', 'Burning', 'Maria Arredondo', 'data/Songs/song32.mp3', 'Not Going Under');
INSERT INTO `songlist` VALUES ('33', 'Sometimes When We Touch', 'Olivia', 'data/Songs/song33.mp3', 'Fall in love with');
INSERT INTO `songlist` VALUES ('34', 'Counting Stars', 'OneRepublic', 'data/Songs/song34.mp3', 'Native');
INSERT INTO `songlist` VALUES ('35', 'I Still Believe', '常石磊', 'data/Songs/song35.mp3', '华语流行在线');

-- ----------------------------
-- Table structure for song_comment
-- ----------------------------
DROP TABLE IF EXISTS `song_comment`;
CREATE TABLE `song_comment` (
  `sid` int(4) NOT NULL,
  `songname` char(50) NOT NULL,
  `comment_con` varchar(500) NOT NULL,
  `comment_from` char(50) NOT NULL,
  `date` char(50) NOT NULL,
  `comment_id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`comment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of song_comment
-- ----------------------------
INSERT INTO `song_comment` VALUES ('6', 'オキノタユウ', 'gggg', 'zhuzhu', '2017-05-14 22:34:30', '8');
INSERT INTO `song_comment` VALUES ('13', '雪よ舞い散れ其方に向けて', '好听', 'zhuzhu', '2017-05-14 22:55:39', '9');
INSERT INTO `song_comment` VALUES ('8', '風鈴の唄うたい', '不错哦', 'hoho', '2017-05-15 09:49:17', '20');
INSERT INTO `song_comment` VALUES ('4', '刚刚好', '不错哦', 'zhuzhuoo', '2017-05-15 09:11:03', '10');
INSERT INTO `song_comment` VALUES ('12', '暁ノ糸', '不错哦', 'zhuzhuoo', '2017-05-15 09:11:34', '11');
INSERT INTO `song_comment` VALUES ('7', 'ワタシ・至上主義', '不错', 'zhuzhu', '2017-05-15 09:13:39', '12');
INSERT INTO `song_comment` VALUES ('27', 'Destiny', '不错哦', 'zhuzhu', '2017-05-15 09:41:23', '18');
INSERT INTO `song_comment` VALUES ('7', 'ワタシ・至上主義', '不错', 'zhuzhu', '2017-05-15 09:17:02', '14');
INSERT INTO `song_comment` VALUES ('5', '绅士', '不错', 'zhuzhu', '2017-05-15 09:17:23', '15');
INSERT INTO `song_comment` VALUES ('9', '空の極みへ', '不错', 'zhuzhu', '2017-05-15 09:17:41', '16');
INSERT INTO `song_comment` VALUES ('1', 'It is Amazing', 'Jem', 'hoho', '2017-05-15 09:50:26', '21');
INSERT INTO `song_comment` VALUES ('34', 'Counting Stars', '不错哦', 'zhuzhu', '2017-05-15 14:09:04', '23');

-- ----------------------------
-- Table structure for update_news
-- ----------------------------
DROP TABLE IF EXISTS `update_news`;
CREATE TABLE `update_news` (
  `upid` int(10) NOT NULL AUTO_INCREMENT,
  `update_con` varchar(500) NOT NULL,
  `update_date` char(50) NOT NULL,
  PRIMARY KEY (`upid`)
) ENGINE=MyISAM AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of update_news
-- ----------------------------
INSERT INTO `update_news` VALUES ('1001', '本次更新了如下内容：1.XXXXXXXXXX 2.XXXXXXXXX 3.XXXXXX', '2017-05-02 11:41:50');
INSERT INTO `update_news` VALUES ('1002', '本次更新了如下内容：1.XXXXXXXXXX 2.XXXXXXXXX 3.XXXXXX', '2017-05-03 11:41:50');
INSERT INTO `update_news` VALUES ('1005', '本次更新了如下内容：1.XXXXXXXXXX 2.XXXXXXXXX 3.XXXXXX', '2017-05-15 13:02:43');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` char(20) NOT NULL,
  `password` char(20) NOT NULL,
  `usertel` char(50) NOT NULL,
  `useremail` char(50) NOT NULL,
  `userqq` char(50) NOT NULL,
  `selform` char(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('zhuzhu', '950311', '17183460847', '422914219@qq.com', '422914219', 'zhuzhu');
INSERT INTO `user` VALUES ('zhuzhuoo', '950311', '18180546153', '123456@qq.com', '123456', 'zhuzhuoo');

-- ----------------------------
-- Table structure for zhuzhu
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhu`;
CREATE TABLE `zhuzhu` (
  `formName` char(50) NOT NULL,
  `formId` char(50) NOT NULL,
  `listId` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhu
-- ----------------------------
INSERT INTO `zhuzhu` VALUES ('我喜欢的歌曲', 'zhuzhulist01', '1');
INSERT INTO `zhuzhu` VALUES ('和乐器乐团', 'zhuzhulist02', '2');
INSERT INTO `zhuzhu` VALUES ('中文歌曲', 'zhuzhulist07', '7');
INSERT INTO `zhuzhu` VALUES ('魔力红', 'zhuzhulist04', '4');

-- ----------------------------
-- Table structure for zhuzhulist01
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhulist01`;
CREATE TABLE `zhuzhulist01` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhulist01
-- ----------------------------
INSERT INTO `zhuzhulist01` VALUES ('10', '鳥のように', '和楽器バンド', 'data/Songs/song10.mp3', '四季彩-shikisai-');
INSERT INTO `zhuzhulist01` VALUES ('5', '绅士', '薛之谦', 'data/Songs/song05.mp3', '初学者');
INSERT INTO `zhuzhulist01` VALUES ('34', 'Counting Stars', 'OneRepublic', 'data/Songs/song34.mp3', 'Native');

-- ----------------------------
-- Table structure for zhuzhulist02
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhulist02`;
CREATE TABLE `zhuzhulist02` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhulist02
-- ----------------------------
INSERT INTO `zhuzhulist02` VALUES ('6', 'オキノタユウ', '和楽器バンド', 'data/Songs/song06.mp3', 'オキノタユウ');

-- ----------------------------
-- Table structure for zhuzhulist04
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhulist04`;
CREATE TABLE `zhuzhulist04` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhulist04
-- ----------------------------
INSERT INTO `zhuzhulist04` VALUES ('27', 'Destiny', 'Jim Brickman', 'data/Songs/song27.mp3', 'Destiny');
INSERT INTO `zhuzhulist04` VALUES ('11', '望月', '和楽器バンド', 'data/Songs/song11.mp3', '四季彩-shikisai-');
INSERT INTO `zhuzhulist04` VALUES ('31', 'Love to be loved by you', 'Marc Terenzi', 'data/Songs/song31.mp3', '1999 hoho');

-- ----------------------------
-- Table structure for zhuzhulist07
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhulist07`;
CREATE TABLE `zhuzhulist07` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhulist07
-- ----------------------------
INSERT INTO `zhuzhulist07` VALUES ('22', '芊芊', '回音哥', 'data/Songs/song22.mp3', '回音Echo');
INSERT INTO `zhuzhulist07` VALUES ('11', '望月', '和楽器バンド', 'data/Songs/song11.mp3', '四季彩-shikisai-');

-- ----------------------------
-- Table structure for zhuzhuoo
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoo`;
CREATE TABLE `zhuzhuoo` (
  `formName` char(50) NOT NULL,
  `formId` char(50) NOT NULL,
  `listId` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoo
-- ----------------------------
INSERT INTO `zhuzhuoo` VALUES ('你好', 'zhuzhuoolist01', '1');
INSERT INTO `zhuzhuoo` VALUES ('歌曲', 'zhuzhuoolist06', '6');
INSERT INTO `zhuzhuoo` VALUES ('日文歌曲', 'zhuzhuoolist03', '3');
INSERT INTO `zhuzhuoo` VALUES ('英文歌曲', 'zhuzhuoolist04', '4');
INSERT INTO `zhuzhuoo` VALUES ('中文歌曲', 'zhuzhuoolist05', '5');

-- ----------------------------
-- Table structure for zhuzhuoolist01
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoolist01`;
CREATE TABLE `zhuzhuoolist01` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoolist01
-- ----------------------------

-- ----------------------------
-- Table structure for zhuzhuoolist03
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoolist03`;
CREATE TABLE `zhuzhuoolist03` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoolist03
-- ----------------------------

-- ----------------------------
-- Table structure for zhuzhuoolist04
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoolist04`;
CREATE TABLE `zhuzhuoolist04` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoolist04
-- ----------------------------

-- ----------------------------
-- Table structure for zhuzhuoolist05
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoolist05`;
CREATE TABLE `zhuzhuoolist05` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoolist05
-- ----------------------------

-- ----------------------------
-- Table structure for zhuzhuoolist06
-- ----------------------------
DROP TABLE IF EXISTS `zhuzhuoolist06`;
CREATE TABLE `zhuzhuoolist06` (
  `sid` int(4) NOT NULL,
  `songName` char(50) NOT NULL,
  `author` char(50) NOT NULL,
  `songUrl` char(50) NOT NULL,
  `songFrom` char(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuzhuoolist06
-- ----------------------------
