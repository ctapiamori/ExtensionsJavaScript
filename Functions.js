/*
 * @author 		César Augusto Tapia Mori
 * @licencia 	MIT
 */

function getID(idDom)
{
	return document.getElementById(idDom);
}


/*
 * Funciones para INt
 */

/*
 * Objeto int
 */
var int = int || {};

/*
 * Conviert un String a Integer, y si ocurre un inconveniente devuelve un valor por defecto
 * @param String, Int
 * @return Int
 */
int.TryParse = function (value, defaultValue) {
	var returnValue = defaultValue;     
 	if(value!=null){
 		if(value.length>0){
 			if (!isNaN(value)){
 				returnValue = parseInt(str);
 			}
 		}
 	}
 	return returnValue;
}


/*
 * Conviert un String a Integer
 * @param String, Int
 * @return Int
 */
int.Parse = function (value, base) {
	if(isNaN(value)) return NaN;
	base = base === undefined ? 10 : base;
 	return parseInt(value, base);
}