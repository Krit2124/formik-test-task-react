

# Тестовое задание на создание формы с использованием Formik

Ссылка на задание: https://docs.google.com/document/d/19QB9Ext_lpA_fQRSxSgfkPRRsRj92navwO0Yl1enggA/edit?tab=t.0

Ссылка на деплой: https://formik-test-task-react.vercel.app/

## Структура проекта

Для приложения была использована архитектура FSD: https://feature-sliced.design/docs/get-started/overview
```
- src/ 					// Главная папка с исходным кодом приложения
  - app/ 					// Входная точка приложения и основные настройки
  - page/
    - MainPage/ 				// Главная страница
  - shared/ 				// Общие модули и ресурсы
    - hocs/ 					// HOC-компоненты
      - withFormikField/ 			// HOC для работы с Formik-полями
    - lib/ 						// Утилиты и вспомогательные функции
      - showFieldsData.ts 			// Логика вывода сообщения о введённых полях
    - ui/ 						// Библиотека компонентов
      - Chakra/ 					// Компоненты Chakra UI
      - FormikCheckBox/ 			// Компонент для работы с чекбоксами
      - FormikInput/				// Компонент для работы с текстовыми полями
      - FormikRadio/ 				// Компонент для работы с радио-кнопками
    - validationRules/ 			// Правила и методы для валидации форм
      - yupMethods.ts 				// Расширенные методы Yup (moreThanSumOfFields)
      - yupSchema.ts 				// Схемы валидации Yup (сообщения об ошибках)
  - widgets/ 				// Независимые крупные модули
      - CustomForm/ 			// Форма с использованием Formik
- types/ 				// Общие типы и интерфейсы TypeScript
    - yup.d.ts 				// Типы для работы с Yup
- .gitignore 			// Файлы и папки, игнорируемые Git
- eslint.config.js 		// Конфигурация линтера ESLint
- index.html 			// Основной HTML-файл
- package.json 			// Список зависимостей и скриптов проекта
- package-lock.json 	// Фиксация версий зависимостей для npm
- tsconfig.json 		// Основная конфигурация TypeScript
- tsconfig.app.json 	// Конфигурация TypeScript для приложения
- vite.config.ts 		// Конфигурация Vite для сборки проекта
```

## Отличия от задания

1) **Окно с выводом введённых данных**
При сохранении введённых данных пользователю отображаются эти данные с помощью alert. Этот функционал нужен, чтобы понимать, что форма отработала так, как нужно. Если бы это было настоящее приложение, было бы лучше из соображений дизайна перекинуть пользователя на новую страницу или отобразить кастомное модальное окно с этими данными.

2) **Дополнительные поля формы**
В первом пункте задания сказано "Протестировать работу необходимо на следующих компонентах: Radio, CheckBox". В дальнейшем о них не говорится, но я решил их оставить, чтобы при проверке не нужно было редактировать код. Если они не нужны, их можно убрать из CustomForm.tsx.

3) **Минимальное количество этажей в доме **
Для количества этажей написано: "Мин. -3. Макс. – 200". Я решил, что -3 этажа в доме - это странно, и предположил, что дефис здесь должен был быть тире, как для максимального значения, и поставил ограничение на минимум 3 этажа. Если я не прав, исправить это также можно в CustomForm.tsx.

## Развёртывание проекта

Для локального запуска веб-приложение нужно выполнить следующие инструкции:

### 1. Клонирование репозитория Склонируйте репозиторий на свой компьютер, используя Git: 

Склонируйте репозиторий на свой компьютер, используя следующую команду:

```bash
git clone https://github.com/Krit2124/formik-test-task-react
```

---

### 2. Перейдите в директорию проекта 

```bash 
cd formik-test-task-react
```

---

### 3. Убедитесь, что у вас установлены следующие зависимости

- [Node.js](https://nodejs.org/) (рекомендуется версия **18.x** или выше)
- [npm](https://www.npmjs.com/) для управления пакетами

Проверьте версии Node.js и npm, выполнив:
```bash
node -v
npm -v
```

---

### 4. Установка зависимостей

Для установки всех необходимых пакетов выполните:

```bash
npm install
```

---

### 5. Запуск приложения в режиме разработки

После установки зависимостей запустите проект локально:

```bash
npm run dev
```

После запуска должна открыться вкладка с приложением по адресу http://localhost:5173/

---

### 6. Сборка приложения для продакшена

Для сборки оптимизированной версии приложения выполните:

```bash
npm run build
```

Это создаст папку `build`, содержащую готовую к развертыванию версию приложения.

---