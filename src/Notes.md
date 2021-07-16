Lower case elements are html built in elements
Uppercase starting letter named elements are custom elements

### Props
As HTML elements can have attribute, same way with react our custom components can also have attributes. This concept is called Props instead of attributes.
Props stands for property.

React will pass the attributes from App to custom component files as 1 parameter which will be the object which holds all the received attributes as properties, hence the name props is used for whole concept.

In this props objct we get key value pairs which is passed in by react automatically

# toLocaleString() method:
this method will help you output the date in human readable formats.
In this the 1st argument is the language and 2nd is the object where you configur how specifically that date should be formatted

# Composition: 
Building theuser interface from smaller buidling blocks is called composition

# children:
children is a reserved keyword. Value of this special children prop will always be the content between the opening and the closing tags of your custom component.
<Card>Evrything inside this is the value of children prop</Card>

All the built-in HTML tags supports class name for adding CSS classes but 

# Wrapper Component: 
Here Card.js has become a wrapper component. Wrapper components provide default structure to display child component. Useful for repeated CSS code, etc.
This helps to **Extract code duplication** of both CSS and HTML.

**JSX code is not supported by the browser.**

# Don't import react in every component
because in modern react the JSX code in APP.js is just a syntatic sugar but actually it is transformed into methods called on this React object that's why we needed to import react in past.

# createElement()
While using this we create one element that can have any number of child elements and that iswhy in modern react we return only one root JSX element.

# on Events:
These are props. React exposes all these default events as props which start with on.

# Why States?
React never repeats its flow. It simply goes from index.js --> App.js --> so on to all components used when the application is initally rendered once, but what if we want to update something on the screen then State comes to use.

# React Hooks
They start with 'use'
These are only called inside of the component function
They should not be called in nested functions or outside component function

By calling this state update funtion setTitle() the component function is getting called again, getting executed again when the **state changes** thus re evaluates the function again and thus then reevaluate JSX code again

## onChange 
It can b used foe all types inputs lik dropdown also, but onInput doesn't so onChange can be used for all types of input
When we listen to change event for an input, if we read value of that input element, it'll ways be a string.

Even if we store a number it will be number as a string
and same for date

## Multiple states update
When update depends on previous state then use function state to ensure that you always get the latest state snapshot to operate on, whenever update depends on previous state

example: setUserInput((prevState) => {
    return {...prevState, enterdTitle: event.target.value};
});