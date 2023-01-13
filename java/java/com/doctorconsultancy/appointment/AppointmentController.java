package com.doctorconsultancy.appointment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class AppointmentController {
	
	@Autowired
	AppointmentJdbc appointmentjdbc;
	
	@GetMapping("/appointment")
	public List<Appointment> appointment(){
		List<Appointment> appList = appointmentjdbc.AppointList();
		return appList;
		
	}
	
	@PostMapping(value = "/appointment", consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	void  PostAppointment(@RequestBody Appointment appointment) {
		
		appointmentjdbc.saveDataAppointment(appointment);
		
	}

}
