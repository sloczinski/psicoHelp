# PsicoHelp!

Projeto criado destinado para auxiliar os psicólogos nas tarefas administrativas enfrentadas durante o exercício da profissão.

## Instalação

```bash
# Clocar o repositório
git clone https://github.com/sloczinski/psicoHelp.git

# Instalar dependenciais
npm install

# Ajustar o Banco de dados
O projeto foi configurado utilizando um container docker.
Necessário executar no terminal o comando:
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=psicohelp -e MYSQL_USER=root -e MYSQL_PASSWORD=root -p 3306:3306 -d mysql:latest

Para a criação da base de dados e das tabelas, acessar o arquivo 'src/tables.txt'
```
