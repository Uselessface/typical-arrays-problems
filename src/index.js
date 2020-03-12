
exports.min = function min (a) {
	return a instanceof Array && a.length > 0 ? Math.min(...a) : 0;
}
	
exports.max = function max (ar) {
  	return ar instanceof Array && ar.length > 0 ? Math.max(...ar) : 0;
}

exports.avg = function avg (arr) {
  	return arr instanceof Array && arr.length > 0 ? arr.reduce((a, b) => (a + b), 0) / arr.length : 0;
}
