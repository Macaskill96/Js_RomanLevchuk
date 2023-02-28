// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// let newUsers = [];
// function Users(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new Users(5638, 'Rusalka', 'Kinder', 'voda@gmail.com', +4937232)
// newUsers.push(user1)
// let user2 = new Users(2363, 'Igor', 'Havruk', 'Igor@ukr.net', +380734553151)
// newUsers.push(user2)
// let user3 = new Users(1264, 'Yulia', 'Sirop', 'Sirka@gmail.com', +35053516563)
// newUsers.push(user3)
// let user4 = new Users(7531, 'Vitalik', 'Rediska', 'Redka@lambler.ua', +480546432234)
// newUsers.push(user4)
// let user5 = new Users(4522, 'Dimka', 'Chavkin', 'CV@gmail.com', +380966767654)
// newUsers.push(user5)
// let user6 = new Users(7647, 'Diana', 'Wife', 'bestwife@gmail.com', +43205299392)
// newUsers.push(user6)
// let user7 = new Users(2362, 'Anna', 'Daughter', 'Bestofthebest@gmail.com', +380674356678)
// newUsers.push(user7)
// let user8 = new Users(1785, 'Julia', 'Deris', 'deriska@gmail.com', +380636301731)
// newUsers.push(user8)
// let user9 = new Users(1986, 'Taras', 'Taratakos', 'taratakos@gmail.com', +380735678998)
// newUsers.push(user9)
// let user10 = new Users(2023, 'Valik', 'Valio', 'valio96@gmail.com', +380934399921)
// newUsers.push(user10)
// console.log(newUsers);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// 1 variant
// for (const userElements of newUsers) {
//     if (userElements.id %2 === 0){
//         console.log(userElements);
//     }
// }
// 2 variant
// let userFilter = newUsers.filter(item => item.id %2 === 0)
// console.log(userFilter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userSort = newUsers.sort((a,b) => a.id - b.id)
// console.log(userSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;

//     }
// }
// let client1 = new Client(2021, 'Daniel', 'Schumacher', 'Danny@gmail.com', 380631233321, ['benzin', 'Cheburek']);
// clients.push(client1);
// let client2 = new Client(2022, 'Michel', 'Schumacher', 'Misha@gmail.com', 380931875325, ['benzin', 'Cheburek', 'chocolate']);
// clients.push(client2);
// let client3 = new Client(2023, 'Lincoln', 'Foolcars', 'Foolik@gmail.com', 380631867563, ['Water', 'Cheburek', 'Oil']);
// clients.push(client3);
// let client4 = new Client(2025, 'Viktor', 'Komunist', 'onlyfuns@gmail.com', 38063675347, ['vazelin', 'Cheburek', 'Videlka', 'Kavun']);
// clients.push(client4);
// let client5 = new Client(2024, 'Oleg', 'Lyashko', 'PM.onlyfans@gmail.com', 380667954367, ['vegatables', 'fruits','alcohol','Fish', 'Meat']);
// clients.push(client5);
// let client6 = new Client(2027, 'Rostik', 'Hvostik', 'Automechanik@gmail.com', 380678734533, ['benzin', 'hot-dog','diesel','Kabelya', 'Instrument', 'car', 'Coffee']);
// clients.push(client6);
// let client7 = new Client(2026, 'Sofia', 'Bondarenko', 'bonda@gmail.com', 380639745661, ['flowers', 'Cheburek', 'fishtashki']);
// clients.push(client7);
// let client8 = new Client(2029, 'Maria', 'Yaremchuk', 'medsister@gmail.com', 380631985921, ['medical', 'tea']);
// clients.push(client8);
// let client9 = new Client(2031, 'Anna', 'Yermolenko', 'yerro@gmail.com', 380967899900, ['benzin', 'Cheburek', 'laptop', 'smartphone', 'tv', 'musical', 'guitar']);
// clients.push(client9);
// let client10 = new Client(2041, 'Diana', 'Schumacher', 'fanny@gmail.com', 380631233876, ['benzin', 'Cheburek', 'tea']);
// clients.push(client10);
// console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let orderSort = clients.sort((a,b) => a.order.length - b.order.length)
// console.log(orderSort);





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, production, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.production = production;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = [];
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info = function () {
//         document.write(`<ul>
//             <li> модель: ${model}</li>
//             <li> виробник: ${production}</li>
//             <li> рік випуску: ${year}</li>
//             <li> максимальна швидкість: ${maxSpeed}</li>
//             <li> об'єм двигуна: ${engineVolume}</li>
//         </ul>`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(this);
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this);
//     }
//     this.addDriver = function (newData) {
//         this.driver.push(newData);
//     }
//
// }
// let car1 = new Car ('Ferrari', 'Italy', 2012, 286, 5.0)
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(40)
// car1.changeYear(1997)
// car1.addDriver (68)










//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// class Car {
//     constructor(model, production, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.production = production;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.driver = [];
//
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info () {
//         document.write(`<ul>
//              <li> модель: ${this.model}</li>
//              <li> виробник: ${this.production}</li>
//              <li> рік випуску: ${this.year}</li>
//              <li> максимальна швидкість: ${this.maxSpeed}</li>
//             <li> об'єм двигуна: ${this.engineVolume}</li>
//          </ul>`)
//     };
//     changeNewSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(this);
//     };
//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(this);
//     }
//     pushNewData (newData) {
//         this.driver.push(newData);
//     }
//
// }
// let car1 = new Car('BMW', 'Germany', 2002, 247, 2.5 )
// console.log(car1);
// car1.drive();
// car1.info();
// car1.changeNewSpeed(150);
// car1.changeYear(2001);
// car1.pushNewData('Bmw it is power')






//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Girl {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let girls = [
//     new Girl ('Nina', 29, 31),
//     new Girl ('Svitlana', 42, 35),
//     new Girl ('Roksa', 27, 33),
//     new Girl ('Julia', 28, 32),
//     new Girl ('Diana', 22, 34),
//     new Girl ('Vika', 21, 36),
//     new Girl ('Olga', 33, 37),
//     new Girl ('Katerina', 18, 39),
//     new Girl ('Anastasia', 43, 38),
//     new Girl ('Linda', 23, 41),
// ];
// console.log(girls);
//
// class Prince {
//     constructor(name, age, findSize) {
//         this.name = name;
//         this.age = age;
//         this.findSize = findSize;
//     }
//      finder = function (arr) {
//         for (let girl of arr) {
//             if (girl.size === this.findSize) {
//                 return girl;
//             }
//         }
//     }
//
// }
// let prince1 = new Prince ('Nazar', 23, 36)
// console.log(prince1);
//
// console.log(prince1.finder(girls));
//
//
//
// let findPopelGirl = girls.find(girl => girl.size === prince1.findSize)
// console.log(findPopelGirl);