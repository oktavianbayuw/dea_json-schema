-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 13 Des 2023 pada 10.24
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `json_schema_checker`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dt_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `dt_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `results`
--

INSERT INTO `results` (`id`, `url_path`, `status`, `dt_insert`, `dt_modified`) VALUES
(1, 'path_check', 1, '2023-12-13 16:06:10', '2023-12-13 16:09:50'),
(2, 'path_check', 1, '2023-12-13 16:06:28', '2023-12-13 16:09:50'),
(3, 'path_check', 1, '2023-12-13 16:06:33', '2023-12-13 16:09:50'),
(4, 'path_check', 1, '2023-12-13 16:09:19', '2023-12-13 16:09:50'),
(5, 'path_check', 1, '2023-12-13 16:09:50', '2023-12-13 16:09:50');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
