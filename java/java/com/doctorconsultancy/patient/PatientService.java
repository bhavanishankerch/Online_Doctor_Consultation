package com.doctorconsultancy.patient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
	
	@Autowired
	PatientJdbc patientjdbc;
	
	public List<Patient> getPatientData(){
		
		List<Patient> patientList = patientjdbc.PatientList();
		
		return patientList;
		
	}
 
}
