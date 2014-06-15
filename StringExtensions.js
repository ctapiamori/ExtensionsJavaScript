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

