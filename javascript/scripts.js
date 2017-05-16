$(function(){

	//data e hora
	var currentTime = new Date()
	var horas = currentTime.getHours();
	var minutos = currentTime.getMinutes();
	var segundos = currentTime.getSeconds(); 
	var dia = currentTime.getDate(); 
	var mes = currentTime.getMonth();
	// var ano = currentTime.getFullYear();  
	var Dia = currentTime.getDay(); 
	var Mes = currentTime.getUTCMonth();

	if (minutos < 10)
	minutos = "0" + minutos
	if (segundos < 10)
	segundos = "0" + segundos
	if (dia < 10)
	dia = "0" + dia
	if (mes < 10)
	mes = "0" + mes

	arrayDia = new Array();
	   arrayDia[0] = "Domingo";
	   arrayDia[1] = "Segunda-feira";
	   arrayDia[2] = "Terça-feira";
	   arrayDia[3] = "Quarta-feira";
	   arrayDia[4] = "Quinta-feira";
	   arrayDia[5] = "Sexta-feira";
	   arrayDia[6] = "Sábado";

	var arrayMes = new Array();
	   arrayMes[0] = "Janeiro";
	   arrayMes[1] = "Fevereiro";
	   arrayMes[2] = "Março";      
	   arrayMes[3] = "Abril";
	   arrayMes[4] = "Maio";
	   arrayMes[5] = "Junho";
	   arrayMes[6] = "Julho";
	   arrayMes[7] = "Agosto";
	   arrayMes[8] = "Setembro";
	   arrayMes[9] = "Outubro";
	   arrayMes[10] = "Novembro";
	   arrayMes[11] = "Dezembro";
	

	horaCompleta = horas +':'+minutos
	dataCompleta = arrayDia[Dia] + ", " + dia + " de " + arrayMes[Mes];

	$('.hora, .relogioFull').text(horaCompleta);
	$('.data').text(dataCompleta);


	//transicao
	$('.btn-desbloquear').click(function(){
		$('#page1').fadeOut('2000', function(){
			$('#page2').slideUp().removeClass('hide');	
		});
		
	})
})

//github
var xmlhttp = new XMLHttpRequest();
var user ='tigurio';
var url = 'https://api.github.com/users/'+user;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr) {
    var html = "";
		html += '<div class="dados-user">';
		html += '<figure><img class="imagem" src="'+ arr.avatar_url +'" /></figure>';
		html += '<h2 class="nome-user">'+ arr.name +'</h2>';
		html += '<h3 class="mail-user">'+ arr.email +'</h3>';
		html += '</div>';

	document.getElementById("usuario").innerHTML = html;
}
//# sourceMappingURL=maps/scripts.js.map
