package com.example.demo.service.inter;

import java.util.*;

import com.example.demo.model.Student;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
public interface StudentService {

	List<Student> getAllStudents();

	Student saveStudent(Student student);
	
	Optional<Student> getStudentById(Long id);
	
	void deleteStudent(long id);
	
	List<Student> findByClass(long classID);
	
	

}
