
# postgres-prisma-backend

ER Diagram
![GitHub Logo](https://camo.githubusercontent.com/34a16548e9a8b0fc8691cdcbe5e4591bbbdab5fab991cc0ed04b0cb799262f55/68747470733a2f2f692e6962622e636f2f516a6a72476d682f65722d6469616772616d2e706e67)


## Installation Steps
### Follow these steps to clone and set up starter project:


 `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```

 Configure Prisma and the database connection:

- Add Prisma as a development dependency by running the following command:
```bash
yarn add prisma --save-dev
```

- Set up your Prisma project by creating the Prisma schema file using the following command:
```bash
npx prisma init
```

- Open the prisma/schema.prisma file and configure your database connection details.

```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

- Create a .env file in the project root directory and set the DATABASE_URL environment variable. Replace the placeholders with your database connection details:
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

 Creating the database schema
 Migrate the database schema: Use the following command to create and apply the initial database schema:

```bash
npx prisma migrate dev --name init
```
This command creates a new migration file based on your schema changes and applies it to your database.

 `Install Prisma Client:` Install the Prisma Client library by running the following command:
```bash
yarn add @prisma/client
```

This command installs the Prisma Client, which provides an interface to interact with your database.

That's it! You have successfully set up the backend server Starter project. You can now start exploring and working with the codebase. Refer to the project documentation or README for further instructions on how to run and use the core service.

Happy coding!

