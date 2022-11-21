<h1>automatizacion-semana5-cypress</h1>

Conformación:

| Apellidos | Nombres | Correo @uniandes | Usuario de GitHub |
| --------- | ------- | ---------------- | ----------------- |
| Beltran Beltran | Laura Andrea | la.beltranb1@uniandes.edu.co |  laubeltranandes |
| Buitrago Corredor | Dario Alexander | da.buitragoc1@uniandes.edu.co |  dario-buitrago-andes |
| Cardenas Castañeda | Andres Camilo | ac.cardenasc1@uniandes.edu.co | accardenasc1 |
| Henao Toro | Daniel Felipe | df.henaot1@uniandes.edu.co | dhenaotoro |

Para realizar la instalación, se requiere tener node.js y Cypress preinstalado en la maquina.

Posteriormente se requiere descargar el repositorio en cuestión en el directorio de trabajo: 

git clone  https://github.com/laubeltranandes/automation-cy-week-5.git

Ejecutar el comando de instalación de librerias que contiene el proyecto:

npm install

Ejecutar las pruebas usando el comando:

🟢 cypress run --headless o npx cypress open --config-file cypress.json

Para Correr las dos versiones de ghost se ejecuta usando el comando (es necesario tener docker instalado) : 

V3.42
🐳 docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

V5.1
🐳 docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_5.1 ghost:5.1


<H2><b>Features Incluidos : </b></H2>
<ul>
 <li>Dashboard</li>
 <li>Pages</li>
  <li>Post</li>
  <li>Tags</li>
</ul>


<H2><b>Ejecución pruebas de dashboard:</b></H2>
Para las pruebas que corresponden a dashboard se realizó lo siguiente:
<ul>
 <li> Clonar el repositorio. </li>
 <li> Instalar las librerías de node js </li>
 <li> Creación de nuevo feature dashboard.feature en el cual se cubrieron los siguientes escenarios : 
  <ol>
   <li>Verificar que el usuario pueda logearse y acceder al dashboard</li>
   <li>Verificar que el dashboard muestra la cantidad de miembros total</li>
   <li>Verificar que el dashboard muestra la seccion de Top Resources</li>
   <li>Verificar que el dashboard muestra la seccion de Engagement</li>
   <li>Verificar que el dashboard muestra la seccion de Post Recientes</li>
  </ol>
 </li>
 <li> Creación de nuevo page object dashboard-page.js </li>
 <li> Creación de nuevo steps dashboard-steps.js en los cuales se crean los siguientes pasos: 
    <ol>
     <li>Creacion de nuevo miembro</li>
     <li>Total de miembros </li>
     <li>Navegacion al dashboard</li>
     <li>Total de miembros mostrada </li>
     <li>Secciones de Engagement , top resources y post mostradas</li>
     <li>Eliminar usuarios </li>
  </ol>
 </li>
 </ul>

<H2><b>Ejecución pruebas de Pages:</b></H2>
Para las pruebas que corresponden a pages se realizó lo siguiente:
<ul>
 <li> Clonar el repositorio. </li>
 <li> Instalar las librerías de node js </li>
 <li> Creación de nuevo feature pages.feature en el cual se cubrieron los siguientes escenarios : 
  <ol>
   <li>Verificar que el usuario pueda crear pagina y visualizarla</li>
   <li>Verificar que el usuario pueda editar pagina y visualizarla</li>
   <li>Verificar que el usuario pueda despublicar una pagina</li>
   <li>Verificar que el usuario pueda borrar una pagina y actualizar la lista</li>
   <li>Verificar que el usuario pueda programar la publicacion de una pagina</li>
  </ol>
 </li>
 <li> Creación de nuevo page object pages-page.js </li>
 <li> Creación de nuevo steps pages-steps.js en los cuales se crean los siguientes pasos: 
    <ol>
     <li>Creacion de nueva pagina</li>
     <li>Edicion de pagina </li>
     <li>Despublicar pagina</li>
     <li>Borrar pagina</li>
     <li>Agendar publicacion pagina</li>
     <li>Verificar titulo</li>
      <li>Navegacion de las paginas</li>
      <li>Click en nueva pagina</li>
      <li>Verificar estado de la pagina</li>
  </ol>
 </li>
 </ul>

<H2><b>Ejecución pruebas de Post:</b></H2>
Para las pruebas que corresponden a post se realizó lo siguiente:
<ul>
 <li> Clonar el repositorio. </li>
 <li> Instalar las librerías de node js </li>
 <li> Creación de nuevo feature post.feature en el cual se cubrieron los siguientes escenarios : 
  <ol>
   <li>Verificar que el usuario pueda crear un post y visualizarlo</li>
   <li>Verificar que el usuario pueda crear el borrador de un post y visualizarlo</li>
   <li>Verificar que el usuario pueda eliminar el borrador de un post y visualizarlo</li>
   <li>Verificar que el usuario pueda programar la publicacion de un post</li>
  </ol>
 </li>
 <li> Creación de nuevo page object post-page.js </li>
 <li> Creación de nuevo steps post-steps.js en los cuales se crean los siguientes pasos: 
    <ol>
     <li>Creacion de nuevo post </li>
     <li>Crear borrador post </li>
     <li>Verificar la lista de post</li>
     <li>Click para editar post</li>
     <li>Visualizacion de post</li>
      <li>Verificar estado del post</li>
  </ol>
 </li>
 </ul>


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
 
