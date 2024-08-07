CREATE TABLE Login_Information(
	ID int NOT NULL,
	 Email varchar (255),
     Senha varchar (255),
     PRIMARY KEY (ID)
);

SELECT * FROM Login_Information;

INSERT INTO Login_Information(ID, Email, Senha)
VALUES
	(1,'harryjamespotter@hogwarts.com', '123Edwiges'),
    (2,'hermionejeangranger@hogwarts.com', '123Bichento'),
    (3,'ronaldbiliusweasley@hogwarts.com', '123Perebas');
    
    UPDATE Login_Information
    SET Senha = '1234Edwiges'
    WHERE ID = 1 ;



