/*
1. Define la EXPECTED_MINUTES_IN_OVEN constante que representa cuántos minutos debe estar la lasaña en el horno. Hay que exportarlo. Según el libro de cocina, el tiempo esperado en el horno en minutos es 40.
*/

const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;
const actualMinutesInOven = 0;
const numeroCapas = 0;

/*
2. Implemente la remainingMinutesInOvenfunción que toma como parámetro los minutos reales que la lasaña ha estado en el horno y devuelve cuántos minutos aún le quedan a la lasaña en el horno, según el tiempo de horno esperado en minutos de la tarea anterior.
*/

function remainingMinutesInOvenfuncion(actualMinutesInOven){
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

/*
Implemente la preparationTimeInMinutesfunción que toma como parámetro la cantidad de capas que agregó a la lasaña y devuelve cuántos minutos pasó preparando la lasaña, asumiendo que cada capa le toma 2 minutos para prepararse.
*/


function preparationTimeInMinutesfuncion(numeroCapas){
    return numeroCapas * 2;
}

/*
Implemente la totalTimeInMinutesfunción que requiere dos parámetros : el numberOfLayersparámetro es la cantidad de capas que agregó a la lasaña y el actualMinutesInOvenparámetro es la cantidad de minutos que la lasaña ha estado en el horno. La función debería devolver cuántos minutos en total has trabajado para cocinar la lasaña, que es la suma del tiempo de preparación en minutos y el tiempo en minutos que la lasaña ha estado en el horno en este momento.
*/

function totalTimeInMinutesfuncion(actualMinutesInOven){
    return preparationTimeInMinutesfuncion + actualMinutesInOven;
}
