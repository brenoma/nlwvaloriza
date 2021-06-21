import express from "express";

const app = express();

/*
    Tipos de métodos:
        GET    => Buscar uma informação
        POST   => Inserir ou criar uma informação
        PUT    => Alterar uma informação
        DELETE => Apagar uma informação
        PATCH  => Alterar uma informação específica

*/

app.get("/test", (request, response) => {
    //Request  => Entrando
    //Response => Saindo
    return response.send("Hello World!")
})

app.post("/test-post", (request, response) =>{
    return response.send("Hello post World!")  
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is runing in SLOW"))