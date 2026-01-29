-- init-funcional.sql
-- Script de inicialização do PostgreSQL para o ambiente local
-- Executado automaticamente na primeira inicialização do container

-- Criar databases necessários
CREATE DATABASE configuration;
CREATE DATABASE dashboard;
CREATE DATABASE llmdatabase;

-- Nota: O usuário 'root' já é criado pelo POSTGRES_USER do docker-compose
-- Ele já tem permissões de superuser em todos os databases
