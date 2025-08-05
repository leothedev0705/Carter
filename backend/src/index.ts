import express from "express"
import http from "http"

const app = express()

const start = async (): Promise<void> => {
  try {
    const { container } = await require("@medusajs/medusa/dist/loaders")({
      directory: process.cwd(),
    })

    const configModule = container.resolve("configModule")
    const port = parseInt(process.env.PORT || "9000")

    const server = http.createServer(app)
    
    server.listen(port, () => {
      console.log(`Server is ready on port: ${port}!`)
    })

    // Handle graceful shutdown
    const gracefulShutDown = () => {
      server.close(() => {
        console.log("Gracefully stopping the server.")
        process.exit(0)
      })
    }
    process.on("SIGTERM", gracefulShutDown)
    process.on("SIGINT", gracefulShutDown)
  } catch (err) {
    console.error("Error starting server", err)
    process.exit(1)
  }
}

void start() 