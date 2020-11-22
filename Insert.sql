drop table if exists Event;
drop table if exists User;
create table User(
   ID int auto_increment primary key,
   Name varchar(30),
   Password varchar(30)
);

create table Event(
   ID int auto_increment primary key,
   UserID int ,
   Value varchar(255),
   foreign key (UserID) references User(ID)
);

insert into User(Name, Password) 
values ('Deee','d');
     
       
       
insert into Event(UserID, Value)
values (1, 'Todd said this'),
      (2, 'Trent said this');
     

      
