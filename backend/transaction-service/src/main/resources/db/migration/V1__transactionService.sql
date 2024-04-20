
-- -----------------------------------------------------
-- Table `pocket_pay`.`recipient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`recipient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `account_no` VARCHAR(45) NULL DEFAULT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `ifsc` VARCHAR(45) NULL DEFAULT NULL,
  `account_type` ENUM('Checking', 'Sending') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
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
AUTO_INCREMENT = 2
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
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_mode` ENUM('bank', 'card') NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  `debit_card_payment_id` INT NULL DEFAULT NULL,
  `bank_payment_id` INT NULL DEFAULT NULL,
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
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pocket_pay`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pocket_pay`.`transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender_amount` DECIMAL(10,4) NULL DEFAULT NULL,
  `sender_currency` VARCHAR(45) NULL DEFAULT NULL,
  `receiver_currency` VARCHAR(45) NULL DEFAULT NULL,
  `receiver_amount` DECIMAL(10,4) NULL DEFAULT NULL,
  `purpose` VARCHAR(145) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `transfer_number` VARCHAR(45) NULL DEFAULT NULL,
  `status` ENUM('Sent', 'Cancelled', 'sending') NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  `payment_id` INT NOT NULL,
  `recipient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_transactions_payment1_idx` (`payment_id` ASC) VISIBLE,
  INDEX `fk_transactions_recipient1_idx` (`recipient_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_payment1`
    FOREIGN KEY (`payment_id`)
    REFERENCES `pocket_pay`.`payment` (`id`),
  CONSTRAINT `fk_transactions_recipient1`
    FOREIGN KEY (`recipient_id`)
    REFERENCES `pocket_pay`.`recipient` (`id`),
  CONSTRAINT `fk_transactions_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pocket_pay`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;