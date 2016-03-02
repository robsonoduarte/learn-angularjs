package br.com.mystudies.learn.angularjs;

import static java.util.Arrays.asList;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;

import com.google.gson.Gson;


public class Lecture23Test {




	private Lecture23 lecture23 = new Lecture23();





	@Test
	public void shouldSendTheRules() {

		String rules = lecture23.rules();

		assertThat(json(asList(
			new Rule("Must be 5 characters"),
			new Rule("Must not be used elsewhere"),
			new Rule("Must be coll"),
			new Rule("new Rule"))),
			equalTo(rules));
	}










	@Test
	public void shouldAddTheNewRuleAndReturnTheRules() {

		String rules = lecture23.addRule("{'ruleName':'new Rule'}");

		assertThat(json(asList(
				new Rule("Must be 5 characters"),
				new Rule("Must not be used elsewhere"),
				new Rule("Must be coll"),
				new Rule("new Rule"))),
				equalTo(rules));

	}
























	private String json(List<Rule> rules) {
		return new Gson().toJson(rules);
	}





}
