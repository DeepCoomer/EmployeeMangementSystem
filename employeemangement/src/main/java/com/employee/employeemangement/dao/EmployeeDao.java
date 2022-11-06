package com.employee.employeemangement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.employeemangement.entities.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {
    
}
