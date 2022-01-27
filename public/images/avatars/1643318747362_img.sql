-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: ferreteria_db
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
INSERT INTO `categories` VALUES (1,'Electricidad'),(2,'Buloneria'),(3,'Sanitarios'),(4,'Jardineria'),(5,'Quimicos'),(6,'Pinturas'),(7,'Iluminacion'),(8,'Herramientas'),(9,'Cerrajeria'),(10,'Elementos de Seguridad'),(11,'Materiales');
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
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Wood','Wood effect wood vinyl rug',0,0,7352,'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/21768.png',1,11,1),(2,'Stone','Vector Textura De Pared De Piedra',0,1,2256,'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/8/-/8-727_stone_wall_web.jpg',1,11,2),(3,'Stone','Rock Stone Texture Background',0,1,4097,'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/21768.png',1,11,3),(4,'Brass','Varilla de latón Material en todo tipo de barra redonda',0,1,2842,'https://image.made-in-china.com/202f0j10ldFacHRMABqr/Brass-Rod-Material-in-All-Kind-of-Shape-Brass-Round-Bar.jpg',1,11,4),(5,'Plastic','The Good Plastic Company',0,1,9416,'https://thegoodplasticcompany.com/wp-content/uploads/2020/05/IMG_The_Good_Plastic_Company_11-1-scaled.jpg',1,11,6),(6,'Rubber','Making the production of rubber better for the planet',0,0,5282,'https://www.thermofisher.com/blog/materials/wp-content/uploads/sites/7/2016/02/istock_000081454873_medium12.jpg',1,11,7),(7,'Granite','Valle Nevado Granite',0,1,1631,'https://cdn.msisurfaces.com/images/colornames/valle-nevado-granite.jpg',1,11,8),(8,'Plastic','Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',0,0,2930,'https://www.climatizacion-sustentable.com/wp-content/uploads/2018/09/project_6.jpg',1,11,9),(9,'Plexiglass','Plexiglass 6mm',0,0,3754,'https://www.fogel.store/210-medium_default/plexiglass-6mm.jpg',1,11,10),(10,'Brass','Marlite FRP Wall Panel Installation',0,1,7533,'https://westcoastwallpros.com/wp-content/uploads/2019/09/frp-wall-panel-installation-1.jpg',1,11,11),(11,'Stone','alderwood stacked stone flats - Forshaw of St. Louis',0,0,3746,'https://image.shutterstock.com/image-photo/background-decorative-polished-river-stones-260nw-1841664148.jpg',1,11,8),(12,'Plastic','Plastic Raw Material',0,1,1460,'https://4.imimg.com/data4/OR/LR/MY-3583858/plastic-raw-material-500x500.jpg',1,11,12),(13,'Aluminum','Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',0,1,5228,'https://cff2.earth.com/uploads/2018/11/26215931/what-is-aluminum-1024x683.jpg',1,11,6),(14,'Aluminum','Guide to Aluminum Extrusion in Construction',0,0,4112,'https://www.build-review.com/wp-content/uploads/2021/03/aluminum.jpg',1,11,13),(15,'Brass','In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',0,0,4113,'https://www.rightonblackburns.co.uk/assets/uploads/images/brass.jpg',1,11,14),(16,'Cables Unipolares','sofixnnxzcbxcbnxzc b zbxxnbbcxvv',1,1,6775,'1643210899810_img.jpg',1,1,1),(17,'Corrugado','sofixnnxzcbxcbnxzc b zbxxnbbcxvv',1,1,1030,'1643211283557_img.jpg',1,1,2),(18,'sofia','sofixnnxzcbxcbnxzc b zbxxnbbcxvv',1,1,6,'1643212115099_img.jpg',6,6,6),(19,'Caja Termica','Caja Termica 12 Polos Embutir',0,0,1352,'https://http2.mlstatic.com/D_NQ_NP_752099-MLA31586614945_072019-O.jpg',1,11,1),(20,'Prologandor','Prologandor 6 Tomas Térmico Luminoso 1.5 Mts Negro',0,1,2256,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMw-1WCwxMrcHC9uZ0-U4a9qpYiZ12ADjmTA&usqp=CAU',1,1,2),(21,'Caja Termica','Caja Termica 12 Polos Embutir',0,0,1352,'https://http2.mlstatic.com/D_NQ_NP_752099-MLA31586614945_072019-O.jpg',1,1,1),(22,'Inodoro','Inodoro Largo Italiana Blanco',0,0,9352,'https://www.abelson.com.ar/2284-large_default/capea-inodoro-largo-italiana-blanco.jpg',1,3,4),(23,'Bidet','Bidet Italiana Blanco con Agujeros',0,1,11256,'https://www.ropelato.com.ar/5592-medium_default/1046146.jpg',1,3,2),(24,'Lavatorio','Lavatorio Italiana Blanco 3 Agujeros Chico',0,1,6256,'https://http2.mlstatic.com/D_NQ_NP_863184-MLA44183934503_112020-O.jpg',1,3,2),(25,'Box de Ducha','Cabina de Ducha Angular 90x90 Cm',0,1,11256,'https://http2.mlstatic.com/D_NQ_NP_631573-MLA47245147871_082021-W.jpg',1,3,2),(26,'Tierra','Tierra Fértil 40 Lts-xxxxxxxx',0,0,520,'https://http2.mlstatic.com/D_747186-MLA31011487790_062019-O.jpg',1,4,4),(27,'Pala','Pala Corazón Mango Fvxxxx',0,1,11256,'https://http2.mlstatic.com/D_NQ_NP_679550-MLA32830206706_112019-O.jpg',1,4,2),(28,'Manguera','Manguera Riego Para Jardin 1/2 20 Mts',0,1,1256,'https://http2.mlstatic.com/D_763395-MLA44180434249_112020-O.jpg',1,4,2),(29,'Maceta','Maceta 25x25x50 Cm. Cemento Piramidal',0,1,2056,'https://http2.mlstatic.com/D_732487-MLA27843269644_072018-O.jpg',1,4,2),(30,'Tornillo ','Tornillo T2 Aguja 6X1 N 200 Bl-xxxxxxxx',0,0,520,'https://edgardoperez.com.ar/wp-content/uploads/2021/01/tornillo-t2-punta-aguja.jpg',1,2,4),(31,'Alambre','Alambre Negro Nro °16 1.63mmxxxx',0,1,256,'https://http2.mlstatic.com/D_NQ_NP_651867-MLA42409770907_062020-O.jpg',1,2,2),(32,'clavo ','clavo punta paris 2\" 1kgxxxxx',0,1,456,'https://oestemaderas.com/wp-content/uploads/2020/04/clavos-acindar-punta-paris.jpg',1,2,2),(33,'Taco','Taco Tel Ppp 6Mm 30Un + Tornillo Bl',0,1,156,'https://http2.mlstatic.com/D_NQ_NP_766501-MLA31029385537_062019-O.jpg',1,2,2),(34,'Arnes','Arnes Seguridad Auto M-xxxxxxxx',0,0,2520,'https://http2.mlstatic.com/D_NQ_NP_912175-MLM41214778884_032020-O.jpg',1,10,4),(35,'Visual/Auditivo','Kit Seguridad Visual/Auditivommxxxx',0,1,3256,'https://www.lubeseguridad.com.ar/thumb/KIT%20FORESTAL_240x240.jpg',1,10,2),(36,'Zapato Cobalto','Zapato Cobalto Ombu Punta Compositexxxxx',0,1,12456,'https://http2.mlstatic.com/D_NQ_NP_788652-MLA45140230598_032021-O.jpg',1,10,2),(37,'Guante anticorte','Guante anticorte latex c/dorso ventiladoxxxxx',0,1,1156,'https://www.bioseif.com.ar/images/0000000GUANTE11786125Sin-titulo.jpg',1,10,2),(38,'Rodillo','Rodillo Simil Pelo Medio Antigota Nro22xxxxxxxx',0,0,820,'https://http2.mlstatic.com/D_NQ_NP_841105-MLA31063371212_062019-O.jpg',1,6,4),(39,'Membrana Liquida','Membrana Liquida Para Techos Bco 20kgmmxxxx',0,1,7256,'https://http2.mlstatic.com/D_NQ_NP_987778-MLU31242039317_062019-O.jpg',1,6,2),(40,'Aerosol','Aerosol Krylon Uso Gral Negro Satinado 340Gxxxxx',0,1,1256,'https://http2.mlstatic.com/D_NQ_NP_928091-MLA40435646072_012020-O.jpg',1,6,2),(41,'Pincel','Pincel Serie Easy Prof Blanca Nro 20 V2 Galgo',0,1,560,'https://http2.mlstatic.com/D_NQ_NP_936121-MLA45757261234_042021-O.jpg',1,6,2),(42,'latex ','latex ext proclassic 20ltxxxxxxx',0,1,1156,'https://zonarex-12hapv4k4jp.netdna-ssl.com/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/l/slp20_1.jpg',1,6,2),(43,'Poxiran','Adhesivo Contacto Poxiran 225 Grxxxxxxxx',0,0,820,'https://http2.mlstatic.com/D_NQ_NP_939171-MLA44829814741_022021-W.jpg',1,5,4),(44,'La Gotita','La Gotita 2 Mlxxxxxxxx',0,1,256,'http://d2r9epyceweg5n.cloudfront.net/stores/001/136/690/products/adhesivo-911-525653c9d28860390915220742993894-640-0__32652-15694223631-49823c15488416196f15872328793295-640-0.png',1,5,2),(45,'Fastix','Fastix Antihongo Transp Sellad Acet 100xxxxxx',0,1,456,'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/668/products/70621-a5339c8b88541e25fc15917450932542-640-0.png',1,5,2),(46,'Poxilina','Masilla Epoxi Poxilina 10 min 70 Grxxxxxxx',0,1,560,'https://www.distribuidorapop.com.ar/wp-content/uploads/2014/07/pegamento-poxilina-precios.jpg',1,5,2),(47,'Unipox','Unipox Gel Silicona Liquida 24Mlxxxxxxxxx',0,1,156,'https://d2r9epyceweg5n.cloudfront.net/stores/001/151/021/products/hjk1-dbcc20b92457a9d12816128768460220-1024-1024.png',1,5,2),(48,'Aplique','Aplique de Techo 4 Luces E27 Globo Cromo',0,0,8200,'https://mla-s1-p.mlstatic.com/666014-MLA43950393451_102020-B.jpg',1,7,4),(49,'Lampara Colgante','Lámpara Colgante 1 Luz E27 60W 30 Cm Vidrio Plata',0,1,5256,'https://www.griscan-di.com.ar/Image/0/750_750-Meson1.jpg',1,7,2),(50,'Farol','Farol Hierro Pared 2 Unidesxxxxxxxxxxx',0,1,4056,'https://http2.mlstatic.com/D_NQ_NP_617479-MLA43136695825_082020-O.jpg',1,7,2),(51,'Proyector Exterior','Proyector Exterior Ip65 120Grados Smd 10W Ldxxxxxx',0,1,1560,'https://www.bazardeluces.com.ar/wp-content/uploads/2018/08/PROYECTOR-LED-ALIC-10W.jpg',1,7,2),(52,'Lamparita Led','Lamparita Led Classic 7W Cálida E27 8000Hsxxxxxx',0,1,156,'https://www.bazardeluces.com.ar/wp-content/uploads/2019/02/BULBO-LED-SILVERLIGHT-DIMERIZABLE-10W.jpeg',1,7,2),(53,'Lijadora','Lijadora Orbital 220W GSS 140xxxxxx',0,0,12200,'https://www.martinezescalada.com.ar/5693-extra_large_default/lijadora-orbital-gss-140-1-std-180-w-bosch.jpg',1,8,4),(54,'Taladro','Taladro/Atornillador Smart Max 12Vxxx',0,1,15256,'http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/05/07124320/0601.9F4.0E0-000_1.jpg',1,8,2),(55,'Sierra','Sierra Circular 1500W xxxxxxxxxxxxx',0,1,24056,'https://www.bourlot.com/8930-thickbox_default/sierra-circular-7-14-1500w-bosch.jpg',1,8,2),(56,'Amoladora','Amoladora Angular 115Mm 670Wxxxxxxxx',0,1,15360,'https://http2.mlstatic.com/D_NQ_NP_897407-MLA43472682977_092020-O.jpg',1,8,2),(57,'Set Herramientas','Set Herramientas 132 Pzas Kld1841xxxxxxxxx',0,1,6156,'https://http2.mlstatic.com/D_NQ_NP_618393-MLA43998977233_112020-O.jpg',1,8,2),(58,'Cerradura','Cerradura Baño Fte Largo Pest Reversiblexxxxxx',0,0,1200,'https://http2.mlstatic.com/D_NQ_NP_787771-MLA44455200648_122020-W.jpg',1,9,4),(59,'Bisagra','Bisagra 5005 H-0 25 Mm X 3 Unidadesxxxxxxxxxx',0,1,96,'https://www.martinezescalada.com.ar/1317-large_default/bisagra-t-municion-con-perilla-reforzada-bronceada-oro-brillante-75-x-75.jpg',1,9,2),(60,'Manija','Manija Simple Balancin Casiopea Aluminioxxxxxxxxxxxxx',0,1,1560,'https://http2.mlstatic.com/D_NQ_NP_810880-MLA29227587334_012019-O.jpg',1,9,2);
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
-- Dumping routines for database 'ferreteria_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 19:10:40
