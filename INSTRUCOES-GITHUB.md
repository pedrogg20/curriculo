# Instruções para Publicar no GitHub

## Passo 1: Criar o repositório

1. Acesse https://github.com/new
2. Nome do repositório: `curriculo-tatiana` (ou outro nome que você preferir)
3. Deixe como público
4. Clique em "Create repository"

## Passo 2: Enviar o código para o GitHub

No terminal, execute (substituindo `seu-usuario` pelo seu nome de usuário do GitHub):

```bash
cd /home/roberto/projetos/tatiana/curriculo-web

# Inicializar o git (se ainda não inicializou)
git init

# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "Curriculo web inicial"

# Adicionar remote
git remote add origin https://github.com/josehroberto/curriculo-tatiana.git

# Fazer push
git branch -M main
git push -u origin main
```

## Passo 3: Habilitar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em Settings > Pages
3. Em "Build and deployment", selecione "main" branch
4. Clique em "Save"

O currículo estará disponível em: `https://josehroberto.github.io/curriculo-tatiana/`

## Passo 4: Testar a geração de PDF

1. Acesse a URL do GitHub Pages
2. Clique em "Imprimir Currículo"
3. Verifique se o PDF sai correto

## Para atualizar o currículo

1. Edite o arquivo `src/data.json`
2. Faça commit e push:
```bash
git add src/data.json
git commit -m "Atualizar dados"
git push
```

O PDF será gerado automaticamente após alguns minutos.
