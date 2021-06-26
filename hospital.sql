-- MySQL dump 10.13  Distrib 5.7.34, for Linux (x86_64)
--
-- Host: localhost    Database: hospital
-- ------------------------------------------------------
-- Server version	5.7.34

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
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(100) NOT NULL,
  `patient_sex` varchar(100) NOT NULL,
  `patient_religion` varchar(100) NOT NULL,
  `patient_phone` varchar(255) NOT NULL,
  `patient_address` varchar(255) NOT NULL,
  `patient_nik` varchar(255) NOT NULL,
  `patient_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `patient_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (2,'aiman','pria','moslem','812982311','indonesia','32879121','2021-06-02 04:59:42','2021-06-02 04:59:42'),(4,'wiging','pria','moslem','812982311','arab','36031205','2021-06-25 13:54:29','2021-06-25 13:54:28'),(5,'Christine','perempuan','Kristen','889182930481','Cileungsi','3603120509920001','2021-06-25 16:49:57','2021-06-25 16:49:56'),(6,'Clauria','perempuan','Kristen','082309821039','Cileungsi','3603120509920004','2021-06-25 16:52:50','2021-06-26 08:19:39'),(7,'Madun','Laki-laki','Buddha','082318180489','California','3803180205900002','2021-06-25 19:00:55','2021-06-25 19:00:54'),(8,'Cantika','Perempuan','Katolik','081210985072','Ciamis','3603121908990008','2021-06-26 04:42:14','2021-06-26 04:42:14'),(9,'Bastian','Laki-laki','Moslem','082319842991','Zimbabwe','3603128910190002','2021-06-26 08:55:06','2021-06-26 08:55:05');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-26 19:43:39
