let value = prompt("nhap vao chuoi");
let arr = value.split(" ");
let arrChart = [];
for (let i = 0; i < arr.length; i++) {
    let value = [];
    for (let j = 0; j < arr[i].length; j++) {
        value.push(arr[i].charAt(j));
    }
    arrChart[i] = value;
}

for (let i = 0; i < arrChart.length; i++) {
    for (let j = 0; j < arrChart[i].length; j++) {
        let lower = arr[i].toLowerCase().charAt(j);
        if (lower == arrChart[i][j]) {
            arrChart[i][j] = lower.toUpperCase();
        } else {
            arrChart[i][j] = lower;
        }
    }
    arrChart[i].join("");
}

for (let i = 0; i < arrChart.length; i++) {
    document.write(arrChart[i].join("") + " ");

}