class User{
    constructor(name){
        this.name=name;
    }
sayHello(){
    return `${this.name=name} powiedz czesc!`;
}
}
let user=new user('Jakub');
console.log(user.sayHello());

class eployee extends user{
    constructor(name,salary){
        super(name);
        this.salary=salary;

    }
    raiseSalary(){
        this.slaray+=1000;
        return this.salary;

    }
}
let employee=new eployee('Jan',1999);
console.log(eployee);
employee.raiseSalary();
console.log(employee);