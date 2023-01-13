package com.doctorconsultancy.patient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
	
	@Autowired
	PatientService patientservice;
	@Autowired
	PatientJdbc patientjdbc;
	
	@GetMapping(value = "/patientdata")
	public List<Patient> patientData(){
		
		List<Patient> patList = patientservice.getPatientData();
		
		return patList;
		
	}
	
	@PostMapping(value = "/patientdata")
	void postPatientData(@RequestBody Patient patient) {
		patientjdbc.saveData(patient);
	}

}
