function Brainfuck() {
	//initialize memory tape
	var TAPE_SIZE = 30000
	var tape = new Array(TAPE_SIZE);
	var current_pointer = 0;
	for (var i=0;i<TAPE_SIZE;i++){
		tape[i] = 0;
	}

	return {
		run: function(str){

			for (var i=0;i<str.length;i++) {
				if (/[\>\<\+\-\.\,\[\]]/.test(str[i])) {
					//if it's a BF character
					this[ str[i] ]();
				}
				else {
					//skip to the next character
				}
			}
		},

		'>': function() {
			current_pointer++;
		},

		'<': function() {
			current_pointer--;
		},

		'+': function() {
			tape[current_pointer] = tape[current_pointer] + 1;
		},

		'-': function() {
			tape[current_pointer] = tape[current_pointer] - 1;
		},

		'.': function() {
			console.log(tape[current_pointer]);

		},
		
		',': function() {
		},

		'[': function() {

		},
		
		']': function() {

		}
		
	}
}