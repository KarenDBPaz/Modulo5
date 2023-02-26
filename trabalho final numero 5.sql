DROP DATABASE IF EXISTS projeto_em_grupo;
CREATE DATABASE projeto_em_grupo;
USE projeto_em_grupo;

-- criação das tabelas 

CREATE TABLE Cemitério (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereço VARCHAR(255) NOT NULL
);

CREATE TABLE Pessoa (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    data_morte DATE,
    cemitério_id INT,
    túmulo_id INT,
    texto_ob TEXT NOT NULL,
    FOREIGN KEY (cemitério_id) REFERENCES Cemitério(id)
);



CREATE TABLE Família (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sobrenome VARCHAR(255) NOT NULL,
    cemitério_id INT,
    FOREIGN KEY (cemitério_id) REFERENCES Cemitério(id)
);

CREATE TABLE Túmulo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    número VARCHAR(255) NOT NULL,
    família_id INT,
    FOREIGN KEY (família_id) REFERENCES Família(id)
);

CREATE TABLE Funcionário (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    cemitério_id INT,
    FOREIGN KEY (cemitério_id) REFERENCES Cemitério(id)
);

-- inserção de dados

-- Inserções na tabela Cemitério
INSERT IGNORE INTO Cemitério (nome, endereço) VALUES
('Cemitério Municipal de São Paulo', 'Rua Conselheiro Brotero, 903 - Barra Funda, São Paulo - SP, 01154-001'),
('Cemitério da Vila Formosa', 'Rua Itapeti, 524 - Vila Formosa, São Paulo - SP, 03350-000'),
('Cemitério São Pedro', 'Rua Francisco Falconi, 837 - Itaquera, São Paulo - SP, 08210-580'),
('Cemitério do Araçá', 'Avenida Dr. Arnaldo, 666 - Pacaembu, São Paulo - SP, 01246-000'),
('Cemitério do Morumbi', 'Rua Deputado Laércio Corte, 468 - Morumbi, São Paulo - SP, 05690-080');


-- Inserções na tabela Família
INSERT IGNORE INTO Família (sobrenome, cemitério_id) VALUES
('Ferreira', 1),
('Azevedo', 2),
('Gomes', 3),
('Gonçalves', 4),
('Souza', 5),
('Castro', 1),
('Silva', 3),
('Alves', 4);


-- Inserções na tabela Túmulo
INSERT IGNORE INTO Túmulo (número, família_id) VALUES
('001', 1),
('002', 2),
('003', 3),
('004', 4),
('005', 5),
('006', 6),
('007', 7),
('008', 8);


-- Inserções na tabela Pessoa
INSERT IGNORE INTO Pessoa (cpf, nome, data_nascimento, data_morte, cemitério_id, túmulo_id, texto_ob) VALUES
(98987786447, 'Leila Barbosa Ferreira', '1945-07-23', '2036-03-03', 1, 1, 'É com grande pesar que comunicamos o falecimento de Leila, que partiu deste mundo em 2036-03-03. Seu legado de amor, generosidade e coragem ficará para sempre em nossos corações. '),
(66032475778, 'Fernanda Azevedo Alves', '1947-01-30', '2036-01-30', 2, 2, 'Com imensa tristeza, lamentamos a partida de Fernanda, que nos deixou em 2036-01-30. Sua ausência será profundamente sentida por todos aqueles que tiveram o privilégio de conhecê-la.'),
(53584212545, 'Gustavo Gomes Azevedo', '2000-10-26', '2077-03-02', 3, 3, 'Perdemos uma pessoa especial e única com a partida de Gustavo, que nos deixou em 2077-03-02. Seu sorriso, gentileza e sabedoria viverão para sempre em nossas memórias.'),
(41970038039, 'Kauã Araujo Gonçalves', '1975-03-14', '2039-07-20', 4, 4, 'É com grande tristeza que anunciamos a morte de Kauã, um homem cuja vida foi cheia de aventura e coragem. João era um viajante incansável, um amante da natureza e um amigo leal. Ele será lembrado por sua alegria de viver e sua paixão pela vida.'),
(46808891877, 'Estevan Barbosa Souza', '1941-11-06', '2029-02-18', 5, 5, 'Hoje nos despedimos de Estevan Barbosa, que nos deixou em 2029-02-18. Sua vida foi um exemplo de coragem, resiliência e bondade, e sua falta será sentida por todos aqueles que a amavam.'),
(40964000687, 'Thaís Fernandes Castro', '1994-03-30', '2072-02-09', 1, 6, 'É com profundo pesar que comunicamos o falecimento de Thaís, que nos deixou em 2072-02-09. Sua partida deixa um vazio em nossas vidas, mas seu legado de amor e compaixão permanecerá conosco para sempre.')



