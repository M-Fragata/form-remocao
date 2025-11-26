import http from "node:http"
import { dataBase } from "./database.js"
import { Remocao } from "./Remocao.js"

const port = 3333

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    if (method === "GET" && url === "/remocao") {

        try {
            const listaRemocao = await Remocao.find()

            return res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(listaRemocao))
        } catch (error) {
            return res
                .writeHead(404, { "Content-type": "application/json" })
                .end(JSON.stringify({ error: "Listagem de remoção não encontrado" }))
        }

    } else if (method === "POST" && url === "/remocao") {

        try {

            const buffers = []

            for await (const chunk of req) {
                buffers.push(chunk)
            }

            let body = {}

            body = JSON.parse(Buffer.concat(buffers).toString())

            const newRemocao = await Remocao.create(body)

            return res
                .writeHead(201, { "Content-type": "application/json" })
                .end(JSON.stringify(newRemocao))
        } catch (error) {
            return res
                .writeHead(400, { "Content-type": "application/json" })
                .end(JSON.stringify({ error: "Não foi possível criar novo atendimento para remoção" }))
        }

    } else {
        return res
            .writeHead(500, { "Content-type": "application/json" })
            .end(JSON.stringify({ error: "Rota não encontrada" }))
    }
})

const startServer = async () => {

    await dataBase()

    server.listen(port, () => console.log("servidor rodando"))
}

startServer()