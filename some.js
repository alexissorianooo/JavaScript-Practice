// function Vehicle() { } 
// OR
// var Vehicle = function() { }

// var car = new Vehicle();
// var bus = new Vehicle();
// Public Property and Public Method in Javascript:
// public properties are declared with this.variableName and may be read/written from outside the object. 
// function Vehicle (name) {
//         // Public
//         this.name = name;
// }
// Public properties and public methods can also be define using Prototype
// Classname.prototype.variablename = something;
// These are accessible within the class name using this keyword (for ex. this.vaiablename) or can be access outside the class using object instance.(objOfClassname.variablename)
// Classname.prototype.methodName = function(){...} 
// For Example:
// Vehicle.prototype.setColor = function() {
// }
// Private Properties and Private Functions:
// Var keyword is used inside the Object to declare a private property.
// For Example:
// function Vehicle (name) {
//         // Private
//         var name = name;
// }
// Private functions also defined using var keyword inside the Object.
// For Example:
// function Vehicle (name) {
// 	var getName = function() {

// 		//private method definition
// 	}
// }

// Privileged Methods:
// Privileged methods can be defined inside an object using this keyword.
// For example:
// function Vehicle (name) {
//         this.name = name;
// 	this.getName = function() {
// 		return this.name;
// 	}
// }

// How to access Private variables from outside:
// Since private variables cannot be access directly from outside the class, so to access private variables from outside the class  privileged method's help needs to be required. Inside the class privileged method will access the private vairable and return that variable which can be called outside the class.
// For Example:
// function Vehicle() {
//         var name = 'ford';
// 	//Methods to access private variables (methods needs to be privileged which needs to be define using this keyword
// 	this.getName = function() {
// 	    return name;	
// 	};
// }

// var v = new Vehicle();
// alert(v.getName()); //will alert 'ford'