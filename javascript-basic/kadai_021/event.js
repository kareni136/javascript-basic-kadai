// DOMが完全に読み込まれた後にスクリプトが実行されるようにする
document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const button = document.getElementById("btn");

  // ボタンがクリックされた時に実行される関数を設定
  button.addEventListener("click", function() {
      // setTimeoutを使用して非同期処理をシミュレート
      setTimeout(function() {
          // h2要素を取得
          const text = document.getElementById("text");
          
          // h2要素のテキストを変更
          text.textContent = "ボタンをクリックしました";
      }, 2000); // 2秒後に実行
  });
});
