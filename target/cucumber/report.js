$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SkyBlueColor.feature");
formatter.feature({
  "line": 2,
  "name": "Sky Blueground Functionality",
  "description": "",
  "id": "sky-blueground-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Bluebackgroundpage"
    }
  ]
});
formatter.before({
  "duration": 2750489801,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "1 User should be able to change the background color to skyblue",
  "description": "",
  "id": "sky-blueground-functionality;1-user-should-be-able-to-change-the-background-color-to-skyblue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set Skyblue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button as \"Set Skyblue Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 510623201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 26
    }
  ],
  "location": "BackgroundStepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 3067039000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 3048867400,
  "status": "passed"
});
formatter.before({
  "duration": 1487470100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "2 User should be able to change the background color to white",
  "description": "",
  "id": "sky-blueground-functionality;2-user-should-be-able-to-change-the-background-color-to-white",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "\"Set SkyWhite Background\" button exixts",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the button as \"Set White Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The backgroundcolor will change to white",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 26
    }
  ],
  "location": "BackgroundStepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_backgroundcolor_will_change_to_white()"
});
formatter.result({
  "status": "skipped"
});
});