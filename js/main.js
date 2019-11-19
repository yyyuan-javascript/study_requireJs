// require.config({
//     baseUrl: '',
//     paths: {
//       'nameDep': 'js/nameDep',
//       'say': 'js/say',
//       'name': 'js/name'
//     },
//     shim: {
//       'name': {
//         deps: ['nameDep']
//       }
//     }
//   });
//   require(['name', 'say'], function (name, say) {
//     say(name);
//   });
// alert('Hello~'); 

// require.config({
//     paths: {
//         jquery: 'jQuery'
//         //jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery'
//     }
// });

// require(['jquery'], function ($) {
//     $(function () {
//         alert('jQuery load!');
//     }); 
// });

define("Employee1", ["Company"], function( Company) {
    function Employee(name) {
        this.name = name;
        this.company = new Company(name + "'s own company");
    };
    return Employee;
});
define("Employee", function() {
    function Employee(name) {
        this.name = name;
    };
    return Employee;
});
define("Company", ["Employee1"], function( Employee) {
    function Company(name) {
        this.name = name;
        this.employees = [];
    };
    Company.prototype.addEmployee = function(name) {
        var employee = new Employee(name);
        this.employees.push(employee);
        employee.company = this;
    };
    return Company;
});
// define("Company", function() {
//     function Company(name) {
//         this.name = name;
//         this.employees = [];
//     };
//     Company.prototype.addEmployee = function(employee) {
       
//         this.employees.push(employee);
//     };
//     return Company;
// });

require(['Company'],function(company){
const trip = new company('trip.com');
trip.addEmployee('yy');
alert(trip.name,trip.employees)
});