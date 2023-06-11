<div align="center">

 <h1>Backend Service Hackfest 2023</h1>
  <div>
    <img  height="500" width="500" src="https://github.com/danieltistoj/backend-hackfest2023/assets/42653664/7c7ca792-0a95-4a5d-b03a-a67399ed7ffb">
  </div>
<h1>Technologies</h1>
</div>
<div style="display: inline_block" align="center">
  <img align="center" alt="Rafa-Csharp" height="50" width="200" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img align="center" alt="Rafa-Csharp" height="50" width="200" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img align="center" alt="Rafa-Csharp" height="50" width="200" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img align="center" alt="Rafa-Csharp" height="50" width="200" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

<br>

<p>Instalar dependencias</p>

```sh
npm i
```

<p>Ejecutar en local</p>

```sh
npm run dev
```

<div align="center">
<h1>Dependencies</h1>
</div>

```json
    "body-parser": "^1.20.2",
    "cloudinary": "^1.37.1",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-fileupload": "^1.4.0",
    "fs-extra": "^11.1.1",
    "mongoose": "^6.6.1",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1"
```
<div align="center">
<h1>DevDependencies</h1>
</div>

```json
"nodemon": "^2.0.22"
```


<div>
  <div align="center">
 <h1>Documentation</h1>
 </div>
 <p>Host</p>

<ul>
<li><strong> DEV: </strong><code>https://backend-hackfest2023-production.up.railway.app</code></li>
<li><strong> Local: </strong><code>http://localhost:4000</code></li>
</ul> 
  
 <div>
 <h2>User</h2>
   <h2>Modelo de Datos</h2>
   <table>
        <tr>
            <th>Campo</th>
            <th>Tipo</th>
            <th>Requerido</th>
            <th>Recorte</th>
            <th>Valor Predeterminado</th>
        </tr>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>password</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>email</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>profilePhoto</td>
            <td>String</td>
            <td>No</td>
            <td>Sí</td>
            <td>""</td>
        </tr>
        <tr>
            <td>publicId</td>
            <td>String</td>
            <td>No</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>matchList</td>
            <td>Array</td>
            <td>No</td>
            <td>Sí</td>
            <td>[]</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>String</td>
            <td>No</td>
            <td>Sí</td>
            <td>""</td>
        </tr>
        <tr>
            <td>rol</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>""</td>
        </tr>
    </table>
 <h3>Create User</h3>
      <p>Creates a new user.</p>
 <ul>
 <li><strong>Method:</strong> POST</li>
 <li><strong>URL:</strong> <code>{{host}}/api/v1/user/create-user</code></li>
  </ul>
 <p>Request body:</p>

<pre>
<code>
{
    "name": "Ejemplo",
    "password": "MyPassword",
    "email": "nuevo@gmail.com"
}
</code>
</pre>
<h3>All Users</h3>
<p>Retrieves all users.</p>

<ul>
<li><strong>Method:</strong> GET</li>
<li><strong>URL:</strong> <code>{{host}}/api/v1/user/all-users</code></li>
</ul>

<h3>Get User By Name</h3>
<p>Retrieves a user by their name.</p>
<ul>
<li><strong>Method:</strong> GET</li>
<li><strong>URL:</strong> <code>{{host}}/api/v1/user/getUserByName/{name}</code></li>
<li>Replace <code>{name}</code> with the user's name.</li>
</ul>
<h3>Get User By Id</h3>
<p>Retrieves a user by their ID.</p>
<ul>
<li><strong>Method:</strong> GET</li>
<li><strong>URL:</strong> <code>{{host}}/api/v1/user/getUserById/{id}</code></li>
<li>Replace <code>{id}</code> with the user's ID.</li>
</ul>
<h3>Update User By Id</h3>
<p>Updates a user by their ID.</p>
<ul>
<li><strong>Method:</strong> PUT</li>
<li><strong>URL:</strong> <code>{{host}}/api/v1/user/updateUserById/{id}</code></li>
<li>Replace <code>{id}</code> with the user's ID.</li>
</ul>
 <p>Request body:</p>
 <pre>
 <code>
{
    "email": "correo2345@gmail.com"
}
</code>
</pre>
<h3>Delete User By Id</h3>
<p>Deletes a user by their ID.</p>
<ul>
<li><strong>Method:</strong> DELETE</li>
<li><strong>URL:</strong> <code>{{host}}/api/v1/user/deleteUserById/{id}</code></li>
<li>Replace <code>{id}</code> with the user's ID.</li>
</ul>

<h2>Pet</h2>
    <h2>Modelo de Datos</h2>
    <table>
        <tr>
            <th>Campo</th>
            <th>Tipo</th>
            <th>Requerido</th>
            <th>Recorte</th>
            <th>Valor Predeterminado</th>
        </tr>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>profilePhoto</td>
            <td>String</td>
            <td>No</td>
            <td>-</td>
            <td>""</td>
        </tr>
        <tr>
            <td>publicId</td>
            <td>String</td>
            <td>No</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>race</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>age</td>
            <td>String</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>sex</td>
            <td>Number</td>
            <td>Sí</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
        <tr>
            <td>description</td>
            <td>String</td>
            <td>No</td>
            <td>Sí</td>
            <td>-</td>
        </tr>
    </table>
<h3>Create Pet</h3>

<p>Creates a new pet.</p>

<ul>
<li><strong>Method:</strong> POST</li>
<li><strong>URL:</strong> <code> {{host}}/api/v1/pet/create-pet</code></li>
</ul>
<p>Request body:</p>
<pre>
<code>
{
    "name": "firulais",
    "image": [file],
    "race": "mestizo",
    "age": "2 meses",
    "sex": 1,
    "description": "Es un perro muy amigable"
}
</code>
</pre>
 <p>If Postman is used, a form-data format must be used for this endpoint</p>
<h3>All Pets</h3>
<p>Retrieves all pets.</p>

<ul>
<li><strong>Method:</strong> GET</li>
<li><strong>URL:</strong> <code> {{host}}/api/v1/pet/all-pet</code></li>
</ul>

<h2>Deployment</h2>

<h3>User-deploy</h3>

<p>These endpoints are available in the deployed version of the API.</p>

<ul>
<li><strong>Base URL:</strong> <code>https://backend-hackfest2023-production.up.railway.app/api/v1/user</code></li>
</ul>
<p>Please note that the deployed version may have different behavior or limitations compared to the local version.</p>  
 </div>
</div>


<div align="center">
<h1>Thanks for watching</h1>
   <div>
    <img  height="500" width="500" src="https://github.com/danieltistoj/backend-hackfest2023/assets/42653664/2d251ccc-2256-4aa7-9eab-25e0f340eb84">
  </div>
</div>
