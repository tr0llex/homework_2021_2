'use strict';

/**
 * Объединить объекты
 * @returns {Object} возвращает объект, содержащий все поля из всех переданных объектов
 */
function zip(...objects) {
    objects = objects.filter(obj => typeof obj == 'object');
    return objects.reduceRight((result, current) => ({...result, ...current}), {});
}
