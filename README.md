# Currículo Web - Tatiana Ferreira

Sistema web para edição e visualização do currículo de Tatiana Ferreira.

## 📋 Índice

- [Como funciona](#como-funciona)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como visualizar](#como-visualizar)
- [Como editar](#como-editar)
- [Como gerar PDF](#como-gerar-pdf)
- [Estrutura do data.json](#estrutura-do-datajson)

## Como funciona

Este projeto permite que você edite seu currículo diretamente no navegador e o converta automaticamente para PDF.

A estrutura é baseada em:
- **HTML5** para estrutura semântica
- **CSS3** com variáveis para fácil customização de cores
- **JavaScript (ES Modules)** para renderização dinâmica
- **GitHub Pages** para hospedagem
- **GitHub Actions** para geração automática de PDF

## Estrutura do Projeto

```
curriculo-web/
├── src/
│   ├── index.html    # Página principal do currículo
│   ├── style.css     # Estilos visuais e de impressão
│   ├── app.js        # Lógica da aplicação
│   └── data.json     # Dados do currículo em formato JSON
├── dist/
│   └── currículo-tatiana.pdf  # PDF gerado (automático)
├── scripts/
│   └── generate-pdf.js  # Script para gerar PDF
├── .github/workflows/
│   ├── deploy-pages.yml   # Deploy no GitHub Pages
│   └── generate-pdf.yml   # Geração automática de PDF
├── package.json
├── .gitignore
└── README.md
```

## Como visualizar seu currículo

### Localmente (em seu computador)

#### Método 1: Abrir diretamente no navegador (mais simples)
1. Abra o navegador (Chrome, Firefox, Edge, etc.)
2. Arraste o arquivo `src/index.html` para a janela do navegador
3. Ou use **Ctrl+O** (Cmd+O no Mac) e selecione `src/index.html`
4. Clique no botão **"Imprimir Currículo"** no topo direito para gerar um PDF

**Nota**: Se aparecer erro de CORS ao carregar o JSON, use o Método 2.

#### Método 2: Usar servidor local (recomendado)

No terminal, execute:

```bash
cd /home/roberto/projetos/tatiana/curriculo-web/src
python3 -m http.server 5500
```

Depois, acesse: **http://localhost:5500**

### Online (via GitHub Pages)
1. O currículo está hospedado no GitHub Pages
2. Acesse a URL do repositório (ex: `https://josehroberto.github.io/curriculo-tatiana/`)
3. Clique no botão **"Imprimir Currículo"** no topo direito para gerar um PDF

## Como editar seu currículo

### Opção 1: Editar via GitHub (Recomendado)

1. Acesse o repositório no GitHub
2. Clique em `src/data.json`
3. Clique no ícone de lápis (✏️) para editar
4. Faça as alterações necessárias no JSON
5. Role para baixo e clique em "Commit changes"

### Opção 2: Editar localmente

1. Copie o arquivo `src/data.json` para seu computador
2. Abra em um editor de texto (Bloco de Notas, VS Code, etc.)
3. Faça as alterações necessárias
4. Salve o arquivo
5. Substitua o arquivo `src/data.json` no GitHub

## Como gerar PDF

### Manualmente (no navegador)

1. Acesse o currículo no navegador
2. Clique no botão "Imprimir Currículo" (ícone de impressora no topo direito)
3. No diálogo de impressão:
   - Selecione "Salvar como PDF" como destino
   - Configure o formato como A4
   - Clique em "Salvar"

### Automático (via GitHub Actions)

Sempre que você salvar mudanças no arquivo `src/data.json`, o GitHub Actions gera automaticamente um novo PDF e o salva na pasta `dist/`.

## Como adicionar ou remover informações

### Adicionar nova experiência

No arquivo `data.json`, adicione um novo item à lista `experiencia`:

```json
{
  "empresa": "Nome da Empresa",
  "periodo": "Ano de Início - Ano de Término",
  "cargo": "Seu Cargo",
  "local": "Cidade - Estado",
  "descricao": [
    "Descrição da atividade 1",
    "Descrição da atividade 2"
  ]
}
```

### Adicionar nova formação

```json
{
  "nivel": "Nome do Curso",
  "instituicao": "Nome da Instituição",
  "conclusao": "Ano de Conclusão",
  "local": "Cidade - Estado"
}
```

### Adicionar novo curso

```json
{
  "nome": "Nome do Curso",
  "instituicao": "Nome da Instituição",
  "periodo": "Período de realização",
  "cargaHoraria": "Carga horária (opcional)"
}
```

## Estrutura do data.json

O arquivo `data.json` contém todos os dados do seu currículo em formato estruturado:

```json
{
  "nome": "Seu nome completo",
  "cargo": "Seu cargo atual ou área de atuação",
  "contato": {
    "telefones": ["(99) 99999-9999"],
    "email": "seu@email.com",
    "localizacao": "Cidade - Estado"
  },
  "resumo": "Breve descrição profissional",
  "areaAtuacao": ["Área 1", "Área 2"],
  "experiencia": [
    {
      "empresa": "Nome da Empresa",
      "periodo": "Período",
      "cargo": "Seu Cargo",
      "local": "Cidade - Estado (opcional)",
      "descricao": ["Descrição 1", "Descrição 2"]
    }
  ],
  "formacao": [
    {
      "nivel": "Nível de Formação",
      "instituicao": "Instituição",
      "conclusao": "Ano de Conclusão",
      "local": "Cidade - Estado (opcional)"
    }
  ],
  "cursos": [
    {
      "nome": "Nome do Curso",
      "instituicao": "Instituição",
      "periodo": "Período",
      "cargaHoraria": "Carga horária (opcional)"
    }
  ],
  "competencias": ["Habilidade 1", "Habilidade 2"],
  "idiomas": ["Idioma 1", "Idioma 2"],
  "informacoesAdicionais": {
    "documentacao": "Documentação completa e em ordem",
    "disponibilidade": "Disponibilidade de horário"
  }
}
```

## Personalização de cores

Para mudar as cores do currículo, edite as variáveis CSS no início do arquivo `src/style.css`:

```css
:root {
  --primary-blue: #0066FF;      /* Cor principal */
  --text-dark: #1A1A1A;          /* Cor do texto principal */
  --text-muted: #555555;         /* Cor do texto secundário */
  --bg-white: #FFFFFF;           /* Cor de fundo */
}
```

## Suporte

Para dúvidas ou problemas, entre em contato com o desenvolvedor.

---

© 2026 Currículo de Tatiana Ferreira

Licenciado sob a [MIT License](LICENSE)