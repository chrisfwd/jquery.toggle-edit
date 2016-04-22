# jquery.toggle-edit
jQuery plugin to toggle static/editable content

## Setup

add jQuery and jquery.toggle-edit.js to your project


### HTML Structure

Wrap each input/static group in a container with te-group class

Use te-group-readonly for default readonly state 

Use te-group-editable for default editable state

    <div class="te-group te-group-readonly">...</div>

Add readonly element with .te-value-readonly class

    <p class="form-control-static te-value-readonly">Chris</p>
  
Add editable element with .te-value-editable class

    <input type="text" class="form-control te-value-editable" value="Chris" />


## Usage

The following applies toggle-edit to each .te-group element in the form, changes the fields to editable, and sets delay to 150ms in order to animate each transition one at a time.

    $('form').toggleEdit({
        editable: true,
        delay: 150
    });
  

### toggle-edit is chainable

    $('.container').toggleEdit().show();
  
 
## Options & Defaults

- valueGroupReadonlyClass: "te-group-readonly"
- valueGroupEditableClass: "te-group-editable"
- delay: 150, <- set to 0 if you want all to flip at the same time
- editable: true

