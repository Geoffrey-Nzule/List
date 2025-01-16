
function List() {
 
    const fruits = ["apple", "orange","banana","coconut", "pineapple"];

// Used index as the key,this prevents React from issuing warnings about missing key props when rendering list

// if you want to sort the list you can use this function

    //fruits.sort()
    const listItems = fruits.map((fruit, index) => <li key={index}>{ fruit }</li>);


    return(<ol>{listItems}</ol>);

  
}

export default List
