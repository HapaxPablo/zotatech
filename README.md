# Zotatech

Проект представляет собой веб-приложение для регистрации и авторизации пользователей, разработанное с использованием Vue 3 и TypeScript.

## Технологии

- Vue 3
- TypeScript
- Pinia (управление состоянием)
- Vue Router
- Vue The Mask (маски для инпутов)
- Vite

## Функциональность

- Регистрация пользователей с валидацией полей:
  - Логин (обязательное поле, минимум 6 символов)
  - Email
  - Телефон (с маской +7 (###) ###-##-##)
  - Пароль
  - Подтверждение пароля
- Адаптивный дизайн
- Сохранение состояния авторизации
- Защищенные маршруты

## Структура проекта

```
src/
├── app/              # Инициализация приложения
├── assets/           # Статические ресурсы
│   └── styles/       # Стили
├── entities/         # Бизнес-сущности
├── features/         # Функциональные модули
│   ├── auth/         # Авторизация
│   └── profile/      # Профиль пользователя
├── pages/            # Страницы приложения
├── shared/           # Переиспользуемые компоненты
└── types/            # TypeScript типы
```

## Установка и запуск

1. Клонируйте репозиторий
```bash
git clone [url-репозитория]
```

2. Установите зависимости
```bash
npm install
```

3. Запустите проект в режиме разработки
```bash
npm run dev
```

4. Для сборки проекта
```bash
npm run build
```

## Скрипты

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка проекта
- `npm run preview` - предпросмотр собранного проекта
- `npm run type-check` - проверка типов TypeScript
- `npm run lint` - проверка кода линтерами
- `npm run format` - форматирование кода

## Особенности реализации

- Использование Composition API
- Типизация с помощью TypeScript
- Адаптивный дизайн с использованием CSS-переменных
- Валидация форм
- Сохранение состояния в localStorage через Pinia
- Защита маршрутов
