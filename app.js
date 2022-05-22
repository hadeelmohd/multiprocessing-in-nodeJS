const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
// console.log(numCPUs);
if ( !cluster.isMaster ) {
    masterProcess();
} else {
    childProcess();
}

function masterProcess () {
    console.log(`master ${process.pid} is running`);

    for (let i=0;i<numCPUs;i++) {
        console.log(`forking process number ${i} ...`);
        cluster.fork();
    }
    // process.exit();
}

function childProcess () {
    console.log(`worker ${process.pid} started and finished`);
    process.exit();
}