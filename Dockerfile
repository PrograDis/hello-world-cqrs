# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Crea el directorio de la aplicación
WORKDIR /usr/src/app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]