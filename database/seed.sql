-- ============================================
-- SEED - PIZZARIA
-- ============================================


-- ============================================
-- PIZZAS
-- ============================================

INSERT INTO pizzas
(nome, descricao, preco, imagem)
VALUES
(
    'Calabresa',
    'Molho de tomate, queijo, calabresa e cebola',
    45.00,
    'calabresa.jpg'
),
(
    'Margherita',
    'Molho de tomate, queijo, tomate e manjericão',
    42.00,
    'margherita.jpg'
),
(
    'Portuguesa',
    'Molho de tomate, queijo, presunto, ovo, cebola e azeitona',
    48.00,
    'portuguesa.jpg'
),
(
    'Frango com Catupiry',
    'Molho de tomate, queijo, frango desfiado e catupiry',
    49.00,
    'frango-catupiry.jpg'
),
(
    'Quatro Queijos',
    'Molho de tomate, muçarela, provolone, parmesão e gorgonzola',
    52.00,
    'quatro-queijos.jpg'
),
(
    'Bacon',
    'Molho de tomate, queijo, bacon e cebola',
    47.00,
    'bacon.jpg'
);


-- ============================================
-- INGREDIENTES
-- ============================================

INSERT INTO ingredientes
(nome, preco_adicional)
VALUES
('Muçarela', 0.00),
('Calabresa', 5.00),
('Bacon', 6.00),
('Frango', 5.00),
('Catupiry', 5.00),
('Presunto', 4.00),
('Tomate', 2.00),
('Cebola', 1.50),
('Milho', 2.00),
('Azeitona', 2.00),
('Ovo', 2.00),
('Manjericão', 1.50),
('Parmesão', 4.00),
('Provolone', 4.00),
('Gorgonzola', 5.00);


-- ============================================
-- INGREDIENTES DAS PIZZAS
-- ============================================

-- Calabresa
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(1, 1),
(1, 2),
(1, 8);


-- Margherita
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(2, 1),
(2, 7),
(2, 12);


-- Portuguesa
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(3, 1),
(3, 6),
(3, 8),
(3, 10),
(3, 11);


-- Frango com Catupiry
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(4, 1),
(4, 4),
(4, 5);


-- Quatro Queijos
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(5, 1),
(5, 13),
(5, 14),
(5, 15);


-- Bacon
INSERT INTO pizza_ingredientes
(pizza_id, ingrediente_id)
VALUES
(6, 1),
(6, 3),
(6, 8);