"# automatizacion-semana5-cypress" 

Conformación:

| Apellidos | Nombres | Correo @uniandes | Usuario de GitHub |
| --------- | ------- | ---------------- | ----------------- |
| Beltran Beltran | Laura Andrea | la.beltranb1@uniandes.edu.co |  laubeltranandes |
| Buitrago Corredor | Dario Alexander | da.buitragoc1@uniandes.edu.co |  dario-buitrago-andes |
| Cardenas Castañeda | Andres Camilo | ac.cardenasc1@uniandes.edu.co | accardenasc1 |
| Henao Toro | Daniel Felipe | df.henaot1@uniandes.edu.co | dhenaotoro |

Para realizar la instalación, se requiere tener node.js preinstalado en la maquina.

Posteriormente se requiere descargar el repositorio en cuestión en el directorio de trabajo: 

git clone 

Ejecutar el comando de instalación de librerias que contiene el proyecto:

npm install

Ejecutar las pruebas usando el comando:

cypress run --headless o npx cypress open --config-file cypress.json

<H2><b>Ejecución pruebas de tags:</b></H2>
Para las pruebas que corresponden a tags se realizó lo siguiente:
<ul>
 <li> Clonar el repositorio. </li>
 <li> Instalar las librerías de node js </li>
 <li> Creación de nuevo feature tag.feature </li>
 <li> Creación de nuevo page object tags-page.js </li>
 <li> Creación de nuevo steps tags-steps.js </li>
 <li> Creación de los 5 escenarios como: 
      <ul><li> Login y creación de un tag y posteriormente sea visible dentro del listado de tags </li>
          <li> Login y edición del tag recién creado editando el titulo y el color, posteriormente se regresa al listado de tags y se valida que el nombre cambio </li>
          <li> Login y tratar de eliminar el tag creado dando en el modal el rechazo de esta acción, posteriormente se regresa al listado de tags </li>
          <li> Login y creación de un tag sin nombre dando como resultado un mensaje de error como el siguiente "You must specify a name for the tag". </li>
          <li> Login y eliminación del tag aceptando la confirmación del modal, posteriormente se regresa al listado de tags </li>
      </ul>
  </li>
 </ul>
 