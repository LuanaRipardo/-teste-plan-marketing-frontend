# Use a imagem base Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Execute o comando npm install para instalar as dependências
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Exponha a porta 8081 do contêiner
EXPOSE 8081

# Execute o comando npm run serve quando o contêiner for iniciado
CMD ["npm", "run", "serve"]
