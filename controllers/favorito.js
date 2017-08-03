function prueba(req, res){
	
	if (req.params.nombre) {
		var nombre = req.params.nombre;
	}else{
		var nombre = "Sin Nombre";
	}
	res.status(200).send({
						data: [2,3,4],
						message: 'Hola Mundo con NodeJS y Expres >> ' + nombre
						});
}

function getFavorito(req, res){
	var favoritoId = req.params.id;
	res.status(200).send({data: favoritoId});
}

function getFavoritos(req, res){

}

function saveFavorito(req, res){
	var params = req.body;

	res.status(200).send({favorito: params});
}

function updateFavorito(req, res){
	var params = req.body;

	res.status(200).send({update: true, favorito: params});
}

function deleteFavorito(req, res){
	var favoritoId = req.params.id;

	res.status(200).send({delete: true, data: favoritoId});
}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}