// $('#exampleModal').on('show.bs.modal', function (event) {
// 	var button = $(event.relatedTarget) // Button that triggered the modal
// 	var recipient = button.data('whatever') // Extract info from data-* attributes
// 	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// 	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
// 	var modal = $(this)
// 	modal.find('.modal-title').text('New message to ' + recipient)
// 	modal.find('.modal-body input').val(recipient)
//   })

// $('#meuModal').modal('toggle')

function carregaMenu(pagina){
	let dir = "C:/www/HEALTHLAB/frontend/";
	$('#menu').load(dir+pagina, function() {
		document.getElementById('titulo-header').innerHTML = document.getElementById('title').innerHTML;
	});
}

function getPath(pagina){
	let dir = "C:/www/HEALTHLAB/frontend/"+pagina;
	return dir;
}

function openForm(pagina){
	// let dados = document.getElementById('row-grid-1').innerHTML;
	location.href=getPath(pagina);
}

function CriaPDF(titulo) {
	var minhaTabela = document.getElementById('content').innerHTML;

	var style = "<style>";
	style = style + "table {width: 100%;font: 20px Calibri;}";
	style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
	style = style + "padding: 2px 3px;text-align: center;}";
	style = style + "</style>";

	// CRIA UM OBJETO WINDOW
	var win = window.open('', '', 'height=700,width=700');

	win.document.write('<html><head>');
	win.document.write('<title>'+titulo+'</title>');   // <title> CABEÇALHO DO PDF.
	win.document.write(style);                       // INCLUI UM ESTILO NA TAB HEAD
	win.document.write('</head>');
	win.document.write('<body>');
	win.document.write(minhaTabela);                   // O CONTEUDO DA TABELA DENTRO DA TAG BODY
	win.document.write('</body></html>');

	win.document.close(); 	                            // FECHA A JANELA

	win.print();                                        // IMPRIME O CONTEUDO
}