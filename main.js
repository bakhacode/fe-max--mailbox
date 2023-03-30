const map = document.querySelector(".map");

let townNum = 0;

function getRandomDimensions(outer) {
    let width = Math.floor(Math.random() * outer.offsetWidth * 0.25 + 1) + 100;
    let height =
        Math.floor(Math.random() * outer.offsetHeight * 0.25 + 1) + 100;
    return [width, height];
}

function getRandomPosition(outer, inner) {
    const outerRect = outer.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    console.log(inner);
    console.log(outerRect, innerRect);
    let x = Math.floor(Math.random() * (outerRect.width - innerRect.width));
    let y = Math.floor(Math.random() * (outerRect.height - innerRect.height));

    return [x, y];
}

//만들어진 랜덤값이 안삐져나가는지 확인하는 함수하나 만들기 조건으로 걸어줄것

function createTownElement(outer) {
    townNum++;
    let [width, height] = getRandomDimensions(outer);

    const town = document.createElement("div");
    town.classList.add("town");
    town.style.width = `${width}px`;
    town.style.height = `${height}px`;
    town.textContent = "town" + townNum;
    let [x, y] = getRandomPosition(outer, town);
    town.style.left = `${x}px`;
    town.style.top = `${y}px`;
    if (true) {
        //만들어진 랜덤값이 아우터 크기를 넘는지 안넘는지 확인
        outer.appendChild(town);
    }
    return;
}

createTownElement(map);

// function repeatMakeTown(outer) {
//     for (let i = 0; i < 3; i++) {
//         makeTown(outer);
//     }
//     // makeTown(outer);
// }

// repeatMakeTown(map);

function makeNum(string) {
    return (num = parseInt(string));
}

function isNotOverlap (outer, inner) {
    
}
    