-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2022 a las 23:08:37
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_devplant_spring_boot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `rol_id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`rol_id`, `nombre`) VALUES
(1, 'ADMIN'),
(2, 'NORMAL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enable` bit(1) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `perfil` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `apellido`, `email`, `enable`, `fecha_nacimiento`, `nombre`, `password`, `perfil`, `telefono`, `username`) VALUES
(1, 'Canas', 'manuels4641366@gmail.com', b'1', NULL, 'Manuel', '1234', NULL, '234234234', 'Manuels'),
(2, 'Bruja', 'belenbruja@gmail.com', b'1', NULL, 'Salem', NULL, 'test.org', '0800-bruja-0021', 'Belen'),
(5, 're', 'rodrigoc.wow86@gmail.com', b'1', NULL, 'belen ', '4453456234', 'default.png', '', 'belen24'),
(6, 're234', 'belen_re@gmail.com', b'1', NULL, 'belen34', '4453456234', 'default.png', '', 'belen242'),
(7, 're234', 'belen_re@gmail.com', b'1', NULL, 'belen34', '4453456234', 'default.png', '', 'belen2423'),
(8, 'CANAS', 'joven_43@hotmail.com', b'1', NULL, 'MANUEL IGNACIO', '12345', 'default.png', '', 'manuels4641366'),
(9, 're', 'joven_43@hotmail.com', b'1', NULL, 'w', '123', 'default.png', '', 'manuels46413662'),
(10, 're', 'joven_43@hotmail.com', b'1', NULL, 'w', '123', 'default.png', '', 'manuels46413662123'),
(11, 'Cañas', 'manuicanas@itecriocuarto.org.ar', b'1', NULL, 'w', '', 'default.png', '', '12314124'),
(12, '', '', b'1', NULL, '', '', 'default.png', '', 'manuels464136621231'),
(13, 'CANAS', 'Manuels4641366@gmail.com', b'1', NULL, 'manuel', '234234', 'default.png', '', '35939093'),
(14, 'CANAS', 'Manuels4641366@gmail.com', b'1', NULL, 'manuel', '', 'default.png', '', '12312312'),
(15, 're', 'manuicanas@itecriocuarto.org.ar', b'1', NULL, 'belen ', '123', 'default.png', '', 'belen234234'),
(16, 're', 'manuicanas@itecriocuarto.org.ar', b'1', NULL, 'belen ', '123', 'default.png', '', 'belen2342344'),
(17, '123123', 'joven_43@hotmail.com', b'1', NULL, '12312314', '23425235', 'default.png', '', 'manuels4641366@gmail.com12312'),
(18, '23423423', 'm.canas@itecriocuarto.org.ar', b'1', NULL, 'manuel', '23423423', 'default.png', '', 'manuels4641366@gmail.com123141241234'),
(19, '124124124', '124124', b'1', NULL, '124124', '124124', 'default.png', '', 'manuels46413661234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `usuario_rol_id` bigint(20) NOT NULL,
  `rol_rol_id` bigint(20) DEFAULT NULL,
  `usuario_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_rol_id`, `rol_rol_id`, `usuario_id`) VALUES
(1, 1, 1),
(2, 2, 10),
(3, 2, 11),
(4, 2, 12),
(5, 2, 13),
(6, 2, 14),
(7, 2, 15),
(8, 2, 16),
(9, 2, 17),
(10, 2, 18),
(11, 2, 19);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`usuario_rol_id`),
  ADD KEY `FK7j1tyvjj1tv8gbq7n6f7efccc` (`rol_rol_id`),
  ADD KEY `FKktsemf1f6awjww4da0ocv4n32` (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  MODIFY `usuario_rol_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `FK7j1tyvjj1tv8gbq7n6f7efccc` FOREIGN KEY (`rol_rol_id`) REFERENCES `roles` (`rol_id`),
  ADD CONSTRAINT `FKktsemf1f6awjww4da0ocv4n32` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
