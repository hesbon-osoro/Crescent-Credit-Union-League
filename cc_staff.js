/**
 * TODO: MAKE IT WWORK RIGHT
 */
"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 2

  Author: Hesbon Osoro
    Date: 12/11/22  
   
   Filename: cc_staff.js
   
      
*/

/* Constructor function for the employee class */
function employee(
  id,
  firstName,
  lastName,
  dept,
  position,
  email,
  phone,
  photo
) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.dept = dept;
  this.position = position;
  this.email = email;
  this.phone = phone;
  this.photo = photo;
}

/* Object literal for search results */
var searchResult = {
  employees: [],
  sortById: function () {
    this.employees.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
  },
};

/* Event listener to retrieve and display employee records matching the search condition */
document.getElementById("searchButton").addEventListener("click", function () {
  var tableBody = document.querySelector("table#staffTable tbody");
  var tableCaption = document.querySelector("table#staffTable caption");

  tableBody.removeChildren();
  searchResult.employees = [];
  var searchField = document.getElementById("searchField");
  var searchValue = searchField.value;
  var searchOption = document.getElementById("searchOption").selectedValue();
  var searchResults = staff.directory.filter(function (record) {
    return record[searchOption].indexOf(searchValue) > -1;
  });
  searchResults.forEach(function (record) {
    var employee = new Employee(
      record.id,
      record.firstName,
      record.lastName,
      record.dept,
      record.position,
      record.email,
      record.phone,
      record.photo
    );
    searchResult.employees.push(employee);
  });
  if (searchResults.length === 0) {
    tableCaption.innerHTML = "No Records Found";
  } else {
    tableCaption.innerHTML = "Search Results";
    searchResult.sortById();
    searchResult.employees.forEach(function (employee) {
      var row = tableBody.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = '<img src="images/' + employee.photo + '">';
      cell = row.insertCell();
      cell.innerHTML = employee.id;
      cell = row.insertCell();
      cell.innerHTML = employee.firstName + " " + employee.lastName;
      cell = row.insertCell();
      cell.innerHTML = employee.dept;
      cell = row.insertCell();
      cell.innerHTML = employee.position;
      cell = row.insertCell();
      cell.innerHTML = employee.email;
      cell = row.insertCell();
      cell.innerHTML = employee.phone;
    });
  }
  searchField.value = "";
  searchField.focus();

  //  TODO: STEP 4
});

/* --- Methods added to native objects ---*/

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function () {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function () {
  var sIndex = this.selectedIndex;
  return this.options[sIndex].value;
};
