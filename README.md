This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
├── app/ # Инициализация приложения, layout, провайдеры
│ ├── layout.tsx
│ ├── providers.tsx # React Query, Zustand, ThemeProvider и т.д.
│ └── global.css
│
├── pages/ # Страницы (Next.js)
│ ├── index.tsx
│ ├── profile/
│ │ └── index.tsx
│ └── dashboard/
│ └── index.tsx
│
├── widgets/ # Крупные UI-блоки
│ ├── navbar/
│ │ ├── ui/
│ │ │ └── Navbar.tsx
│ │ └── index.ts
│ └── sidebar/
│ ├── ui/
│ └── index.ts
│
├── features/ # Фичи (логика действий)
│ ├── auth/
│ │ ├── ui/
│ │ │ └── LoginForm.tsx
│ │ ├── model/
│ │ │ └── useAuth.ts
│ │ ├── api/
│ │ │ └── login.ts
│ │ └── index.ts
│ └── upload-avatar/
│ ├── ui/
│ ├── model/
│ └── api/
│
├── entities/ # Бизнес-сущности
│ ├── user/
│ │ ├── api/
│ │ │ ├── getUser.ts
│ │ │ └── updateUser.ts
│ │ ├── model/
│ │ │ └── store.ts # Zustand store для пользователя
│ │ ├── ui/
│ │ │ └── UserCard.tsx
│ │ ├── types.ts
│ │ └── index.ts
│ ├── post/
│ │ ├── api/
│ │ ├── model/
│ │ ├── ui/
│ │ ├── types.ts
│ │ └── index.ts
│ └── product/
│
└── shared/ # Повторно используемые вещи
├── api/
│ ├── base.ts # axios instance
│ └── interceptors.ts # токены, refresh logic
├── ui/ # кнопки, инпуты, модалки
│ ├── Button.tsx
│ └── Input.tsx
├── lib/ # утилиты, helper functions
├── hooks/ # общие хуки
│ ├── useDebounce.ts
│ └── useMedia.ts
├── types/ # глобальные типы
│ ├── api.ts
│ └── index.ts
└── config/ # глобальные константы, env
