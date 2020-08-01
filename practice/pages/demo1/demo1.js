// pages/demo1/demo1.js
Page({
  data: {
    num:0
  },
// 输入框的input事件的执行逻辑
 handleInput(e){
  //  console.log(e);
   this.setDate({
     num:e.detail.value
   });
 }
    
  
}) 