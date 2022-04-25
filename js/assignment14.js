console.log("PROBLEM 1")
/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

let employees = [
    {
      "first_name": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise eligible": true
    },
    {
      "first_name": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise eligible": true
    },
    {
      "first_name": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise eligible": false
    },
  ];

console.log(employees.employees);

//console.log(fam.famName);
//console.log([fam['famName']);

//console.log(fam.immediateFam[0].fav_food);
//console.log(fam['immediateFam'][0][fav_food]);

console.log("PROBLEM 2");
/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "first_name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise eligible": true
      },
      {
        "first_name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise eligible": true
      },
      {
        "first_name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise eligible": false
      }
    ]
}

console.log(company);

console.log("PROBLEM 3");
/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/

const newHire = {
  "first_name": "Anna",
  "department": "Tech",
  "designation": "Executive",
  "salary": 25600,
  "raise eligible": false
}

company.employees.push(newHire); // the push() method adds a value to an object/array.

console.log(company.employees);

console.log("PROBLEM 4");
/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/

let totalSalary = 0;
for (const id in company.employees){
  totalSalary += employees[id].salary;
}

console.log(totalSalary);

console.log("PROBLEM 5");
/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/

 for(const id in employees) {
   if (employees[id].raise){
     employees[id].salary += 1.1;
     employees[id].raise = false;
   }
 }

 console.log(employees);

console.log("PROBLEM 6");
/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/

 const peopleWorkingFromHome = ["Anna", "Sam"];
 for(const id in employees) {
   employees[id].wfh=peopleWorkingFromHome.includes(employees[id.firstName]);
 }

 console.log(emloyees);
