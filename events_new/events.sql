-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 14, 2015 at 04:34 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `engifest`
--

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
  `img_src_banner` text NOT NULL,
  `short_detail` text NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `description`, `date`, `venue`, `hasregis`, `img_src`, `img_src_banner`, `short_detail`, `location`) VALUES
(1, 'Anushthaan', 'Dance in India comprises the varied styles of dances. Classical Indian dance manages to evoke a rasa by invoking a particular bhava (emotion). Classical dancer acts out a story almost exclusively through gestures.\nFolk dances are numerous in number and style, and vary according to the local tradition of the respective state, ethnic or geographic regions.\nAnushthaan houses two categories:\n1. Solo    2. Group				', '12th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e1.jpg', 'dj.jpg', 'Classical and Folk Dance Competition', 'oat'),
(2, 'Spandan', '"Dance is the hidden language of the soul."\nDance is performed in many cultures as a form of emotional expression, social interaction, or exercise, in a spiritual or performance setting, and is sometimes used to express ideas or tell a story.\nSpandan is the western dance competition & it houses three categories:\n1.Solo    2. Duet   3.Group					', '13th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e2.jpg', 'westerndance.jpg', 'The Western Dance Competition', 'brambedkar'),
(3, 'Natya', 'Natya represents Theatre and Theatricality is a powerful tool. Theatre is a collaborative form of fine art that uses live performers to present the experience of a real or imagined event before a live audience in a specific place. The right combination of "Lights", "Camera" & most importantly "Action". \nVarious genres are Comedy, Farce, Satirical, Tragedy & Historical.				', '14th Feb, 2015', 'OAT', 1, 'Events/e3.jpg', 'natya.jpg', 'The Stage Play Competition', 'sportscomplex'),
(4, 'Nukkad', 'Nukkad represents Street Theatre. It is a form of theatrical performance and presentation in outdoor public spaces without a specific paying audience. Street theatre is arguably the oldest form of theatre in existence: most mainstream entertainment mediums can be traced back to origins in street performing, including religious passion plays and many other forms.\nNukkad makes an effort for upliftment of society by spreading awareness and propagating the morals and ideals that society is in need of.\nBesides being an art of acting and drama, the street theatre is all about changes one can create in the society.					', '14th Feb, 2015', 'OAT', 1, 'Events/e4.jpg', 'nukkad.jpeg', 'The Street Play Competition', 'oat'),
(5, 'Arpeggio', 'Battle of Bands brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateurs rock bands in the land. It is a live music competition joined by the bands from all over the country. It is open to bands of all music genres.\r\nWith a combination of adrenaline changed performances,\r\nthe event is a hot favorite amongst youngsters. 					', '15th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e5.jpg', '', 'Battle of Bands', 'brambedkar'),
(6, 'Soundtrack', 'put your content here', '15th Feb, 2015', 'OAT', 1, 'Events/e6.jpg', '', 'The Music Competition', 'sportscomplex'),
(7, 'Switch The Funk Up', 'put your content here', '14th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e7.jpg', '', 'Dance Competition', 'oat'),
(8, 'Dirt', 'put your content here', '15th Feb, 2015', 'B R Ambedkar Auditorium', 1, 'Events/e8.jpg', '', 'The Road Show', 'brambedkar'),
(9, 'Livewire', 'put your content here', '12th Feb, 2015', 'OAT', 1, 'Events/e9.jpg', '', 'The Star Night', 'sportscomplex'),
(10, 'Paridhaan', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e10.jpg', '', 'The Fashion Parade', 'oat'),
(11, 'Syadhi', 'put your content here', '12th Feb, 2015', 'OAT', 1, 'Events/e11.jpg', '', 'Literary Competitions', 'brambedkar'),
(12, 'Informal Events', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e12.jpg', '', '', 'sportscomplex'),
(13, 'Online Events', 'put your content here', '14th Feb, 2015', 'OAT', 1, 'Events/e13.jpg', '', '', 'oat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
 ADD PRIMARY KEY (`event_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
