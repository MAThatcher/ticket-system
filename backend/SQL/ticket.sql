CREATE TABLE `wu811gwb0lv8fles`.`ticket` (
  `ticketId` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(255) NOT NULL,
  `ticketDate` DATETIME(2) NULL,
  PRIMARY KEY (`ticketId`),
  INDEX `userId_idx` (`userId` ASC),
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `wu811gwb0lv8fles`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



INSERT INTO ticket (userId,ticketDate)
VALUES ("user1@email.com",sysdate());
INSERT INTO ticket (userId,ticketDate)
VALUES ("user2@email.com",sysdate());
INSERT INTO ticket (userId,ticketDate)
VALUES ("user3@email.com",sysdate());

