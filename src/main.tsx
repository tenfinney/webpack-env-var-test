declare var process: any;
//console.log(process) // will NOT work, because process hasn't been injected
//console.log(process.env); // will work but risky
console.log(process.env.VITE_TEST_VAR); // correct: 'Donald Hump'