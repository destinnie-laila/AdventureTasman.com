drop procedure if exists GetUsers;
delimiter //
create procedure GetUsers()
begin
      select * from User;
end //
delimiter ;

drop procedure if exists CheckPassword;
delimiter //
create procedure CheckPassword (pUser VARCHAR(50), pPassword VARCHAR(50))
begin
     DECLARE vResult int ;
     select 
            case  
               when Name = pUser and Password = pPassword then 1
               when Name = pUser and Password <> pPassword then 0
            end as Result
    from 
       User
    where
        pUser = Name
    into vResult;

    if ISNULL(vResult) then 
      set vResult = -1;
    end if;

    SELECT vResult as Result;

     

end //
delimiter ;
-- Test CheckPassword
call CheckPassword('Todd','P@ssword1');
call CheckPassword('Todd','P@ssword11');
call CheckPassword('Toddy','P@ssword11');

drop procedure if exists StoreComment;
delimiter //
create procedure StoreComment (pUser VARCHAR(50), pComment VARCHAR(50))
begin
     insert into Event(UserID, Value)
     values ((select ID from User where name = pUser LIMIT 1), pComment);

     SELECT 'Stored a commnet' As Result;

end //
delimiter ;
-- Test StoreComment
call StoreComment('Todd','Test');
call StoreComment('Todd','Test2');
call StoreComment('Toddy','Test3');
