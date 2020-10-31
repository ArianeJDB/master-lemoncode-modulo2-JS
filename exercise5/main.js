
class Machine {
    constructor(counter) {
        this.counter = counter
    }


    play() {
        this.counter = this.counter + 1;

        const randomBoolean1 = Math.random() >= 0.5;
        const randomBoolean2 = Math.random() >= 0.5;
        const randomBoolean3 = Math.random() >= 0.5;

        if (randomBoolean1 && randomBoolean2 && randomBoolean3) {
            console.log(`Congratulations!!! You won ${this.counter} coins!!`)
            this.counter = 0
        } else {
            console.log('Good luck next time!!')
        }
    }
}

const machine = new Machine(0)
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
