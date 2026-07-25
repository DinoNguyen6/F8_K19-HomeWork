class Animal {
    private id: number;
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public personI(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const cat = new Animal("Tom");

cat.personI(1, "Jerry");

console.log(cat.personI); // Jerry