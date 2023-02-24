$(function () {

   
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
      })
          console.log(response);
          // 連想配列の引き出しの中身は連想配列名.キー名
          console.log(response.results);
          // 配列の引き出しの中身は配列[番号]
          console.log(response.results[0]);
          console.log(response.results[0].address1);
          // $(".result").html(response.results[0].address1);
          // $(".result").text(response.results[0].address1);
          // $(".result").append(`<p>${response.results[0].address1}</p>`);
          // $(".result").append(`<p>${response.results[0].address2}</p>`);
          // $(".result").append(`<p>${response.results[0].address3}</p>`);
          // 繰り返し構文
          let addressNum = 4;
          for(let i = 1; i<addressNum; i++){
            $(".result").append(`<p>${response.results[0]["address"+i]}</p>`);
          }
        })
        .fail(function (xhr) {
          //通信失敗時の処理
          //失敗したときに実行したいスクリプトを記載
        })
    });
  });