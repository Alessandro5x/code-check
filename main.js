const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'nemo', 'nigel', 'squirt', 'darla']
const large = new Array(10000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++){
    console.log('running')
    if(array[i] === 'nemo'){
      console.log('Found NEMO!');
      break;
    }
  }
  let t1 = performance.now();
  console.log(t1-t0)
}

findNemo(large); // O (n) --> Linear Time

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo'){
      console.log('Found Nemo!');
    }
  });
}

findNemo2(everyone);

const findNemo3 = array => {
  for(let fish of array) {
    if(fish === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}


findNemo3(everyone);