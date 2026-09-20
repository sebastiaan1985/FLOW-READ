const fs=require('fs'),sharp=require('sharp');
const svg=fs.readFileSync('assets/app-icon/icon-chunk.svg','utf8').replace('rx="24"','rx="0"');
(async()=>{for(const [name,size]of [['icon',1024],['adaptive-icon',1024],['splash-icon',256],['favicon',64]])await sharp(Buffer.from(svg)).resize(size,size).png().toFile('assets/'+name+'.png');console.log('App icons exported.');})();
