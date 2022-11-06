package com.employee.employeemangement.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employeemangement.dao.EmployeeDao;
import com.employee.employeemangement.entities.Employee;

@Service
public class EmployeeServiceImp implements EmployeeService {
    
    @Autowired
    private EmployeeDao employeeDao;

    @Override
    public List<Employee> getEmployees() {
        return employeeDao.findAll();
    }

    @Override
    public Employee getEmployee(long id) {
        Optional<Employee> employee = employeeDao.findById(id);

        if (employee.isPresent()) {
            return employee.get();
        } else {
            return null;
        }
    }

    @Override
    public Employee addEmployee(Employee employee) {
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public void deleteEmployee(long id) {
        employeeDao.deleteById(id);
    }
}
