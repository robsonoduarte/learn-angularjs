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
		rules.add(new Rule("Must be 5 characters"));
		rules.add(new Rule("Must not be used elsewhere"));
		rules.add(new Rule("Must be coll"));
	}




	@GET
	public String rules() {
		return json();
	}





	@POST
	public String addRule(String json) {
		Rule rule = new Gson().fromJson(json, Rule.class);
		rules.add(rule);
		return json();
	}

































	private String json() {
		return new Gson().toJson(rules);
	}













































}
