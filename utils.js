/**
 * @author Goodwish Matyila
 * @description range takes 2 parameters [start,end] array, str to work on to check the length of the string
 * in the given range of numbers and returns boolean
 * @param {any} param0
 * @param {any} str
 */

class Utils {
    constructor() { }

    static range([min, max], str, callback) {
        if (isNaN(min)) {
            console.error({ message: "ERROR_MIN_IS_NOT_A_NUMBER", code: NaN });
            return;
        }
        if (isNaN(max)) {
            console.error({ message: "ERROR_MAX_IS_NOT_A_NUMBER", code: NaN });
            return;
        }
        /**
         * @var min starting pos
         */
        var min = min || 0;
        /**
         * @var max end pos
         */
        var max = max || 0;
        /**
         * @var str integer length of string
         */
        var str = str.length || 0;
        /**
         * @var countArray [] 
         */
        var countArray = [];
        /**
         * @var i iterator between min, max, increments i by 1
         */
        for (var i = min; i < max + 1; i++) {
            /**
             * stacking countArray with incremental values of 1
             */
            countArray.push(i);
        }
        /**
         * @var result
         * @returns boolean
         */
        var result = countArray.includes(str, 0);

        if (callback) {
            return callback(result);
        }
        return result;
    }
}

module.exports = {
    Utils
}