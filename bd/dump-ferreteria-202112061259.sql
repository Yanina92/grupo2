-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: ferreteria
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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

DROP database IF EXISTS ferreteria_db;
CREATE database ferreteria_db;
use ferreteria_db;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Laborer'),(2,'Equipment Operator'),(3,'Carpenter'),(4,'Pipelayer'),(5,'Terrazzo'),(6,'Tile Setter'),(7,'Sheet Metal Worker'),(8,'Pipefitter'),(9,'Welder'),(10,'Refridgeration'),(11,'Linemen'),(12,'Ironworker'),(13,'Glazier'),(14,'Stucco Mason'),(15,'Laborer'),(16,'Plasterers'),(17,'Brickmason'),(18,'HVAC'),(19,'Safety Officer'),(20,'Casework');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Framing (Wood)'),(2,'Wall Protection'),(3,'Drywall & Acoustical (FED)'),(4,'Structural & Misc Steel Erection'),(5,'Epoxy Flooring'),(6,'Fire Protection'),(7,'Curb & Gutter'),(8,'Hard Tile & Stone'),(9,'Prefabricated Aluminum Metal Canopies'),(10,'Marlite Panels (FED)'),(11,'Soft Flooring and Base'),(12,'Fire Sprinkler System'),(13,'Drilled Shafts'),(14,'Sitework & Site Utilities'),(15,'Roofing (Asphalt)'),(16,'Exterior Signage'),(17,'Temp Fencing, Decorative Fencing and Gates'),(18,'Electrical'),(19,'Hard Tile & Stone'),(20,'Casework');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `offer` tinyint(4) NOT NULL,
  `discount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `stock` tinyint(4) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5b624d80-9888-4f02-bbad-cc136eac0bc6` (`id_category`),
  KEY `FK_582fdbb9-58d7-4a25-b3bc-5c10f08fabe6` (`id_brand`),
  CONSTRAINT `FK_582fdbb9-58d7-4a25-b3bc-5c10f08fabe6` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id`),
  CONSTRAINT `FK_5b624d80-9888-4f02-bbad-cc136eac0bc6` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Wood','Wood effect wood vinyl rug',0,0,7352,'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/21768.png',1,1,1),(2,'Stone','Vector Textura De Pared De Piedra',0,1,2256,'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/8/-/8-727_stone_wall_web.jpg',1,2,2),(3,'Stone','Rock Stone Texture Background',0,1,4097,'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/21768.png',1,3,3),(4,'Brass','Varilla de latón Material en todo tipo de barra redonda',0,1,2842,'https://image.made-in-china.com/202f0j10ldFacHRMABqr/Brass-Rod-Material-in-All-Kind-of-Shape-Brass-Round-Bar.jpg',1,4,4),(5,'Plastic','The Good Plastic Company',0,1,9416,'https://thegoodplasticcompany.com/wp-content/uploads/2020/05/IMG_The_Good_Plastic_Company_11-1-scaled.jpg',1,6,6),(6,'Rubber','Making the production of rubber better for the planet',0,0,5282,'https://www.thermofisher.com/blog/materials/wp-content/uploads/sites/7/2016/02/istock_000081454873_medium12.jpg',1,7,7),(7,'Granite','Valle Nevado Granite',0,1,1631,'https://cdn.msisurfaces.com/images/colornames/valle-nevado-granite.jpg',1,8,8),(8,'Plastic','Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',0,0,2930,'https://www.climatizacion-sustentable.com/wp-content/uploads/2018/09/project_6.jpg',1,9,9),(9,'Plexiglass','Plexiglass 6mm',0,0,3754,'https://www.fogel.store/210-medium_default/plexiglass-6mm.jpg',1,7,10),(10,'Brass','Marlite FRP Wall Panel Installation',0,1,7533,'https://westcoastwallpros.com/wp-content/uploads/2019/09/frp-wall-panel-installation-1.jpg',1,10,11),(11,'Stone','alderwood stacked stone flats - Forshaw of St. Louis',0,0,3746,'https://image.shutterstock.com/image-photo/background-decorative-polished-river-stones-260nw-1841664148.jpg',1,4,8),(12,'Plastic','Plastic Raw Material',0,1,1460,'https://4.imimg.com/data4/OR/LR/MY-3583858/plastic-raw-material-500x500.jpg',1,11,12),(13,'Aluminum','Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',0,1,5228,'https://cff2.earth.com/uploads/2018/11/26215931/what-is-aluminum-1024x683.jpg',1,12,6),(14,'Aluminum','Guide to Aluminum Extrusion in Construction',0,0,4112,'https://www.build-review.com/wp-content/uploads/2021/03/aluminum.jpg',1,3,13),(15,'Brass','In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',0,0,4113,'https://www.rightonblackburns.co.uk/assets/uploads/images/brass.jpg',1,13,14);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_users`
--

DROP TABLE IF EXISTS `products_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0914c5a0-6c12-41fb-9e75-829fb0aa9c51` (`id_user`),
  KEY `FK_92cc220e-563f-4b4e-977c-dc6981908a1e` (`id_product`),
  CONSTRAINT `FK_0914c5a0-6c12-41fb-9e75-829fb0aa9c51` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_92cc220e-563f-4b4e-977c-dc6981908a1e` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_users`
--

LOCK TABLES `products_users` WRITE;
/*!40000 ALTER TABLE `products_users` DISABLE KEYS */;
INSERT INTO `products_users` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10),(11,11,11),(12,12,12),(13,13,13),(14,14,14),(15,15,15);
/*!40000 ALTER TABLE `products_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6dbde4f4-fff2-4a4f-a8d2-d39bdf25c0ff` (`id_user`),
  KEY `FK_ab10d34c-3576-4dc2-bb1f-38d1e8dbaa91` (`id_product`),
  CONSTRAINT `FK_6dbde4f4-fff2-4a4f-a8d2-d39bdf25c0ff` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_ab10d34c-3576-4dc2-bb1f-38d1e8dbaa91` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'2021-01-01 00:00:00',1,1),(2,'2021-02-02 00:00:00',2,2),(3,'2021-03-03 00:00:00',3,3),(4,'2021-04-04 00:00:00',4,4),(5,'2021-05-05 00:00:00',5,5),(6,'2021-06-06 00:00:00',6,6),(7,'2021-07-07 00:00:00',7,7),(8,'2021-08-08 00:00:00',8,8),(9,'2021-09-09 00:00:00',9,9),(10,'2021-10-10 00:00:00',10,10),(11,'2021-11-11 00:00:00',11,11),(12,'2021-12-12 00:00:00',12,12),(13,'2021-01-20 00:00:00',13,13),(14,'2021-02-10 00:00:00',14,14),(15,'2021-03-15 00:00:00',15,15);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storages`
--

DROP TABLE IF EXISTS `storages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1a6e1a15-60d0-4665-a7b5-29cb8f900c60` (`id_product`),
  CONSTRAINT `FK_1a6e1a15-60d0-4665-a7b5-29cb8f900c60` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storages`
--

LOCK TABLES `storages` WRITE;
/*!40000 ALTER TABLE `storages` DISABLE KEYS */;
INSERT INTO `storages` VALUES (1,100,1),(2,200,2),(3,300,3),(4,400,4),(5,500,5),(6,600,6),(7,700,7),(8,800,8),(9,900,9),(10,90,10),(11,80,11),(12,70,12),(13,60,13),(14,50,14),(15,40,15);
/*!40000 ALTER TABLE `storages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan Carlos','Pascale','juan.pascale@hotmail.com','AriWYWjUnOdP','4223355','https://robohash.org/autexercitationemconsequuntur.png',1),(2,'Ralph','Holehouse','rholehouse8@amazon.de','AriWYWjUnOdP','4667788','https://robohash.org/autexercitationemconsequuntur.png',1),(3,'Harman','Feldheim','hfeldheim9@google.com.br','baBpuftf','44332211','https://robohash.org/vitaequidemvoluptatem.png',1),(4,'Rosamund','Kirstein','rkirsteina@wix.com','H3xjXRIYnWg','4234567','https://robohash.org/ipsumnonquia.png',1),(5,'Ashlen','Gilli','agillib@mozilla.com','lJAuHKcPAZ','4998877','https://robohash.org/mollitiaeosmaxime.png',1),(6,'Rurik','Guyet','rguyetc@ustream.tv','2uTA72aCQ','4667788','https://robohash.org/fugaoptiocum.png',1),(7,'Tiffany','Weeden','tweedend@unicef.org','BSFUTU8Ni','4335566','https://robohash.org/etminusvoluptatem.png',0),(8,'Mechelle','Loton','mlotone@economist.com','IISnTRKsZy','4321567','https://robohash.org/commodiquoquae.png',0),(9,'Ives','Skeates','iskeatesg@amazon.de','MmBCZQNM','4123456','https://robohash.org/abconsequatursed.png',0),(10,'Gabbie','Devonside','gdevonsideh@artisteer.com','ItZlf4C5f9','4567432','https://robohash.org/doloraperiameligendi.png',0),(11,'Emmye','Miquelet','emiqueleti@amazon.com','IUFy4nih','4656768','https://robohash.org/pariaturvoluptatemhic.png',0),(12,'Cristabel','Heed','cheedj@msu.edu','tmmVgG1L9Y','3214568','https://robohash.org/velitsolutaeum.png',0),(13,'Kirstyn','McClenaghan','kmcclenaghans@etsy.com','WgnZn6bKcU','1234567','https://robohash.org/quiofficiacommodi.png',0),(14,'Row','Hekkert','rhekkertt@freewebs.com','YqGLfG','7654321','https://robohash.org/temporibusprovidentdignissimos.png',0),(15,'Pavia','Cesaric','pcesaricu@comsenz.com','t3hQdRDMQCD','2468024','https://robohash.org/quianon.png',0),(16,'Kizzee','Heikkinen','kheikkinenv@kickstarter.com','sjVtdvTxA','1357901','https://robohash.org/corruptibeataerem.png',1),(17,'Webb','O Dougherty','wodoughertyw@ovh.net','oKNDNpKR7jlV','2244668','https://robohash.org/atqueadipiscised.png',1),(18,'Berti','Dennis','bdennisx@thetimes.co.uk','ALGND7cm6X2','1133557','https://robohash.org/laudantiumnamvoluptatem.png',1),(19,'Patsy','Phillpot','pphillpoty@comsenz.com','QjAkKeE','1230987','https://robohash.org/repellendusdelenitivoluptatem.png',0),(20,'Flinn','Cliss','fcliss12@symantec.com','RcFssmu','9870456','https://robohash.org/temporeullamdeserunt.png',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ferreteria'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-06 12:59:23
