const {spawn} = require('child_process');
const child = spawn('dir',['/Users/huroro/Downloads/mern-stack-projects']);
child.stdout.on('data', (data) => {
    console.log(`data: ${data}`);
})
child.stderr.on('data', (data) => {
    console.log(`standard error ${data}`);
})
child.on('close', (code) =>{
    console.log(`child process closed with code ${code}`);
})