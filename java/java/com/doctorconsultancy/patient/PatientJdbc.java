package com.doctorconsultancy.patient;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class PatientJdbc {
	
	@Autowired
	JdbcTemplate template2;
	
	public List<Patient> PatientList(){
		List<Patient> patients = new ArrayList<>();
		return template2.query("select * from doctorconsultancy.patient", new ResultSetExtractor<List<Patient>>() {

			@Override
			public List<Patient> extractData(ResultSet rs) throws SQLException, DataAccessException {
				while(rs.next()) {
					Patient pat = new Patient();
					pat.setPatient_id(rs.getInt("patient_id"));
					pat.setUsername(rs.getString("patient_name"));
					pat.setContact(rs.getLong("contact"));
					pat.setEmail_id(rs.getString("email_id"));
					pat.setPassword(rs.getString("password"));
					patients.add(pat);
				}
				return patients;
			}
			
		});
		
		
	}

	public boolean saveData(Patient patient) {
		
		boolean status = false;
		
		String sql = "insert into doctorconsultancy.patient(patient_name,contact,email_id,password)"
				+"values("
				+"'"+patient.getUsername()+"',"
				+patient.getContact()
				+",'"+patient.getEmail_id()+"',"
				+"'"+patient.getPassword()+"'"
				+")";
		
		try {
			template2.execute(sql);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return status;
	}

}
