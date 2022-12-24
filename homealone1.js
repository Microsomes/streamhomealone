
const homealone1 = "rtmp://talkfssteam.com:1936/live/homealone1";

/**
 * 
 * ffmpeg -re -nostdin -i Homealone1.mp4 \
 -vcodec libx264 -preset:v ultrafast \
     -acodec aac \
     -f flv rtmp://talkfssteam.com:1936/live/homealone1
 * 
 */

const child_process = require('child_process');

function startStream(){
const ffmpeg = child_process.spawn('ffmpeg', [
    '-re',
    '-nostdin',
    '-i',
    'https://maeplet.fra1.digitaloceanspaces.com/homealone/Home.Alone.1990.720p.BluRay.x264.YIFY.mp4',
    '-vcodec',
    'libx264',
    '-preset:v',
    'ultrafast',
    '-acodec',
    'aac',
    '-f',
    'flv',
    'rtmp://talkfssteam.com:1936/live/homealone1'
]);

ffmpeg.on('close', (code) => {
    console.log("stream over===================================")
    setTimeout(()=>{
        startStream()
    },10000)

});

ffmpeg.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
}

startStream();



