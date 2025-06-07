# Source File By Christian

FROM node:18


WORKDIR /frontend


COPY package*.json ./


RUN npm install --legacy-peer-deps


COPY . .


RUN npm run build


RUN npm install -g serve


EXPOSE 5000


CMD ["serve", "-s", "dist", "-l", "5000"]
