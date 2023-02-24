$(function () {
<<<<<<< HEAD

   
    // $(jqueryオブジェクト).val()で入力された値を取得
    $(".btn").on("click", function () {




      
      // クリックされたら波カッコの処理が走る
      let postNum = $(".post").val();
      // dataは必ず連想配列で渡すことが決められています。
      let data = {
        zipcode: postNum,
    }
    
      // ここから非同期通信
      $.ajax({
        url: "https://api.punkapi.com/v2/beers/1", //アクセスするURL
        type: "get", //post or get
        cache: false, //cacheを使うか使わないかを設定
        dataType: "json", //data type script・xmlDocument・jsonなど
        data: data, //アクセ
        .done(function (response) {
          //通信成功時の処理
          //成功したとき実行したいスクリプトを記載スするときに必要なデータを記載
=======
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
        console.log(response);
        // beer
        // console.log(response[0]);
        console.log(response[0].image_url);
        $(".result").html(`<img src="${response[0].image_url}" alt="">`);
        // food
        // console.log(response[0].food_pairing[0]);
        // console.log(response[0].food_pairing[1]);
        // console.log(response[0].food_pairing[2]);
        // for (let i = 0; i < 4; i++) {
        //   $(".result").html(`<presponse[0].food_pairing[i]></p>`);
        // }
>>>>>>> 54cf828686d57ece64710e86eb464db9b918bda3
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