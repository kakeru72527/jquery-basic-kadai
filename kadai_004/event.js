$(function(){

  $(window).on({
    // ロード時
    'load':()=>{
      console.log('ロードイベントが発生しました');
    },

    // スクロール時
    'scroll':()=>{
      console.log('スクロールイベントが発生しました');
    }
  });
});