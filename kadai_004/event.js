$(function(){

  // $(window).on({
  //   // ロード時
  //   'load':()=>{
  //     console.log('ロードイベントが発生しました');
  //   },

    // スクロール時
    $(window).on({
    'scroll':()=>{
      console.log('スクロールイベントが発生しました');
    }
  });
});

// ロード時
$(window).on('load',function(){
  console.log('loadイベントが発生しました');
 });