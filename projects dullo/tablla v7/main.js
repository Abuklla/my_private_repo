var boardSize = 24;
var boardState = [];
var toMove = "white";
// var rotate = true
var lengthnew=0;
var test2=0;

var boardStateMiddle=[];
// boardStateMiddle[1] = {
//   color: "black",
//   number: "0",
//   moved: false
// };
// boardStateMiddle[2] = {
//   color: "white",
//   number: "0",
//   moved: false
// };



function drawBoard(){
  var html = ''

  for(var j=1; j<=4; j++){

    html+='<div class="row'+j+'">';
        for(var x=(j-1)*6+1 ; x<=(j-1)*6+6; x++){
        
        var pieceHtml = '';
        boardState[x] = {
        color: null,
        number: null,
        moved: false
      }

      if(startPos[x].color != null){
        boardState[x] = startPos[x]
        boardState[x].moved = false
       //me foto
        // pieceHtml = '<div piece="'+startPos[x].piece+'" class="'+startPos[x].color+' piece" y='+y+' x='+x+' ><img class="pieceImg" src="images/'+startPos[y][x].color+'/'+startPos[y][x].piece+'.png"></div>'
       //me foto end
       var y = 1;
       pieceHtml = '<div piece="'+startPos[x].color+'" class="'+startPos[x].color+' piece" x='+x+' >'+startPos[x].number+'</div>'

      }
      if((x+y)%2 == 0){
        //ketu ploteson div rreshtin me div column dmth me kocka 
        html+='<div class="column pos'+x+' boardBlack " x='+x+' onclick="position(this)" id="'+x+'">'+pieceHtml+'</div>';
      }else{
        html+='<div class="column boardWhite pos'+x+'" x='+x+'  onclick="position(this)" id="'+x+'">'+pieceHtml+'</div>';
      }
    }


        //ketu mbyll div rreshtin
        html+='</div>'

  }

  
  
  $(".board").html(html)
 
//krijon perde
var bosh =""
bosh= '<div class="bosh">';
$('.board').append(bosh);

}



function drawBoard2(){
  var html2 = ''

  for(var j=1; j<=2; j++){

    html2+='<div class="row2'+j+'">';
        for(var x=(j-1)*6+1 ; x<=(j-1)*6+6; x++){
        
        var pieceHtml2 = '';
      //   boardState[x] = {
      //   color: null,
      //   number: null,
      //   moved: false
      // }

      // if(startPos[x].color != null){
      //   boardState[x] = startPos[x]
      //   boardState[x].moved = false
      //  //me foto
      //   // pieceHtml = '<div piece="'+startPos[x].piece+'" class="'+startPos[x].color+' piece" y='+y+' x='+x+' ><img class="pieceImg" src="images/'+startPos[y][x].color+'/'+startPos[y][x].piece+'.png"></div>'
      //  //me foto end
      //  var y = 1;
       pieceHtml2 = '<div ></div>'

      // }
      // if((x+y)%2 == 0){
      //   //ketu ploteson div rreshtin me div column dmth me kocka 
      //   html+='<div class="column pos'+x+' boardBlack " x='+x+' onclick="position(this)" id="'+x+'">'+pieceHtml+'</div>';
      // }else{
        html2+='<div class="column2"  x='+x+' onclick="position2(this)" id="'+x+'blue">'+pieceHtml2+'</div>';
    //   }
     }


        //ketu mbyll div rreshtin
        html2+='</div>'

  }

  
  
$(".board").append(html2);
 
// //krijon perde
// var bosh =""
// bosh= '<div class="bosh">';
// $('.board').append(bosh);

}
 

// drawBoard2();






//krijon perde
var bosh =""
bosh= '<div class="bosh">';
$('.board').append(bosh);




//hudhja e zarave

var turn =true;


function throwdices(){
  var first=Math.floor(Math.random() *  (6))+1;
  var second=Math.floor(Math.random() *  (6))+1;
  
  // //prova
  // var first=1;
  // var second=1;
  // //prova end

  lengthnew1=0;

  lengthnew21=0; 
  lengthnew22=0;
flag5=0;



//e lishojsh onclick
// $(".column").on('click');
// $(document).ready(function(){
//   $('.column').prop('onclick',true);
//   });
// $('.column').attr('onclick');

  turn=!turn; 
   $("#dicesresult1").text( first );
   $("#dicesresult2").text( second );
   //kjo vetem e zhduken ne pamje por divi ende eshte aty
  //  $("#dices").css({ 'visibility' : 'hidden' });
   $("#dices").css({ 'background-color' : 'black' });
   // e ben qe te mos mundet te shtypet prap
   $("#dices").css({'pointer-events': 'none'});


   //fshije divin perde
   $('.bosh').remove();


//hyn ne tabell
  if((length==0)&&(((boardStateMiddle[1].number>"0")&&(toMove=="black"))||((boardStateMiddle[2].number>"0")&&(toMove=="white")))){
    
    var tomove = toMove
    getinTable(tomove, first, second);

  }
//hyn ne tabell end

//e sheh nesea ka ku te luaje
control(toMove);
//e sheh nesea ka ku te luaje end

//e hek perden
$('.bosh').remove();





}






//funksioni qe kontrollon a ka ku mund te shkoje 222


// var color=toMove;
// var x=1;
// var y=24;
var controlla=0;
function control(colori){

  var x=1;
  var y=24;
  controlla=0;

	for(var j=1; j<=24; j++){
	
	
	if(colori=="white"){if(boardState[x].color=="white"){
		searchWhiteMoves(boardState[x], x)
    if(flag==true){controlla=controlla +1}
  }
		x+=1
	}
	else{if(boardState[y].color=="black"){
    console.log("ktau hinn")
    searchBlackMoves(boardState[y], y)
		if(flag==true){controlla=controlla +1}
  }
		
		y-=1
	}
  
  
}
console.log("hin")



//sheh nese ka te marret figure dhe sen hyn ne tabell
if((toMove=="white")&&($(".middle2form").hasClass("highlightPurple")==true)){
  if((flag3=="0")&&(flag2=="0")){
    addbutton();
    //krijon perde
    var bosh =""
    bosh= '<div class="bosh">';
    $('.board').append(bosh);

  }
  }
  if((toMove=="black")&&($(".middle1form").hasClass("highlightPurple")==true)){
    if((flag3=="0")&&(flag2=="0")){
      addbutton();
      //krijon perde
      var bosh =""
      bosh= '<div class="bosh">';
      $('.board').append(bosh);

    }
  }
//sheh nese ka te marret figure dhe sen hyn ne tabell end



	if(controlla=="0"){


      if(((flag2)*(flag2))+((flag3)*(flag3))+((flag4)*(flag4))=="0"){

        addbutton();
      //krijon perde
      var bosh =""
      bosh= '<div class="bosh">';
      $('.board').append(bosh);



      }
   
		
 
  



}	

  $(".board").find(".highlight").removeClass("highlight");
  $(".board").find(".highlightRed").removeClass("highlightRed");

  // $(".board").find(".highlightBlue2").removeClass("highlightBlue2");


}

//funksioni qe kontrollon a ka ku mund te shkoje end



//funksione ndihmese

function addbutton() {
  var r=$('<input/>').attr({
      type: "button",
      id: "field",
      value: 'luj tjetri',
      onclick: 'changeturn();'
  });
  $("#buttons").append(r);    
}





function changeturn(){
// e ndrojm rendin
  if(toMove =="white"){
  toMove = "black"
  }else{
  toMove = "white"
  }
 
  // e mxhallim dicen
  $("#dices").css("background-color", "");
  $("#dices").css({'pointer-events': 'auto'});
  $("#dicesresult1").text(" ");
  $("#dicesresult2").text(" ");
 
 //krijon perde
  var bosh =""
  bosh= '<div class="bosh">';
  $('.board').append(bosh);

  $("#field").remove();   
 
length=0;
lengthnew=0;
}

function changeturn1(){
  // e ndrojm rendin
    if(toMove =="white"){
    toMove = "black"
    }else{
    toMove = "white"
    }
   
    // e mxhallim dicen
    $("#dices").css("background-color", "");
    $("#dices").css({'pointer-events': 'auto'});
    $("#dicesresult1").text(" ");
    $("#dicesresult2").text(" ");
   
   //krijon perde
    var bosh =""
    bosh= '<div class="bosh">';
    $('.board').append(bosh);
  
    length=0;
    lengthnew=0;
  }

//funksione ndihmese end





//hyn ne tabbell nese i eshte marre figure


function getinTable(color, dice1, dice2){
  var x1=parseInt(dice1);
  var x2=parseInt(dice2);
  flag2=0;
  flag3=0;
 
// //krijon perde
// var bosh =""
// bosh= '<div class="bosh">';
// $('.board').append(bosh);


  if(color=="white"){
    $(".middle2form").addClass("highlightPurple");
    
    for(var j = 1;j<=6; j++){
      if(((j==x1)|| (j==x2))&&((boardState[j].color!="black")||((boardState[j].number=="1")&&(boardState[j].color=="black")))) {
        if((boardState[j].number=="1")&&(boardState[j].color=="black")){
          $('.pos'+j+'').addClass("highlightRed2");
          flag3=1;
        }
        $('.pos'+j+'').addClass("highlightGreen2");
        flag2=1;
       
       
      }
    }


  }else{
    $(".middle1form").addClass("highlightPurple");
  
    for(var j = 24;j>=18; j--){
      if(((24-j+1==x1)|| (24-j+1==x2))&&((boardState[j].color!="white")||((boardState[j].number=="1")&&(boardState[j].color=="white")))) {
        if((boardState[j].number=="1")&&(boardState[j].color=="white")){
          $('.pos'+j+'').addClass("highlightRed2");
          flag3=1;
        }
        $('.pos'+j+'').addClass("highlightGreen2");
        flag2=1;
       
      }
    }
  
  }
  
  

}






var lengthnew2=0;

var boardStateRight1=0;
var boardStateRight2=0;
var lengthnew21=0;
var lengthnew22=0;
var flag5=0;



function takemefromTable(x){
  flag5=1;
  // turn=false;
  // if(parseInt( $("#dicesresult1").text())==parseInt( $("#dicesresult2").text())){
  //   length=2*(parseInt( $("#dicesresult1").text())+parseInt( $("#dicesresult2").text()));
  //   console.log("prej ketu")
  // }else{
  //   length=parseInt( $("#dicesresult1").text())+parseInt( $("#dicesresult2").text());
  // }

// if(
//   (!$(".board").hasClass("highlight"))
//   (!$(".board").hasClass("highlightRed"))
//   (!$(".board").hasClass("highlightGreen2"))
//   (!$(".board").hasClass("highlightRed2"))
//   ){
//  // e mxhallim dicen
//  $("#dices").css("background-color", "");
//  $("#dices").css({'pointer-events': 'auto'});
//  $("#dicesresult1").text(" ");
//  $("#dicesresult2").text(" ");

//   }




//ia marim nje asaj ne mes
if(toMove=="black"){
  boardStateRight1=parseInt(boardStateRight1)+1
  // console.log(boardStateMiddle[1].number)
//   if(boardStateMiddle[1].number="0")
//   {boardStateMiddle[1].number="0";boardStateMiddle[1].color=null
//   $(".middle1form").empty();
// }
}
else if(toMove=="white"){
  boardStateRight2=parseInt(boardStateRight2)+1
  // console.log("numri 2")
  // console.log(boardStateMiddle[2].number)
//   if(boardStateMiddle[2].number="0")
//   {boardStateMiddle[2].number="0";boardStateMiddle[2].color=null
//   $(".middle2form").empty();
// }
}

//ben ndryshime ne prapavij
if(toMove=="white"){

boardState[x].number =boardState[x].number-1;
boardState[x].color="white"

// if(boardState[x].number =="0"){
//   boardState[x].number =null;
//   boardState[x].color=null;
//   $(".pos"+x+"").html(null);
//   console.log("hiiiiiiiiii");
// }
//ndryshon length
lengthnew=(24-parseInt(x))+1;
lengthnew21=lengthnew21+lengthnew;
length=length-lengthnew;
//jepja rendin qetrit nese e ka harxhu lengthin
// if(length-lengthnew21==0){changeturn1()}
if(length=="0"){changeturn1()}
}else{

boardState[x].number =boardState[x].number-1;
boardState[x].color="black"

//ndryshon length
lengthnew=parseInt(x);
lengthnew22=lengthnew22+lengthnew;
length=length-lengthnew;
// if(length-lengthnew22==0){changeturn1()}
if(length=="0"){changeturn1()}
}



boardState[x].moved = true

// lengthnew=0;

//e sheh nesea ka ku te luaje
if(length!=0){
  control(toMove);
 }
//e sheh nesea ka ku te luaje end



// ben ndryshime ne pamje
$(".board").find(".highlight").removeClass("highlight")
$(".board").find(".highlightRed").removeClass("highlightRed")
if((toMove=="white")){
  if(boardStateRight2==0){
    $(".board").find(".highlightBlue2").removeClass("highlightBlue2");
  }
  // $(".board").find(".highlightGreen2").removeClass("highlightGreen2")
  // $('.pos'+x+'').removeClass("highlightBlue2");
  var w=25-parseInt(x);
  // console.log(w);
  if(parseInt( $("#dicesresult1").text())!=parseInt( $("#dicesresult2").text())||(boardState[x].number==0)){
    $("#"+w+"blue").removeClass("highlightBlue2");
  }  
}
if((toMove=="black")){
  if(boardStateRight1==0){
    $(".board").find(".highlightBlue2").removeClass("highlightBlue2");
  }
  var w2=13-parseInt(x);


  // $(".board").find(".highlightGreen2").removeClass("highlightGreen2")
  if(parseInt( $("#dicesresult1").text())!=parseInt( $("#dicesresult2").text())||(boardState[x].number==0)){
    $("#"+w2+"blue").removeClass("highlightBlue2");
  }
}

// if((boardStateMiddle[2].number=="0")&&(toMove=="black")){
//   $(".middle2form").removeClass("highlightPurple")
// }
// if((boardStateMiddle[1].number=="0")&&(toMove=="white")){
//     $(".middle1form").removeClass("highlightPurple")
// }


var html = '<div piece="'+boardState[x].color+'" class="'+boardState[x].color+' piece" x='+x+'>'+boardState[x].number+'</div>'
// var htmlm2 = '<div class=" middle2form "</div>'
// var htmlm1 = '<div class=" middle1form "</div>'
  // var htmlm2 ='<div piece="'+boardStateMiddle[2].color+'" class="'+boardStateMiddle[2].color+' piece" x='+26+'>'+boardStateMiddle[2].number+'</div>'
  // var htmlm1 ='<div piece="'+boardStateMiddle[1].color+'" class="'+boardStateMiddle[1].color+' piece" x='+26+'>'+boardStateMiddle[1].number+'</div>'
$(".pos"+x+"").html(html);

if(boardState[x].number =="0"){
  boardState[x].number =null;
  boardState[x].color=null;
  $(".pos"+x+"").html(null);
}

// $('#'+w+'blue').html();
// $(".middle1form").html(htmlm1)
// $(".middle2form").html(htmlm2)
// $(".middle1form").removeClass("highlightPurple");
// $(".middle2form").removeClass("highlightPurple");




var aloo21=boardStateRight1
var aloo22=boardStateRight2


// if(toMove=="black"){
  $(".right1form").text(aloo21);
// }
// else{
  $(".right2form").text(aloo22);

// }




  if(boardStateRight1=="0"){
  // boardStateMiddle[1].color=null
  $(".right1form").empty();
  // $(".right1form").removeClass("highlightPurple");
}
  if(boardStateRight2=="0"){
  // boardStateRight[2].color=null
  $(".right2form").empty();
  // $(".right2form").removeClass("highlightPurple");
}

//nese nuk kan mbaru figurat ne mes kerko prap te hysh ne tabell

// var tomove = toMove;
// var dice1=0;
// var dice2= length-lengthnew;
// if((boardStateMiddle[1].number!="0")&&(toMove=="black")){
//   getinTable(tomove,dice1,dice2);
  
// }
//   if((boardStateMiddle[2].number!="0")&&(toMove=="white")){
//     getinTable(tomove,dice1,dice2);
  
// }
if(boardStateRight2==15){
  alert("fitoj i Bardhi");
//krijon perde
var bosh =""
bosh= '<div class="bosh">';
$('.board').append(bosh);
}
if(boardStateRight1==15){
  alert("fitoj i Zivi");
//krijon perde
var bosh =""
bosh= '<div class="bosh">';
$('.board').append(bosh);
}
 
}








function takefromTable(x){

x=parseInt(x);
 //ia marim nje asaj ne mes
if((toMove=="black")&&(boardStateMiddle[1].number!="0")){
  boardStateMiddle[1].number=parseInt(boardStateMiddle[1].number)-1
  $(".middle1form").text(boardStateMiddle[1].number);
  if(boardStateMiddle[1].number="0"){
  boardStateMiddle[1].number="0";boardStateMiddle[1].color=null
  $(".middle1form").empty();
  }
}else if((toMove=="white")&&(boardStateMiddle[2].number!="0")){
  boardStateMiddle[2].number=parseInt(boardStateMiddle[2].number)-1
  $(".middle2form").text(boardStateMiddle[2].number);
  if(boardStateMiddle[2].number="0"){
  boardStateMiddle[2].number="0";boardStateMiddle[2].color=null
  $(".middle2form").empty();
  }
}

if(toMove=="white"){
  boardStateMiddle[1].number=parseInt(boardStateMiddle[1].number)+1;
  var alo1=boardStateMiddle[1].number;
  console.log("duhet tvendoje lart")
  $(".middle1form").text(alo1);
}
else{
  boardStateMiddle[2].number=parseInt(boardStateMiddle[2].number)+1;
  var alo2=boardStateMiddle[2].number;
  $(".middle2form").text(alo2);
}


  
  //ben ndryshime ne prapavij
  if(toMove=="white"){
  
    boardState[x].number =1;
    boardState[x].color="white"
  //ndryshon length
  
  lengthnew=parseInt(x);
  // njelloj si te movetotable
  lengthnew1=lengthnew1+parseInt(x);
  if(length-lengthnew1=="0"){changeturn1()};
// if(lengthnew!="0"){
//   toMove="white"
// }else{
//   toMove="black"
// }

  }else{
  
    boardState[x].number =1;
    boardState[x].color="black"
  //ndryshon length
  
  lengthnew=(24-parseInt(x))+1;
  // njelloj si te movetotable
  lengthnew2=lengthnew2+lengthnew;
  if(length-lengthnew2=="0"){changeturn1()};
  // if(lengthnew!="0"){
  //   toMove="black"
  // }else{
  //   toMove="white"
  // }
  }
  
  
  
  
  // boardState[x].color = boardState[lastClickedPiece.x].color
  boardState[x].moved = true;
  
  
  turn=false;
  // length=parseInt( $("#dicesresult1").text())+parseInt( $("#dicesresult2").text());
  
  
  
  
  // ben ndryshime ne pamje
  $(".board").find(".highlight").removeClass("highlight")
  $(".board").find(".highlightRed").removeClass("highlightRed")
  if((boardStateMiddle[2].number=="0")&&(toMove=="white")){
    $(".board").find(".highlightGreen2").removeClass("highlightGreen2");
    $(".board").find(".highlightRed2").removeClass("highlightRed2");

  }
  if((boardStateMiddle[1].number=="0")&&(toMove=="black")){
    $(".board").find(".highlightGreen2").removeClass("highlightGreen2");
    $(".board").find(".highlightRed2").removeClass("highlightRed2");
  }
  
  // $(".middle").find(".highlightPurple").removeClass("highlightPurple")
  
  
  
  var html = '<div piece="'+boardState[x].color+'" class="'+boardState[x].color+' piece" >'+boardState[x].number+'</div>'
  // var htmlm2 ='<div piece="'+boardStateMiddle[2].color+'" class="'+boardStateMiddle[2].color+' piece" x='+26+'>'+boardStateMiddle[2].number+'</div>'
  // var htmlm1 ='<div piece="'+boardStateMiddle[1].color+'" class="'+boardStateMiddle[1].color+' piece" x='+26+'>'+boardStateMiddle[1].number+'</div>'
  var htmlm1=boardStateMiddle[1].number
  var htmlm2=boardStateMiddle[2].number

  $('.pos'+x+'').removeClass("highlightGreen2");
  $('.pos'+x+'').removeClass("highlightRed2");
  console.log("duhet tfshoje");


  $(".pos"+x+"").html(html)
  // $(".middle1form").html(htmlm1)
  // $(".middle2form").html(htmlm2)
  $(".middle1form").text(htmlm1);
  $(".middle2form").text(htmlm2);


  

  // $(".middle1form").removeClass("highlightPurple");
  // $(".middle2form").removeClass("highlightPurple");
  if((boardStateMiddle[2].number=="0")&&(toMove=="white")){
    $(".middle2form").removeClass("highlightPurple")
  }
  if((boardStateMiddle[1].number=="0")&&(toMove=="black")){
    $(".middle1form").removeClass("highlightPurple")
  }

  if(boardStateMiddle[1].number=="0"){
    
    boardStateMiddle[1].color=null;
    $(".middle1form").empty();
  }
  if(boardStateMiddle[2].number=="0"){
    
    boardStateMiddle[2].color=null;
    $(".middle2form").empty();
  }

  }







  var lengthnew1=0;
  var lengthnew2=0;

function movetoTable(x){
  
  turn=false;

  if((parseInt($("#dicesresult1").text()))==(parseInt($("#dicesresult2").text()))){
    length=2*(parseInt( $("#dicesresult1").text())+parseInt( $("#dicesresult2").text()));
  }else{
    length=parseInt( $("#dicesresult1").text())+parseInt( $("#dicesresult2").text());
  }
  



// if(
//   (!$(".board").hasClass("highlight"))
//   (!$(".board").hasClass("highlightRed"))
//   (!$(".board").hasClass("highlightGreen2"))
//   (!$(".board").hasClass("highlightRed2"))
//   ){
//  // e mxhallim dicen
//  $("#dices").css("background-color", "");
//  $("#dices").css({'pointer-events': 'auto'});
//  $("#dicesresult1").text(" ");
//  $("#dicesresult2").text(" ");

//   }




//ia marim nje asaj ne mes
if(toMove=="black"){
  boardStateMiddle[1].number=parseInt(boardStateMiddle[1].number)-1
  console.log(boardStateMiddle[1].number)
//   if(boardStateMiddle[1].number="0")
//   {boardStateMiddle[1].number="0";boardStateMiddle[1].color=null
//   $(".middle1form").empty();
// }
}
else if(toMove=="white"){
  boardStateMiddle[2].number=parseInt(boardStateMiddle[2].number)-1
  console.log("numri 2")
  console.log(boardStateMiddle[2].number)
//   if(boardStateMiddle[2].number="0")
//   {boardStateMiddle[2].number="0";boardStateMiddle[2].color=null
//   $(".middle2form").empty();
// }
}

//ben ndryshime ne prapavij
if(toMove=="white"){

  if(boardState[x].color != "white" ){
    boardState[x].number =1;
    boardState[x].color="white"
  }else{
    boardState[x].number =parseInt(boardState[x].number)+1
  }

//ndryshon length
lengthnew=parseInt(x);
lengthnew1=lengthnew1+parseInt(x);
//jepja rendin qetrit nese e ka harxhu lengthin
if(length-lengthnew1=="0"){
  changeturn1()
  lengthnew1=0;
}

}else{

  if(boardState[x].color !="black" ){
    boardState[x].number =1;
    boardState[x].color="black"
  }else{
    boardState[x].number = parseInt(boardState[x].number)+1
  }
//ndryshon length
lengthnew=(24-parseInt(x))+1;
lengthnew2=lengthnew2+lengthnew;
if(length-lengthnew2=="0"){
  changeturn1()
  lengthnew2=0;
}
}



      
// if(boardState[lastClickedPiece.x].color=="white"){
//   boardStateMiddle[1].number=parseInt(boardStateMiddle[1].number)+1;
//   alo1=boardStateMiddle[1].number;
//   $(".middle1form").text(alo1);
// }
// else{
//   boardStateMiddle[2].number=parseInt(boardStateMiddle[2].number)+1;
//   alo2=boardStateMiddle[2].number
//   $(".middle2form").text(alo2);
// }





// boardState[x].color = boardState[lastClickedPiece.x].color
boardState[x].moved = true







// ben ndryshime ne pamje
$(".board").find(".highlight").removeClass("highlight")
$(".board").find(".highlightRed").removeClass("highlightRed")
if((toMove=="white")){
  if(boardStateMiddle[2].number==0){
    $(".board").find(".highlightGreen2").removeClass("highlightGreen2");
    $(".board").find(".highlightRed2").removeClass("highlightRed2");
  }
  // $(".board").find(".highlightGreen2").removeClass("highlightGreen2")
  $('.pos'+x+'').removeClass("highlightGreen2");
  $('.pos'+x+'').removeClass("highlightRed2");
 
}
if((toMove=="black")){
  if(boardStateMiddle[1].number==0){
    $(".board").find(".highlightGreen2").removeClass("highlightGreen2");
    $(".board").find(".highlightRed2").removeClass("highlightRed2");
  }
  // $(".board").find(".highlightGreen2").removeClass("highlightGreen2")
  $('.pos'+x+'').removeClass("highlightGreen2")
  $('.pos'+x+'').removeClass("highlightRed2");
}
if((boardStateMiddle[2].number=="0")&&(toMove=="white")){
  $(".middle2form").removeClass("highlightPurple")
}
if((boardStateMiddle[1].number=="0")&&(toMove=="black")){
    $(".middle1form").removeClass("highlightPurple")

}

var html = '<div piece="'+boardState[x].color+'" class="'+boardState[x].color+' piece" x='+x+'>'+boardState[x].number+'</div>'
// var htmlm2 = '<div class=" middle2form "</div>'
// var htmlm1 = '<div class=" middle1form "</div>'
  // var htmlm2 ='<div piece="'+boardStateMiddle[2].color+'" class="'+boardStateMiddle[2].color+' piece" x='+26+'>'+boardStateMiddle[2].number+'</div>'
  // var htmlm1 ='<div piece="'+boardStateMiddle[1].color+'" class="'+boardStateMiddle[1].color+' piece" x='+26+'>'+boardStateMiddle[1].number+'</div>'
$(".pos"+x+"").html(html)
// $(".middle1form").html(htmlm1)
// $(".middle2form").html(htmlm2)
// $(".middle1form").removeClass("highlightPurple");
// $(".middle2form").removeClass("highlightPurple");

var aloo1=boardStateMiddle[1].number
var aloo2=boardStateMiddle[2].number


// if(toMove=="black"){
  $(".middle1form").text(aloo1);
// }
// else{
  $(".middle2form").text(aloo2);

// }




  if(boardStateMiddle[1].number=="0"){
  boardStateMiddle[1].color=null
  $(".middle1form").empty();
  $(".middle1form").removeClass("highlightPurple");
}
  if(boardStateMiddle[2].number=="0"){
  boardStateMiddle[2].color=null
  $(".middle2form").empty();
  $(".middle2form").removeClass("highlightPurple");
}

//nese nuk kan mbaru figurat ne mes kerko prap te hysh ne tabell

var tomove = toMove;
var dice1=0;
if((parseInt($("#dicesresult1").text()))==(parseInt($("#dicesresult2").text()))){
  var dice2= parseInt($("#dicesresult1").text())
// lengthnew=2*(parseInt(x));
}else{
    var dice2= length-lengthnew;
}


// var dice2= length-lengthnew;
if((boardStateMiddle[1].number!="0")&&(toMove=="black")){
  getinTable(tomove,dice1,dice2);
  if((parseInt($("#dicesresult1").text()))==(parseInt($("#dicesresult2").text()))){lengthnew=2*lengthnew}
}
if((boardStateMiddle[2].number!="0")&&(toMove=="white")){
  getinTable(tomove,dice1,dice2);
  
}



}




//hudhja e zarave end




//ne klikimin e dyte ti heke hijezimet
// $('.myClass').click(function() {
//   var clicks = $(this).data('clicks');
//   if (clicks) {
//      // odd clicks
//   } else {
//      // even clicks
//   }
//   $(this).data("clicks", !clicks);
// });
//ne klikimin e dyte ti heke hijezimet end



// else if(!$(_this).hasClass("highlight")&&!$(_this).hasClass("highlightRed")){
//   //nese e shtypen se dyti 
//   $(".board").find(".highlight").removeClass("highlight")
//   $(".board").find(".highlightRed").removeClass("highlightRed")
//   $(".board").find(".highlightBlue").removeClass("highlightBlue")
//   //nese e shtypen se dyti 

// }



var test=false;

//funksioni qe i tregon levizjet
function position(_this){
// if(turn==false){
  // test =test + 1;
  console.log(test);
  var x = $(_this).attr("x");
  if($(_this).hasClass("highlight")){
        // leviz
        movePiece(x);
         test=!test;
        //leviz end
  }else if($(_this).hasClass("highlightRed")){
        //merr ngjyren e kundert 
        movePiece(x);
        test=!test;
        //merr ngjyren e kundert end
  }else if(($(_this).hasClass("highlightGreen2"))&&(!$(_this).hasClass("highlightRed2"))){
        //hyn ne tabell 
        movetoTable(x);
        if(length!="0"){control(toMove)}
        test=!test;
        //hyn ne tabell end
  }else if($(_this).hasClass("highlightRed2")){
        //hyn ne tabell 
        takefromTable(x);
        if(length!="0"){control(toMove)}
        test=!test;
        //hyn ne tabell end
}else if((!$(_this).hasClass("highlight"))&&(!$(_this).hasClass("highlightRed"))&& (test  == true)){
    //nese e shtypen se dyti 
    $(".board").find(".highlight").removeClass("highlight")
    $(".board").find(".highlightRed").removeClass("highlightRed")
    $(".board").find(".highlightBlue").removeClass("highlightBlue")
    test=!test;
    //nese e shtypen se dyti  end
  }else{
        //normal levizje vetem i tregon vendet
        if(toMove == boardState[x].color){
          $(".board").find(".highlight").removeClass("highlight")
          $(".board").find(".highlightRed").removeClass("highlightRed")
          $(".board").find(".highlightBlue").removeClass("highlightBlue")
          // $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+"").children(".piece").children(".pieceImg").removeClass("button-glow")
          var clickedPiece = boardState[x]
          lastClickedPiece = clickedPiece
          lastClickedPiece.x = x
       
          searchPossibleMoves(clickedPiece, x)
          test=!test;
        }
        //normal levizje vetem i tregon vendet end
      
  }
  
    
}
// else{
// }
  
// }





//funksioni qe i a duhet ta mare figuren nga tablla
function position2(_this){
  // if(turn==false){
    // test =test + 1;
    // console.log(test);
    if( $(_this).attr("x")<=6){
      var x =25-parseInt($(_this).attr("x"));
    }else{
      var x =13-parseInt($(_this).attr("x"));
      // console.log(x)
    }
    
    if($(_this).hasClass("highlightBlue2")){
          // leviz
          takemefromTable(x);
           test=!test;
          //leviz end
    }
    else{
          // //normal levizje vetem i tregon vendet
          // if(toMove == boardState[x].color){
          //   $(".board").find(".highlight").removeClass("highlight")
          //   $(".board").find(".highlightRed").removeClass("highlightRed")
          //   $(".board").find(".highlightBlue").removeClass("highlightBlue")
          //   // $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+"").children(".piece").children(".pieceImg").removeClass("button-glow")
          //   var clickedPiece = boardState[x]
          //   lastClickedPiece = clickedPiece
          //   lastClickedPiece.x = x
          //   searchPossibleMoves(clickedPiece, x)
          //   test=!test;
          // }
          // //normal levizje vetem i tregon vendet end
        
    }
    
      
  }
//funksioni qe i a duhet ta mare figuren nga tablla end







boardStateMiddle[1] = {
  color: "black",
  number: "0",
  moved: false
};
boardStateMiddle[2] = {
  color: "white",
  number: "0",
  moved: false
};





//funksioni qe i tregon levizjet end

function movePiece(x){
 
  
  //normal levizje
    
    if(boardState[x].number ==null){
      boardState[x].number =boardState[x].number+1
    }
    //nese e mer figuren e kundert
    else if(boardState[x].color!=boardState[lastClickedPiece.x].color){
      console.log("merr");





      boardState[x].number=1
      
      if(boardState[lastClickedPiece.x].color=="white"){
        boardStateMiddle[1].number=parseInt(boardStateMiddle[1].number)+1;
        alo1=boardStateMiddle[1].number;
        $(".middle1form").text(alo1);
     }
      else{
        boardStateMiddle[2].number=parseInt(boardStateMiddle[2].number)+1;
        alo2=boardStateMiddle[2].number
        $(".middle2form").text(alo2);
      }
     


    }
    else{
      boardState[x].number =parseInt(boardState[x].number)+1
    }
    boardState[x].color = boardState[lastClickedPiece.x].color
    boardState[x].moved = true
 
    boardState[lastClickedPiece.x].number = parseInt(boardState[lastClickedPiece.x].number)-1
    
    if( boardState[lastClickedPiece.x].number==0){
      boardState[lastClickedPiece.x].number=null
      boardState[lastClickedPiece.x].color=null
      boardState[lastClickedPiece.x].moved=false
      $(".pos"+lastClickedPiece.x+"").html(null)
    }
   
   

    
    var html = '<div piece="'+boardState[x].color+'" class="'+boardState[x].color+' piece" x='+x+'>'+boardState[x].number+'</div>'
    var html2 = '<div piece="'+boardState[lastClickedPiece.x].color+'" class="'+boardState[lastClickedPiece.x].color+' piece" x='+lastClickedPiece.x+'>'+boardState[lastClickedPiece.x].number+'</div>'
    $(".pos"+x+"").html(html)
    $(".pos"+lastClickedPiece.x+" div").html(html2)
    $(".board").find(".highlight").removeClass("highlight");
    $(".board").find(".highlightRed").removeClass("highlightRed");
    $(".board").find(".highlightBlue2").removeClass("highlightBlue2");

// test=0;


  



turn=false;


//ja jep rendin tjetrit  
if((parseInt(x)-parseInt([lastClickedPiece.x])<length)&&(toMove=="white")){
console.log("aloooooo")
lengthnew=(parseInt(x)-parseInt([lastClickedPiece.x]));
// length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() )-parseInt(aloo);
}else if((-parseInt(x)+parseInt([lastClickedPiece.x])<length)&&(toMove=="black")){
lengthnew=(-parseInt(x)+parseInt([lastClickedPiece.x]));
}
else{
  
  if(toMove =="white"){
    toMove = "black"
  }else{
    toMove = "white"
  }
  




 // e mxhallim dicen
 $("#dices").css("background-color", "");
 $("#dices").css({'pointer-events': 'auto'});
 $("#dicesresult1").text(" ");
 $("#dicesresult2").text(" ");

 // e ben qe te mos mundet te shtypet prap ndonje div

//  $('.column').click(function(){return false;});



// $('.column').each(function(){
//   this.onclick = null;   
//   });

// $(".column").off('onclick');

// //punon
// $(function(){
//   $('.column').removeAttr('onclick');
// });


//krijon perde
var bosh =""
bosh= '<div class="bosh">';
$('.board').append(bosh);








length=0;
test2=1;

}






  // if(toMove =="white"){
  //   toMove = "black"
  // }else{
  //   toMove = "white"
  // }

//ja jep rendin tjetrit end  

  //e sheh nesea ka ku te luaje
  if(length!=0){
    control(toMove);
  }
  //e sheh nesea ka ku te luaje end



}




function searchPossibleMoves(fig, posx){
  // console.log(fig)
  switch (fig.color) {
    case "white":
      searchWhiteMoves(fig, posx)
    break;
    case "black":
      searchBlackMoves(fig, posx)
    break;
    
    default:

  }
}


// var length =0;


var flag4=0;

//funksioni search a mund ta marrrish

function searchtoTake(dice1, dice2){
  flag4=0;
  d1=parseInt(dice1);
  d2=parseInt(dice2);
  
  
  if(toMove=="white"){
    for(var i = 1;i<=6; i++){
      if(((i==d1)||(i==d2))&&(boardState[25-i].color=="white")){
      $('#'+i+'blue').addClass("highlightBlue2");
      console.log("e bon mavaj")
            flag4=1;
      } 
    }
   
  }else{
    for(var i = 7;i<=12; i++){
      if((((13-i)==d1)||((13-i)==d2))&&(boardState[13-i].color=="black")){
      $('#'+i+'blue').addClass("highlightBlue2");
      flag4=1;
      }
    }
  
  
  }
    
}
  
//funksioni search a mund ta marrrish end



//funksioni qe kontrollon a duhet tmare prej tabele (fundi)


function readytoTake(){

  var sumWhite=0;
  var sumBlack=0;
  
  
  if(toMove=="white"){
  
    for(var i = 19; i<=24; i++){
    if(boardState[i].color=="white"){
    sumWhite=sumWhite+ parseInt(boardState[i].number)
    }
    }
  
  if(sumWhite==15){return true
  console.log("poooo")
  }
  
  }else{
  
   for(var i = 1;i<=6; i++){
    if(boardState[i].color=="black"){
    sumBlack=sumBlack+ parseInt(boardState[i].number)
    }
    }
  if(sumBlack==15){return true}
  
  }
  
 
  
  }
  
  //funksioni qe kontrollon a duhet tmare prej tabele (fundi) end









var flag=false;
var flag2=0;
var flag3=0;


function searchWhiteMoves(fig, posx){







  flag=false;
  posx = parseInt(posx);
  var color = boardState[posx].color;
  // per vizllimin
  // $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end










  //sheh nese ka figure te marrur






 
   
  //shikon nese ka ra dupllo
   if(parseInt( $("#dicesresult1").text()) == parseInt( $("#dicesresult2").text() )){
    var x = posx;
  // console.log(test2)
  // console.log("alo2")
    if((length==0)||(test2=0)){
      length=2*(parseInt( $("#dicesresult1").text()) + parseInt( $("#dicesresult2").text()));
    }
    else if(turn==false){
      length=parseInt(length)-parseInt(lengthnew);
      turn=true;
      // test2= 1;
    }

//keto jepen te searchPossible moves

var d1=parseInt( $("#dicesresult1").text());
var d2=parseInt( $("#dicesresult2").text());

if((readytoTake()==true)||(boardStateRight2!=0)){
  console.log("hin per ti bo mavaj para")
  if(flag5==0){
    searchtoTake(d1,d2);
  }
else{
  searchtoTake(length,0);
}
}

//keto jepen te searchPossible moves end

    //  length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() )-parseInt(length);
    //  console.log(length);
     for(var i = 1;i<=length; i++){
       x += 1;
       var xz=parseInt( $("#dicesresult1").text());
       var xd=parseInt( $("#dicesresult1").text())+posx;
     



      //  var xd=parseInt( $("#dicesresult1").text() )+posx;
      if(boardState.hasOwnProperty(x)){
      //   // console.log(x); 
      //   if(((boardState[x].color == null)||(boardState[x].color == color))&&((x==xd)||(x==2*xd)||(x==3*xd )||(x==4*xd))){
              
      //         $('.pos'+x+'').addClass("highlight");
      //       //  }
      //       //  else{
                
      //         // break;
      //       //  }
      //   }

      
     
function condition(x){
  x=parseInt(x); 
  // var color="white";
if(
  (boardState[x].color == null)||
  (boardState[x].color == color)|| 
  ((boardState[x].color != color) && (boardState[x].number == 1))
  )
  return true;
  
}
     
    //  console.log(x)
     
    
     
    //  if
    //  (
    //   ((condition(x)==true) && (x=1*xd))    ||  
    //   ((condition(x-xz)==true) && (x=xd+xz))   ||
    //   ((condition(x-xz)==true) && (condition(x-2*xz)==true) && (x=xd+2*xz))  ||   
    //   ((condition(x-xz)==true) && (condition(x-2*xz)==true) && (condition(x-3*xz)==true) && (x=xd+3*xz))
    // )
    for(var j = 1;j<=4; j++){
    if((x==xd+(j-1)*xz)&&(boardState.hasOwnProperty(x))){
      console.log(x)
      if(condition(x)==true){
        console.log(x)
        $('.pos'+x+'').addClass("highlight");
        flag=true;
        

        // console.log("hyn te kushti")
        // console.log(x)
      }else{
        x=100;
      }
      
      
    }
    }

  }
}

  // }
//     if((condition(x)==true) && (x=xd+(i-1)*xz))
//      {
//      $('.pos'+x+'').addClass("highlight");
//       console.log("hyn te kushti")
//      }
// break;

  // }
// }  


    var y=posx;
    for(var i = 1;i<=length; i++){
      y += 1;
      if(boardState.hasOwnProperty(y)){
        
        if( $('.pos'+y+'').hasClass("highlight")){
          console.log("ka dense kuccccccccc");
          if((boardState[y].color!=color)&& (boardState[y].number==1)){
            $('.pos'+y+'').addClass("highlightRed");
          }
        }

      }
     
    
    
    }
  
  
  }
  
   
   else{
    // nese nuk ka ra dupllo
   var x = posx;
  
  if((length==0)||(test2=0)){
    length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() );
  }
  else if(turn==false){
    length=parseInt(length)-parseInt(lengthnew);
    turn=true;
    // test2= 1;
  }


//keto jepen te searchPossible moves

var d1=parseInt( $("#dicesresult1").text());
var d2=parseInt( $("#dicesresult2").text());

if((readytoTake()==true)||(boardStateRight2!=0)){
  console.log("hin per ti bo mavaj para")
  if(flag5==0){
    searchtoTake(d1,d2);
  }
else{
  searchtoTake(length,0);
}
}

//keto jepen te searchPossible moves end



  //  length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() )-parseInt(length);
   console.log(length);
   for(var i = 1;i<=length; i++){
     x += 1;
     var x1=parseInt( $("#dicesresult1").text() )+posx;
     var x2=parseInt( $("#dicesresult2").text() )+posx;
     var x3=parseInt($("#dicesresult1").text() )+parseInt($("#dicesresult2").text())+posx;
     if(boardState.hasOwnProperty(x)){
            
      if(
          (
            ((boardState[x].color == null)||(boardState[x].color == color)|| ((boardState[x].color != color) && (boardState[x].number == 1)) )
            &&
            ((((x==x1)||(x==x2))&&(length==x1+x2-2*posx))||((x==x1)&&(length==(x1-posx)))||((x==x2)&&(length==(x2-posx)))||((x==x3 )&&((boardState[x1].color==null)||(boardState[x1].color==color)||(boardState[x2].color==null)||(boardState[x2].color==color))))
          )
        ){
             $('.pos'+x+'').addClass("highlight");
             flag=true;
          //  }
          //  else{
              // if((boardState[x].color != color) && (boardState[x].number=="1" )&&($('.pos'+x+'').hasClass("highlight")) ){
              //   consle.log("duhet tkese kuq");
              //  $('.pos'+x+'').addClass("highlightRed");
              // }
            // break;
          //  }
          }
     }
    }

    var y=posx;
    for(var i = 1;i<=length; i++){
      y += 1;
    if(boardState.hasOwnProperty(y)){
      if( $('.pos'+y+'').hasClass("highlight")){
        // console.log("ka dense kuccccccccc");
        if((boardState[y].color!=color) && (boardState[y].number==1)){
          $('.pos'+y+'').addClass("highlightRed");
        }
      }
    }
    }



}  
   
  
}






function searchBlackMoves(fig, posx){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end




 
    flag=false;
    posx = parseInt(posx)
    var color = boardState[posx].color
  //shikon nese ka ra dupllo
   if(parseInt( $("#dicesresult1").text() ) == parseInt( $("#dicesresult2").text() )){
    var x = posx;
  
    if((length==0)||(test2=0)){
      length=2*(parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text()) );
    }
    else if(turn==false){
      length=parseInt(length)-parseInt(lengthnew);
      turn=true;
      // test2= 1;
    }

   //keto jepen te searchPossible moves

var d1=parseInt( $("#dicesresult1").text());
var d2=parseInt( $("#dicesresult2").text());

if((readytoTake()==true)||(boardStateRight2!=0)){
  console.log("hin per ti bo mavaj para")
  if(flag5==0){
    searchtoTake(d1,d2);
  }
else{
  searchtoTake(length,0);
}
}

//keto jepen te searchPossible moves end

    //  length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() )-parseInt(length);
     console.log(length);
     for(var i = 1;i<=length; i++){
       x -= 1;

       var xz=-parseInt( $("#dicesresult1").text());
       var xd=-parseInt( $("#dicesresult1").text())+posx;
     
       if(boardState.hasOwnProperty(x)){
        
       

        function condition(x){
          x=parseInt(x); 
          // var color="white";
        if(
          (boardState[x].color == null)||
          (boardState[x].color == color)|| 
          ((boardState[x].color != color) && (boardState[x].number == 1))
          )
          return true;
          
        }

   
    
     

     for(var j = 1;j<=4; j++){
      if((x==xd+(j-1)*xz)&&(boardState.hasOwnProperty(x))){
        if(condition(x)==true){
          $('.pos'+x+'').addClass("highlight");
          flag=true;
          // console.log("hyn te kushti")
          // console.log(x)
        }
        else{
          x=100;
        }
        
      }
    }


   
      
       }
      }

      // var x =posx;
      // for(var i = 1;i<=length; i++){
      //   x -= 1;
      //   console.log(x);
      //     if((boardState[x].color != color) && (boardState[x].number==1 )&& $('.pos'+x+'').hasClass("highlight")){
      //     $('.pos'+x+'').addClass("highlightRed");
      //     }
      //  }
      var y=posx;
      for(var i = 1;i<=length; i++){
        y -= 1;
        if(boardState.hasOwnProperty(y)){
        if( $('.pos'+y+'').hasClass("highlight")){
          // console.log("ka dense kuccccccccc");
          if((boardState[y].color!=color)&& (boardState[y].number==1)){
            $('.pos'+y+'').addClass("highlightRed");
          }
        }
      }
      }



   }
   else{
    // nese nuk ka ra dupllo
    var x = posx;
  
    if((length==0)||(test2=0)){
      length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() );
    }
    else if(turn==false){
      length=parseInt(length)-parseInt(lengthnew);
      turn=true;
      // test2= 1;
    }

//keto jepen te searchPossible moves

var d1=parseInt( $("#dicesresult1").text());
var d2=parseInt( $("#dicesresult2").text());

if((readytoTake()==true)||(boardStateRight2!=0)){
  console.log("hin per ti bo mavaj para")
  if(flag5==0){
    searchtoTake(d1,d2);
  }
else{
  searchtoTake(length,0);
}
}

//keto jepen te searchPossible moves end



    //  length=parseInt( $("#dicesresult1").text() ) + parseInt( $("#dicesresult2").text() )-parseInt(length);
     console.log(length);
     for(var i = 1;i<=length; i++){
       x -= 1;
       if(boardState.hasOwnProperty(x)){
        var x1=-parseInt( $("#dicesresult1").text() )+posx;
        var x2=-parseInt( $("#dicesresult2").text() )+posx;
        var x3=-parseInt($("#dicesresult1").text() )-parseInt($("#dicesresult2").text() )+posx;
        if(
          (
            ((boardState[x].color == null)||(boardState[x].color == color)|| ((boardState[x].color != color) && (boardState[x].number == 1)))
            &&
            ((((x==x1)||(x==x2))&&(-length==x1+x2-2*posx))||((x==x1)&&(-length==(x1-posx)))||((x==x2)&&(-length==(x2-posx)))||((x==x3 )&&((boardState[x1].color==null)||(boardState[x1].color==color)||(boardState[x2].color==null)||(boardState[x2].color==color))))
          )
        ){
             $('.pos'+x+'').addClass("highlight");
             flag=true;
             }
            //  else{
            //     if(boardState[x].color != color && boardState[x].number==1 && $('.pos'+x+'').hasClass("highlight")){
            //      $('.pos'+x+'').addClass("highlightRed")
            //     }
            //   // break;
            //  }
         
       }
      }

      var x =posx;
      for(var i = 1;i<=length; i++){
        x -= 1;
        if(boardState.hasOwnProperty(x)){
          if((boardState[x].color != color) && (boardState[x].number==1 )&& $('.pos'+x+'').hasClass("highlight")){
          $('.pos'+x+'').addClass("highlightRed");
          }
      }
    }  
   
  
}
}














function init(){
  drawBoard();
  drawBoard2();
}



