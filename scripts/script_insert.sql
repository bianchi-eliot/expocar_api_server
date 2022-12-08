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
    (default,'livre d''or'),
    (default,'e-shop'),
    (default,'graphique d''affluence'),
    (default,'avis des clients');


INSERT INTO personnes VALUES
    (default,'Mbizi ','Charlene','charlene@gmail.com',null,'123456',null,1,null),
    (default,'Korbi','Argjentin','argjentin@gmail.com','Bonjour','123456',1,2,1),
    (default,'Reyna','Samuel','samuel@gmail.com','infoPersonne','123456',2,2,2),
    (default,'Shotwell','Marcos','marcos@gmail.com', 'infoPersonne','123456',3,2,3),
    (default,'Bedell','Heather','heather@gmail.com', 'infoPersonne','123456',1,2,4),
    (default,'Chestnut','Sandra','sandra@gmail.com', 'infoPersonne','123456',4,2,5),
    (default,'Ford','Angela','angela@gmail.com', 'infoPersonne','123456',4,2,6),
    (default,'nomclient1','prenomclient1','client1@gmail.com',null,'123456',null,4,null),
    (default,'nomclient2','prenomclient2','client2@gmail.com',null,'123456',null,4,null),
    (default,'nomclient3','prenomclient3','client3@gmail.com',null,'123456',null,4,null),
    (default,'nomclient4','prenomclient4','client4@gmail.com',null,'123456',null,4,null);
    
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
    (1,6,'2022-11-24','bonjour');
-- rempli_panier


INSERT INTO contient VALUES
    (1,1),
    (1,2),
    (1,3),
    (1,4);

INSERT INTO creneaux VALUES
    -- jour 4
    -- pres1
    (2,1,'2023-01-12 08:00:00'),
    (2,2,'2023-01-12 10:00:00'),
    -- pres2
    (3,2,'2023-01-12 16:00:00'),
    (3,3,'2023-01-12 18:00:00'),

    -- pres3
    (4,9,'2023-01-12 10:00:00'),
    (4,8,'2023-01-12 12:00:00'),

    -- pres4
    (5,11,'2023-01-12 16:00:00'),
    (5,5,'2023-01-12 18:00:00'),

    -- pres5
    (6,10,'2023-01-12 10:00:00'),
    (6,7,'2023-01-12 14:00:00');
    -- -- jour 5
    -- -- pres1
    -- (2,1,'2023-01-13 08:00:00'),
    -- (2,1,'2023-01-13 10:00:00'),
    -- (2,1,'2023-01-13 12:00:00'),
    -- (2,1,'2023-01-13 14:00:00'),
    -- -- pres2
    -- (3,1,'2023-01-13 16:00:00'),
    -- (3,1,'2023-01-13 18:00:00'),
    -- (3,1,'2023-01-13 08:00:00'),
    -- -- pres3
    -- (4,1,'2023-01-13 10:00:00'),
    -- (4,1,'2023-01-13 12:00:00'),
    -- (4,1,'2023-01-13 14:00:00'),
    -- -- pres4
    -- (5,1,'2023-01-13 16:00:00'),
    -- (5,1,'2023-01-13 18:00:00'),
    -- (5,1,'2023-01-13 08:00:00'),
    -- -- pres5
    -- (6,1,'2023-01-13 10:00:00'),
    -- (6,1,'2023-01-13 12:00:00'),
    -- (6,1,'2023-01-13 14:00:00'),
    -- -- jour 6
    -- -- pres1
    -- (2,1,'2023-01-14 08:00:00'),
    -- (2,1,'2023-01-14 10:00:00'),
    -- (2,1,'2023-01-14 12:00:00'),
    -- (2,1,'2023-01-14 14:00:00'),
    -- -- pres2
    -- (3,1,'2023-01-14 16:00:00'),
    -- (3,1,'2023-01-14 18:00:00'),
    -- (3,1,'2023-01-14 08:00:00'),
    -- -- pres3
    -- (4,1,'2023-01-14 10:00:00'),
    -- (4,1,'2023-01-14 12:00:00'),
    -- (4,1,'2023-01-14 14:00:00'),
    -- -- pres4
    -- (5,1,'2023-01-14 16:00:00'),
    -- (5,1,'2023-01-14 18:00:00'),
    -- (5,1,'2023-01-14 08:00:00'),
    -- -- pres5
    -- (6,1,'2023-01-14 10:00:00'),
    -- (6,1,'2023-01-14 12:00:00'),
    -- (6,1,'2023-01-14 14:00:00'),
    -- -- jour 7
    -- -- pres1
    -- (2,1,'2023-01-12 08:00:00'),
    -- (2,1,'2023-01-12 10:00:00'),
    -- (2,1,'2023-01-12 12:00:00'),
    -- (2,1,'2023-01-12 14:00:00'),
    -- -- pres2
    -- (3,1,'2023-01-12 16:00:00'),
    -- (3,1,'2023-01-12 18:00:00'),
    -- (3,1,'2023-01-12 08:00:00'),
    -- -- pres3
    -- (4,1,'2023-01-12 10:00:00'),
    -- (4,1,'2023-01-12 12:00:00'),
    -- (4,1,'2023-01-12 14:00:00'),
    -- -- pres4
    -- (5,1,'2023-01-12 16:00:00'),
    -- (5,1,'2023-01-12 18:00:00'),
    -- (5,1,'2023-01-12 08:00:00'),
    -- -- pres5
    -- (6,1,'2023-01-12 10:00:00'),
    -- (6,1,'2023-01-12 12:00:00'),
    -- (6,1,'2023-01-12 14:00:00');



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

INSERT INTO note VALUES
    (1,7,2),
    (2,6,2),
    (3,5,2);