interface PersonI {
    id: string,
    name: string,
    age: number
}

function getOldestPerson(employees: PersonI[]): PersonI | null {
    if (employees.length === 0) {
        return null;
    }

    return employees.reduce((oldest, person) =>
        person.age > oldest.age ? person : oldest
    );
}

const employees: PersonI[] = [
    { id: 'jds83', name: "An", age: 20 },
    { id: '1dfg3',name: "Bình", age: 35 },
    { id: '1vf83', name: "Cường", age: 28 },
];

console.log(getOldestPerson(employees));
// { name: "Bình", age: 35 }