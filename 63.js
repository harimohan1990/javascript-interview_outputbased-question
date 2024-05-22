const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))


    /*  

    When you run the `runPromises()` function in your provided code snippet, the output will be:

```
Third
```

This is because the `Promise.all([promise3, promise4])` statement causes a rejection due to `promise3` being a rejected promise, and `Promise.all` fails immediately upon any promise rejection within the array it processes. The catch handler catches this rejection and logs "Third" to the console. The resolved values from the other promises do not appear because the async function exits at the first rejection encountered in the sequence of awaited promises.
    
    */