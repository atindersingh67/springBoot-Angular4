package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.inter.StudentService;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@RestController
@RequestMapping("student")
@CrossOrigin
public class StudentController {

	@Autowired
	StudentService service;

	@GetMapping
	public List<Student> getStudent() {

		return service.getAllStudents();
	}

	@PostMapping
	public Student saveStudent(@Valid @RequestBody Student student) {
		return service.saveStudent(student);
	}

	@GetMapping(value = "/{id}")
	public Optional<Student> getStudentById(@PathVariable Long id) {
		return service.getStudentById(id);
	}

	@PutMapping
	public Student updateStudent(@Valid @RequestBody Student student) {
		return service.saveStudent(student);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteStudent(@PathVariable Long id) {
		service.deleteStudent(id);
	}
}
