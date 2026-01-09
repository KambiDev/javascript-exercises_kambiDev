const findTheOldest = function(personas) {

    return personas.reduce((mayor, persona) => {

        const anioActual = new Date().getFullYear();

        const muertePersona = persona.fallecimiento || anioActual;
        const muerteMayor = mayor.fallecimiento || anioActual;

        const edadPersona = muertePersona - persona.nacimiento;
        const edadMayor = muerteMayor - mayor.nacimiento;

        if (edadPersona > edadMayor){
            return persona;
        }

        return mayor;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
