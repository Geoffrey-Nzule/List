
function List() {
 // enclosing the elements with braces to make them objects
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

// Used index as the key,this prevents React from issuing warnings about missing key props when rendering list

// if you want to sort the list you can use this function

    //fruits.sort((a, b) => a.name.localeCompare(b.name));// Alphabetical order

    //fruits.sort((a, b) => b.name.localeCompare(a.name));//reverse alphabetical order

    //fruits.sort((a, b) => a.calories - b.calories);// sorting by calories numeric order
    fruits.sort((a, b) => b.calories - a.calories);// reverse numeric order

    const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);


    return(<ol>{listItems}</ol>);

  
}

export default List
