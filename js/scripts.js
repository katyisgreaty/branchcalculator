//Calculator functions
var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

//User Interface
$(document).ready(function(){
	$("#add form").submit(function(event){
		var number1Input = parseFloat($("input#number1").val());
		var number2Input = parseFloat($("input#number2").val());

		var result = add(number1Input, number2Input);
		$(".output").text(result);
		event.preventDefault();
	});

	$("#subtract form").submit(function(event){
		var number1Input = parseFloat($("input#subnumber1").val());
		var number2Input = parseFloat($("input#subnumber2").val());

		var result = subtract(number1Input, number2Input);
		$(".output").text(result);
		event.preventDefault();
	});

	$("#multiply form").submit(function(event){
		var number1Input = parseFloat($("input#mulnumber1").val());
		var number2Input = parseFloat($("input#mulnumber2").val());

		var result = multiply(number1Input, number2Input);
		$(".output").text(result);
		event.preventDefault();
	});

	$("#divide form").submit(function(event){
		var number1Input = parseFloat($("input#divnumber1").val());
		var number2Input = parseFloat($("input#divnumber2").val());

		var result = divide(number1Input, number2Input);
		$(".output").text(result);
		event.preventDefault();
	});

});



// var bmi = function(number1, number2) {
//   var weight = number1 * 0.45;
//   var height = (number2 * 0.025);
//   var heightconvert = height * height;
//   return weight / heightconvert;
// };
//
// var temp = function(number1) {
//   return number1 * 1.8 + 32
// }
//
// var gallonsToLiters = function (number1) {
//   return number1 * 3.785411784;
// }
//
// var gallonsToQuarts = function (number1) {
//   return number1 * 4;
// }
//
// var quartsToPint = function (number1) {
//   return number1 * 2;
// }
//
// var pintToCup = function (number1) {
//   return number1 * 1.97157;
// }
//
// var cupToFluidOz = function (number1) {
//   return number1 * 8.11537;
// }
