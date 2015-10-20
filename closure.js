$(document).ready(function(){
  function tickets(){
    var counter = 0;

    return {
        more: function() {
          counter += 1;
          return counter;
        } ,
        less: function() {
          counter -= 1;
          if (counter < 0)
            alert("You cannot have negative tickets unless you create a new universe!");
          return counter;
        }
    }
  }
function setRow(index){
  var cnt = tickets();
  var btnI = $("#inc" + index);
  var result = $("#sectionTot" + index);
  btnI.click(function(event){
    result.val(cnt.more());
  });
//decrease
  var btnD= $("#dec" + index);
  btnD.click(function(event){
    result.val(cnt.less());
  });
  }
for( var i=0; i<3; i++)
  {
  setRow(i);
  }

});

//     // var btnClr = $("#clr" + i);
//     //   btnClr.click(reset());
