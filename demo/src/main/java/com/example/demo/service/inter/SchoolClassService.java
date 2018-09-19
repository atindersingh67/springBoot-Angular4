package com.example.demo.service.inter;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.SchoolClass;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
public interface SchoolClassService {

	List<SchoolClass> getAllSchoolClasss();

	SchoolClass saveSchoolClass(SchoolClass schoolClass);
	
	Optional<SchoolClass> getSchoolClassById(Long id);
	
	void deleteSchoolClass(long id);

}
