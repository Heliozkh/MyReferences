/*
var name = "Helioz";
alert(name);
var count = 49.3;
alert(count); */

/*--wynik =9--
var sum = 4 + 5;
alert(sum);*/

/*--łączenie słów ale bez odstępu--
var firstName = "kowalski";
var lastName = "Marian";
alert(firstName + lastName);*/

/*--wynik =11--
var x = 10;
x++;
alert(x);*/

/* --opertaor porównania--
var x = 1;
alert(x != 0); */

/* -- operatory logiczne--
var x = 1;
var y = 0;
console.log( x == 1 || y == 1 ); --true
console.log( x == 1 && y == 0 ); --true
console.log( x == 1 && y == 1 ); --false */

/* -- tablice --
var names = [ "jan", "maniek", "zdzichu" ];
console.log(names);
console.log(names[2]); -- odwołanie do 3-go elem. tablicy
console.log(names.lenght); -- podaje ilość elem.tablicy
names.push("zenek"); -- dodaje zenka do tablicy*/

$(document).ready(function(){
	/*$(".menu-title").text("blablabla");*/
	$("#loginbutton").click(function(event){
		event.preventDefault();
		var login = $("#login").val();
		var password = $("#password").val();
		alert(login);
		alert(password);
	});
});
/* AJAX i JSON */
/* zapytanie do serwera i zwrot zawartości 

$(document).ready(function(){

	$(".button").click(function(){

		$(".content").text("Ładowanie treści...");

		$.ajax({
			type: "GET",
			url: "https://jsonplaceholder.typicode.com/users",
			success: function(data) {
				$(".content").text(JSON.stringify(data));
			},
			dataType: "jsonp"
		});

	});

});*/

/* przetwarżanie zawartości */
$(document).ready(function(){

	$(".button").click(function(){

		$(".content").text("Ładowanie treści...");

		$.ajax({
			type:"GET",
			url: "http://jsonplaceholder.typicode.com/users",
			success: function(data) {
				$(".content").html("");
				for ( var i = 0; i < data.length; i++ ) { 
					$(".content").append("<p>" + data[i].email + "</p>");
				}
			},
			dataType: "jsonp"
		});

	});

});
/*
console.log(data[i].name); -- wyświetla w konsoli dane tylko "name"
console.log(data[i]); -- wyświetla w konsoli wszystkie dane 

$(".content").append("<p>" + data[i].name + "</p>"); /*wyświetlanie pobranych danych typu "name" w akapitach */