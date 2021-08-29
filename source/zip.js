'use strict';

/**
 * Объединить объекты
 * @returns {Object} возвращает объект, содержащий все поля из всех переданных объектов
 */
function zip(...objects) {
    objects = objects.filter(object => typeof object == 'object');
    return Object.assign({}, ...objects.reverse());
}
