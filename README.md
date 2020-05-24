# Dockerizar web estática con apache

## Crear una imagen para desplegar la web en un contenedor docker mediante apache

Ejecutar el comando:

```console
docker build -t "menudieta/staticweb:v1" .
```

## Crear el contenedor y ejecutarlo

Ejecutar el comando:

```console
docker run --name menu_dieta_web -d -p 8080:80 menudieta/staticweb:v1
```
