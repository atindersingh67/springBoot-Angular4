package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
/**
*
* @author Atinder
* @version 1.0
* @since 2018-09-14
*/
@Entity
public class Student implements Serializable{

	@Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private int age;
	private String sex;
	
	@ManyToOne(optional = true)
	@JoinColumn(name="schoolClass_id", nullable=true)
	private SchoolClass schoolClass;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}


	public SchoolClass getSchoolClass() {
		return schoolClass;
	}

	public void setSchoolClass(SchoolClass schoolClass) {
		this.schoolClass = schoolClass;
	}

}
