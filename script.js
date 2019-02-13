var data = [undefined, 30,'xx', 'firstString','zz', 'bc', 1, 500, false, true, null, 'abc', true, {test: 'Object'}, undefined],
  result;

result = prioritySort(data, ['string', 'boolean', 'number', 'object', 'undefined', 'null']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);
function prioritySort(array, dataPriority){

  var undef = {};

  function isNull(value) {
    if (value !== null){
      return typeof value;
    } else return 'null';
  }


  for (var i = 0; i < array.length; i++){
    if (array[i] === undefined) array[i] = undef;
  }

  function sorting(a,b) {

    var typeA = isNull(a);
    var typeB = isNull(b);

    var valueA = dataPriority.indexOf(typeA);
    var valueB = dataPriority.indexOf(typeB);

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    if (valueA == valueB){
       if ((typeA && typeB) === 'boolean') return b -a;
       if ((typeA && typeB) === 'string') {
         var stringA = a.split('');
         var stringB = b.split('');
         if (stringA[0] > stringB[0]) {
           stringA.join('');
           stringB.join('');
           return 1;
         }
         if (stringA < stringB) {
           stringA.join('');
           stringB.join('');
           return -1;
         }
       }
       return a - b;
     }
  }
  return array.sort(sorting);
};