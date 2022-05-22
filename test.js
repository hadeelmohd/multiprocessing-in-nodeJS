const exec = require('child_process').exec;

exec('dir /bin/sh',(err,stdout,stderr) => {
    if (err) {
        console.log(err);
    }
    console.log('stdout no od directories'+stdout);
    if(stderr){
        console.log(`stderr ${stderr}`);
    }
}) 