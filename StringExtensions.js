/*
 * @author 		César Augusto Tapia Mori
 * @licencia 	MIT
 */

/*
 * Verifica si un objeto String es Nulo o Vacio
 * @param String
 * @return boolean
 */
String.prototype.IsNullOrEmpty = function() {
	return this === "" || this === null || this === undefined;
}

/*
 * Verifica si un String es igual a otro String
 * @param compare String
 * @return boolean
 */
String.prototype.equals = function (compare) {
	return String(this) === compare;
}

if(String.prototype.trim){
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/gm,'');
	}
}

String.prototype.trimLeft = String.prototype.ltrim = function(){
	return this.replace(/^\s+/,'');
}

String.prototype.trimRight = String.prototype.rtrim = function(){
	return this.replace(/\s+$/,'');
}

String.prototype.trimFull = String.prototype.ftrim = function(){
	return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
}

String.prototype.ConvertWhitespacesToSingleSpaces = function() {
	return this.replace(/\s+/g,' ');
}

String.prototype.TrimAndReduce = function() {
	return this.ConvertWhitespacesToSingleSpaces().trim();
}

String.prototype.IsNumeric = function() {
	var re = new RegExp("^[0-9]+$", "i"); //i = Ignore Case
	return !(this.match(re) === null);
}

String.prototype.toInt = function(){
	return parseInt(this, 10);
}

/*
 * Funcionalidades para Number
 */

/*
 * Devuelve un valor booleano que indica si el numero entero es un numero impar.
 * @return boolean
 */
String.prototype.IsOdd = function () {
	i = this.toInt();
    return (i % 2) != 0;
}

/*
 * Devuelve un valor booleano que indica si el numero entero es un numero par.
 * @return boolean
 */
String.prototype.IsEven = function () {
	i = this.toInt();
    return (i % 2) == 0;
}

/*
 * Devuelve un valor booleano que indica que el número entero esta entre los valores low y high especificados.
 * @param Int, Int
 * @return boolean
 */
String.prototype.Between = function (low, high) {
	i = this.toInt();
	return i > low && i < high;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "mayor" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
String.prototype.IsGreater = function (iCompare) {
	i = this.toInt();
    return i > iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "mayor" o "igual" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
String.prototype.IsGreaterOrEqual = function (iCompare) {
	i = this.toInt();
    return i >= iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "inferior" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
String.prototype.IsLower = function (iCompare) {
	i = this.toInt();
    return i < iCompare;
}

/*
 * Devuelve un valor booleano que indica que el número entero es "inferior" o "igual" al valor iCompare especificado.
 * @param Int
 * @return boolean
 */
String.prototype.IsLowerOrEqual = function (iCompare) {
	i = this.toInt();
    return i <= iCompare;
}

