import "./styles.css";

//追加ボタンを押した時に関数を追加していく

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  //div生成
  const div = document.createElement("div");

  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  //inputTextに入力した値をliに追加したい
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //押された完了ボタンの親タグを完了したTODOに追加
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");

    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了したリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // console.log(completeButton);

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // console.log(deleteButton);

  //divタグの下にliタグを設定する処理
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // //未完了リストに追加
  document.getElementById("incomplete-list").appendChild();
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//共通の処理を関数化する
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
