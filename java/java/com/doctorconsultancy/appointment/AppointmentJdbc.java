package com.doctorconsultancy.appointment;

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
public class AppointmentJdbc {
    
	@Autowired
	JdbcTemplate template;
	
	public List<Appointment> AppointList(){
		List<Appointment> appointment = new ArrayList<>();
		return template.query("select * from doctorconsultancy.appointment", new ResultSetExtractor<List<Appointment>>(){

			@Override
			public List<Appointment> extractData(ResultSet rs) throws SQLException, DataAccessException {
				while(rs.next()) {
					Appointment app = new Appointment();
					app.setName(rs.getString("name"));
					app.setEmail(rs.getString("email"));
					app.setContact(rs.getString("contact"));
					app.setDate_time(rs.getString("date_time"));
					appointment.add(app);
				}
				return appointment;
			}
			
		});
		
	}

	public boolean saveDataAppointment( Appointment appointment) {
		
		boolean status = false;
		
		String sql = "insert into doctorconsultancy.appointment(name, contact, email)"
				+"values("
				+"'"+appointment.getName()+"',"
				+appointment.getContact()+","
				+"'"+appointment.getEmail()+"'"
				+")";
		
		try {
			template.execute(sql);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return status;
		
	}
		
	}

