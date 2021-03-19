FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install serve -g --silent

EXPOSE 3000

CMD ["sh", "-c", "npm run build; serve -s build -p 3000"]
