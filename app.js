let archivoTareas = require('./funcionesDeTareas');
 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(function (tarea, index) {
            console.log((index + 1) + ". " + tarea.titulo)
        });
        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;
    case "crear": 
        console.log();    
        console.log('Nueva Tarea');
        console.log('----------------------------------------');
        let titulo = process.argv[3];
        let tarea = { 
            titulo: titulo,
            estado: 'pendiente'
        }
        archivoTareas.guardarTareas(tarea);
        console.log('Tarea guardada');
        console.log('----------------------------------------');
        break;

        case 'filtrar':
        let estado = process.argv[3];
        console.log();    
        console.log('Filtrar por ' + estado);
        console.log('----------------------------------------');
        let filtrado = archivoTareas.leerPorEstado(estado)
        filtrado.forEach(function (tarea, indice){
            console.log((indice + 1) + '. ' + tarea.titulo)
        });
        console.log();
        break;
        case 'actualizar':
        console.log();    
        console.log('Actualizar estado');
        console.log('----------------------------------------');
        let iTarea = process.argv[3] - 1;
        let cambio = process.argv[4];
        archivoTareas.cambiarEstado(iTarea, cambio);
        console.log('Estado actualizado');
        console.log('----------------------------------------');
        console.log();
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
