# jquery.toggle-edit
jQuery plugin to toggle static/editable content

## Setup

add jQuery and jquery.toggle-edit.js to your project


## HTML Structure

  <!--
    wrap each input/static group in a container with te-group class
    use te-group-readonly for default readonly state 
    use te-group-editable for default editable state
  -->
  <div class="te-group te-group-readonly">

    <!-- readonly value with .te-value-readonly class -->
    <p class="form-control-static te-value-readonly">Chris</p>
  
    <!-- editable value with .te-value-editable class -->
    <input type="text" class="form-control te-value-editable" value="Chris" />
  
  </div>

## Usage

  $('.container').toggleEdit();
  
  
### toggle-edit is chainable

  $('.container').toggleEdit().show();
