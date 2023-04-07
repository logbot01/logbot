## Descripción del proyecto

Este proyecto consiste en una aplicación de inteligencia artificial que utiliza el algoritmo A-star para encontrar la ruta más corta entre dos puntos en un mapa, y una red neuronal implementada en Keras para clasificar imágenes.

El proyecto utiliza Docker y Docker Compose para crear tres contenedores independientes, uno para el algoritmo A-star, otro para la red neuronal en Keras, y otro para la base de datos MySQL. Cada contenedor tiene su propia dirección IP privada y utiliza volúmenes para persistir los datos.

## Cómo ejecutar el proyecto.

Para ejecutar el proyecto, se deben seguir los siguientes pasos:

Clonar este repositorio en la máquina donde se desea ejecutar el proyecto.
Crear un archivo config.env con las variables de entorno necesarias para configurar los servicios. Puedes utilizar el archivo config.env.example como plantilla.
Ejecutar el siguiente comando para iniciar los contenedores:

$ ./start.sh

Este script leerá las variables de entorno definidas en el archivo config.env y ejecutará el comando docker-compose up para iniciar los contenedores.

1. Esperar a que los contenedores se inicien completamente. Este proceso puede tardar unos minutos.

2. Acceder a la aplicación web de A-star en el puerto 5000 de la dirección IP del contenedor astar, por ejemplo: http://172.28.0.2:5000/.

3. Acceder a la aplicación web de Keras en el puerto 8000 de la dirección IP del contenedor keras, por ejemplo: http://172.28.0.3:8000/.

4. Cuando se haya terminado de utilizar la aplicación, se puede detener y eliminar los contenedores utilizando el siguiente comando:

    $ ./stop.sh
