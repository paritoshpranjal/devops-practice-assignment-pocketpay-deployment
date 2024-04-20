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
