FROM node:22.2.0

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .
COPY entrypoint.sh .

RUN chmod +x ./entrypoint.sh

RUN npm install

COPY /src ./src

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "/app/entrypoint.sh" ]
