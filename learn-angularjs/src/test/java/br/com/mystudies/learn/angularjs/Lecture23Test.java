package br.com.mystudies.learn.angularjs;

import static java.util.Arrays.asList;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

import com.google.gson.Gson;


public class Lecture23Test {




	private Lecture23 lecture23 = new Lecture23();





	@Test
	public void test() {
		String data = lecture23.data();
		assertEquals(json(), data);
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
