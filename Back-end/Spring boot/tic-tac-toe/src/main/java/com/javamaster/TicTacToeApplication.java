package src.main.java.com.javamaster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
@SpringBootApplication
public class TicTacToeApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicTacToeApplication.class, args);
	}

	@GetMapping("/greet")
	public String greet(){
		return "hello";
	}
}