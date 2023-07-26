import fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";

const server = fastify();

server.get("/", { websocket: true }, (connection, req) => {
    connection.socket.on("message", (message) => {
        connection.socket.send(message);
    });
});

server.listen({ port: 4000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
