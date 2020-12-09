create database General_Insurance

create table Customer( 
CustomerID int primary key not null IDENTITY(1,1),
CustomerName varchar(50) not null,
Email varchar(50) unique not null, 
DateOfBirth datetime ,
ContactNumber varchar(10) unique not null,
Password varchar(20) not null,
Address nvarchar(50) ,
City varchar(20) ,
State varchar(20),
Country varchar(20),
Pincode int,
ConfirmPassword varchar(20) not null)	

select * from Vehicle
create table Vehicle (VehicleID int primary key not null IDENTITY(1,1),CustomerID int foreign key references Customer(CustomerID),Manufacturer varchar(30),Model nvarchar(20),VehicleType nvarchar(20),DrivingLicense nvarchar(20),PurchaseDate datetime, RegisterationNumber nvarchar(20) unique not null,EngineNumber nvarchar(20) unique not null, ChassisNumber nvarchar(20) unique not null,AadharURL varchar(max) ,VehicleDocumentURL nvarchar(500) unique not null,DrivingLicenseURL varchar(max) )	
create table Policy (PolicyID int primary key not null IDENTITY(1,1), CustomerID int foreign key references Customer(CustomerID), VehicleID int foreign key references Vehicle(VehicleID),PolicyName varchar(25) not null,PolicyAmount float not null,Period int not null,PolicyStatus varchar(20) not null,IssueDate datetime,ExpiryDate datetime)
create table Claim (ClaimID int primary key not null IDENTITY(1,1),CustomerID int foreign key references Customer(CustomerID), VehicleID int foreign key references Vehicle(VehicleID),PolicyID int foreign key references Policy(PolicyID),ClaimDate datetime,ClaimAmount float not null,CLaimReason nvarchar(100) not null,ClaimStatus varchar(20) not null,ClaimVehicleConditionURL nvarchar(500) not null)

drop table Claim
drop table Policy

Insert into Customer values('Divya','divya@gmail.com','2004-05-04', '7458398589', 'divya', 'hwfkwfg', 'Mumbai', 'Maharashtra', 'India', 421587, 'divya');
Insert into Customer values('Renita','renita@gmail.com','2003-06-07', '7895643154', 'renita', 'hwfkwfg', 'Mumbai', 'Maharashtra', 'India', 421537, 'renita');
Insert into Customer values('Gaurang','gaurang@gmail.com','2002-07-05', '8976425985', 'gaurang', 'hwfkwfg', 'Mumbai', 'Maharashtra', 'India', 421583, 'gaurang');
Insert into Customer values('Nand','nand@gmail.com','2001-08-03', '7894563215', 'nand', 'hwfkwfg', 'Mumbai', 'Maharashtra', 'India', 421387, 'nand');

select * from Customer
select * from Policy
select * from Vehicle
select * from Claim

/*create PROC CustomerVehicle
AS
BEGIN
Select CustomerID, VehicleID from Vehicle Order BY CustomerID, VehicleID 
END

create procedure CheckUser(@username varchar(20),@password varchar(20))
as
begin
return(select  CustomerID from Customer where Email=@username AND Password=@password)
end
declare @dcount int;
exec @dcount=CheckUser @username="divya@gmail.com",@password="divya"
print @dcount
*/

update Policy
set ExpiryDate='2021-01-03 13:00:27.413'
where PolicyID=12

Insert into Policy values(6, 3, 'Comprehensive', 2371, 3, 'Approved', '2020-01-04', '2023-01-03')
Insert into Policy values(6, 4, 'ThirdParty', 1371, 3, 'Approved', '2020-02-04', '2023-02-03')