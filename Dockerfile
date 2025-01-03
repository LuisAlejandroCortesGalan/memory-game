# DESCARGAR LA IMAGEN QUE QUEREMOS UTILIZAR 
FROM node:22

LABEL developer="Alejandro"

WORKDIR /app
# COPIAR LOS FICHEROS CON LA INFORMACION DE LAS DEPENDENCIAS
COPY package*.json ./

# OBTENER LOS MODULOS
RUN npm install
# Copiar el proyecto
COPY . . 
# ARRANCAR
CMD ["npm", "start"]