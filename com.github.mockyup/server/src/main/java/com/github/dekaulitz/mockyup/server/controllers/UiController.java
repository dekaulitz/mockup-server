package com.github.dekaulitz.mockyup.server.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Controller
@EnableWebMvc
public class UiController {

  /**
   * entry point for ui
   *
   * @return String
   */
  @GetMapping(value = "/")
  public String loadUi() {
    return "index";
  }

  /**
   * history path handler for handling spa
   **/
  @RequestMapping(value = "/**/{[path:[^\\.]*}")
  public String redirect() {
    // Forward to home page so that route is preserved.
    return "forward:/";
  }
}
