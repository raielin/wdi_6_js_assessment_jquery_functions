$(document).ready(function(){

/* QUESTION 5 - MY TRY
  var input = $('#q-5-input').val();
  if (input === "winning") {
    console.log("test message");
    $('#q-5-input').closest('h2').addClass('blue');
  }
  $('#q-5-input').val('');
*/

 /* QUESTION 5 - ANNA'S IMPROVED
  var turnBlue = function(event) {
    if ($(this).val() === 'winning') {
      $(this).parent().find('h2').css('color', 'blue');
    }
  }

  $(document).ready(function() {
    $('#q-5-input').keypress(turnBlue);
    $('#q-5-input').val('');
  });
*/

/* QUESTION 6 - MY TRY
  String.prototype.reverse = function() {
    var chars = [];
    for (i = this.length - 1; i >= 0; i--) {
      chars.push(this[i]);
    };
    return chars.join('');
  };

  $('#question-6 > h2').html('Question 6'.reverse());
*/

// QUESTION 6 - MY TRY IMPROVED
  String.prototype.reverse = function() {
    var chars = [];
    for (i = this.length - 1; i >= 0; i--) {
      chars.push(this[i]);
    };
    return chars.join('');
  };

  var h2 = $('#question-6 h2').val();
  $('#question-6 h2').html(h2.reverse());

// QUESTION 6 - GIVEN ANSWER
  String.prototype.reverse = function() {
    var length = this.length;
    var revString = '';
    for (var i = length -1; i >=0; i--) {
      revString += this.charAt(i);
    }
    return revString;
  };

  var h2 = $('#question-6 h2').val();
  $('#question-6 h2').html(h2.reverse());

});
