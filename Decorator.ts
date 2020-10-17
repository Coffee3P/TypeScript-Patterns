/**
 * Decorator pattern can be used to add or remove responsibilities at run time.
 * https://stackoverflow.com/questions/40429407/how-to-you-create-a-decorator-pattern-in-typescript
 */

 interface Person {
    name: string;
    age: number;
    
    identify(): void;
 }

 class SimplePerson implements Person {
     name: string;
     age: number;

     identify(): void {
         console.log(`${this.name} age ${this.age}`);
     }
 }

 abstract class PersonDecorator implements Person {
     protected decoratedPerson: Person;

     constructor(person: Person) {
         this.decoratedPerson = person;
     }

     get name(): string {
         return this.decoratedPerson.name;
     }

     get age(): number {
         return this.decoratedPerson.age;
     }

     identify(): void {
         this.decoratedPerson.identify();
     }
 }

 class Child extends PersonDecorator {
     mother: Person;
     father: Person;

     logParents(): void {
         console.log('Parents: ');
         this.mother.identify();
         this.father.identify();
     }
 }

class Student extends PersonDecorator {
    public school: string;

    public logSchool() {
        console.log(this.school);
    }
}

let Dad = new SimplePerson();
Dad.name = "Brad";
Dad.age = 32;

let Mom = new SimplePerson();
Mom = new Student(Mom);
Mom.name = "Janet";
Mom.age = 34;
(Mom as Student).school = "College of Night School Moms";

let Johnny = new SimplePerson();
Johnny = new Child(Johnny);
Johnny = new Student(Johnny);
Johnny.name = "Johnny";
Johnny.age = 12;
(Johnny as Child).Mother = Mom;
(Johnny as Child).Father = Dad;
(Johnny as Student).school = "School for kids who can't read good";