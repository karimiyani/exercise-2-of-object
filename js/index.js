// factory function and counstructor function 


const user ={
    name : "gomnam",
    age : 100,
    street : "sina",
};

// factory function 
function userDate ( name ,age, street ) {
    return{
        name ,
        age ,
        street ,
    };
}

const user1 = userDate ( "gomnam" , 100 , "sina");
console.log(user1);
//{name: 'gomnam', age: 100, street: 'sina'}



// counstructor function
function UserDate ( name ,age, street ) {
    this.name = name ;
    this.age = age ;
    this.street = street ;
    return this ;
}
const user2 = new UserDate ("gomnam" , 100 , "sina");
console.log(user2);
// UserDate {name: 'gomnam', age: 100, street: 'sina'}


// use apply
const user3 = UserDate.apply ({} , ["amar" , 98 , "diba"]);
console.log(user3);
// {name: 'amar', age: 98, street: 'diba'}

//use call
const myUser = { nationality : "IR"}
const user4 = UserDate.call (myUser , "yaser" , 96 , "bita");
console.log(user4);
// {nationality: 'IR', name: 'yaser', age: 96, street: 'bita'}