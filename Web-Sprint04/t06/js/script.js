function* generator() {
    this.num = 1;
    while(true) {
        let input = prompt(`Previous result: ${this.num}. Enter a new number: `);
        if (isNaN(input)) {
            yield error = 'Invalid number!';
        } 
        this.num += Number(input);
        if (this.num > 10000) {
            this.num = 1;
        }
    }
}

const gen = generator();

console.log(gen.next().value);