const myArgs = process.argv.slice(2);
const func = (arr) => {
  for (let item in arr) {
    if(arr[item] > 0)
     setTimeout(() => {
        process.stdout  .write('\x07');
        console.log(`Alarm at ${arr[item]} seconds`);
     }, parseInt(arr[item]) * 100);
  };
};

func(myArgs);
