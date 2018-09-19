package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.SchoolClassRepository;
import com.example.demo.dao.StudentRepository;
import com.example.demo.model.SchoolClass;
import com.example.demo.service.inter.SchoolClassService;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@Service
public class SchoolClassImpl implements SchoolClassService {

	@Autowired
	SchoolClassRepository schoolClassDao;


	@Autowired
	StudentRepository studentDao;
	
	@Override
	public List<SchoolClass> getAllSchoolClasss() {
		return (List<SchoolClass>) schoolClassDao.findAll();
	}

	@Override
	public SchoolClass saveSchoolClass(SchoolClass schoolClass) {
		schoolClassDao.save(schoolClass);
		return schoolClass;
	}

	@Override
	public Optional<SchoolClass> getSchoolClassById(Long id) {
		return schoolClassDao.findById(id);
	}

	@Override
	public void deleteSchoolClass(long id) {
		schoolClassDao.deleteById(id);

	}

}
