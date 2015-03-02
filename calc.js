var globalInput = "";

function c(val) {
	globalInput = val;
	document.getElementById("d").value = globalInput;
}
function v(val) {
	globalInput += val;
	document.getElementById("d").value = globalInput.substring(
			globalInput.length - 17, globalInput.length);
}
function e() {
	var input = globalInput;
	var operand = [];
	var operator = [];
	var operatorI = 0, operandI = 0;
	var temp = "";
	if (input.indexOf('e') >= 0) {
		temp = input.substring(0, input.indexOf('e') + 2);
		input = input.substring(input.indexOf('e') + 2, input.length);
		for (var i = 0; i < input.length; i++) {
			if (input.charAt(i) == '+' || input.charAt(i) == '-'
					|| input.charAt(i) == '*' || input.charAt(i) == '/') {
				if (i == (input.length - 1)) {
					throw "Wrong Input";
				}
				if (input.charAt(i + 1) == '+' || input.charAt(i + 1) == '-'
						|| input.charAt(i + 1) == '*'
						|| input.charAt(i + 1) == '/') {
					throw "Wrong Input";
				}
				operator[operatorI] = input.charAt(i);
				operatorI++;
				if (temp != "") {
					operand[operandI] = temp;
					operandI++;
					temp = "";
					input = input.substring(i + 1, input.length)
					break;
				}
			} else {
				temp = temp.concat(input.charAt(i));
			}
		}
	}
	try {
		for (var i = 0; i < input.length; i++) {
			if (i == 0 && (input.charAt(i) == '*' || input.charAt(i) == '/')) {
				throw "Wrong Input";
			} else if (i == 0
					&& (input.charAt(i) == '+' || input.charAt(i) == '-')) {
				if (input.charAt(i + 1) == '+' || input.charAt(i + 1) == '-'
						|| input.charAt(i + 1) == '*'
						|| input.charAt(i + 1) == '/') {
					throw "Wrong Input";
				}
				operand[operandI] = '0';
				operandI++;
				operator[operatorI] = input.charAt(i);
				operatorI++;
			} else if (input.charAt(i) == '+' || input.charAt(i) == '-'
					|| input.charAt(i) == '*' || input.charAt(i) == '/') {
				if (i == (input.length - 1)) {
					throw "Wrong Input";
				}
				if (input.charAt(i + 1) == '+' || input.charAt(i + 1) == '-'
						|| input.charAt(i + 1) == '*'
						|| input.charAt(i + 1) == '/') {
					throw "Wrong Input";
				}
				operator[operatorI] = input.charAt(i);
				operatorI++;
				if (temp != "") {
					operand[operandI] = temp;
					operandI++;
					temp = "";
				}
			} else {
				temp = temp.concat(input.charAt(i));
			}
			if (i == (input.length - 1)) {
				operand[operandI] = temp;
			}
		}
		var j = 0;
		var memoryValue = 0;
		for (var i = 0; i < operand.length; i++) {
			if (i == 0) {

				if (operator[j] == '+') {
					memoryValue = Number(operand[i]) + Number(operand[++i]);
				} else if (operator[j] == '-') {
					memoryValue = Number(operand[i]) - Number(operand[++i]);
				} else if (operator[j] == '*') {
					memoryValue = Number(operand[i]) * Number(operand[++i]);
				} else if (operator[j] == '/') {
					memoryValue = Number(operand[i]) / Number(operand[++i]);
				}
				j++;
			} else {
				if (operator[j] == '+') {
					memoryValue = memoryValue + Number(operand[i]);
				} else if (operator[j] == '-') {
					memoryValue = memoryValue - Number(operand[i]);
				} else if (operator[j] == '*') {
					memoryValue = memoryValue * Number(operand[i]);
				} else if (operator[j] == '/') {
					memoryValue = memoryValue / Number(operand[i]);
				}
				j++;
			}
		}
		c(memoryValue.toString());
	} catch (e) {
		c(e);
	}

}
