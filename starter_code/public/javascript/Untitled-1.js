console.log('Promise START');

function makeFullJSON(time) {
     return new Promise((resolve, reject) => {
          setTimeout(resolve, time, [time]);
     })
}
var p1 = makeFullJSON(1000);
var p2 = makeFullJSON(500);
var p3 = makeFullJSON(750);
p1.then(array => {
     console.log('Promise 1 complete', array);
});
p2.then(array => {
               console.log('Promise 2 complete', array);); p3.then(array => {
               console.log('Promise 3 complete', array);
          }); Promise.all([p1, p2, p3]).then(arrayOfAllResolvedValues => {
               console.log('Array of resolved values:', arrayOfAllResolvedValues);
          }); console.log('Promise END');