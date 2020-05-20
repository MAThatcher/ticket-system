CREATE TABLE `wu811gwb0lv8fles`.`users` (
  `userId` VARCHAR(255) NOT NULL,
  `userName` VARCHAR(255) NULL,
  `userPw` VARCHAR(255) NULL,
  `admin` BIT(1) NOT NULL DEFAULT 0,
  `activated` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`userId`));

INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("user1@email.com","password1","xXQuickScoperXx",false,true);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("user2@email.com","password2","AmyAdams43",false,true);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("user3@email.com","password3","thirsties",false,true);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("user4@email.com","password4","Voxel969",false,false);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("admin1@email.com","password1","LUNA_Jeb",true,true);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("admin2@email.com","password2","LUNA_Markus",true,true);
INSERT INTO users (userId,userPw,userName,admin,activated)
VALUES ("admin3@email.com","password3","LUNA_Katie",true,true);