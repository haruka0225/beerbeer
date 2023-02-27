$(function () {
  // console.log("hello world");
  // $(jqueryオブジェクト).val()で入力された値を取得
  $(".btn").on("click", function () {
    // console.log("tgif");

    // ここから非同期通信
    $.ajax({
      url: 'https://api.punkapi.com/v2/beers/random', //アクセスするURL
      type: 'get', //post or get
      cache: false,        //cacheを使うか使わないかを設定
      dataType: 'json',     //data type script・xmlDocument・jsonなど
      // data: data,           //アクセスするときに必要なデータを記載      
    })
      .done(function (response) {
        //通信成功時の処理
        //成功したとき実行したいスクリプトを記載

        // console.log(response);/* ←こんそーるに表示されるか確認後コメントアウト */
        // 🍺beerのこんそーる表示
        // console.log(response[0]);
        console.log(response[0].image_url);
        // beerのHTML(画面上)への画像表示
        $(".result").html(`<img src="${response[0].image_url}" alt="">`);

        // 🍕food
        // console.log(response[0]);
        // console.log(response[0].food_pairing[0]);
        // console.log(response[0].food_pairing[1]);
        // console.log(response[0].food_pairing[2]);
        // おすすめfoodの文字をHTML(画面上)に表示
        for (let i = 0; i < 3; i++) {
          // console.log(response[0].food_pairing[0]); /* ←こんそーるで表示されるか確認後コメントアウト */
          $(".result-food").append(`<p>"${response[0].food_pairing[i]}"</p>`);
        }
      })
      .fail(function (xhr) {
        //通信失敗時の処理
        //失敗したときに実行したいスクリプトを記載
      })
      .always(function (xhr, msg) {
        //通信完了時の処理
        //結果に関わらず実行したいスクリプトを記載
      });
  })
})