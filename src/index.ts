import { availableParallelism } from 'os'
import cluster from 'cluster'
import { app } from './app';
import { HOST, POST } from './conf';
import { connectToMongo } from './db/mongo.db';

const cpuNumber: number = availableParallelism();


if (cluster.isPrimary) {
    for (let i = 0; i < cpuNumber; i++) {
        cluster.fork();
    }
} else {
    connectToMongo()
        .then(() => {
            app.listen(POST, HOST, function () {
                console.log(`server running on http://${HOST}:${POST}`)
            })
        })
}