package br.com.mystudies.learn.angularjs;

import static java.util.Arrays.asList;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import com.google.gson.Gson;

@Path("/lecture23")
public class Lecture23 {




	@GET
	public String data() {
		return json();
	}





































	private String json() {
		return new Gson().toJson(rules());
	}




	private List<Rule> rules() {
		return asList(
					new Rule(1, "Must be 5 characters"),
					new Rule(1, "Must not be used elsewhere"),
					new Rule(1, "Must be coll")
				);
	}



}
