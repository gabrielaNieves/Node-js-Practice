const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tareas){
        let tareaAStr = JSON.stringify(tareas, null, " ");
fs.writeFileSync(this.archivo, tareaAStr, 'utf-8');
    },
    guardarTareas: function (tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado: function (estado) {
let tareas = this.leerArchivo();

let tareasFiltradas = tareas.filter(function (tarea){
    return tarea.estado === estado;
 });
 return tareasFiltradas;
},
cambiarEstado: function(indice, estado){
let tareas = this.leerArchivo();
tareas[indice].estado = estado;
this.escribirJSON(tareas)
}
}
module.exports = archivoTareas;
