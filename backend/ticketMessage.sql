CREATE TABLE `wu811gwb0lv8fles`.`ticketMessage` (
  `messageId` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(255) NOT NULL,
  `ticketId` INT NOT NULL,
  `messageText` VARCHAR(8000) NULL,
  `messageDate` DATETIME(2) NULL,
  PRIMARY KEY (`messageId`),
  INDEX `ticketId_idx` (`ticketId` ASC),
  INDEX `SenderId_idx` (`userId` ASC),
  CONSTRAINT `ticketId`
    FOREIGN KEY (`ticketId`)
    REFERENCES `wu811gwb0lv8fles`.`ticket` (`ticketId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `SenderId`
    FOREIGN KEY (`userId`)
    REFERENCES `wu811gwb0lv8fles`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);





INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Hello, I have problem with system. Need help",1,sysdate(),"user1@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("I have fixed problem for you",1,sysdate(),"admin1@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Thank you for your help",1,sysdate(),"user1@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("I have problem getting it up and running",2,sysdate(),"user2@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Do x before doing y and problem should be fixed",2,sysdate(),"admin2@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("I am having trouble with an an issue. Any idea how to fix",3,sysdate(),"user3@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("This is a troubling issue. Let me have my boss take a look at it",3,sysdate(),"admin3@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Okay",3,sysdate(),"user3@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Issue has been resolved",3,sysdate(),"admin1@email.com");
INSERT INTO ticketMessage (messageText,ticketId,messageDate,userId)
VALUES ("Thank you much",3,sysdate(),"user3@email.com");


