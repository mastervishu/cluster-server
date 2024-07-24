import express, { Express } from 'express'


// ROUTES IMPORT
import healthCheckRoute from './routes/healthCheck.route'
const app: Express = express()


app
    .use(express.json())
    .use(express.urlencoded({ extended: true }));


app
    .use("/api/v1/health", healthCheckRoute);


export { app }