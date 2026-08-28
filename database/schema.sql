-- ============================================
-- BANCO DE DADOS - PIZZARIA
-- ============================================

-- Remove as tabelas caso já existam
DROP TABLE IF EXISTS pagamentos CASCADE;
DROP TABLE IF EXISTS itens_pedido CASCADE;
DROP TABLE IF EXISTS pedidos CASCADE;
DROP TABLE IF EXISTS pizza_ingredientes CASCADE;
DROP TABLE IF EXISTS ingredientes CASCADE;
DROP TABLE IF EXISTS pizzas CASCADE;
DROP TABLE IF EXISTS enderecos CASCADE;
DROP TABLE IF EXISTS clientes CASCADE;
DROP TABLE IF EXISTS funcionarios CASCADE;


-- ============================================
-- CLIENTES
-- ============================================

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    senha_hash TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ============================================
-- ENDEREÇOS
-- ============================================

CREATE TABLE enderecos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,

    rua VARCHAR(150) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2),
    cep VARCHAR(10) NOT NULL,

    CONSTRAINT fk_endereco_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id)
        ON DELETE CASCADE
);


-- ============================================
-- FUNCIONÁRIOS
-- ============================================

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    cargo VARCHAR(50) NOT NULL DEFAULT 'atendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ============================================
-- PIZZAS
-- ============================================

CREATE TABLE pizzas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10,2) NOT NULL CHECK (preco >= 0),
    imagem TEXT,
    disponivel BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ============================================
-- INGREDIENTES
-- ============================================

CREATE TABLE ingredientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL,
    preco_adicional NUMERIC(10,2) NOT NULL DEFAULT 0
        CHECK (preco_adicional >= 0),
    disponivel BOOLEAN NOT NULL DEFAULT TRUE
);


-- ============================================
-- RELAÇÃO PIZZA ↔ INGREDIENTES
-- ============================================

CREATE TABLE pizza_ingredientes (
    pizza_id INTEGER NOT NULL,
    ingrediente_id INTEGER NOT NULL,

    PRIMARY KEY (pizza_id, ingrediente_id),

    CONSTRAINT fk_pizza
        FOREIGN KEY (pizza_id)
        REFERENCES pizzas(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ingrediente
        FOREIGN KEY (ingrediente_id)
        REFERENCES ingredientes(id)
        ON DELETE CASCADE
);


-- ============================================
-- PEDIDOS
-- ============================================

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,

    cliente_id INTEGER NOT NULL,
    endereco_id INTEGER NOT NULL,

    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status VARCHAR(30) NOT NULL DEFAULT 'pendente',

    valor_total NUMERIC(10,2) NOT NULL DEFAULT 0
        CHECK (valor_total >= 0),

    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id),

    CONSTRAINT fk_pedido_endereco
        FOREIGN KEY (endereco_id)
        REFERENCES enderecos(id)
);


-- ============================================
-- ITENS DO PEDIDO
-- ============================================

CREATE TABLE itens_pedido (
    id SERIAL PRIMARY KEY,

    pedido_id INTEGER NOT NULL,
    pizza_id INTEGER NOT NULL,

    quantidade INTEGER NOT NULL
        CHECK (quantidade > 0),

    preco_unitario NUMERIC(10,2) NOT NULL
        CHECK (preco_unitario >= 0),

    CONSTRAINT fk_item_pedido
        FOREIGN KEY (pedido_id)
        REFERENCES pedidos(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_item_pizza
        FOREIGN KEY (pizza_id)
        REFERENCES pizzas(id)
);


-- ============================================
-- PAGAMENTOS
-- ============================================

CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,

    pedido_id INTEGER UNIQUE NOT NULL,

    metodo VARCHAR(30) NOT NULL,

    status VARCHAR(30) NOT NULL DEFAULT 'pendente',

    valor NUMERIC(10,2) NOT NULL
        CHECK (valor >= 0),

    data_pagamento TIMESTAMP,

    CONSTRAINT fk_pagamento_pedido
        FOREIGN KEY (pedido_id)
        REFERENCES pedidos(id)
        ON DELETE CASCADE
);