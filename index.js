 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');
 var filter = document.getElementById('filter');

 // FORM SUBMIT EVENT
 form.addEventListener('submit', addItem);
 // ADDING EVENTLISTENER (DELETIING OF ITEMLIST)TO ITEMLIST (UL)
 itemList.addEventListener('click', removeItem);
 //ADDING EVENTLISTENER () TO FILTER
 filter.addEventListener('keyup', filterItems);

 // ADD ITEMS
 function addItem(e){
 	e.preventDefault();

 	//GETTING INPUT ELEMENT//
 	var newItem = document.getElementById('item').value;

 	//CREATING NEW LI ELEMENT//
 	var li = document.createElement('li');

 	//ADDING CLASS NAME //
 	li.className = 'list-group-item';

 	// ADDING TEXT NODE VIA INPUT VALUE //
 	li.appendChild(document.createTextNode(newItem));

	// ADDING LI TO LIST (UL) //
 	itemList.appendChild(li);

 	//CREATING DELETE BUTTON//
 	var deletebtn = document.createElement('button');

 	//ADDING CLASSES TO DELETEBTN //
 	deletebtn.className = "btn btn-danger btn-sm float-right delete";

 	// APPENDING TEXT NODE TO DELETEBTN //
 	deletebtn.appendChild(document.createTextNode('X'));

 	//APPENDING DELETEBTN TO LI //
 	li.appendChild(deletebtn);
 }

 // REMOVE ITEM //
 function removeItem (e){
 	if(e.target.classList.contains('delete')){
 		if(confirm('Are you sure')){
 			var li = e.target.parentElement;
 			itemList.removeChild(li);

 		}
 	}
 }

 // FILTER ITEM //
 function filterItems(e){
 	// CONVERTING TEXT TO LOWERCASE //

 	var text = e.target.value.toLowerCase();

 	//GETTING LIST //
 	var items = itemList.getElementsByTagName('li');
 	Array.from(items).forEach(function(item){

 		var itemName = item.firstChild.textContent;
 		if (itemName.toLowerCase().indexOf(text)!= -1){
 			item.style.display = 'block';
 		}
 		else{
 			item.style.display = 'none' ;
 		}
 	})	
 }