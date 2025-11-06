# TODO List - Backend API

Sistema de gerenciamento de tarefas - Backend REST API

## Tecnologias

- Node.js
- TypeScript
- Express.js
- Zod (validação)

## Estrutura do Projeto

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente necessárias

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Produção

```bash
npm start
```

## Testes

```bash
npm test
```

## Lint

```bash
npm run lint
npm run lint:fix
```

## Endpoints

### Health Check
- `GET /health` - Verifica o status da API

### API v1
- Base URL: `/api/v1`
- External (public): `/api/v1/external/...`
- Internal (authenticated): `/api/v1/internal/...`

## Funcionalidades

- Criação de Tarefas
- Categorização de Tarefas
- Definição de Prioridades
- Estabelecimento de Prazos
- Marcação de Conclusão
- Busca de Tarefas
- Notificações e Lembretes
- Compartilhamento de Tarefas
- Visualização em Calendário
- Sincronização Multiplataforma

## Padrões de Código

- TypeScript strict mode
- ESLint para qualidade de código
- Comentários TSDoc
- Testes unitários e de integração
- Separação clara de responsabilidades

## Licença

ISC