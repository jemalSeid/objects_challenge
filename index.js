// question #1

class Car {
    constructor(name, model, year) {
      this.name = name
      this.model = model
      this.year = year
    }

    getDetail() {
        console.log(
          this.name +
            ' company releases new car brand of ' +
            this.model +
            ' in ' +
            this.year
        )
      }
    }
    
    const Honda = new Car('Honda', 'Civic', 2019)
    const Toyota = new Car('Toyota', 'Camry', 2020)
    const Ford = new Car('Ford', 'Mustang', 2018)
    
    Honda.getDetail()
    Toyota.getDetail()
    Ford.getDetail()

    // question #2
    const book = {}
    book.title = prompt("Enter title of the book: ");
    book.author = prompt("Enter the author:");
    book.numPages = parseInt(prompt("Enter number of pages:"));
    console.log(`Book Details:\nTitle:${book.title}\nAuthor:${book.author}\nNumber of pages:${book.numPages}`)
    
    //Question #3
    
function findOldestPerson(people) {
  let oldestAge = 0;
  let oldestPerson = "";

  people.forEach(person => {
    if (person.age > oldestAge) {
      oldestAge = person.age;
      oldestPerson = person.name;
    }
  });

  return oldestPerson;
}


const people = [
  {
    name: 'Jemal',
    age: 45
  },
  {
    name: 'Husen',
    age:30
  },
  {
    name: 'Nesru',
    age:37
  },
]

console.log(findOldestPerson(people))

//Question #4

class Movie {
  constructor(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  }
 }
 
 // Prompt the user for movie details and create Movie objects
 const movies = [];
 for (let i = 1; i <= 3; i++) {
  const title = prompt(`Enter the title of movie ${i}:`);
  const director = prompt(`Enter the director of movie ${i}:`);
  const year = prompt(`Enter the year of movie ${i}:`);
  const movie = new Movie(title, director, year);
  movies.push(movie);
 }
 
 // Sort the movies array by year
 movies.sort((a, b) => a.year - b.year);
 
 console.log("Details of each movies:");
 for (const movie of movies) {
  console.log(`${movie.title} (${movie.year}), directed by ${movie.director}`);
 }

 //Question #5
 function calculateTotalPrice(cars) {
  let total = 0;
  for (const item of cars) {
    total += item.price;
  }
  return total;
}
const cars = [
  { name: "Suzuki", price: 10000 },
  { name: "Isuzu", price: 25000 },
  { name: "Toyota", price: 4500 }
];

const totalPrice = calculateTotalPrice(cars);
console.log(totalPrice); // Output: 39500

