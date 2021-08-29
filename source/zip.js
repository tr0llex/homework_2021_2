'use strict';

/**
 * Объединить объекты
 * @returns {Object} возвращает объект, содержащий все поля из всех переданных объектов
 */
function zip(...objects) {
    return objects.filter(obj => typeof obj == 'object').reduceRight((res, cur) => ({...res, ...cur}), {});
}
