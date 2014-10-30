// Do NOT modify the HTML document manually!!!!
$(document).ready(function(){

// Question 1 -- CORRECT
// Use jQuery to add two more elements to the the UL in the 'question-1' div

  // Checked jQuery documentation for syntax to select nested elements.
  $('#question-1 > ul').append('<li>' + 'bird' + '</li>');
  $('#question-1 > ul').append('<li>' + 'hamster' + '</li>');

      // Another option
      var addItems = function(text) {
        $('<li>').html(text).appendTo('#question-1 ul');
      };

      addItems('bird');
      addItems('hamster');

// Question 2 -- CORRECT
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked',
// which will display an alert with the text of "Question 2 Success".

  var alertClicked = function() {
    alert("Question 2 Success");
    $(this);
  };

  $('#question-2 > p').on('click', alertClicked);

      // Could also do:
      $('#question-2 p').click(alertClicked);

// Question 3 --- WRONG
// Why won't the following code make clicking on anything the 'question-3' div
// invoke the alertClicked method?

  $('#question-3').on('click', alertClicked);

  // Because the div element itself has no direct content. Would need to
  // select the h2 tag within the div in order for it to work. (I think?)

      // CORRECTION: You need to wrap event handlers in a $(document).ready (or window.onload)
      // for them to bind properly, as they don't exist yet otherwise!

// Question 4 --- HALF?
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it

  var fade = function() {
    $(this).hide('slow');
  }

  var appear = function() {
    $(this).show('slow');
  }

  // Looked up what the exact event name was that I needed.
  // Still can't get it to stay hidden until mouse moves away from it to fade back in
  // $('#question-4 > h2').hover(fade);
  $('#question-4 > h2').mouseover(fade);
  $('#question-4 > h2').mouseout(appear);

      // One option:
      $('#question-4').hover(function() {
        $(this).animate({opacity: 0});
        }, function() {
        $(this).animate({opacity: 1});
      });

      // Option two:
      $('#question-4').hover(function() {
        // Stops bubbling
        $(this.stop(true, true).fadeOut();
        }, function() {
        $(this).stop(true, true).fadeIn();
      });

// Question 5 --- PARTIAL?
// Make question 5's h2 turn blue when someone types 'winning'
// in its input element and hits enter

  // Used class notes from jQuery demo
  // Searched for how to select an element with no ID name
  // Can't get the input value to be evaluated
  var input = $('#q-5-input').val();
  if (input === "winning") {
    console.log("test message");
    $('#q-5-input').closest('h2').addClass('blue');
  }
  $('#q-5-input').val('');

      // Option one:
      $('#q-5-input').on('change', function() {
        if ($(this).val() === 'winning') {
          $(this).prev().css('color', 'blue');
        }
      });

      // Could also do sibling(). Or parent() to get
      // you div and then .find().

      // Option two:
        var turnBlue = function(event) {
          if ($(this).val() === 'winning') {
            $(this).parent().find('h2').css('color', 'blue');
          }
        }

        $(document).ready(function() {
          $('#q-5-input').keypress(turnBlue);
          $('#q-5-input').val('');
        });

// Question 6 -- HALF?
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div

  String.prototype.reverse = function() {
    var chars = [];
    for (i = this.length - 1; i >= 0; i--) {
      chars.push(this[i]);
    };
    return chars.join('');
  };

  $('#question-6 > h2').html('Question 6'.reverse());

      // CORRECTION for calling function:

        var h2 = $('#question-6 h2').val();
        $('#question-6 h2').html(h2.reverse());



//   OUT OF TIME

// Question 7
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked

    // GIVEN ANSWER
    var highlightHeaders = function() {
      $('h2').addClass('highlight');
    };

// Question 8
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

    // GIVEN ANSWER
    var Cat - function(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    };

// Question 9
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

    // GIVEN ANSWER
    Cat.prototype.description = function() {
      return this.name + " is a " + this.age + " year-old" + this.color + 'cat';
    }

// Question 10
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

  var items = [
    {name: 'iPhone 5c', price: 99.99},
    {name: 'iPhone 5s', price: 149.99},
    {name: 'iPhone 6', price: 249.99},
    {name: 'iPhone 6 plus', price: 399.99}
  ];

    // GIVEN ANSWER
    items
      .map(function(item) {
        return item.price;
    });
      .reduce(function(a, b) {
        return a + b;
    });

});


