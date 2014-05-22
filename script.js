$(document).ready(function(){
	
	createGrid(16);
	color();

});
function reset(){

	var userNum = prompt("Enter a grid size!");
	$(".vertical").remove();
	$('.cell').remove();

	createGrid(userNum);
	color();
}

function createGrid(num){

	for (var i = 0; i<num; i++){

		var height = (($('.box').height())/num)-2;

		var column = $('<div class="vertical" style="height:' + height + 'px;"></div>');
		
		$('.box').append(column);

		for (var j = 0; j < num; j++){
			
			var width = (($('.box').width())/num)-2;
			var cell = $('<div class="cell" style="width:'+ width +'px; height:'+ height +'px;"></div>');

			$(column).append(cell);
		}
	}
}

//this needs the jquery ui to work
function tracer(){

	var userNum = prompt("Enter a grid size!");
	$(".vertical").remove();
	$('.cell').remove();

	createGrid(userNum);
	trace();
}

function sketch(){

	var userNum = prompt("Enter a grid size!");
	$(".vertical").remove();
	$('.cell').remove();

	createGrid(userNum);
	opacity();

}

function trace(){

	$('.cell').css("backgroundColor", 'rgb(219, 217, 217)');

	$('.cell').hover(function() {

    	$(this).stop().animate({backgroundColor:'#4E1402'}, 100);
       	}, function () {

       		$(this).stop().animate({backgroundColor:'rgb(219, 217, 217)'}, 2000);
   	});
}

function opacity(){

	$('.cell').css("backgroundColor", "black");
	$('.cell').css("opacity", 0);

	$('.cell').hover(function(){
		
		$(this).css("opacity", "+=0.1");

	}, function(){

		$(this).css("opacity", value)
	});
	
}

function color(){
	$('.cell').hover(function(){
		$(this).css("background-color", "rgb(238, 238, 47)");
		$(this).css("border-color", "rgb(238, 238, 47)");
	})
}
		