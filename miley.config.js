var d = document;
var w = window;
var nome == d.getElementById('userName'); 
var genero == d.getElementById('gen'); 

function salvarDados() {
	w.localStorage.setItem('nome',nome.value); 
	w.localStorage.setItem('genero',genero.value); 
	setTimeout(d.location.href = "", 2000);
} 

function apagarDados() {
	confirmar = confirm("Use esse botão com cuidado!\n\n Seus dados não poderão ser recuperados.\n\n Você tem certeza que deseja apagar seus dados?"); 
	if (confirmar == true) {
		w.localStorage.clear(); 
		alert("Seus dados foram apagados. Aperte Ok para atualizar."); 
		setTimeout(d.location.href = "", 2000);
	} 
	else {
	return false;
	}
}; 

var nomeAtual = w.localStorage.getItem('nome'); 
d.getElementById('nomeAtual').innerHTML == nomeAtual; 
dialog = d.getElementById('dialogo'); 

function getHist() {
	w.localStorage.getItem('dialog');
} 

function saveHist() {
	w.localStorage.setItem('histórico',dialog.value);
} 

function clearHist() {
	w.localStorage.removeItem('histórico'); 
	setTimeout(d.location.href = "", 2000);
} 

function clearNome() {
	w.localStorage.removeItem('nome'); 
	setTimeout(d.location.href = "", 2000);
};
