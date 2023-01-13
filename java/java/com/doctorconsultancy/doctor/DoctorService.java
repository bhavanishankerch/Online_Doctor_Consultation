package com.doctorconsultancy.doctor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
	
	@Autowired
	DoctorJdbc doctorjdbc;
	
	public List<Doctor> getDoctorsData(){
		
		List<Doctor> doctorsList = doctorjdbc.doctorList();
		
		return doctorsList;
		
	}
	
	public List<Doctor> getcategory(String categeory) {
		List<Doctor> info=doctorjdbc.doctorList();
		List<Doctor> filterlist = info.stream().filter(doct->doct.getCategeory().equals(categeory)).collect(Collectors.toList());
		return filterlist;
	}

}
