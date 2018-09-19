package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TeacherRepository;
import com.example.demo.model.Teacher;
import com.example.demo.service.inter.TeacherService;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@Service
public class TeacherImpl implements TeacherService {

	@Autowired
	TeacherRepository teacherDao;
	@Override
	public List<Teacher> getAllTeachers() {
		return (List<Teacher>) teacherDao.findAll();
	}

	@Override
	public Teacher saveTeacher(Teacher teacher) {
		return teacherDao.save(teacher);
	}

	@Override
	public Optional<Teacher> getTeacherById(Long id) {
		return teacherDao.findById(id);
	}

	@Override
	public void deleteTeacher(long id) {
		teacherDao.deleteById(id);

	}

}
