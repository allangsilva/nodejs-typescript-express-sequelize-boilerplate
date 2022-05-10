export default {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "History API",
    description: "Send all of data change and get it on async way",
    termsOfService: "http://api_url/terms/",
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "https://localhost:3331/",
      description: "Production Server",
    },
    {
      url: "https://localhost:8080/",
      description: "Homolog server",
    },
  ],
  paths: {
    "/users": {
      get: {
        description: "Lista todos os usuários do sistema",
        operationId: "listUsers",
        parameters: [
          {
            name: "limit",
            in: "query",
            schema: {
              $ref: "#/components/schemas/limit",
            },
          },
          {
            name: "offset",
            in: "query",
            schema: {
              $ref: "#/components/schemas/offset",
            },
          },
        ],
        responses: {
          "200": {
            description: "Lista de usuários",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UsersListResponse",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      limit: {
        type: "number",
        example: 1,
      },
      offset: {
        type: "number",
        example: 0,
      },
      idNumber: {
        type: "number",
        example: 1,
      },
      username: {
        type: "string",
        example: "pele.silva",
      },
      date: {
        type: "date",
        example: "2021-05-06T11:48:48.503Z",
      },
      UsersListResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              $ref: "#/components/schemas/idNumber",
            },
            username: {
              $ref: "#/components/schemas/username",
            },
            updatedAt: {
              $ref: "#/components/schemas/date",
            },
            createdAt: {
              $ref: "#/components/schemas/date",
            },
          },
        },
      },
    },
  },
};
