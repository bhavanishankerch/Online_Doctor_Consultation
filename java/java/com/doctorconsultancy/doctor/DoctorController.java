package com.doctorconsultancy.doctor;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
	
	@Autowired
	DoctorService doctorservice;
	@Autowired
	DoctorJdbc doctorjdbc;
	
	@GetMapping(value = "/doctorsdata")
	public List<Doctor> doctorsData(){
		List<Doctor> docList = doctorservice.getDoctorsData();
		return docList;
	}
	
	@SuppressWarnings("unlikely-arg-type")
	@PostMapping(value = "/doctorsdata")
public String postUserData(@RequestBody Doctor doctor) {
		
		String statusMessage;
		
		boolean status = doctorjdbc.saveData(doctor);
		
		if(status) {
			statusMessage = "Data Inserted Successfully";
		}else {
			statusMessage = "Data Insertion Failed";
		}
		
		if(Objects.isNull(doctor.getName()) && "".equals(doctor.getName())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		
		if(Objects.isNull(doctor.getCategeory()) && "".equals(doctor.getCategeory())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		
		if(Objects.isNull(doctor.getMobile_number()) && "".equals(doctor.getMobile_number())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		
		if(Objects.isNull(doctor.getTimings()) && "".equals(doctor.getTimings())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		
		if(Objects.isNull(doctor.getExperience()) && "".equals(doctor.getExperience())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		
		if(Objects.isNull(doctor.getFee()) && "".equals(doctor.getFee())){
			throw new IllegalArgumentException("Email id is not valid");
		}
		return statusMessage;
		

 }
	
	@GetMapping("/getcategeory")
	public List<Doctor> getCatdata(@RequestParam(name="categeory") String categeory){
		List<Doctor> info=doctorservice.getcategory(categeory);
		return info;
	}
	}
