// 今日の日付を取得
const today = new Date();

// 年、月、日を取得する
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため、+1を忘れない
const day = today.getDate();

// 日付を「年 + '年' + 月 + '月' + 日 + '日'」の形式で結合する
const formattedDate = `${year}年${month}月${day}日`;

// 結果をコンソールに表示
console.log(formattedDate);