
const optsCrear = {
    descripcion :{
        alias : 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:{
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const optsBorrar = {
    descripcion :{
        alias : 'd',
        demand: true,
        desc: 'Descripcion de la tarea a eliminar'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('borrar','Borrar una tarea', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
}