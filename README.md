# Atividade: Detetive de APIs
**Disciplina:** Serviços Web 
**Professor:** Élder F. F. Bernardi
**Duração estimada:** 6 horas
---

## Contexto

Você foi contratado como **auditor técnico** por uma startup que está prestes a lançar sua API de catálogo de livros. A equipe de desenvolvimento entregou o código e garantiu que "está funcionando". De fato, a aplicação inicia sem erros, aceita requisições e retorna respostas. Porém, o arquiteto da empresa — que estudou REST e a arquitetura RCS (Router–Controller–Service) — desconfia que o time cometeu erros que violam princípios fundamentais da arquitetura.

A API foi construída seguindo (ou tentando seguir) o padrão **Router–Controller–Service (RCS) com DAO**, conforme o material de Modelagem de Serviços REST. A estrutura do projeto é:

```
├── app.js                          ← Ponto de entrada
├── routes/
│   └── livroRoutes.js              ← Mapeamento de rotas
├── controllers/
│   └── livroController.js          ← Orquestração req/res
├── services/
│   └── livroService.js             ← Lógica de negócio
├── dao/
│   └── livroDAO.js                 ← Acesso a dados (memória)
└── middlewares/
    └── errorHandler.js             ← Tratamento centralizado de erros
```

Sua missão: **encontrar, diagnosticar e corrigir** os problemas estruturais distribuídos pelas camadas da API, comprovando que você domina os conceitos estudados nos materiais de referência.

---

## Leitura Obrigatória (antes de iniciar)

> **Material 1:** "Criando a primeira API REST"
> **Material 2:** "Modelagem e Programação de Serviços REST com Express.js"
>
> Estes materiais são pré-requisito e estão no material de apoio da disciplina. Os erros da API estão distribuídos pelas camadas (Routes, Controller, Service, DAO) e só podem ser identificados com domínio dos conceitos de ambos os materiais. Sem a leitura, a atividade não pode ser concluída.

---

## Sobre a Metodologia

Esta atividade aplica a **Aprendizagem Baseada em Problemas (PBL)**: ao invés de construir algo do zero seguindo um tutorial, você recebe um produto *aparentemente funcional* e precisa aplicar seu conhecimento para identificar o que está errado — e, mais importante, **por quê**.

O princípio central é:

> **"Você deve ser capaz de corrigir o seu próprio dever de casa."**

Na vida profissional, a habilidade mais valiosa não é acertar de primeira, mas sim **reconhecer erros no próprio trabalho e corrigi-los com embasamento técnico**. Quem apenas segue tutoriais aprende a reproduzir; quem é capaz de revisar criticamente aprende a *pensar*. Esta atividade treina exatamente essa competência: revisão crítica fundamentada.

---

## Instruções

### Fase 1 — Preparação
1. Leia com atenção os materiais obrigatórios.
2. Clone este repositório:
   ```bash
   git clone https://github.com/elderbernardiifsul/ws-atividade-apiRestComProblemas.git
   cd ws-atividade-apiRestComProblemas
   ```
3. Instale as dependências e inicie a API:
   ```bash
   npm install
   node app.js
   ```
4. Confirme que a API inicia e que você consegue acessar as rotas.
   API de Livros rodando em http://localhost:3000 deve aparecer como sinal de sucesso. Aliás, essa é a URL de endpoint da API, para onde você deve realizar as requisições.

### Fase 2 — Investigação e Correção
1. Analise o código de **todos os arquivos** da API: `routes/`, `controllers/`, `services/`, `dao/`.
2. A API contém **7 erros estruturais** distribuídos pelas camadas. Todos são erros de *design* e de *violação de princípios REST e/ou da arquitetura RCS*. Nenhum é erro de sintaxe — o código executa sem problemas.
3. Os erros testam os seguintes tipos de conceito:
   - Como recursos devem ser representados em URLs REST
   - Qual o significado semântico dos verbos HTTP
   - Quais status codes usar para cada operação
   - Como os dados devem ser representados nas respostas
   - Qual camada faz o quê na arquitetura RCS
4. Para cada erro encontrado:
   - Identifique **o que** está errado.
   - Explique **por quê** está errado, citando o conceito do material de leitura.
   - **Corrija** o código.
5. Teste a API corrigida para confirmar que as rotas funcionam conforme os princípios REST e RCS.

### Fase 3 — Entrega via Formulário
1. Acesse o **[formulário de entrega](https://forms.gle/gn4q98vUbkwnUDq48)**.
2. Responda **todas** as questões com atenção.

---

## Dicas
- Use ferramentas como **Postman**, **Insomnia**, **Thunder Client** (extensão do VS Code) ou **curl** para testar as rotas.
- Compare o comportamento da API com as tabelas de rotas, métodos e status codes dos materiais.
- Leia o Controller com a perspectiva do material: *"O Controller NUNCA acessa o array de dados diretamente. Ele sempre chama o Service."* 
- Os erros estão em diferentes camadas e em diferentes aspectos: nomenclatura de rotas, métodos HTTP, status codes, representação de dados e separação de responsabilidades.

---

## Critérios de Avaliação

| Critério | Peso |
|---|---|
| Identificação correta dos 7 erros | 40% |
| Justificativa com referência ao material (por que é um erro?) | 30% |
| Correção proposta adequada e funcional | 20% |
| Completude e clareza das respostas no formulário | 10% |
