const fs = require('fs');

function generateRandomArrayAndFile(length, min, max) {
    const randomArray = Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );

    const data = randomArray.join(' '); // Convert array to space-separated string

    fs.writeFileSync('entrada.in', data);

    return randomArray;
}


generateRandomArrayAndFile(1000000,1,1000000);

// 1s = 100000
// 10s = 550000
// 1min = 2500000