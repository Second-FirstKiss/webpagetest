function myTest()
{
    if(true)
    {
        let x = 100;
        const y = 200;
        y=300; // TypeError: Assignment to constant variable.
    }
    console.log(x);
}
myTest(); // ReferenceError: x is not defined