'use strict';

/**
 * Объединить объекты
 * @param  {...object} objects это объекты, которые необходимо объединить
 * @returns {object} возвращает объект, содержащий все поля из всех переданных объектов
 */
const zip = (...objects) => {
    objects = objects.filter(obj => (typeof obj === 'object' && obj !== null))
    return objects.reduceRight((res, cur) => ({...res, ...cur}), {});
}
