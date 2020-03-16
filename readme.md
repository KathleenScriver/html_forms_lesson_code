# HTML Forms

Whole section on MDN for forms, just google MDN forms.

<br/>

Mostly we will only be using labels and inputs.

There are tons and tons of different `types` of inputs (password, radio button, range,
  search, submit, button, etc.) Lots of these specific types come with validation
  built in!

<br/>


Forms are wrapped in <form> tags and then have one or more inputs including a submit.

**2 attributes in form tag we need**
1. method.
  You get GET or POST, but about 100% of the time you're looking at POST.
1. action.
  When this form is submitted, where do I send the data.
  What's the URL I should be posting to?

<br/>

**Attributes of our input tags and labels**

The `for` attribute in labels match up with the `id` attribute of the input (not the name even though they are usually the same value). Allows you to click on the label and cursor will focus on that input field.

The `value` attribute of an input would be a prefilled value that shows in that input field on the rendered webpage (as opposed to the placeholder which shows something grayed out and goes away when user starts typing)

The `name` attribute of the input creates key:value pairs with the value of the name attribute and the user input.
For example here, the name of `username` would come across like
`<input name="username" />` <-- in the form

And in the http request, accessed via params in Rails controllers:

```
{
  username: "Whatever user puts in",
  color: "#fe3722"
}
```

Conventions, remember, in html and css, we use kabob-case. camelCase is for JavaScript.

Random side-note:
Dropdowns are not made with `<input>`, they are made with `<select>` tags with `<options>`. Select tag has a name attribute. Options will have a value attribute. The name and value then become the key:value pair that is sent across for that submit.
