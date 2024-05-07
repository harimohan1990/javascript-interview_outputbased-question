let x = 017; 
let y = 014; 

console.log(x - y); 

/*  In JavaScript, numbers starting with `0` are interpreted as octal (base 8) literals. Therefore, `017` and `014` are interpreted as octal numbers.

Let's convert them to decimal to see their values:

- `017` in octal is equal to `1 * 8^1 + 7 * 8^0`, which is `15` in decimal.
- `014` in octal is equal to `1 * 8^1 + 4 * 8^0`, which is `12` in decimal.

So, `x` is `15` and `y` is `12`. When you subtract `y` from `x`, you get `15 - 12 = 3`.

Therefore, the output of `console.log(x - y);` will be:

```
3   

----------------------------
We can convert octal to decimal by each place is a power of eight.

1248 = 1 × 82 + 2 × 81 + 4 × 80                      

In general, 83 82 81 80. 8−1 8−2 8−3 ... … etc

                                 ↑

                   	  Octal Point

*/
