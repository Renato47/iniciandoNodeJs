# iniciandoNodeJs

Iniciando API em Node Js e configurando para desenvolvimento

  Iniciando controle de pacote:
    yarn init -y

  Configurando o Typescript
    yarn add -D typescript
    yarn tsc --init
    no arquivo tsconfig.json, descomentar o parametro outDir e informar local para os arquivos js, ex: "./dist"

  Adicionando framework Express:
    yarn add express
    yarn add -D @types/express

  Adicionando para reiniciar a aplicação ao alterar os arquivos (com Typescript):
    yarn add -D ts-node-dev
    adicionar script no package.json "scripts": {"dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"} e iniciar aplicação com yarn dev

  Adicionando nodemon para reiniciar a aplicação ao alterar os arquivos (sem uso do Typescript):
    yarn add -D nodemon
    adicionar script no package.json "scripts": {"dev": "nodemon src/index.js"} e iniciar aplicação com yarn dev
    
  Adicionando tratativa de erros:
    criar uma classe de erro da API, "AppError.ts"
    adicionar o middleware de error após a importação das rotas:
      "app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError)
          return response.status(err.statusCode).json({ message: err.message })

        return response.status(500).json({ message: `Internal server error - ${err.message}` })
      })"
    instalar tratativa para função assincrona e importar logo após :
      "yarn add express-async-errors"

  Adicionando testes unitário
    instalar o pacote e inicializar a configuração:
      "yarn add jest @types/jest -D"
      "yarn jest --init", script test yes, typescript yes, enviroment node, coverage no, provider v8, clear mock yes.
    instalar pacote typescript para jest:
      "yarn add ts-jest -D"
    definir configuração do jest (jest.config.ts):
      usar preset:'ts-jest'
      quais são os arquivos de teste, testMatch: ["**/*.spec.ts"]
      parar teste caso encontre algum erro, bail: true

outros
  adicionar tests de integracao
  validacao schema do body