$(document).ready(function() { //The code only run when the DOM is ready.  This is detected by jQuery//
  colorCell(); //Select color input//
  $('#pixelCanvas').submit(function(event) { //The function executes every time that the event is triggered//
    event.preventDefault(); //The event happens before the actual submission, so we cancel the submission calling event.preventDefault()//
    
   
    $("#pixelCanvas").empty(); //removes all child nodes and content from the selected elements.//
  });


  function colorCell() {
    $('#pixelCanvas').click(function(e) { //evenHandler clik//
      if (e.target.nodeName == 'TD') { //Selects a cell//
        const colorSelected = $('#colorPicker').val();
        $(e.target).css("background", colorSelected); //Colors the cell with the selected color//
      }
    })
  }
});
