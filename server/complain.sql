-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: complain
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `complain`
--

DROP TABLE IF EXISTS `complain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complain` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `reporterName` varchar(255) NOT NULL,
  `reportingFor` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `complainTime` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `complainDetails` text,
  `complainStatus` varchar(255) DEFAULT NULL,
  `userId` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `complain_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complain`
--

LOCK TABLES `complain` WRITE;
/*!40000 ALTER TABLE `complain` DISABLE KEYS */;
INSERT INTO `complain` VALUES (2,'d89c252b-f9ea-40f9-97bc-f91e6535bca3','John Doe','Musa Turay','23279366751','turaymusaa@gmail.com','2022-11-12','Kenema','Unable to buy data using the orange money mobile app','Solved',1,'2022-12-03 13:03:44','2022-12-05 11:59:10'),(3,'c5fae9cd-eab2-4387-adf3-97e235ea75a6','Musa Enoch','Musa Turay','23279366751','turaymusaa@gmail.com','2022-11-12','Kenema','Unable to buy data using the orange money mobile app','pending',1,'2022-12-03 13:03:56','2022-12-10 15:03:19'),(6,'489208c8-bc8c-4859-b527-9c71ec7231c2','Musa Turay','JamesSmith','23278812049','example@gmail.com','14: 21  03-12-2022','Kenema','I am unable to download video from youtube','Approve',1,'2022-12-03 14:24:06','2022-12-03 14:24:20'),(7,'e26df76f-4313-4ff0-aaf0-6cb0925ebfc3','Orange Sierra Leone','Jane Doe','079304003','jane@gmail.com','10: 6  05-12-2022','Freetown','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.','Working on It',4,'2022-12-05 10:07:05','2022-12-05 12:31:37'),(8,'c3df3a11-bcbd-4c96-8809-fa0e6ab5958b','Orange Sierra Leone','Musa Enoch','076506070','men@gmail.com','12: 51  05-12-2022','Freetown','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publica…','Pending',4,'2022-12-05 12:52:21','2022-12-05 12:52:21'),(9,'e18323f4-0058-4111-a021-524421de78cc','Musa Turay','Thomas Brian','23276450689','turay@gmail.com','13: 34  05-12-2022','Kenema','The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those …\n\nEXPLORE FURTHER','Pending',1,'2022-12-05 13:35:27','2022-12-05 13:35:27'),(10,'c6adb643-ffe4-40a8-a8bf-764c14c9a50a','Orange Sierra Leone','James Kem','23279945678','john@gmail.com','14: 24  05-12-2022','Freetown','un able to buy data','Working on it',4,'2022-12-05 14:25:51','2022-12-05 14:26:37'),(11,'eda73bf5-e0c1-4880-9fd4-c93ac95fc142','Nfa Musa Turay','JAmes Doe','23279454565','info@turaymusaa.com','16: 42  08-12-2022','Freetown','Hellow world','Pending',3,'2022-12-08 16:43:12','2022-12-08 16:43:12'),(12,'47281547-ac8c-4f2f-b296-b7c8fba05094','Musa Turay','Thomas Smith','23278909090','example@gmail.com','16: 44  08-12-2022','Freetown','Hello Turay','Solved',1,'2022-12-08 16:44:40','2022-12-08 16:46:45'),(13,'a784f9bb-4e64-42f1-a380-e0d632c36822','Orange Sierra Leone','Jame Kan','23279808090','info@turaymusa.com','14: 4  10-12-2022','Kenema','Cant make call','Working on it',4,'2022-12-10 14:04:45','2022-12-10 14:33:11');
/*!40000 ALTER TABLE `complain` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emaillist`
--

DROP TABLE IF EXISTS `emaillist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emaillist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emailUId` varchar(255) NOT NULL,
  `emailList` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emaillist`
--

LOCK TABLES `emaillist` WRITE;
/*!40000 ALTER TABLE `emaillist` DISABLE KEYS */;
INSERT INTO `emaillist` VALUES (1,'196c17e4-f931-407e-82da-2c1fe851024c','info@turaymusa.com','2022-12-09 23:55:32','2022-12-09 23:55:32'),(2,'6f6255b9-9bd9-401b-b8c0-449a7b8b32eb','turaymusaa@gmail.com','2022-12-09 23:55:48','2022-12-09 23:55:48'),(3,'bffc8379-fe90-42dc-bfeb-64ad09f83d39','infatorkeh@gmail.com','2022-12-09 23:55:59','2022-12-09 23:55:59');
/*!40000 ALTER TABLE `emaillist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('0l0n6juUy7LeJgFBW_mK4v_BomswE6GX','2022-12-11 00:00:35','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 00:00:35','2022-12-10 00:00:35'),('1d2jfv22hWZbx07X_0El1NjcFZoiLeU-','2022-12-11 14:08:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:08:57','2022-12-10 14:08:57'),('47wU-w1tRs98Uqd22frBBhI9zaK1bKem','2022-12-11 15:09:35','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}','2022-12-10 10:24:00','2022-12-10 15:09:35'),('9QVTpf1t5Be2z4STByWMtVcPg-LoyUod','2022-12-11 00:00:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 00:00:43','2022-12-10 00:00:43'),('a5PXsStXwJ5dUm0bTobWm-JD8cgxB5zq','2022-12-11 10:58:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 10:57:34','2022-12-10 10:58:02'),('aogdhD8Nalt5h_BxURtcXNCzMDAXooGH','2022-12-11 14:03:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:03:18','2022-12-10 14:03:18'),('JpCO058kX1JH6jhywTeRKUUyPWRlTFdO','2022-12-11 14:03:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:03:43','2022-12-10 14:03:43'),('KY8IArM-TUK7aOySvW98Yv9WZ0VnMIT9','2022-12-11 14:11:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:11:07','2022-12-10 14:11:07'),('LemckLGwBXShQ0aiaxLqi7i97OaP16sL','2022-12-11 14:24:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:24:16','2022-12-10 14:24:16'),('Lk_98psSfn_ylgOk6nJnev_NJepoWDkN','2022-12-11 14:30:58','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:30:58','2022-12-10 14:30:58'),('nArLENGzD_9TnKLlZNCxipouA-D7tqxt','2022-12-11 14:31:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:31:05','2022-12-10 14:31:05'),('pGqrglCNoW60UjUpIta0bLMnCZ9PvtpS','2022-12-11 14:03:50','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:03:50','2022-12-10 14:03:50'),('quPGdVg5FuiWbPRI4B5Lpc_bBIoiIaRq','2022-12-11 14:04:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:04:49','2022-12-10 14:04:49'),('R9SP655TMBrxHuMHEmryJFwxT6bRp0x0','2022-12-11 14:07:11','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:07:11','2022-12-10 14:07:11'),('rjNsBa5ixpxDlh5MFTGVtVtx5H1-HQFk','2022-12-11 14:05:00','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:05:00','2022-12-10 14:05:00'),('s59S7P9zBViZaE4v4KGRZuPjXdIwD1Mc','2022-12-11 14:25:47','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:25:47','2022-12-10 14:25:47'),('sBV4jsDgIn5YfE6ZgaoxTHJCeijGNxy8','2022-12-11 14:26:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:26:43','2022-12-10 14:26:43'),('SHmqcixPOMdGeNGCTRTdY4RCJoet6hej','2022-12-11 14:30:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:30:16','2022-12-10 14:30:16'),('sk4rjqZOSs0ox4jHSi79GYaVpbRY5wBU','2022-12-11 14:33:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:33:07','2022-12-10 14:33:07'),('T5WVo1dBV1h5FGg_uz3v0fn0knC1sFKh','2022-12-10 23:56:06','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}','2022-12-09 23:30:54','2022-12-09 23:56:06'),('Tb_HnANaJUeCfK2niue6EIzsKqP7XcjD','2022-12-11 14:26:54','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:26:54','2022-12-10 14:26:54'),('YfHaduzJOVAm6L4NOZfRhOEWKGoZLdEN','2022-12-11 14:04:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-12-10 14:04:45','2022-12-10 14:04:45'),('zxlYSGTUuPs0DXbBMp6TV04R1iisn5sA','2022-12-11 15:12:39','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}','2022-12-10 14:05:00','2022-12-10 15:12:39');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userUId` varchar(255) NOT NULL,
  `staffId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fc8ca42f-5d4a-4dfa-815c-d8c52c287217','15818NEW','Musa Turay','23279366751','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$35IPjoEXX0pRgkLHNSf+9g$zSKSMw3l2ORenOWy+k5SRFmyyvUC2w8bNa0R8Z4URq8','mfAnQwNo4xziJETQLghFAs7UC005H3UhnmwKkogttFCix8CrlkH6gK5wGbD1wtNGD8VZqgWHtXpHFewV0RzVHL47Z03JAVcNTVIgZDtasJ5GN0joXYTWO0cB5uh6SX3tgju61xe6skt5qj85b0GLVG','ef989208ecd5a38ddf3562d90b9f13a19f8b7693','1670160746889','2022-12-03 03:55:28','2022-12-08 21:07:17'),(3,'4710b792-2fb9-4663-95c5-6093111e8644','UP2023','Nfa Musa Turay','079366751','info@turaymusa.com','admin','$argon2id$v=19$m=65536,t=3,p=4$FZN0oYxIp1BxOYI+bcOK4w$k5GqtQUj614D3YD0o5AsofvEQla0+esrlkvmlOMOOpI',NULL,NULL,NULL,'2022-12-04 14:27:13','2022-12-04 14:27:13'),(4,'fee91c06-1c07-475e-8c33-a79de82c6ec5','OSL232','Orange Sierra Leone','23276450450','osl@gmail.com','user','$argon2id$v=19$m=65536,t=3,p=4$zBTxAlnFOW2d0eJaCm8NKQ$PzliUhhBy4bita0592290QMxtKcS+gGh7+2b/k6RMMQ',NULL,NULL,NULL,'2022-12-04 14:42:23','2022-12-04 15:09:33'),(5,'826908d7-06d2-4496-956a-690bf590a304','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$ImOWg1sJ6baah7ZcuZ87rg$HZIyY4SB7JTRoLJay8jVjytE4QfDCrd9rKFlO2byyOs',NULL,NULL,NULL,'2022-12-08 16:12:00','2022-12-08 16:12:00'),(6,'27b4d4a0-bc8f-41f6-aa68-d2298bb46d1b','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$maSxG3DI8ysIi6FmZEWe9g$AvaYRP093O/hes+2znkDQEuKqxE1U8lOnFvhcV81n+Y',NULL,NULL,NULL,'2022-12-08 16:15:10','2022-12-08 16:15:10'),(7,'f23151e6-c917-46cd-8e4f-0fa7751dbdbb','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$iTFBh8YXBupvFxakuSKTJA$KgreolFI8Jsu8jiEUEljUc8MbfbiJyAj2WG7CiOgl24',NULL,NULL,NULL,'2022-12-08 16:22:48','2022-12-08 16:22:48'),(8,'8027cb1f-1429-4be3-9f1a-9e7d83ebb39d','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$it5RXKsLYANSPpxwCUQjhg$DFhNVLLjV9tZ7lq10eNUWxtMH0J9VA8QzyAehyc7wvs',NULL,NULL,NULL,'2022-12-08 16:23:30','2022-12-08 16:23:30'),(9,'70ecef9c-8097-4a03-b6ac-78656224e373','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$wmAQl2gf5w0zb2d+BFOy+A$J9mACpxa9vTmSTbyyCzoZ7nzdw0f+eKulO0z2E7cdO4',NULL,NULL,NULL,'2022-12-08 16:24:16','2022-12-08 16:24:16'),(10,'d22e1927-eb3d-4e0f-824f-e9cf76a057c4','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$R4IrXewkXpO3vjR3AQuLuQ$JQw2Jz3UuyESd3HMB9g8M14k3LhGvFBvvonlznQWcFE',NULL,NULL,NULL,'2022-12-08 16:24:56','2022-12-08 16:24:56'),(11,'83e3cdfc-1623-4210-9765-b0a5ead61382','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$k/Qn/r8jf1gHmpLrZqqywA$YamrSkWcVBh4BOsMhtDA0bMXgROWXADbNTRJLRTawic',NULL,NULL,NULL,'2022-12-08 16:25:34','2022-12-08 16:25:34'),(12,'7a10b69d-ddbd-41da-ba8c-1436069f2799','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$RkMruy5yrwB1RzUpX0mAaQ$RWcdRj0+CLsmAX+MH4hDL9Gne7y8KnhxfxG5fKf3W4c',NULL,NULL,NULL,'2022-12-08 16:26:21','2022-12-08 16:26:21'),(13,'a92e2521-17d7-46a7-9071-db696f84c3e7','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$IHpQr1u1GLMTwipCX/wZHA$6t0dJeW3GN7kS/1DQCf2YcxtC8ybuLDM78ZP9IXEHTU',NULL,NULL,NULL,'2022-12-08 17:16:21','2022-12-08 17:16:21'),(14,'a9d6e7e5-4215-4dbb-b842-f8bb1a9ca9ec','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$4aOtOxKfIsvP8itSVePBsQ$HwP4+wat1kCf3jCnbtfCgNNNXfhSFsRUY9C9qE+MxFA',NULL,NULL,NULL,'2022-12-08 20:59:24','2022-12-08 20:59:24'),(15,'3098e502-f636-41d3-8e6c-f5508d9001af','400KEN','Gibrilla K Lahai','23278808025','turaymusaa@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$D4/Rdxc0L1Fyv18+faB0dw$4qPlvwcS7RF7j3fUmoLt/HCs8cWrUS1U6wp6CAedZqE',NULL,NULL,NULL,'2022-12-08 21:05:03','2022-12-08 21:05:03'),(16,'cb326ea9-2343-4326-9e49-88480b46ee64','900KEN','Foday S Sheriff','23279909090','sherifffoday@gmail.com','admin','$argon2id$v=19$m=65536,t=3,p=4$WB6dgd+C0D9gJk5vuJfvfQ$98LcSRMvrfADjyyCnqzPVoCc+8ErlFu+wMv5ZKLP4QM',NULL,NULL,NULL,'2022-12-08 21:07:14','2022-12-08 21:07:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-10 15:16:00
