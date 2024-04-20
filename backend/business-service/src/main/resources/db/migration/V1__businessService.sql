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
AUTO_INCREMENT = 2
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

