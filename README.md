# 📊 Nortus Dashboard — Frontend

Aplicação frontend desenvolvida com Next.js para visualização de KPIs, gráficos e mapa interativo, consumindo dados de uma API REST documentada via Swagger/OpenAPI.

## 🧱 Stack utilizada

- Next.js (App Router)

- TypeScript

- Tailwind CSS — estilização

- React Query (TanStack Query) — gerenciamento de cache e estado assíncrono

- Orval — geração automática de clients a partir do Swagger

- OpenLayers — mapa interativo com marcadores personalizados

- ApexCharts — gráficos de linha (área) e barras

- Zod + React Hook Form — validação e formulários

- Cookies + LocalStorage — autenticação fictícia (token + usuário)

## 🗂️ Estrutura do projeto
A estrutura do projeto tem uma organização featured based.
```txt
src/
├─ app/
│  ├─ (auth)/
│  │  └─ login/ - Arquivos do componente de Login da plataforma
│  └─ (dashboard)/
│     └─ dashboard/ - Arquivos relacionados a análise de KPI
│
├─ api/ - Arquivos gerados pelo Orval
│
├─ components/
│  ├─ charts/ - Arquivos dos gráficos ApexChart
│  ├─ map/ - Arquivos do mapa OpenLayers
│  └─ ui/ - Componentes de ui reutilizados na plataforma
│
├─ features/ - Arquivos relacionados a features específicas do sistema
│
├─ lib/ - Código utilitário sem dependência de react
│
└─ providers/ - Arquivos globais
```
## 🔐 Autenticação (fictícia)

Login via endpoint /auth/login

Token armazenado em cookie

Informações básicas do usuário em LocalStorage

Token injetado automaticamente nas requests via authMutator

## 📈 Dashboard
Gráficos

Evolução de KPIs (ARPU, Conversão, Retenção, Churn)

Alternância dinâmica de métricas

Dados vindos do endpoint:

/nortus-v1/dashboard

Mapa

Mapa interativo com pins coloridos

Cada localização vem com:

latitude / longitude

cor personalizada

Dados vindos do endpoint:

/map/locations


## ▶️ Rodando o projeto
```npm install```

```npm run dev```


Criar um arquivo .env.local na raiz:

NEXT_PUBLIC_API_URL=https://nortus-challenge.api.stage.loomi.com.br

## 📝 Observações

O client da API é gerado automaticamente — não editar manualmente generated.ts

O Swagger é a fonte da verdade para os contratos
