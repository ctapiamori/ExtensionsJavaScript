/*
 * @author 		César Augusto Tapia Mori
 * @licencia 	MIT
 */

/*
 * Devuelve un valor booleano que indica si el numero entero es un numero impar.
 * @return boolean
 */
Number.prototype.IsOdd = function () {
    return (this % 2) != 0;
}

/*
 * Devuelve un valor booleano que indica si el numero entero es un numero par.
 * @return boolean
 */
Number.prototype.IsEven = function () {
    return (this % 2) == 0;
}

/*
 * Devuelve un valor booleano que indica que el número entero esta entre los valores low y high especificados.
 * @param Int, Int
 * @return boolean
 */
Number.prototype.Between = function (low, high) {
	return this > low && this < high;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "mayor" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
Number.prototype.IsGreater = function (iCompare) {
    return this > iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "mayor" o "igual" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
Number.prototype.IsGreaterOrEqual = function (iCompare) {
    return this >= iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "inferior" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
Number.prototype.IsLower = function (iCompare) {
    return this < iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "inferior" o "igual" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
Number.prototype.IsLowerOrEqual = function (iCompare) {
    return this <= iCompare;
}


