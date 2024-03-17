interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Bright',
    lastName: 'Djogatse',
    age: 27,
    location: 'Tema'
  };

const student2: Student = {
    firstName: 'Pat',
    lastName: 'Service',
    age: 22,
    location: 'Santa Barbara'
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");

    studentsList.forEach(student => {
        const row = table.insertRow();
        const column1 = row.insertCell(0);
        const column2 = row.insertCell(1);

        column1.textContent = student.firstName;
        column2.textContent = student.location;
    });

    document.body.appendChild(table);
});
