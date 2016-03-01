package br.com.mystudies.learn.angularjs;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import com.google.gson.Gson;

@Path("/lecture23")
public class Lecture23 {





	private static List<Rule> rules;



	static {
		rules = new ArrayList<>();
		rules.add(new Rule(1, "Must be 5 characters"));
		rules.add(new Rule(1, "Must not be used elsewhere"));
		rules.add(new Rule(1, "Must be coll"));
	}




	@GET
	public String rules() {
		return json();
	}





	@POST
	public String addRule(String ruleName) {
		rules.add(new Rule(1, ruleName));
		return json();
	}

































	private String json() {
		return new Gson().toJson(rules);
	}













































}
