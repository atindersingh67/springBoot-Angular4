package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Teacher;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
public interface TeacherRepository extends CrudRepository<Teacher, Long> {

}
