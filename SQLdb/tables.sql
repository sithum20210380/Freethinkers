CREATE TABLE users
(
    id VARCHAR(100) PRIMARY KEY,
    fNmae VARCHAR(100),
    lName VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(100),
    adminType VARCHAR(100),
    userName VARCHAR(100),
    mobileNo VARCHAR(100),
);

CREATE TABLE vehicle
(
    id VARCHAR(100) PRIMARY KEY,
    vehicleNo VARCHAR(100),
    vehicleType VARCHAR(100),
    userId VARCHAR(100),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE NO ACTION,
)

CREATE TABLE payments
(
    id VARCHAR(100) PRIMARY KEY,
    userId VARCHAR(100),
    userName VARCHAR(100),
    amount VARCHAR(100),
    paymentType VARCHAR(100),
    paymentDate VARCHAR(100),
    paymentStatus VARCHAR(100),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE NO ACTION,
)

CREATE TABLE parkingSlots
(
    id VARCHAR(100) PRIMARY KEY,
    slotNo VARCHAR(100),
    slotType VARCHAR(100),
    slotStatus VARCHAR(100),
    vehicleId VARCHAR(100),
    location VARCHAR(100),
    FOREIGN KEY (vehicleId) REFERENCES vehicle (id) ON DELETE NO ACTION,
)


CREATE TABLE publicTransactions
(
    id VARCHAR(100) PRIMARY KEY,
    vehicleNo VARCHAR(100),
    vehicleType VARCHAR(100),
    routr VARCHAR(100),
    amount VARCHAR(100),
)