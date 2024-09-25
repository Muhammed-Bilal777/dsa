function modifiedEmployees(arr) {
  const changeName = "Moin";
  const modified = arr.map((item) => {
    if (item.employee_name === "Rahul") {
      return { ...item, employee_name: changeName };
    }
    return item;
  });
  return modified;
}
let employees_data = [
  {
    employee_id: 1,
    employee_name: "Bilal",
  },
  {
    employee_id: 2,
    employee_name: "Rahul",
  },
  {
    employee_id: 3,
    employee_name: "Sameer",
  },
];
console.log(modifiedEmployees(employees_data));
