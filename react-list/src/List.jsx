
function List() {
 // enclosing the elements with braces to make them objects
    const fruits = [{name: "apple", calories: 95}, 
                    {name: "orange", calories: 45},
                    {name: "banana", calories: 105},
                    {name: "coconut", calories: 159}, 
                    {name: "pineapple", calories: 37}];

// Used index as the key,this prevents React from issuing warnings about missing key props when rendering list

// if you want to sort the list you can use this function

    //fruits.sort()
    const listItems = fruits.map((fruit) => <li key={fruit.name}>{fruit.name}</li>);


    return(<ol>{listItems}</ol>);

  
}

export default List
