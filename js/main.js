// Readys function
$(document).ready(function() {
	// variables for storing X and O, turn tracker
	var x = "x"
	var o = "o"
	var turns = 0

	//Spots for variable, holds either X or O
	var spot1 = $('#spot1')
	var spot2 = $('#spot2')
	var spot3 = $('#spot3')
	var spot4 = $('#spot4')
	var spot5 = $('#spot5')
	var spot6 = $('#spot6')
	var spot7 = $('#spot7')
	var spot8 = $('#spot8')
	var spot9 = $('#spot9')

	// Click function for board list item and winning combinations
	$('#board li').on('click', function() {
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
		) {

			// If O wins do this, removes O's and X's, resets board
			alert('Winner: O')
			$('#board li').text('+')
			$('#board li').removeClass('disable')
			$('#board li').removeClass('o')
			$('#board li').removeClass('x')

		//Click function for board list item and winning combinations
		} else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') 
		) {
			
			//If X wins do this, removes X's and O's resets board
			alert('Winner: X')
			$('#board li').text('+')
			$('#board li').removeClass('disable')
			$('#board li').removeClass('o')
			$('#board li').removeClass('x')

		} else if(turns == 9) {

			// If no one wins and all spots are filled
			alert('Tie Game')
			$('#board li').text('+')
			$('#board li').removeClass('disable')
			$('#board li').removeClass('o')
			$('#board li').removeClass('x')
			turns = 0

		// Checks to see if spot is filled, if so do this 
		} else if ($(this).hasClass('disable')) {
			alert('This spot is already filled')

		// Checks to see whoe's turn is it by using even numbers
		} else if(turns%2 == 0) {
			turns++
			$(this).text(o)

			//disables O if turn was taken already
			$(this).addClass('disable o')
			// Checks for winning combinations again
			if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
				spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
				spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
				spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
				spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
				spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
			){

				//If above condition id matched do this
				alert('Winner: O')
				turns = 0
			}
		} else {
			//If above is not true then this will run
			turns++
			$(this).text(x)
			//disables X after turn
			$(this).addClass('disable x')
			// Checks for winning combination
			if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
				spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
				spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
				spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
				spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
				spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
		){

			// Do this if combinations are met
			alert('Winner: X')
			turns = 0
		    }
		}
	})
			// Reset the game when button is clicked
			$('#reset').on('click', function(){
			$('#board li').text('+')
			$('#board li').removeClass('disable')
			$('#board li').removeClass('o')
			$('#board li').removeClass('x')
			turns = 0
	})

})