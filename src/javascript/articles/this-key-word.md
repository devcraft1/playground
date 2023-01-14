The JavaScript this keyword refers to the object it belongs to. 
It has different values depending on where it is used: In a method, 
this refers to the owner object. Alone, this refers to the global 
object.

**Important Points** 

1.It creates a new object. The type of this object is object.
2.It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
3.It makes the this variable point to the newly created object.
4.It executes the constructor function, using the newly created object whenever this is mentioned.
5.It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
Note: constructor function refers to the function after the new keyword, as in
