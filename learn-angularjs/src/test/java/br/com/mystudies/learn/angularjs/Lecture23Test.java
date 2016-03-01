package br.com.mystudies.learn.angularjs;

import static java.util.Arrays.asList;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

import com.google.gson.Gson;


public class Lecture23Test {




	private Lecture23 lecture23 = new Lecture23();





	@Test
	public void shouldSendTheRules() {
		String rules = lecture23.rules();

		assertEquals(json(asList(
				new Rule(1, "Must be 5 characters"),
				new Rule(1, "Must not be used elsewhere"),
				new Rule(1, "Must be coll"))),
				rules);
	}










	@Test
	public void shouldAddTheNewRuleAndReturnTheRules() {
		String rules = lecture23.addRule("new Rule");

		assertEquals(json(asList(
				new Rule(1, "Must be 5 characters"),
				new Rule(1, "Must not be used elsewhere"),
				new Rule(1, "Must be coll"),
				new Rule(1, "new Rule"))),
				rules);
	}
























	private String json(List<Rule> rules) {
		return new Gson().toJson(rules);
	}





}
