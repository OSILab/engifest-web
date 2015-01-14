-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 12, 2015 at 04:00 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `engifest`
--
CREATE DATABASE IF NOT EXISTS `engifest` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `engifest`;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `event_id` tinyint(5) NOT NULL,
  `event_name` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `date` varchar(20) NOT NULL,
  `venue` varchar(30) NOT NULL,
  `hasregis` tinyint(1) NOT NULL,
  `img_src` text NOT NULL,
  `short_detail` text NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `description`, `date`, `venue`, `hasregis`, `img_src`, `short_detail`) VALUES
(1, 'Anushthaan', 'Dance in India comprises the varied styles of dances. Classical Indian dance manages to evoke a rasa by invoking a particular bhava (emotion). Classical dancer acts out a story almost exclusively through gestures.\nFolk dances are numerous in number and style, and vary according to the local tradition of the respective state, ethnic or geographic regions.\nAnushthaan houses two categories:\n1. Solo    2. Group				', '12th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e1.jpg', 'Classical and Folk Dance Competition'),
(2, 'Spandan', '"Dance is the hidden language of the soul."\nDance is performed in many cultures as a form of emotional expression, social interaction, or exercise, in a spiritual or performance setting, and is sometimes used to express ideas or tell a story.\nSpandan is the western dance competition & it houses three categories:\n1.Solo    2. Duet   3.Group					', '13th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e2.jpg', 'The Western Dance Competition'),
(3, 'Natya', 'Natya represents Theatre and Theatricality is a powerful tool. Theatre is a collaborative form of fine art that uses live performers to present the experience of a real or imagined event before a live audience in a specific place. The right combination of "Lights", "Camera" & most importantly "Action". \nVarious genres are Comedy, Farce, Satirical, Tragedy & Historical.				', '14th Feb, 2015', 'OAT', 1, 'Events/e3.jpg', 'The Stage Play Competition'),
(4, 'Nukkad', 'Nukkad represents Street Theatre. It is a form of theatrical performance and presentation in outdoor public spaces without a specific paying audience. Street theatre is arguably the oldest form of theatre in existence: most mainstream entertainment mediums can be traced back to origins in street performing, including religious passion plays and many other forms.\nNukkad makes an effort for upliftment of society by spreading awareness and propagating the morals and ideals that society is in need of.\nBesides being an art of acting and drama, the street theatre is all about changes one can create in the society.					', '14th Feb, 2015', 'OAT', 1, 'Events/e4.jpg', 'The Street Play Competition'),
(5, 'Arpeggio', 'Battle of Bands brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateurs rock bands in the land. It is a live music competition joined by the bands from all over the country. It is open to bands of all music genres.\r\nWith a combination of adrenaline changed performances,\r\nthe event is a hot favorite amongst youngsters. 					', '15th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e5.jpg', 'Battle of Bands'),
(6, 'Soundtrack', 'put your content here', '15th Feb, 2015', 'OAT', 1, 'Events/e6.jpg', 'The Music Competition'),
(7, 'Switch The Funk Up', 'put your content here', '14th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e7.jpg', 'Dance Competition'),
(8, 'Dirt', 'put your content here', '15th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e8.jpg', 'The Road Show'),
(9, 'Livewire', 'put your content here', '12th Feb, 2015', 'OAT', 1, 'Events/e9.jpg', 'The Star Night'),
(10, 'Paridhaan', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e10.jpg', 'The Fashion Parade'),
(11, 'Syadhi', 'put your content here', '12th Feb, 2015', 'OAT', 1, 'Events/e11.jpg', 'Literary Competitions'),
(12, 'Informal Events', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e12.jpg', ''),
(13, 'Online Events', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e13.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `image_id` int(5) NOT NULL AUTO_INCREMENT,
  `event_id` tinyint(5) NOT NULL,
  `image_src` varchar(30) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
