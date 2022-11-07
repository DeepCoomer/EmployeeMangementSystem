package com.employee.employeemangement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.employeemangement.entities.Employee;
import com.employee.employeemangement.services.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/api/employees")
    public List<Employee> getEmployees() {
        return this.employeeService.getEmployees();
    }

    @GetMapping("/api/employees/{employeeId}")
    public Employee getEmployee(@PathVariable String employeeId) {
        return this.employeeService.getEmployee(Long.parseLong(employeeId));
    }

    @PostMapping("/api/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        return this.employeeService.addEmployee(employee);
    }

    @PutMapping("/api/employees")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return this.employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/api/employees/{employeeId}")
    public ResponseEntity<HttpStatus> deleteEmployee(@RequestBody String employeeId){
        try {
            this.employeeService.deleteEmployee(Long.parseLong(employeeId));
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        } catch (Exception e) {
           return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
