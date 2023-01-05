INSERT INTO activites VALUES
    (default,'conférence'),
    (default,'tuning'),
    (default,'course de voiture'),
    (default,'autographe des pilotes');

INSERT INTO type_pieces VALUES
    (default,'Pièces moteur'),
    (default,'Freinage'),
    (default,'Visibilité'),
    (default,'Démarrage et charge'),
    (default,'Echappement'),
    (default,'Accessoires et Equipements'),
    (default,'Pneus et Equipements Roue'),
    (default,'Carroserie et peinture');

INSERT INTO societes VALUES
    (default,'Renault','renault_logo.svg'),
    (default,'Peugeot','peugeot_logo.svg'),
    (default,'Citroen','citroen_logo.svg'),
    (default,'Fiat','fiat_logo.svg'),
    (default,'Ford','ford_logo.svg'),
    (default,'Mercedes','mercedes_logo.svg'),
    (default,'BMW','bmw_logo.svg'),
    (default,'Audi','audi_logo.svg'),
    (default,'Volkswagen','volkswagen_logo.svg'),
    (default,'Toyota','toyota_logo.svg');


INSERT INTO stands VALUES
    (default,1,200),
    (default,2,200),
    (default,3,200),
    (default,4,400),
    (default,5,400),
    (default,6,400),
    (default,7,800),
    (default,8,800),
    (default,9,1000),
    (default,10,1000),
    (default,11,1000);

INSERT INTO roles VALUES
    (default,'organisateur'), --1
    (default,'prestataire'), --2
    (default,'restaurateur'), --3
    (default,'client'), --4
    (default, 'prestataire_en_attente'); --5

INSERT INTO services VALUES
    (default,'Guests'' book'),
    (default,'Stars'),
    (default,'E-shop'),
    (default,'Affluent graph');

INSERT INTO personnes VALUES
    (default,'Mbizi ','Charlene','charlene@gmail.com',null,'123456',null,1,null),
    (default,'Korbi','Marie','argjentin@gmail.com','Bonjour','123456',1,2,1),
    (default,'Reyna','Samuel','samuel@gmail.com','infoPersonne','123456',2,2,2),
    (default,'Shotwell','Marcos','marcos@gmail.com', 'infoPersonne','123456',3,2,3),
    (default,'Bedell','Heather','heather@gmail.com', 'infoPersonne','123456',1,2,4),
    (default,'Chestnut','Sandra','sandra@gmail.com', 'infoPersonne','123456',4,2,5),
    (default,'Ford','Angela','angela@gmail.com', 'infoPersonne','123456',4,2,6),
    (default,'Dupont','Jean','jeans@gmail.com','infoPersonne','123456',2,2,7),
    (default,'Vaillon','Thomas','dupontd@gmail.com','infoPersonne','123456',2,2,8),
    (default,'Korbi','Marie','marie@gmail.com','infoPersonne','123456',2,2,9),
    (default,'Liuzzo','Pierre','pierre@gmail.com', 'infoPersonne','123456',2,2,10),
    (default,'Korbi','Argjentin','argjentin@gmail.com','Bonjour','123456',1,5,1),
    (default,'Fruit','Samuel','samuel@gmail.com','infoPersonne','123456',2,5,2),
    (default,'Tavernier','Julie','marcos@gmail.com', 'infoPersonne','123456',3,5,3),
    (default,'Baudel','Laurent','heather@gmail.com', 'infoPersonne','123456',1,5,4),
    (default,'Chess','Sophie','sandra@gmail.com', 'infoPersonne','123456',4,5,5),
    (default,'Ford','Angela','angela@gmail.com', 'infoPersonne','123456',4,5,6),

    (default,'Overbek','Bill','billoverbek@gmail.com',null,'123456',null,4,null),
    (default,'Myers','Michael','michaelmyers@gmail.com',null,'123456',null,4,null),
    (default,'Chirac','Jacques','jacqueschirac@gmail.com',null,'mangezdespommes',null,4,null),
    (default,'Burton','Tim','timburton@gmail.com',null,'123456',null,4,null);

    
INSERT INTO pieces VALUES
    (default,'Caractéristiques techniques : Hauteur de l’emballage : 3 cm Largeur de l’emballage : 16 cm Largeur : 20 mm Longueur de l’emballage : 25.5 cm Nombre de dents : 131 Périphériques entraînés : Arbre à came','Courroie de distribution - Continental ct1230','cont_ct1230.png',50.23,18,1,2),
    (default,'Caractéristiques techniques : Filetage extérieur : M8 x 1 mm Longueur : 118 mm Voltage : 11 V','Bougie de préchauffage - NPS M571A13','nps_m571a13.png',8.1,18,1,3),
    (default,'Caractéristiques techniques : Couple de serrage de : 6 Nm Couple de serrage jusqu''à : 10 Nm Filetage : M 8 x 1,0 Longueur : 114 mm Montée conique : 123 Ouverture de la clé : 8 Profondeur de position : 28 mm Type de raccord : PINVersion de bougie de préchauffage : Bougie de préchauffage monopolaire Version de bougie de préchauffage : capable à l''incandescence résiduelle Voltage : 5 V','Bougie de préchauffage - BOSCH 0250404001','bosch_0250404001.png',13.52,44,1,2),
    (default,'Caractéristiques techniques : Référence(s) commerciale(s) : 6 PK 974, 6 PK 975, 6 PK 977, 6 PK 978 Longueur : 976 mm Nombre de stries : 6','Courroie trapézoïdale à nervures (d''accessoires) - CONTITECH 6PK976','cont_6pk976.png',10.38,88,1,2),
    (default,'Caractéristiques techniques : Diamètre extérieur : 60 mm Diamètre : 60 mm Largeur : 30 mm','Galet enrouleur de courroie de distribution - NPS S113I11B','nps_s113i11b.png',17.11,52,1,1),
    (default,'Fourni avec :  - Ressorts de soupapes - Soupapes/valves - Kit de vis','Culasse de cylindre - AMC 908833K','amc_908833k.png',1372.85,7,1,5),
    (default,'Type : Cartouche papier Diamètre intérieur : 26 mm Largeur : 62 mm Hauteur : 83 mm Spécification : Inclus 2 joints','Filtre à huile - NPS M131A27','npm_m131A27.png',6.90,17,1,1);

INSERT INTO commentaires VALUES
    (default,'Article nul',1),
    (default,' A revoir',1),
    (default,' A revoir',1),
    (default,' Super article',1),
    (default,' Pas de bonne qualité',1),
    (default,' Je suis déçue',1),
    (default,'Je retourne l''article',1),
    (default,' Assez bien',1),
    (default,'Bien',1),
    (default,' L''article est parfait',1);

insert into commandes VALUES
    (default,'11 Rue des Francs Bourgeois 75004 Paris','2022-10-4', 'silenttuned@suryapasti.com',1),
    (default,'113 Quai Adolphe Poult 82000 Montauban','2022-01-17', 'mixail0000@adsensekorea.com',2),
    (default,'2 Rue des Bouleaux 44600 Saint-Nazaire','2022-10-4', 'tepeiyittoussei-8465@yopmail.com',3),
    (default,'8 Rue Burnol 03200 Allier','2022-03-14', 'Flord1958@gustr.com',4);


INSERT INTO notes VALUES
    (default,1,1),
    (default,2,1),
    (default,2,1),
    (default,4,1),
    (default,2,1),
    (default,2,1),
    (default,2,1),
    (default,3,1),
    (default,4,1),
    (default,5,1);


-- affluence 
insert into livre_dor VALUES
    (3, 18, '2023-01-09','Well done!'),
    (3, 19, '2023-01-10','This convention was a succes!'),
    (3, 20, '2023-01-10','Congratulation for your convention: one that will be remember in history'),
    (3, 21, '2023-01-11','That was not bad');
-- rempli_panier


INSERT INTO contient VALUES
    (1,1),
    (1,2),
    (1,3),
    (1,4);

INSERT INTO creneaux VALUES
  -- jour 1
    -- pres2
    (2,7,'2023-01-09 14:00:00'),
    (2,6,'2023-01-09 10:00:00'),
    -- pres3
    (3,7,'2023-01-09 16:00:00'),
    (3,8,'2023-01-09 18:00:00'),
    -- pres4
    (4,3,'2023-01-09 10:00:00'),
    (4,1,'2023-01-09 12:00:00'),
    -- pres5
    (5,1,'2023-01-09 16:00:00'),
    (5,7,'2023-01-09 18:00:00'),
    -- pres6
    (6,10,'2023-01-09 12:00:00'),
    (6,8,'2023-01-09 14:00:00'),
    -- pres7
    (7,3,'2023-01-09 16:00:00'),
    (7,6,'2023-01-09 14:00:00'),
    -- pres8
    (8,8,'2023-01-09 10:00:00'),
    (8,9,'2023-01-09 18:00:00'),
    -- pres9
    (9,5,'2023-01-09 14:00:00'),
    (9,8,'2023-01-09 14:00:00'),
    -- pres10
    (10,9,'2023-01-09 12:00:00'),
    (10,2,'2023-01-09 12:00:00'),
    -- pres11
    (11,8,'2023-01-09 12:00:00'),
    (11,1,'2023-01-09 08:00:00'),
   -- jour 2
    -- pres2
    (2,7,'2023-01-10 14:00:00'),
    (2,6,'2023-01-10 10:00:00'),
    -- pres3
    (3,7,'2023-01-10 16:00:00'),
    (3,8,'2023-01-10 18:00:00'),
    -- pres4
    (4,3,'2023-01-10 10:00:00'),
    (4,1,'2023-01-10 12:00:00'),
    -- pres5
    (5,1,'2023-01-10 16:00:00'),
    (5,7,'2023-01-10 18:00:00'),
    -- pres6
    (6,10,'2023-01-10 12:00:00'),
    (6,8,'2023-01-10 14:00:00'),
    -- pres7
    (7,3,'2023-01-10 16:00:00'),
    (7,6,'2023-01-10 14:00:00'),
    -- pres8
    (8,8,'2023-01-10 10:00:00'),
    (8,9,'2023-01-10 18:00:00'),
    -- pres9
    (9,5,'2023-01-10 14:00:00'),
    (9,8,'2023-01-10 14:00:00'),
    -- pres10
    (10,9,'2023-01-10 12:00:00'),
    (10,2,'2023-01-10 12:00:00'),
    -- pres11
    (11,8,'2023-01-10 12:00:00'),
    (11,1,'2023-01-10 08:00:00'),
    -- jour 3
    -- pres2
    (2,10,'2023-01-11 14:00:00'),
    (2,8,'2023-01-11 10:00:00'),
    -- pres3
    (3,7,'2023-01-11 16:00:00'),
    (3,8,'2023-01-11 18:00:00'),
    -- pres4
    (4,3,'2023-01-11 10:00:00'),
    (4,6,'2023-01-11 12:00:00'),
    -- pres5
    (5,10,'2023-01-11 16:00:00'),
    (5,5,'2023-01-11 18:00:00'),
    -- pres6
    (6,4,'2023-01-11 12:00:00'),
    (6,2,'2023-01-11 14:00:00'),
    -- pres7
    (7,2,'2023-01-11 10:00:00'),
    (7,6,'2023-01-11 14:00:00'),
    -- pres8
    (8,7,'2023-01-11 10:00:00'),
    (8,9,'2023-01-11 18:00:00'),
    -- pres9
    (9,3,'2023-01-11 14:00:00'),
    (9,7,'2023-01-11 14:00:00'),
    -- pres10
    (10,3,'2023-01-11 16:00:00'),
    -- pres11
    (11,8,'2023-01-11 10:00:00'),
    (11,1,'2023-01-11 18:00:00'),
    -- jour 4
    -- pres2
    (2,1,'2023-01-12 08:00:00'),
    (2,2,'2023-01-12 10:00:00'),
    -- pres3
    (3,2,'2023-01-12 16:00:00'),
    (3,3,'2023-01-12 18:00:00'),
    -- pres4
    (4,9,'2023-01-12 10:00:00'),
    (4,8,'2023-01-12 12:00:00'),
    -- pres5
    (5,2,'2023-01-12 16:00:00'),
    (5,5,'2023-01-12 18:00:00'),
    -- pres6
    (6,10,'2023-01-12 10:00:00'),
    (6,7,'2023-01-12 14:00:00'),
    -- pres7
    (7,2,'2023-01-12 14:00:00'),
    (7,3,'2023-01-12 16:00:00'),
    -- pres8
    (8,5,'2023-01-12 10:00:00'),
    (8,10,'2023-01-12 18:00:00'),
    -- pres9
    (9,10,'2023-01-12 10:00:00'),
    (9,7,'2023-01-12 14:00:00'),
    -- pres10
    (10,7,'2023-01-12 08:00:00'),
    (10,9,'2023-01-12 14:00:00'),
    -- pres11
    (11,1,'2023-01-12 10:00:00'),
    (11,1,'2023-01-12 18:00:00'),

    -- -- jour 5
    -- pres2
    (2,10,'2023-01-13 08:00:00'),
    (2,3,'2023-01-13 10:00:00'),
    -- pres3
    (3,7,'2023-01-13 16:00:00'),
    (3,3,'2023-01-13 18:00:00'),
    -- pres4
    (4,9,'2023-01-13 10:00:00'),
    (4,2,'2023-01-13 12:00:00'),
    -- pres5
    (5,2,'2023-01-13 16:00:00'),
    (5,6,'2023-01-13 18:00:00'),
    -- pres6
    (6,10,'2023-01-13 10:00:00'),
    (6,2,'2023-01-13 14:00:00'),
    -- pres7
    (7,8,'2023-01-13 14:00:00'),
    (7,3,'2023-01-13 14:00:00'),
    -- pres8
    (8,2,'2023-01-13 10:00:00'),
    (8,5,'2023-01-13 18:00:00'),
    -- pres9
    (9,8,'2023-01-13 10:00:00'),
    (9,7,'2023-01-13 14:00:00'),
    -- pres10
    (10,7,'2023-01-13 08:00:00'),
    (10,9,'2023-01-13 14:00:00'),
    -- pres11
    (11,5,'2023-01-13 10:00:00'),
    (11,6,'2023-01-13 18:00:00'),

    -- -- jour 6

        -- pres2
    (2,1,'2023-01-14 08:00:00'),
    (2,2,'2023-01-14 10:00:00'),
    -- pres3
    (3,2,'2023-01-14 16:00:00'),
    (3,3,'2023-01-14 18:00:00'),
    -- pres4
    (4,9,'2023-01-14 10:00:00'),
    (4,8,'2023-01-14 12:00:00'),
    -- pres5
    (5,2,'2023-01-14 16:00:00'),
    (5,8,'2023-01-14 18:00:00'),
    -- pres6
    (6,10,'2023-01-14 10:00:00'),
    (6,7,'2023-01-14 14:00:00'),
    -- pres7
    (7,2,'2023-01-14 14:00:00'),
    (7,3,'2023-01-14 14:00:00'),
    -- pres8
    (8,5,'2023-01-14 10:00:00'),
    (8,10,'2023-01-14 18:00:00'),
    -- pres9
    (9,10,'2023-01-14 10:00:00'),
    (9,5,'2023-01-14 14:00:00'),
    -- pres10
    (10,7,'2023-01-14 08:00:00'),
    (10,9,'2023-01-14 14:00:00'),
    -- pres11
    (11,1,'2023-01-14 10:00:00'),
    (11,3,'2023-01-14 18:00:00'),

    -- -- jour 7
    -- pres2
    (2,7,'2023-01-15 14:00:00'),
    (2,6,'2023-01-15 10:00:00'),
    -- pres3
    (3,7,'2023-01-15 16:00:00'),
    (3,8,'2023-01-15 18:00:00'),
    -- pres4
    (4,3,'2023-01-15 10:00:00'),
    (4,1,'2023-01-15 12:00:00'),
    -- pres5
    (5,1,'2023-01-15 16:00:00'),
    (5,7,'2023-01-15 18:00:00'),
    -- pres6
    (6,10,'2023-01-15 12:00:00'),
    (6,8,'2023-01-15 14:00:00'),
    -- pres7
    (7,3,'2023-01-15 16:00:00'),
    (7,6,'2023-01-15 14:00:00'),
    -- pres8
    (8,8,'2023-01-15 10:00:00'),
    (8,9,'2023-01-15 18:00:00'),
    -- pres9
    (9,5,'2023-01-15 14:00:00'),
    (9,8,'2023-01-15 14:00:00'),
    -- pres10
    (10,9,'2023-01-15 12:00:00'),
    (10,2,'2023-01-15 12:00:00'),
    -- pres11
    (11,8,'2023-01-15 12:00:00'),
    (11,1,'2023-01-15 08:00:00');



INSERT INTO active VALUES
    (1,1),
    (1,2),
    (1,3),
    (2,1),
    (2,3),
    (2,2),
    (3,1),
    (3,3),
    (3,2),
    (4,1),
    (4,4);

INSERT INTO stars VALUES
    (2, 18, 4),
    (3, 18, 3),
    (4, 18, 4),
    (2, 19, 3),
    (3, 19, 5),
    (4, 19, 5),
    (2, 20, 3),
    (3, 20, 2),
    (4, 20, 1),
    (2, 21, 4),
    (3, 21, 3),
    (4, 21, 3);
