const isDate = function (date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

/**
 * @param {string|Date} x 
 * @return {Date}
 */
const asDate = function (x) {
    try {
        const date = new Date(x);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset())

        return !isNaN(date) ? date : undefined;

    } catch (error) {
        return undefined;
    }
}

module.exports = { isDate, asDate }