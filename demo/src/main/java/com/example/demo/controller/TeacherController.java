package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

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

import com.example.demo.model.Teacher;
import com.example.demo.service.inter.TeacherService;
@CrossOrigin
@RestController
@RequestMapping("teacher")
public class TeacherController {
	/**
	 *
	 * @author Atinder
	 * @version 1.0
	 * @since 2018-09-14
	 */
@Autowired
	TeacherService service;
	
	@GetMapping
	public List<Teacher> getTeacher() {
		return service.getAllTeachers();
	}

	@PostMapping
	public Teacher saveTeacher(@RequestBody Teacher teacher) {
		return service.saveTeacher(teacher);
	}

	@GetMapping(value = "/{id}")
	public Optional<Teacher> getTeacherById(@PathVariable Long id) {
		return service.getTeacherById(id);
	}

	@PutMapping
	public Teacher updateTeacher(@RequestBody Teacher teacher) {
		return service.saveTeacher(teacher);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteTeacher(@PathVariable Long id) {
		service.deleteTeacher(id);
	}
}
