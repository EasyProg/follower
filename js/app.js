console.log(data);

const canvas = document.getElementById('canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');

const makeNetwork  =  ( context, width, height, users ) => {
    let i = users || 300;
    context.beginPath();
    context.fillStyle='#DEDCDC';
    context.lineWidth = 0.3;
    context.lineHeight = 1;
    context.strokeStyle = '#B0B0B0';
    while (i > 0) {
        context.moveTo(0, i);
        context.lineTo(width, i);
        context.stroke();
        context.font = '16px arial';
        context.fillText((i - 300)*-1, 0, i - 5);
        i-=50;
    }

    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();
}


const maxY0 = getMaxOfArray(data[0].columns[1]);
const maxY1 = getMaxOfArray(data[0].columns[1]);
const maxUsers = getMaxOfArray([maxY0, maxY1]);
const users = (Math.ceil(maxUsers/100) * 100);
//console.log(data[0].columns[1]);
makeNetwork(ctx, width, height, users);
