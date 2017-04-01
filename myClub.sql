drop database if exists myClub;
create database myClub;
use myClub;
show tables;
CREATE TABLE IF NOT EXISTS users (
   user_id INT AUTO_INCREMENT PRIMARY KEY, 
   user_name VARCHAR(50) NOT NULL, 
   user_password VARCHAR(50) NOT NULL, 
   first_name VARCHAR(50) NOT NULL, 
   last_name VARCHAR(50) NOT NULL, 
   gender VARCHAR(20) default 'Male',check(`gender`= 'Male' or `gender`= 'Female' or `gender`= 'Unknown'), 
   birth DATE NOT NULL, 
   phone VARCHAR(50), 
   email VARCHAR(50) NOT NULL,
   isAdmin BOOLEAN NOT NULL default 0,check(`isAdmin` = 0 or `isAdmin` = 1),
   isBlack BOOLEAN default 0, check(`isBlack` = 0 or `isBlack` = 1));

CREATE TABLE IF NOT EXISTS activity (
   activity_id INT AUTO_INCREMENT PRIMARY KEY, 
   activity_name VARCHAR(50) NOT NULL, 
   activity_owner VARCHAR(50), 
   start_time DATETIME NOT NULL, 
   end_time DATETIME NOT NULL, 
   location VARCHAR(100) NOT NULL, 
   description VARCHAR(200) NOT NULL,
   isPublished BOOLEAN NOT NULL default 0,check(`isPublished` = 0 or `isPublished` = 1),
   activity_status char(1) default 0,
   last_updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
   
CREATE TABLE IF NOT EXISTS userCampaign (
   campaign INT AUTO_INCREMENT PRIMARY KEY, 
   user_id INT NOT NULL, 
   activity_id INT NOT NULL, 
   delete_flag BOOLEAN NOT NULL default 0,check(`delete_flag` = 0 or `delete_flag` = 1),
   foreign key(user_id) references users(user_id), 
   foreign key(activity_id) references activity(activity_id));
 
insert into users(user_name, user_password, first_name, last_name, gender, birth, phone, email, isAdmin) values('Julie.Shen', 'myclub', 'Julie', 'Shen', 'Female', '1994-10-14', '+86 18896992648', 'julie.shen@oracle.com', 1);

insert into activity(activity_name, activity_owner, start_time, end_time, location, description, isPublished, activity_status) values('SWIMMING', 'Julie.Shen', '2017-04-15 18:00:00', '2017-04-15 20:00:00', 'Suzhou Dushu Lake GYM', 'Welcome everyone to participate swimming activity in Fiscal Year 2017. Need to bring your swim caps , swimwear and swim glasses.', 0, 0);
   
