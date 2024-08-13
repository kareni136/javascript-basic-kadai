// 体重と身長を変数に代入
const weight = 68; // 体重（kg）
const height = 1.7; // 身長（m）

// BMIを計算
const bmi = weight / (height * height);

// 計算結果をコンソールに表示
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMI: " + bmi); // 小数点以下2桁で表示