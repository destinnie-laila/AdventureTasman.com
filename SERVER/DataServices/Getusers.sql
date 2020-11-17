use destinnie;

drop PROCEDURE if exists getUsers;

delimiter //

Create PROCEDURE getUsers()

BEGIN

Select * FROM Users;

end //

delimiter ;

call getUsers();

