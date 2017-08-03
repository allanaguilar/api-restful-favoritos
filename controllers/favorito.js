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

module.exports = {
	prueba
}