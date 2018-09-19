package com.example.demo.service.inter;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Teacher;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
public interface TeacherService {

	List<Teacher> getAllTeachers();

	Teacher saveTeacher(Teacher teacher);
	
	Optional<Teacher> getTeacherById(Long id);
	
	void deleteTeacher(long id);

}
