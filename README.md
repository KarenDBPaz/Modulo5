# ExperimentoAPIs
 Projeto do Módulo 5, do Squad 5, no qual foi reunido um grupo de 6 pessoas para desenvolver uma API. O tema que escolhemos foi <b>Cemitério</b>
## ✔️ Técnicas e tecnologias utilizadas

- ``NodeJS``
- ``SQLite``
- ``Github``
- ``VS Code``
- ``JavaScript``
- ``Deploy``
- ``Express``
 
## 💻 Equipe: </h1> 
João Victor - https://github.com/BeholderRei <br>
Karen - https://github.com/KarenDBPaz <br>
Matheus Duarte - https://github.com/Theusduarte123 <br>
Deise - https://github.com/Deiselima042 <br>
Lara - https://github.com/LaraSharmon <br>
Vinícius - https://github.com/viniocean <br>
 
<h1>Passo a Passo do projeto: </h1>
<h2>Repositório e Versionamento</h2>
 • Inicie o GitHub Desktop e logue-se, se necessário;<br>
 · <i>Menu File → Options → Accounts → [Sign in]</i><br>
 · <i>O login é feito pelo navegador padrão, com sua conta GitHub.com.</i><br>
• No menu File, clique em New repository...;<br>
• Na popup "Create a new repository", preencha os dados:<br>
· <i>Name → express.test</i><br>
· <i>Description → Aplicativo experimental usando Node.js, Express.js e MySQL.</i><br>
· <i>Local path → (Digite o caminho onde a pasta do projeto será criada ou tecle [Choose] para selecioná-la.)</i><br>
· <i>Marque Initialize this repository with a README</i><br>
· <i>Git ignore → Node</i><br>
· <i>License: MIT License</i><br>
• Confira os dados com atenção e clique em [Create repository];<br>
• Na tela inicial do repositório, clique em [Publish repository];<br>
• Se necessário, edite os valores de Name e Description;<br>
•Desmarque a caixa Keep this code private;<br>
• Clique em [Publish repository];<br>
<h2>Aplicativo</h2><br>
• Abra um "Node.js command prompt";<br>
• Navegue até a pasta do projeto, criada pelo GitHub Desktop acima;<br>
· <i> Use o comando cd e a tecla [Tab] para navegar entre as pastas.</i><br>
• Use o comando npm init para criar o projeto;<br>
• Preencha e/ou aceite os dados solicitados com atenção;<br> 
· <i>Será criado um arquivo package.json com todos os dados do projeto que você inseriu.</i><br>
• Instale as dependências iniciais, comandando:<br>
>npm install express --save<br>
npm install nodemon --save<br>

<h1>ROTAS CRUD</h1>
<h2> [ 1 ] <i><b>Cemitério</i></b></h2>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/cemiterio** | Lista todos os cemitérios disponiveis.. |
|  **`GET`** | **/cemiterio/id** |  Lista um único cemitério pelo Id. |
|  **`PUT`** | **/cemiterio/id** | apaga um único cemiterio pelo Id.
|  **`DELETE`** | **/cemiterio/id** | Remove o fisioterapeuta.

<h2> [ 2 ] <i><b>Funcionários</i></b> </H2>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/funcionario** | Lista todos os registros válidos. |
|  **`GET`** | **/funcionario/id** | Lista um registro único pelo Id. |
|  **`POST`** | **/funcionario** | Insere um novo registro.  |
|  **`PUT`** | **/funcionario/id** | Edita o registro pelo Id.
|  **`DELETE`** | **/funcionario/id** | apaga um registro único pelo Id.

<h2> [ 3 ] <i><b>Pessoas</i></b> </H2>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/pessoa** | Lista todos os registros válidos. |
|  **`GET`** | **/pessoa/id** | Lista um registro único pelo Id. |
|  **`POST`** | **/pessoa** | Insere um novo registro.  |
|  **`PUT`** | **/pessoa/id** | Edita o registro pelo Id.
|  **`DELETE`** | **/pessoa/id** | apaga um registro único pelo Id.

<h2> [ 4 ] <i><b>Túmulos</i></b> </H2>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/tumuloa** | Lista todos os registros válidos. |
|  **`GET`** | **/tumulo/id** | Lista um registro único pelo Id. |
|  **`POST`** | **/tumulo** | Insere um novo registro.  |
|  **`PUT`** | **/tumulo/id** | Edita o registro pelo Id.
|  **`DELETE`** | **/tumulo/id** | apaga um registro único pelo Id.

<h2> [ 5 ] <i><b>Usuários</i></b> </H2>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/usuario** | Lista todos os registros válidos. |
|  **`GET`** | **/usuario/id** | Lista um registro único pelo Id. |
|  **`POST`** | **/usuario** | Insere um novo registro.  |
|  **`PUT`** | **/usuario/id** | Edita o registro pelo Id.
|  **`DELETE`** | **/usuario/id** | apaga um registro único pelo Id.
