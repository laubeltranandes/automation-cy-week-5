<h1>automatizacion-semana5-cypress</h1>

Conformación:

| Apellidos | Nombres | Correo @uniandes | Usuario de GitHub |
| --------- | ------- | ---------------- | ----------------- |
| Beltran Beltran | Laura Andrea | la.beltranb1@uniandes.edu.co |  laubeltranandes |
| Buitrago Corredor | Dario Alexander | da.buitragoc1@uniandes.edu.co |  dario-buitrago-andes |
| Cardenas Castañeda | Andres Camilo | ac.cardenasc1@uniandes.edu.co | accardenasc1 |
| Henao Toro | Daniel Felipe | df.henaot1@uniandes.edu.co | dhenaotoro |

##Pre-requisitos
- Para realizar la instalación, se requiere tener node.js y Cypress preinstalado en la maquina.
- Haber clonado el reposotorio de [resemble](https://github.com/dario-buitrago-andes/ghost-regresion-resemble) en la misma ruta donde pretende clonar este proyecto **Es en este direcotorio donde se dejaran las imagenes generadas**

Posteriormente se requiere descargar el repositorio en cuestión en el directorio de trabajo: 

`git clone  https://github.com/laubeltranandes/automation-cy-week-5.git`

Ejecutar el comando de instalación de librerias que contiene el proyecto:

`npm install`

Ejecutar las pruebas usando el comando:

🟢 `cypress run --headless o npx cypress open --config-file cypress.json`

Con ayuda del asistente de cypress ejecute cada uno de los features

**Nota**: 
- Para ejecutar las pruebas de la versión bajo pruebas de la semana 5, debe estar ubicado en la rama llamada **main**
- Para ejecutar las pruebas de la versión bajo pruebas de la semana 6, debe estar ubicado en la rama llamada **week-6**

Para Correr las dos versiones de ghost se ejecuta usando el comando (es necesario tener docker instalado) : 

V3.42
🐳 `docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42`

V5.1
🐳 `docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_5.1 ghost:5.1`

## Posteriormente

Siga las instrucciones del README del repositorio [resemble](https://github.com/dario-buitrago-andes/ghost-regresion-resemble) para obtener un informe de regresión visual mas detallado


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
 
 <h1> Entrega semana 7 </p>
 
 <h4>Esta semana se hizo uso de tres estrategias de generación de datos para pruebas en el aplicativo Ghost, los cuales se describen en seguida</h4>
 
 ## Generación de datos a priori
 
 Se trata de una estrategia de generación de datos que implica usar construir una fuente de datos fija que puede ser accedida en tiempo de ejecucion de pruebas, estas pueden verse como un conjunto de datos descriptivos en una Base de datos, archivo csv, archivo json u otra fuente de facil acceso por motor de pruebas.
 
 En nuestro caso, optamos por la creación de un archivo json con atributos que se diferencian por su tipo, siendo este un ejemplo:
 
 ```json
 [
 {
    "color": "#734ce6",
    "name": "Mersey",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "email": "mtimby0@auda.org.au",
    "title": "suspendisse",
    "date": "2023-11-13",
    "url": "https://wikipedia.org/blandit.png?tristique=faucibus&est=orci&et=luctus&tempus=et&semper=ultrices&est=posuere&quam=cubilia&pharetra=curae&magna=donec&ac=pharetra&consequat=magna&metus=vestibulum&sapien=aliquet&ut=ultrices&nunc=erat",
    "test_field": "｀ｨ(´∀｀∩"
  }, {
    "color": "#b46e31",
    "name": "Walsh",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "email": "whuskisson1@creativecommons.org",
    "title": "dolor",
    "date": "2023-10-06",
    "url": "http://discuz.net/montes.js?elementum=sagittis&ligula=sapien&vehicula=cum&consequat=sociis&morbi=natoque&a=penatibus&ipsum=et&integer=magnis&a=dis&nibh=parturient&in=montes&quis=nascetur&justo=ridiculus&maecenas=mus&rhoncus=etiam",
    "test_field": "⁰⁴⁵₀₁₂"
  }
 ]
 ```
 
 ### Modo de uso:
 
  - Adicionamos un paso en el background de los features que se encarga de hacer la seleccion del item dentro del archivo que vamos a tener como referencia en nuestros escenarios.
  
  ```feature
  Background:
    Given a priori data should be loaded for page
  ```
 
 - Se debe hacer el import de la clase mackarooClient json en la capa de steps.
 
 ```javascript
 import {MockarooClient} from "../mockarooClient/mockarooClient";
 ```
 
 - Instanciamos el objeto mackaroo que será el encargado de seleccionar el item de datos de prueba.
 ```javascript
 const mockaroo = new MockarooClient();
 ```
 
 - Usamos el item con sus atributos
 ```javascript
 let selectedRow;
 
 Given(/^a priori data should be loaded for page$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
 });
 
 When(/^user types a text$/, async function() {
    pagesPageObj.putInputText(selectedRow.title);
 })
 ```
 
 ## Generación de datos pseudo aleatorios
 
 En este modo dejamos la responsabilidad de obtener los datos para las pruebas al cliente de Mackaroo, el cual se conecta directamente con el API de Mackaroo y obtiene los valores con la estrategia que se defina en el cliente
 
 Esta es la definicion del cliente de Mackaroo en una fachada donde especificamos la estrategia requerida para obtener los valores de prueba:
  
 ```javascript
  export class MockarooClient {

    amount = 1;
    client = new Mockaroo.Client({ apiKey: 'xxxxxxxx' });

    MockarooClient(){}

    async getDataPoolFromAPI() {
        return this.client.generate({
            count: this.amount,
            schema: 'pseudo-aleatorio'
        })
    }
 }
 ```
 
 ### Modo de uso:
 
  - Adicionamos un paso en el background de los features que se encarga de hacer la una precarga de datos de prueba con la misma estructura de un item del archivo json mostrado en la estrategia de datos a priori
  
  ```feature
  Background:
    Given a priori data pseudo aletorio should be loaded for page
  ```
 
 - Se debe hacer el import de la clase mackarooClient json en la capa de steps.
 
 ```javascript
 import {MockarooClient} from "../mockarooClient/mockarooClient";
 ```
 
 - Instanciamos el objeto mackaroo que será el encargado de seleccionar el item de datos de prueba.
 ```javascript
 const mockaroo = new MockarooClient();
 ```
 
 - Usamos el item con sus atributos
 ```javascript
 let selectedRow;
 
 Given(/^a priori data should be loaded for page$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
 });
 
 When(/^user types a text$/, async function() {
    pagesPageObj.putInputText(selectedRow.title);
 })
 ```

## Generación de datos aleatorios

Para esta estrategia nos apoyamos de la libreria [faker](https://fakerjs.dev/), la cual cuenta con la logica para generar data de tipo random divida en secciones que facilitan su uso y explotación.

### Modo de uso

- Se debe hacer el import de la libreria faker en la capa de steps.
 
 ```javascript
 import {faker} from '@faker-js/faker';
 ```
 
 - Usamos el objeto importado para generar la data aleatoria
 ```javascript
   When(/^user types a RGB color$/, async function() {
    pagesPageObj.putInputText(faker.color.rgb());
   })
   
   When(/^user types a url$/, async function() {
    pagesPageObj.putInputText(faker.internet.url());
   })
   
   When(/^user types a date$/, async function() {
    pagesPageObj.putInputText(faker.date.birthdate().toISOString());
   })
 ```
