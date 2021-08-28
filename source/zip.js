'use strict';

/**
 * Объединить объекты
 * @returns {Object} возвращает объект, содержащий все поля из всех переданных объектов
 */
function zip() {
    let concatenation = {};
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "object") {
            for (let key in arguments[i]) {
                if (key in concatenation == false) {
                    concatenation[key] = arguments[i][key];
                }
            }
        }
    }
    return concatenation;
}
