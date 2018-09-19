package com.example.demo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.SchoolClass;
import com.example.demo.model.Student;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
public interface StudentRepository extends CrudRepository<Student, Long> {
List<Student> findBySchoolClass(SchoolClass schoolclass);
}
