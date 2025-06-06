FROM node:20

WORKDIR /app

# Копируем package.json и package-lock.json из папки frontend, потому что контекст — корень
COPY frontend/package*.json ./

RUN npm install

# Копируем весь frontend внутрь контейнера
COPY frontend/. .

RUN npm run build

EXPOSE 7000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]