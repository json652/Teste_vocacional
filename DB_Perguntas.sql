CREATE DATABASE ListaPerguntas;

CREATE TABLE Perguntas (
ID INT NOT NULL AUTO_INCREMENT,
TEXTO VARCHAR(32) NOT NULL,
AREA VARCHAR(14) NOT NULL,
PRIMARY KEY (ID)
) DEFAULT CHARSET = utf8;

USE listaperguntas;

ALTER TABLE Perguntas MODIFY COLUMN TEXTO VARCHAR(100);

INSERT INTO Perguntas (TEXTO, AREA)
VALUES (
'Consertar ou montar coisas',
'Pratica'
),
(
'Trabalhar ao ar livre',
'Pratica'
),
(
'Usar ferramentas e equipamentos',
'Pratica'
),
(
'Descobrir como as coisas funcionam',
'Investigativa'
),
(
'Resolver problemas de lógica e matemática',
'Investigativa'
),
(
'Pesquisar um assunto a fundo',
'Investigativa'
),
(
'Desenhar, escrever, tocar ou criar algo novo',
'Artística'
),
(
'Usar a criatividade no dia a dia',
'Artística'
),
(
'Trabalhar sem regras muito rígidas',
'Artística'
),
(
'Ajudar as pessoas',
'Social'
),
(
'Ensinar ou explicar coisas para os outros',
'Social'
),
(
'Ouvir e entender o que os outros sentem',
'Social'
),
(
'Liderar um grupo',
'Empreendedora'
),
(
'Convencer as pessoas',
'Empreendedora'
),
(
'Assumir riscos para alcançar um objetivo',
'Empreendedora'
),
(
'Manter tudo organizado e planejado',
'Convencional'
),
(
'Seguir um passo a passo bem definido',
'Convencional'
),
(
'Trabalhar com números, planilhas ou documentos',
'Convencional'
);

SELECT * FROM Perguntas;

