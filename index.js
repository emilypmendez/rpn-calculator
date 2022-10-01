const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function evaluate() {

		let input =
      rl.question('\nWelcome to the Reverse Polish Notation Calculator program. Please enter your input \n\n'
      + 'Examples of input operations:\n\n\t'
      + '1. 10 4 5 + *\n\t2. 10 4 5 + * 2 +\n\t3. 10 8 *\n'
      + '\nQuit the Program [q] \n'
      + '\nWrite your desired calculation (with spaces included): \n', function(input) {
          calculate(input)
          rl.close();
        });

		let values
		let array = new Array();

    function calculate(input) {
      values = input.split(' '); // split the values with a space
  		for (i in values) { // loop through values
  			if (values[i] != "+" && values[i] != "*" && values[i] != "-" && values[i] != "/") {
  				console.log(`\n${values[i]}`);
          array.push(parseInt(values[i]));
  			} else {
  				var operator = values[i];
  				var val2 = array.pop();
  				var val1 = array.pop();
  				switch (operator) {
  					case "+":
  						array.push(eval("val1 + val2"));
  						break;
  					case "*":
  						array.push(eval("val1 * val2"));
  						break;
  					case "-":
  						array.push(eval("val1 - val2"));
  						break;
  					case "/":
  						array.push(eval("val1 / val2"));
  						break;
            default:
              throw (`Sorry, try again. Can't handle operator: ${operator}`);
              break;
  				}
  			}
  		}

      // check input for empty or null value
      if (input == "" || input == null) {
        process.stdout.write("\nOops... Based on your input, there is nothing to calculate! Try again.\n");
      } else if (input === "q") {
        process.stdout.write("\nThanks for using the RPN calculator. Exiting program now...\n");
        process.exit(1);
      } else {
        process.stdout.write("\nYour RPN calculation is: " + array);
        process.stdout.write("\nFrom your desired calculation: " + input + '\n');
      }

    }

	}

evaluate();
