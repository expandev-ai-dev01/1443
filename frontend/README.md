# TODO List - Sistema de Gerenciamento de Tarefas

## Descrição

Sistema de gerenciamento de tarefas com funcionalidades completas para organização, priorização e sincronização multiplataforma.

## Tecnologias

- **React 18.3.1** - Framework frontend
- **TypeScript 5.6.3** - Tipagem estática
- **Vite 5.4.11** - Build tool e dev server
- **React Router DOM 6.26.2** - Roteamento
- **TanStack Query 5.59.20** - Gerenciamento de estado do servidor
- **Axios 1.7.7** - Cliente HTTP
- **React Hook Form 7.53.1** - Gerenciamento de formulários
- **Zod 3.23.8** - Validação de schemas
- **Tailwind CSS 3.4.14** - Framework CSS
- **date-fns 4.1.0** - Manipulação de datas

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── domain/               # Módulos de domínio
├── pages/                # Páginas da aplicação
│   └── layouts/         # Layouts compartilhados
└── main.tsx             # Entry point
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente
# Edite o arquivo .env com as configurações do backend
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## Configuração do Backend

Configure as seguintes variáveis no arquivo `.env`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Funcionalidades Principais

1. **Criação de Tarefas** - Criar tarefas com título, descrição, data e prioridade
2. **Categorização** - Organizar tarefas em categorias personalizadas
3. **Prioridades** - Classificar por nível de importância
4. **Prazos** - Definir datas limite
5. **Conclusão** - Marcar tarefas como concluídas
6. **Busca** - Encontrar tarefas por título, descrição ou categoria
7. **Notificações** - Alertas para tarefas próximas do vencimento
8. **Compartilhamento** - Trabalho colaborativo em listas
9. **Calendário** - Visualização temporal das tarefas
10. **Sincronização** - Acesso multiplataforma

## Padrões de Desenvolvimento

### Componentes

- Usar TypeScript para todos os componentes
- Seguir padrão de nomenclatura PascalCase
- Documentar com JSDoc
- Separar lógica em hooks customizados

### Estilização

- Usar Tailwind CSS para estilos
- Evitar CSS inline
- Usar classes utilitárias do Tailwind

### Estado

- TanStack Query para estado do servidor
- Zustand para estado global (se necessário)
- useState/useReducer para estado local

### API

- Usar axios configurado em `src/core/lib/api.ts`
- Separar chamadas em services por domínio
- Tratar erros adequadamente

## Contribuindo

1. Criar branch para feature/bugfix
2. Seguir padrões de código estabelecidos
3. Adicionar testes quando aplicável
4. Documentar mudanças significativas
5. Criar pull request com descrição detalhada

## Licença

Proprietary - Todos os direitos reservados