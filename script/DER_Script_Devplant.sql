-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DER_Devplant
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DER_Devplant
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DER_Devplant` DEFAULT CHARACTER SET utf8 ;
USE `DER_Devplant` ;

-- -----------------------------------------------------
-- Table `DER_Devplant`.`Localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`Localidad` (
  `idLocalidad` INT NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idLocalidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER_Devplant`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`Clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `usuarioEmail` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NULL,
  `idLocalidad` INT NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `fk_cliente_localidad_idx` (`idLocalidad` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_localidad`
    FOREIGN KEY (`idLocalidad`)
    REFERENCES `DER_Devplant`.`Localidad` (`idLocalidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER_Devplant`.`TipoPlantas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`TipoPlantas` (
  `idTipoPlanta` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoPlanta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER_Devplant`.`Plantas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`Plantas` (
  `idPlanta` INT NOT NULL,
  `nombrePlanta` VARCHAR(45) NOT NULL,
  `idTipoPlanta` INT NOT NULL,
  `idCliente` INT NOT NULL,
  PRIMARY KEY (`idPlanta`),
  INDEX `tipo_idx` (`idTipoPlanta` ASC) VISIBLE,
  INDEX `fk_planta_cliente_idx` (`idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_planta_tipo`
    FOREIGN KEY (`idTipoPlanta`)
    REFERENCES `DER_Devplant`.`TipoPlantas` (`idTipoPlanta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_planta_cliente`
    FOREIGN KEY (`idCliente`)
    REFERENCES `DER_Devplant`.`Clientes` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER_Devplant`.`TipoCuidado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`TipoCuidado` (
  `idTipoCuidado` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoCuidado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DER_Devplant`.`Cuidados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DER_Devplant`.`Cuidados` (
  `idCuidado` INT NOT NULL AUTO_INCREMENT,
  `idPlanta` INT NOT NULL,
  `idTipoCuidado` INT NOT NULL,
  `periodicidad` INT NOT NULL,
  PRIMARY KEY (`idCuidado`),
  INDEX `fk_cuidado_tipo_idx` (`idTipoCuidado` ASC) VISIBLE,
  INDEX `fk_cuidado_planta_idx` (`idPlanta` ASC) VISIBLE,
  CONSTRAINT `fk_cuidado_tipo`
    FOREIGN KEY (`idTipoCuidado`)
    REFERENCES `DER_Devplant`.`TipoCuidado` (`idTipoCuidado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cuidado_planta`
    FOREIGN KEY (`idPlanta`)
    REFERENCES `DER_Devplant`.`Plantas` (`idPlanta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
