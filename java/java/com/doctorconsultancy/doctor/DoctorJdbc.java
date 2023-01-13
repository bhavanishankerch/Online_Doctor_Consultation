package com.doctorconsultancy.doctor;

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
public class DoctorJdbc {
	
	@Autowired
	JdbcTemplate template;
	
	public List<Doctor> doctorList(){
		List<Doctor> doctors = new ArrayList<>();
		return template.query("select * from doctorconsultancy.doctor", new ResultSetExtractor<List<Doctor>>() {

			@Override
			public List<Doctor> extractData(ResultSet rs) throws SQLException, DataAccessException {
				while(rs.next()) {
					Doctor doc = new Doctor();
					doc.setId(rs.getInt("id"));
					doc.setName(rs.getString("name"));
					doc.setCategeory(rs.getString("categeory"));
					doc.setMobile_number(rs.getLong("mobile_number"));
					doc.setTimings(rs.getString("timings"));
					doc.setExperience(rs.getString("experience"));
					doc.setFee(rs.getInt("fee"));
					doc.setPassword(rs.getString("password"));
					doc.setAddress(rs.getString("address"));
					doc.setImage(rs.getString("image"));
					doctors.add(doc);
				}
				return doctors;
			}
			
		});
		
	}

	public boolean saveData(Doctor doctor) {
		
		boolean status = false;
		
		String sql = "insert into doctorconsultancy.doctor(name,categeory,mobile_number,timings,experience,fee,password,address)"
				+"values("
				+"'"+doctor.getName()+"',"
				+"'"+doctor.getCategeory()+"',"
				+doctor.getMobile_number()
				+",'"+doctor.getTimings()+"',"
				+"'"+doctor.getExperience()+"',"
				+doctor.getFee()+","
				+"'"+doctor.getPassword()+"',"
				+"'"+doctor.getAddress()+"'"
				+")";
		
		try {
			template.execute(sql);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return status;
		
	}
}
