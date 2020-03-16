# Forms - HTML

## Objectives
1. Demonstrate writing a form to create a new resource item in HTML
1. Demonstrate how to use that information on the backend to create a new resource.








### Lesson
#### Setup
1. Clone down the starter API code here: https://github.com/KathleenScriver/cars_backend_student
1. run `bundle` and `rails db:{create,migrate,seed}
1. Use Postman to verify that your API is working










#### Forms
Take a few minutes to research forms in html on your own. How do we write these in html?






Let's create a form together to make a new car!

In a new directory, create an index.html file and start your html skeleton document.

A bunch of input tags wrapped in a form tag, that's all a form is!

Add some label tags if you'd like. 




Most important (and necessary) attribute of the input tag is... ???





`name`!  The name attribute becomes the key in our params hash on the backend.

Then what becomes the value of that key?



What if we want a dropdown item for someone to choose a preset selection of ratings? Don't want user to put in just any value! 
What is our html tag for a dropdown?





Now, how do we get that information over to our backend?  Having the html is just half the battle.






How do we tell our browser where and how to send the form information?






Does it work? Are you getting a CORS error?  How can we fix this?

