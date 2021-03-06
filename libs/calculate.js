function isPrime(i) {
  for (var c = 2; c <= Math.sqrt(i); ++c)
    if (i % c === 0) return false;
  return true;
}
function primeList(N) {
  var list = [];
   for (var i = 2; i != N; ++i)
     if (isPrime(i)) list.push(i);
  return list;
}

module.exports = function(nb) {
  return primeList(nb);
}
