CREATE TABLE `Entry` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255) UNIQUE,
  `name` varchar(255) NOT NULL,
  `time` datetime NOT NULL
);

CREATE TABLE `Complaint` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `complaint` varchar(255) NOT NULL
);
