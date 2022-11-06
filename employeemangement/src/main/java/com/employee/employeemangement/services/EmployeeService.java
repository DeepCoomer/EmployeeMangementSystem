package com.employee.employeemangement.services;

import java.util.List;

import com.employee.employeemangement.entities.Employee;

public interface EmployeeService {
    
    public List<Employee> getEmployees();

    public Employee getEmployee(long id);

    public Employee addEmployee(Employee employee);

    public Employee updateEmployee(Employee employee);

    public void deleteEmployee(long id);
}
