
// PERSONA FISICA = USUARIO

const usuario = {
    email : "",
    password : "",
    default_role : "alumno",
    current_role : "alumno",
    roles : {
        alumno : {
            materiasAprobadas : 0,
        },
        profesor : {
            cursosDictados: 3,
        }
    }
}

usuario.email = 'email@gmail.com';
usuario.password = 'secret';


usuario.roles.alumno.materiasAprobadas

usuario.roles.profesor.cursosDictados



// alumno {
//     inscribirme()
// }

// profesor {
//     tomarAsistencia()
//     crearCurso()
// }
