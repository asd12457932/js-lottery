var lottery_option = {
    "length":7,
    "MaxNum":52 
 };
 
 function lottery_add() {  
     var lottery_array = GetLotteryNum(lottery_option.length);
     var lottery_list = document.querySelector('.lottery__list');
     lottery_list.innerHTML = null ; 
     for(let i=0;i<lottery_array.length;i++){
         var item_label = document.createElement('p');
         /* 最後一號顯示為特別號 */
         if(i == lottery_option.length-1)
             var text = document.createTextNode("特別號");
         else
             var text = document.createTextNode("號碼"+ (i+1) );
         item_label.appendChild(text);
         var textbox = document.createElement("input");
         textbox.setAttribute('value',lottery_array[i]);
         textbox.setAttribute('onfocus','this.blur()');
         document.querySelector('.lottery__list').append(item_label,textbox);
     }
 };
 
 /* 產生樂透陣列 */
 function GetLotteryNum(num){
     var lottery_array = new Array(num);
     for(let i=0;i<lottery_array.length;i++){
         var random_num = Math.floor(Math.random()*lottery_option.MaxNum)+1;
         /* 檢查重複數字 */
         for(let j=0;j<lottery_array.length;j++){
             while(lottery_array[j] == random_num){
                j=0;
                var random_num = Math.floor(Math.random()*lottery_option.MaxNum)+1;
             }
         }
         lottery_array[i] = random_num;
     }
     return lottery_array;
 };
 var lottery_btn = document.querySelector('.lottery__btn');
 lottery_btn.addEventListener('click',lottery_add);