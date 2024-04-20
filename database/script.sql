-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pocket_pay
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pocket_pay
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pocket_pay` ;
USE `pocket_pay` ;

-- -----------------------------------------------------
-- Table `pocket_pay`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `email` VARCHAR(75) NULL DEFAULT NULL,
  `password` VARCHAR(145) NULL DEFAULT NULL,
  `account_type` VARCHAR(45) NULL DEFAULT NULL,
  `country` VARCHAR(45) NULL DEFAULT NULL,
  `phone_number` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `home_address` VARCHAR(145) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `postal_code` VARCHAR(45) NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_address_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `pocket_pay`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`bank_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`bank_payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bank_name` VARCHAR(45) NULL DEFAULT NULL,
  `account_no` VARCHAR(45) NULL DEFAULT NULL,
  `code` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`business` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  `registration_no` VARCHAR(45) NULL DEFAULT NULL,
  `reg_address` VARCHAR(145) NULL DEFAULT NULL,
  `business_category` VARCHAR(75) NULL DEFAULT NULL,
  `sub_category` VARCHAR(65) NULL DEFAULT NULL,
  `business_size` INT NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_business_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_business_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pocket_pay`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`bussiness_profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`bussiness_profiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `country` VARCHAR(45) NULL DEFAULT NULL,
  `bussiness_user_type` ENUM('DIRECTOR', 'STAKEHOLDER') NULL DEFAULT NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bussiness_profile_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_bussiness_profile_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `pocket_pay`.`business` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`debit_card_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`debit_card_payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `card_number` VARCHAR(45) NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `expiry_date` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_mode` ENUM('bank', 'card') NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  `debit_card_payment_id` INT NOT NULL,
  `bank_payment_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_payment_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_payment_debit_card_payment1_idx` (`debit_card_payment_id` ASC) VISIBLE,
  INDEX `fk_payment_bank_payment1_idx` (`bank_payment_id` ASC) VISIBLE,
  CONSTRAINT `fk_payment_bank_payment1`
    FOREIGN KEY (`bank_payment_id`)
    REFERENCES `pocket_pay`.`bank_payment` (`id`),
  CONSTRAINT `fk_payment_debit_card_payment1`
    FOREIGN KEY (`debit_card_payment_id`)
    REFERENCES `pocket_pay`.`debit_card_payment` (`id`),
  CONSTRAINT `fk_payment_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pocket_pay`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender_amount` INT NULL DEFAULT NULL,
  `sender_currency` VARCHAR(45) NULL DEFAULT NULL,
  `receiver_currency` VARCHAR(45) NULL DEFAULT NULL,
  `receiver_amount` INT NULL DEFAULT NULL,
  `purpose` VARCHAR(145) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `transfer_number` VARCHAR(45) NULL DEFAULT NULL,
  `status` ENUM('Sent', 'Cancelled', 'sending') NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  `payment_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_transactions_payment1_idx` (`payment_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_payment1`
    FOREIGN KEY (`payment_id`)
    REFERENCES `pocket_pay`.`payment` (`id`),
  CONSTRAINT `fk_transactions_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pocket_pay`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`receipient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`receipient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `account_no` VARCHAR(45) NULL DEFAULT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `ifsc` VARCHAR(45) NULL DEFAULT NULL,
  `account_type` ENUM('Checking', 'Sending') NULL DEFAULT NULL,
  `transactions_id` INT NOT NULL,
  PRIMARY KEY (`id`, `transactions_id`),
  INDEX `fk_receipient_transactions1_idx` (`transactions_id` ASC) VISIBLE,
  CONSTRAINT `fk_receipient_transactions1`
    FOREIGN KEY (`transactions_id`)
    REFERENCES `pocket_pay`.`transactions` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`trading_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`trading_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(165) NULL DEFAULT NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trading_address_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_trading_address_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `pocket_pay`.`business` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;