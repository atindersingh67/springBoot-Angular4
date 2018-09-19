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

import com.example.demo.model.SchoolClass;
import com.example.demo.service.inter.SchoolClassService;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@RestController
@RequestMapping("schoolClass")
@CrossOrigin
public class SchoolClassController {

	@Autowired
	SchoolClassService service;
	
	@GetMapping
	public List<SchoolClass> getSchoolClass() {
		return service.getAllSchoolClasss();
	}

	@PostMapping
	public SchoolClass saveSchoolClass(@RequestBody SchoolClass schoolClass) {
		return service.saveSchoolClass(schoolClass);
	}

	@GetMapping(value = "/{id}")
	public Optional<SchoolClass> getSchoolClassById(@PathVariable Long id) {
		return service.getSchoolClassById(id);
	}

	@PutMapping
	public SchoolClass updateSchoolClass(@RequestBody SchoolClass schoolClass) {
		return service.saveSchoolClass(schoolClass);
	}

	@DeleteMapping
	public void deleteSchoolClass(@PathVariable Long id) {
		service.deleteSchoolClass(id);
	}
}
