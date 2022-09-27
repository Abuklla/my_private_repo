var boardSize = 8;
var boardState = {}
var toMove = "white";
var rotate = true



function drawBoard(){
  var html = ''
  for(var y=boardSize; y>0; y--){
    boardState[y]={}
    //ketu krijon div rreshtin
    html+='<div class="row">';
    for(var x=1; x<=boardSize; x++){
      var pieceHtml = '';
      boardState[y][x] = {
        piece: null,
        color:null,
        moved: false
      }
      if(startPos[y][x].piece != null){
        boardState[y][x] = startPos[y][x]
        boardState[y][x].moved = false
        // pieceHtml = '<div piece="'+startPos[y][x].piece+'" class="'+startPos[y][x].color+' piece" y='+y+' x='+x+' >'+startPos[y][x].piece+'</div>'
        pieceHtml = '<div piece="'+startPos[y][x].piece+'" class="'+startPos[y][x].color+' piece" y='+y+' x='+x+' ><img class="pieceImg" src="images/'+startPos[y][x].color+'/'+startPos[y][x].piece+'.png"></div>'
      }
      if((x+y)%2 == 0){
        //ketu ploteson div rreshtin me div column dmth me kocka 
        html+='<div class="column pos'+y+''+x+' boardBlack " y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
      }else{
        html+='<div class="column boardWhite pos'+y+''+x+'" y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
      }
    }
    //ketu mbyll div rreshtin
    html+='</div>'
  }
 
  $(".board").html(html)
  
  
 
//krijimi i emrave te rreshtit dhe kolones
// var  borderpos ={}
var borderv = '';
bordervstraight = '';
bordervreverse='';
borderv+='<div class="vertical">';
bordervreverse+='<div class="vertical">';
for(var i = 1;i<=8; i++){
  // borderpos[i]={}
  // console.log(i)
  // var borderelement='';
  // borderelement = '<div rreshti="'+i+'" class="'+"white"+'">'+i+'</div>';
  // borderelement = '<div>'+i+'</div>';
  borderv +='<div class="coordboxesv">'+i+'</div>';
  bordervreverse +='<div class="coordboxesv">'+(9-i)+'</div>';
}
borderv+='</div>'
bordervreverse+='</div>'
bordervstraight=borderv;
$("#coordinatesv").html(borderv)



// var  borderpos ={}
var borderh= '';
var alphabet= '';
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
borderh+='<div class="horizontal">';
for(var i = 1;i<=8; i++){
  // borderpos[i]={}
  // console.log(i)
  // var borderelement='';
  // borderelement = '<div rreshti="'+i+'" class="'+"white"+'">'+i+'</div>';
  // borderelement = '<div>'+i+'</div>';
  borderh+='<div class="coordboxesh">'+alphabet[i-1]+'</div>';
}
borderh+='</div>'


$("#coordinatesh").html(borderh)



//krijimi i emrave te rreshtit dhe kolones end





}

function rotateBoard(){
  var html = ''
  var borderchange = ''
  if(rotate){
    for(var y=1; y<=boardSize; y++){
      html+='<div class="row">';
      for(var x=1; x<=boardSize; x++){
        var pieceHtml = '';
        
        if(boardState[y][x].piece != null){
          // pieceHtml = '<div piece="'+startPos[y][x].piece+'" class="'+startPos[y][x].color+' piece" y='+y+' x='+x+' >'+startPos[y][x].piece+'</div>'
          pieceHtml = '<div piece="'+boardState[y][x].piece+'" class="'+boardState[y][x].color+' piece" y='+y+' x='+x+' ><img class="pieceImg" src="images/'+boardState[y][x].color+'/'+boardState[y][x].piece+'.png"></div>'
        }
        if((x+y)%2 == 0){
          html+='<div class="column pos'+y+''+x+' boardBlack " y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
        }else{
          html+='<div class="column boardWhite pos'+y+''+x+'" y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
        }
      }
      html+='</div>'
    }
 borderchange=bordervreverse  
  }else{
    for(var y=boardSize; y>0; y--){
      html+='<div class="row">';
      for(var x=1; x<=boardSize; x++){
        var pieceHtml = '';
        
        if(boardState[y][x].piece != null){
          // pieceHtml = '<div piece="'+startPos[y][x].piece+'" class="'+startPos[y][x].color+' piece" y='+y+' x='+x+' >'+startPos[y][x].piece+'</div>'
          pieceHtml = '<div piece="'+boardState[y][x].piece+'" class="'+boardState[y][x].color+' piece" y='+y+' x='+x+' ><img class="pieceImg" src="images/'+boardState[y][x].color+'/'+boardState[y][x].piece+'.png"></div>'
        }
        if((x+y)%2 == 0){
          html+='<div class="column pos'+y+''+x+' boardBlack " y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
        }else{
          html+='<div class="column boardWhite pos'+y+''+x+'" y='+y+' x='+x+' onclick="position(this)">'+pieceHtml+'</div>';
        }
      }
      html+='</div>'
    }
    borderchange=bordervstraight
  }
//shikon nese esht e rrotgullume ta beje te drejten
  rotate = !rotate
//shikon nese esht e rrotgullume ta beje te drejten end

$(".board").html(html)
$("#coordinatesv").html(borderchange)
}
// shikon nese divi i klikuar ka  hijezim green red ose blue dhe vepron, nese nuk ka hijezim e sheh nese i duhuri e ka rendin atehere vepron

var lastClickedPiece ={}
function position(_this){
  var y = $(_this).attr("y");
  var x = $(_this).attr("x");
  if($(_this).hasClass("highlight")){
    
    if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "white" && parseInt(lastClickedPiece.y)+1 == 8){
//i ri
$("#b1").css({ 'display' : 'none' });
$("#b2").css({ 'display' : 'none' });
$("#b3").css({ 'display' : 'none' });
$("#b4").css({ 'display' : 'none' });
$("#wh1").show();
$("#wh2").show();
$("#wh3").show();
$("#wh4").show();
$("#pionfund").css({ 'display' : 'inline' });

// $("#wh1").unbind('click');
//unbind e ndalon te shtypmen e meparme
$("#wh1").unbind("click").click(function(e){
   figurare=($(this).attr("divpiece"));
   $("#pionfund").css({ 'display' : 'none' });
   console.log(x)
  movePiece(x,y);
  // figurare='';
  //  return false;
  // e.stopImmediatePropagation(); 
  });
  
$("#wh2").unbind("click").click(function(e){
  figurare=($(this).attr("divpiece"));
  $("#pionfund").css({ 'display' : 'none' });
  movePiece(x,y);
  // figurare='';
  // return false;
  });
$("#wh3").unbind("click").click(function(e){
  figurare=($(this).attr("divpiece"));
   $("#pionfund").css({ 'display' : 'none' });
   movePiece(x,y);
  //  figurare='';
  //  return false;
  });
$("#wh4").unbind("click").click(function(e){
  figurare=($(this).attr("divpiece"));
  $("#pionfund").css({ 'display' : 'none' });
  movePiece(x,y);
  // figurare='';
  // return false;
  });

//i ri end
}
else if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "black" && parseInt(lastClickedPiece.y)-1 == 1){

//i ri i zi

$("#wh1").css({ 'display' : 'none' });
$("#wh2").css({ 'display' : 'none' });
$("#wh3").css({ 'display' : 'none' });
$("#wh4").css({ 'display' : 'none' });
$("#b1").show();
$("#b2").show();
$("#b3").show();
$("#b4").show();
$("#pionfund").css({ 'display' : 'inline' });

$("#b1").unbind("click").click(function(e){
   figurare2=($(this).attr("divpiece"));
   $("#pionfund").css({ 'display' : 'none' });
  movePiece(x,y);
  // figurare2='';
  //  return false;
  });
$("#b2").unbind("click").click(function(e){
  figurare2=($(this).attr("divpiece"));
  $("#pionfund").css({ 'display' : 'none' });
  movePiece(x,y);
  // figurare2='';
  // return false;
  });
$("#b3").unbind("click").click(function(e){
  figurare2=($(this).attr("divpiece"));
   $("#pionfund").css({ 'display' : 'none' });
   movePiece(x,y);
  //  figurare2='';
  //  return false;
  });
$("#b4").unbind("click").click(function(e){
  figurare2=($(this).attr("divpiece"));
  $("#pionfund").css({ 'display' : 'none' });
  movePiece(x,y);
  // figurare2='';
  // return false;
  });

//i ri i zi end

}
else{
  movePiece(x,y)
}

  }else if($(_this).hasClass("highlightRed")){
    if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "white" && parseInt(lastClickedPiece.y)+1 == 8){
      //i ri
      $("#b1").css({ 'display' : 'none' });
      $("#b2").css({ 'display' : 'none' });
      $("#b3").css({ 'display' : 'none' });
      $("#b4").css({ 'display' : 'none' });
      $("#wh1").show();
      $("#wh2").show();
      $("#wh3").show();
      $("#wh4").show();
      $("#pionfund").css({ 'display' : 'inline' });
      
      // $("#wh1").unbind('click');
      $("#wh1").unbind("click").click(function(e){
         figurare=($(this).attr("divpiece"));
         $("#pionfund").css({ 'display' : 'none' });
         console.log(x)
        movePiece(x,y);
        // figurare='';
        //  return false;
        // e.stopImmediatePropagation(); 
        });
        
      $("#wh2").unbind("click").click(function(e){
        figurare=($(this).attr("divpiece"));
        $("#pionfund").css({ 'display' : 'none' });
        movePiece(x,y);
        // figurare='';
        // return false;
        });
      $("#wh3").unbind("click").click(function(e){
        figurare=($(this).attr("divpiece"));
         $("#pionfund").css({ 'display' : 'none' });
         movePiece(x,y);
        //  figurare='';
        //  return false;
        });
      $("#wh4").unbind("click").click(function(e){
        figurare=($(this).attr("divpiece"));
        $("#pionfund").css({ 'display' : 'none' });
        movePiece(x,y);
        // figurare='';
        // return false;
        });
      
      //i ri end
      }
      else if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "black" && parseInt(lastClickedPiece.y)-1 == 1){
      
      //i ri i zi
      
      $("#wh1").css({ 'display' : 'none' });
      $("#wh2").css({ 'display' : 'none' });
      $("#wh3").css({ 'display' : 'none' });
      $("#wh4").css({ 'display' : 'none' });
      $("#b1").show();
      $("#b2").show();
      $("#b3").show();
      $("#b4").show();
      $("#pionfund").css({ 'display' : 'inline' });
      
      $("#b1").unbind("click").click(function(e){
         figurare2=($(this).attr("divpiece"));
         $("#pionfund").css({ 'display' : 'none' });
        movePiece(x,y);
        // figurare2='';
        //  return false;
        });
      $("#b2").unbind("click").click(function(e){
        figurare2=($(this).attr("divpiece"));
        $("#pionfund").css({ 'display' : 'none' });
        movePiece(x,y);
        // figurare2='';
        // return false;
        });
      $("#b3").unbind("click").click(function(e){
        figurare2=($(this).attr("divpiece"));
         $("#pionfund").css({ 'display' : 'none' });
         movePiece(x,y);
        //  figurare2='';
        //  return false;
        });
      $("#b4").unbind("click").click(function(e){
        figurare2=($(this).attr("divpiece"));
        $("#pionfund").css({ 'display' : 'none' });
        movePiece(x,y);
        // figurare2='';
        // return false;
        });
      
      //i ri i zi end
   }
else{
  movePiece(x,y)
}
    
  }else if($(_this).hasClass("highlightBlue")){
    rokada(x,y)
  }else{
    if(toMove == boardState[y][x].color){
      $(".board").find(".highlight").removeClass("highlight")
      $(".board").find(".highlightRed").removeClass("highlightRed")
      $(".board").find(".highlightBlue").removeClass("highlightBlue")
      $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+"").children(".piece").children(".pieceImg").removeClass("button-glow")
      var clickedPiece = boardState[y][x]
      lastClickedPiece = clickedPiece
      lastClickedPiece.x = x
      lastClickedPiece.y = y
      searchPossibleMoves(clickedPiece, x, y)
    }
  }
}
//end  shikon nese divi i klikuar ka  hijezim green red ose blue dhe vepron, nese nuk ka hijezim e sheh nese i duhuri e ka rendin atehere vepron







function movePiece(x,y){
  //shikon nese figura eshte pawn i bardh dhe shkon ne fund te tables
  if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "white" && parseInt(lastClickedPiece.y)+1 == 8){
   console.log("alooooooo mbrojte nfund")

//ketu del paleta me figurat ne disponim

//ketu del paleta me figurat ne disponim end




//vendi ku e shkruen figuren xhi e don ta cese




// var figurare='';

//i vjeter

//  function ndrimipionit() {
//   var txt;
//   var person = prompt("Shkruj cfar figure dush:", "");

//   figurare=person
//   if (person == null || person == "") {
//       txt = "User cancelled the prompt.";
//   } else {
//       // txt = "Hello " + person + "! How are you today?";
//   }
//   // document.getElementById("demo").innerHTML = txt;
// }

//i vjeter end




// ndrimipionit()
// console.log(figurare)


// function changepawn(){}










//vendosja e figures ne boardstate
boardState[y][x].piece = figurare
boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
boardState[y][x].moved = true

boardState[lastClickedPiece.y][lastClickedPiece.x].piece = null
boardState[lastClickedPiece.y][lastClickedPiece.x].color = null
//vendosja e figures ne boardstate end



// boardState[y][x].piece = boardState[lastClickedPiece.y][lastClickedPiece.x].piece
// boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
// boardState[y][x].moved = true


//vendi ku e shkruen figuren xhi e don ta cese end


  
  }
  //shikon nese figura eshte pawn i zi dhe shkon ne func te tables end
  else if(boardState[lastClickedPiece.y][lastClickedPiece.x].piece == "Pawn" && boardState[lastClickedPiece.y][lastClickedPiece.x].color== "black" && parseInt(lastClickedPiece.y)-1 == 1){
    console.log("alooooooo mbrojte nfundz")
 
 //vendi ku e shkruen figuren xhi e don ta cese
//  var figurare2
//  function ndrimipionit2() {
//   var txt;
//   var person = prompt("Shkruj cfar figure dush:", "");
//   figurare2=person
//   if (person == null || person == "") {
//       txt = "User cancelled the prompt.";
//   } else {
//       // txt = "Hello " + person + "! How are you today?";
//   }
//   // document.getElementById("demo").innerHTML = txt;
// }

// ndrimipionit2()
// console.log(figurare)
//vendosja e figures ne boardstate
boardState[y][x].piece = figurare2
boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
boardState[y][x].moved = true

boardState[lastClickedPiece.y][lastClickedPiece.x].piece = null
boardState[lastClickedPiece.y][lastClickedPiece.x].color = null
//vendosja e figures ne boardstate end
 

}
  //shikon nese figura eshte pawn i zi dhe shkon ne func te tables end




  else{
    //normal levizje
      boardState[y][x].piece = boardState[lastClickedPiece.y][lastClickedPiece.x].piece
      boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
      boardState[y][x].moved = true
   


   
      boardState[lastClickedPiece.y][lastClickedPiece.x].piece = null
      boardState[lastClickedPiece.y][lastClickedPiece.x].color = null
      //normal levizje
    }

  // boardState[y][x].piece = boardState[lastClickedPiece.y][lastClickedPiece.x].piece
  // boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
  // boardState[y][x].moved = true

  // boardState[lastClickedPiece.y][lastClickedPiece.x].piece = null
  // boardState[lastClickedPiece.y][lastClickedPiece.x].color = null


// //per ta hek vizllimin

// $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+"").removeClass("button-glow")
// $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+"").children(".piece").children(".pieceImg").removeClass("button-glow")

// //per ta hek vizllimin end
  


  $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+" div").remove()
  var html = '<div piece="'+boardState[y][x].piece+'" class="'+boardState[y][x].color+' piece" y="'+y+'" x="'+x+'"><img class="pieceImg" src="images/'+boardState[y][x].color+'/'+boardState[y][x].piece+'.png"></div>'
  $(".pos"+y+""+x+"").html(html)
  $(".board").find(".highlight").removeClass("highlight")
  $(".board").find(".highlightRed").removeClass("highlightRed")





  if(toMove =="white"){
    toMove = "black"
  }else{
    toMove = "white"
  }
}







//rokada funksioni
function rokada(x,y){
  boardState[y][x].piece = boardState[lastClickedPiece.y][lastClickedPiece.x].piece
  boardState[y][x].color = boardState[lastClickedPiece.y][lastClickedPiece.x].color
  boardState[y][x].moved = true

  boardState[lastClickedPiece.y][lastClickedPiece.x].piece = null
  boardState[lastClickedPiece.y][lastClickedPiece.x].color = null

  $(".pos"+lastClickedPiece.y+""+lastClickedPiece.x+" div").remove()
   var html = '<div piece="'+boardState[y][x].piece+'" class="'+boardState[y][x].color+' piece" y="'+y+'" x="'+x+'"><img class="pieceImg" src="images/'+boardState[y][x].color+'/'+boardState[y][x].piece+'.png"></div>'
  $(".pos"+y+""+x+"").html(html)
  // console.log(boardState[y][x].piece)
  // console.log(boardState[y][(parseInt(x)+1)].piece=="Rook")
  // console.log(x)
  // console.log(y)
  if(boardState[y][(parseInt(x)+1)].piece=="Rook"){

//Rook ndron vendin ne boardstate   
        boardState[y][(parseInt(x)-1)].piece = boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)+3)].piece
        boardState[y][(parseInt(x)-1)].color = boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)+3)].color
        boardState[y][(parseInt(x)-1)].moved = true
        boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)+3)].piece = null
        boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)+3)].color = null
//Rook ndron vendin ne boardstate end

//Rook ndron vendin ne pamje
    $(".pos"+lastClickedPiece.y+""+(parseInt(lastClickedPiece.x)+3)+" div").remove()
    var html ='<div piece="'+boardState[y][(parseInt(x)-1)].piece+'" class="'+boardState[y][(parseInt(x)-1)].color+' piece" y="'+y+'" x="'+(x-1)+'"><img class="pieceImg" src="images/'+boardState[y][(parseInt(x)-1)].color+'/'+boardState[y][(parseInt(x)-1)].piece+'.png"></div>'
    $(".pos"+y+""+(parseInt(x)-1)+"").html(html)
//Rook ndron vendin end
  }
  else{
//Rook ndron vendin ne boardstate   
        boardState[y][(parseInt(x)+1)].piece = boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)-4)].piece
        boardState[y][(parseInt(x)+1)].color = boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)-4)].color
        boardState[y][(parseInt(x)+1)].moved = true
        boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)-4)].piece = null
        boardState[lastClickedPiece.y][(parseInt(lastClickedPiece.x)-4)].color = null
//Rook ndron vendin ne boardstate end

//Rook ndron vendin ne pamje
    $(".pos"+lastClickedPiece.y+""+(parseInt(lastClickedPiece.x)-4)+" div").remove()
    var html ='<div piece="'+boardState[y][(parseInt(x)+1)].piece+'" class="'+boardState[y][(parseInt(x)+1)].color+' piece" y="'+y+'" x="'+(x+1)+'"><img class="pieceImg" src="images/'+boardState[y][(parseInt(x)+1)].color+'/'+boardState[y][(parseInt(x)+1)].piece+'.png"></div>'
    $(".pos"+y+""+(parseInt(x)+1)+"").html(html)
//Rook ndron vendin end
}



  $(".board").find(".highlight").removeClass("highlight")
  $(".board").find(".highlightRed").removeClass("highlightRed")
  $(".board").find(".highlightBlue").removeClass("highlightBlue")


  if(toMove =="white"){
    toMove = "black"
  }else{
    toMove = "white"
  }

}

//rokada funksioni end


function searchPossibleMoves(fig, posx, posy){
  // console.log(fig)
  switch (fig.piece) {
    case "Pawn":
      searchPawnMoves(fig, posx, posy)
    break;
    case "Knight":
      searchKnightMoves(fig, posx, posy)
    break;
    case "Bishop":
      searchBishopMoves(fig, posx, posy)
    break;
    case "Rook":
      searchRookMoves(fig, posx, posy)
    break;
    case "Queen":
      searchQueenMoves(fig, posx, posy)
    break;
    case "King":
      searchKingMoves(fig, posx, posy)
    break;
    default:

  }
}
function searchBishopMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
  $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
    // var searchx = parseInt(pieceRules[fig.piece]["1"].x)
    // var searchy = parseInt(pieceRules[fig.piece]["1"].y)
    posx = parseInt(posx)
    posy = parseInt(posy)
    var color = boardState[posy][posx].color
  // y=1, x=1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y += 1;
     x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=1, x=-1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y += 1;
     x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }

   // y=-1, x=-1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y -= 1;
     x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=-1, x=1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y -= 1;
     x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
}
function searchRookMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
  $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
    // var searchx = parseInt(pieceRules[fig.piece]["1"].x)
    // var searchy = parseInt(pieceRules[fig.piece]["1"].y)
    posx = parseInt(posx)
    posy = parseInt(posy)
    var color = boardState[posy][posx].color
  // y=1, x=0
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y += 1;
     // x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=-1, x=0
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y -= 1;
     // x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }

   // y=0, x=-1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     // y -= 1;
     x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=0, x=1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     // y -= 1;
     x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
}
function searchQueenMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
  $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
    // var searchx = parseInt(pieceRules[fig.piece]["1"].x)
    // var searchy = parseInt(pieceRules[fig.piece]["1"].y)
    posx = parseInt(posx)
    posy = parseInt(posy)
    var color = boardState[posy][posx].color

  // y=1, x=1
   var y = posy;
   var x = posx;
   
   for(var i = 1;i<=8; i++){
     y += 1;
     x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
              $('.pos'+y+''+x+'').addClass("highlightRed")
           }
           break;
        }
      }
    }
  }
   // y=1, x=-1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y += 1;
     x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }

   // y=-1, x=-1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y -= 1;
     x -= 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=-1, x=1
   var y = posy;
   var x = posx;
   for(var i = 1;i<=8; i++){
     y -= 1;
     x += 1;
     if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
           }else{
            if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
               $('.pos'+y+''+x+'').addClass("highlightRed")
            }
            break;
         }
       }
     }
   }
   // y=1, x=0
    var y = posy;
    var x = posx;
    for(var i = 1;i<=8; i++){
      y += 1;
      // x += 1;
      if(boardState.hasOwnProperty(y)){
        if(boardState[y].hasOwnProperty(x)){
            if(boardState[y][x].piece == null){
              $('.pos'+y+''+x+'').addClass("highlight")
            }else{
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                 $('.pos'+y+''+x+'').addClass("highlightRed")
              }
              break;
           }
        }
      }
    }
    // y=-1, x=0
    var y = posy;
    var x = posx;
    for(var i = 1;i<=8; i++){
      y -= 1;
      // x -= 1;
      if(boardState.hasOwnProperty(y)){
        if(boardState[y].hasOwnProperty(x)){
            if(boardState[y][x].piece == null){
              $('.pos'+y+''+x+'').addClass("highlight")
            }else{
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                 $('.pos'+y+''+x+'').addClass("highlightRed")
              }
              break;
           }
        }
      }
    }

    // y=0, x=-1
    var y = posy;
    var x = posx;
    for(var i = 1;i<=8; i++){
      // y -= 1;
      x -= 1;
      if(boardState.hasOwnProperty(y)){
        if(boardState[y].hasOwnProperty(x)){
            if(boardState[y][x].piece == null){
              $('.pos'+y+''+x+'').addClass("highlight")
            }else{
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                 $('.pos'+y+''+x+'').addClass("highlightRed")
              }
              break;
           }
        }
      }
    }
    // y=0, x=1
    var y = posy;
    var x = posx;
    for(var i = 1;i<=8; i++){
      // y -= 1;
      x += 1;
      if(boardState.hasOwnProperty(y)){
        if(boardState[y].hasOwnProperty(x)){
            if(boardState[y][x].piece == null){
              $('.pos'+y+''+x+'').addClass("highlight")
            }else{
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                 $('.pos'+y+''+x+'').addClass("highlightRed")
              }
              break;
           }
        }
      }
    }
}
function searchKingMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
  $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
    // var searchx = parseInt(pieceRules[fig.piece]["1"].x)
    // var searchy = parseInt(pieceRules[fig.piece]["1"].y)
    posx = parseInt(posx)
    posy = parseInt(posy)
    var color = boardState[posy][posx].color
  

  // rokada
// console.log(boardState[posy][posx].moved)
// console.log(posx+2)
// console.log(boardState[posy][posx])
  if(boardState[posy][posx].moved==false && boardState[posy][posx+1].piece ==null && boardState[posy][posx+2].piece ==null && boardState[posy][posx+3].moved==false ){
  $('.pos'+posy+''+(posx+2)+'').addClass("highlightBlue")
  }
  
  if(boardState[posy][posx].moved==false && boardState[posy][posx-1].piece ==null && boardState[posy][posx-2].piece ==null && boardState[posy][posx-3].piece ==null && boardState[posy][posx-4].moved==false ){
    $('.pos'+posy+''+(posx-2)+'').addClass("highlightBlue")
    }

  // for(var i = 0; i<searchy; i++){
  //   var toCheck = parseInt(posy) + parseInt(direction)
  // if(boardState[toCheck][posx].piece == null){
  //     $('.pos'+toCheck+''+posx+'').addClass("highlight")
  //     direction += direction
  //    }
  // }

// rokada end
   
// y=1, x=1
   var y = posy+1;
   var x = posx+1;

   if(boardState.hasOwnProperty(y)){
     if(boardState[y].hasOwnProperty(x)){
         if(boardState[y][x].piece == null){
           $('.pos'+y+''+x+'').addClass("highlight")
         }else{
            // console.log(1)
              if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
              $('.pos'+y+''+x+'').addClass("highlightRed")
            }
          }
          
        }
      }
    // y=-1, x=1
    var y = posy-1;
    var x = posx+1;
    // console.log(y)
    if(boardState.hasOwnProperty(y)){
       if(boardState[y].hasOwnProperty(x)){
           if(boardState[y][x].piece == null){
             $('.pos'+y+''+x+'').addClass("highlight")
            }else{
              // console.log(1)
                if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                $('.pos'+y+''+x+'').addClass("highlightRed")
              }
            }
          }
        }
      
      // y=-1, x=-1
      var y = posy-1;
      var x = posx-1;
      // console.log(y)
      if(boardState.hasOwnProperty(y)){
         if(boardState[y].hasOwnProperty(x)){
             if(boardState[y][x].piece == null){
               $('.pos'+y+''+x+'').addClass("highlight")
              }else{
                // console.log(1)
                  if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                  $('.pos'+y+''+x+'').addClass("highlightRed")
                }
              }
              
            }
        }
        // y=1, x=-1
        var y = posy+1;
        var x = posx-1;
        // console.log(y)
        if(boardState.hasOwnProperty(y)){
           if(boardState[y].hasOwnProperty(x)){
               if(boardState[y][x].piece == null){
                 $('.pos'+y+''+x+'').addClass("highlight")
                  }else{
                  // console.log(1)
                    if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                    $('.pos'+y+''+x+'').addClass("highlightRed")
                  }
                }
                
              }
          }

          // y=0, x=1
           var y = posy;
           var x = posx+1;

           if(boardState.hasOwnProperty(y)){
             if(boardState[y].hasOwnProperty(x)){
                 if(boardState[y][x].piece == null){
                   $('.pos'+y+''+x+'').addClass("highlight")
                    }else{
                    // console.log(1)
                      if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                      $('.pos'+y+''+x+'').addClass("highlightRed")
                    }
                  }
                  
                }
              }
            // y=0, x=-1
            var y = posy;
            var x = posx-1;
            // console.log(y)
            if(boardState.hasOwnProperty(y)){
               if(boardState[y].hasOwnProperty(x)){
                   if(boardState[y][x].piece == null){
                     $('.pos'+y+''+x+'').addClass("highlight")
                      }else{
                      // console.log(1)
                        if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                        $('.pos'+y+''+x+'').addClass("highlightRed")
                      }
                    }
                    
                  }
              }
            // y=1, x=0
            var y = posy+1;
            var x = posx;
            // console.log(y)
            if(boardState.hasOwnProperty(y)){
               if(boardState[y].hasOwnProperty(x)){
                    if(boardState[y][x].piece == null){
                     $('.pos'+y+''+x+'').addClass("highlight")
                      }else{
                      // console.log(1)
                        if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                        $('.pos'+y+''+x+'').addClass("highlightRed")
                      }
                    }
                      
                  }
                }
              // y=-1, x=0
            var y = posy-1;
            var x = posx;
            // console.log(y)
            if(boardState.hasOwnProperty(y)){
                if(boardState[y].hasOwnProperty(x)){
                    if(boardState[y][x].piece == null){
                      $('.pos'+y+''+x+'').addClass("highlight")
                    }else{
                      // console.log(1)
                        if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                        $('.pos'+y+''+x+'').addClass("highlightRed")
                      }
                    }
                  }
                  
                }



}
function searchKnightMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
  $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
    var searchx = parseInt(pieceRules[fig.piece]["1"].x)
    var searchy = parseInt(pieceRules[fig.piece]["1"].y)
    var color = boardState[posy][posx].color
    posx = parseInt(posx)
    posy = parseInt(posy)
    if(boardState.hasOwnProperty(posy + searchy)){
      if(boardState.hasOwnProperty(posx + searchx)){
        if(boardState[posy + searchy][posx + searchx].piece == null){
          // console.log(1)
          var x = posx + searchx
          var y = posy + searchy
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(1)
          var x = posx + searchx
          var y = posy + searchy
          if(boardState[posy + searchy][posx + searchx].color != color && boardState[posy + searchy][posx + searchx].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
      if(boardState.hasOwnProperty(posx - searchx)){
        if(boardState[posy + searchy][posx - searchx].piece == null){
          var x = posx - searchx
          var y = posy + searchy
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(2)
          var x = posx - searchx
          var y = posy + searchy
          if(boardState[posy + searchy][posx - searchx].color != color && boardState[posy + searchy][posx - searchx].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
    }

    if(boardState.hasOwnProperty(posy - searchy)){
      if(boardState.hasOwnProperty(posx + searchx)){
        if(boardState[posy - searchy][posx + searchx].piece == null){
          var x = posx + searchx
          var y = posy - searchy
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(3)
          var x = posx + searchx
          var y = posy - searchy
          if(boardState[posy - searchy][posx + searchx].color != color && boardState[posy - searchy][posx + searchx].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
      if(boardState.hasOwnProperty(posx - searchx)){
        // console.log("hin")
        if(boardState[posy - searchy][posx - searchx].piece == null){
          var x = posx - searchx
          var y = posy - searchy
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(4)
          var x = posx - searchx
          var y = posy - searchy
          if(boardState[posy - searchy][posx - searchx].color != color && boardState[posy - searchy][posx - searchx].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
    }

    var searchx2 = pieceRules[fig.piece]["2"].x
    var searchy2 = pieceRules[fig.piece]["2"].y

    if(boardState.hasOwnProperty(posy + searchy2)){

      if(boardState.hasOwnProperty(posx + searchx2)){
        if(boardState[posy + searchy2][posx + searchx2].piece == null){
          var x = posx + searchx2
          var y = posy + searchy2
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(5)
          var x = posx + searchx2
          var y = posy + searchy2
          if(boardState[posy + searchy2][posx + searchx2].color != color && boardState[posy + searchy2][posx + searchx2].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
      if(boardState.hasOwnProperty(posx - searchx2)){
        if(boardState[posy + searchy2][posx - searchx2].piece == null){
          var x = posx - searchx2
          var y = posy + searchy2
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(6)
          var x = posx - searchx2
          var y = posy + searchy2
          if(boardState[posy + searchy2][posx - searchx2].color != color && boardState[posy + searchy2][posx - searchx2].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }

    }

    if(boardState.hasOwnProperty(posy - searchy2)){

      if(boardState.hasOwnProperty(posx + searchx2)){
        if(boardState[posy - searchy2][posx + searchx2].piece == null){
          var x = posx + searchx2
          var y = posy - searchy2
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(7)
          var x = posx + searchx2
          var y = posy - searchy2
          if(boardState[posy - searchy2][posx + searchx2].color != color && boardState[posy - searchy2][posx + searchx2].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
      if(boardState.hasOwnProperty(posx - searchx2)){
        if(boardState[posy - searchy2][posx - searchx2].piece == null){
          var x = posx - searchx2
          var y = posy - searchy2
          $('.pos'+y+''+x+'').addClass("highlight")
        }else{
          // console.log(8)
          var x = posx - searchx2
          var y = posy - searchy2
          if(boardState[posy - searchy2][posx - searchx2].color != color && boardState[posy - searchy2][posx - searchx2].piece != "King"){
            $('.pos'+y+''+x+'').addClass("highlightRed")
          }
        }
      }
    }

}


function searchPawnMoves(fig, posx, posy){
  // per vizllimin
  // $('.pos'+posy+''+posx+'').addClass("button-glow")
   $('.pos'+posy+''+posx+'').children(".piece").children(".pieceImg").addClass("button-glow");
  // per vizllimin end
  if(fig.moved){
    var searchx = pieceRules[fig.piece].notStart.x
    var searchy = pieceRules[fig.piece].notStart.y
    
   
  }else{
    var searchx = pieceRules[fig.piece].start.x
    var searchy = pieceRules[fig.piece].start.y
  }
  if(fig.color == "black"){
    var direction = -1
    var directionfix= -1
  }else{
    var direction = 1
    var directionfix= 1
  }

  var toCheckmerr = parseInt(posy) + parseInt(directionfix)

  for(var i = 0; i<searchy; i++){
    var toCheck = parseInt(posy) + parseInt(direction)
  if(boardState[toCheck][posx].piece == null){
      $('.pos'+toCheck+''+posx+'').addClass("highlight")
      direction += direction
     }
  }
  var color = boardState[posy][posx].color
  // else{
           var x = parseInt(posx) + 1
           var y = parseInt(toCheckmerr)
            if(boardState.hasOwnProperty(y)){
               if(boardState.hasOwnProperty(x)){
                   if(boardState[y][x].piece != null){
                         if(boardState[y][x].color != color && boardState[y][x].piece != "King"){
                          $('.pos'+y+''+x+'').addClass("highlightRed")
                      }
                 }
              }
            }
        var a = parseInt(posx) - 1
        var b = parseInt(toCheckmerr)
        // console.log(toCheckmerr)
        // console.log(a)
       
         if(boardState.hasOwnProperty(b)){
            if(boardState.hasOwnProperty(a)){
                
                if(boardState[b][a].piece != null){
                     if(boardState[b][a].color != color && boardState[b][a].piece != "King"){
                       $('.pos'+b+''+a+'').addClass("highlightRed")
                   }
              }
           }
         }
      
     }     
    
  // }





function init(){
  drawBoard()
}



