package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.StudentRepository;
import com.example.demo.model.SchoolClass;
import com.example.demo.model.Student;
import com.example.demo.service.inter.StudentService;
import com.example.demo.service.inter.TeacherService;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@Service
public class StudentImpl implements StudentService {

	@Autowired
	StudentRepository studentDao;
	@Autowired
	TeacherService service;
	@Override
	public List<Student> getAllStudents() {
		return (List<Student>) studentDao.findAll();
	}

	@Override
	public Student saveStudent(Student student) {
		return studentDao.save(student);
	}

	@Override
	public Optional<Student> getStudentById(Long id) {
		return studentDao.findById(id);
	}

	@Override
	public void deleteStudent(long id) {
		studentDao.deleteById(id);

	}
	public List<Student> findByClass(long classID){
		return studentDao.findBySchoolClass(new SchoolClass(2l));
	}
}
