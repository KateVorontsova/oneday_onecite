function loadPage(){
	
	
	// Скрываем всплывающие окна
	
		function cancelPopUp(){
			
			document.getElementById("popup1").style.display = "none";
	}
	cancelPopUp();
	 
	function cancelPopUp2(){
	document.getElementById("popup2").style.display = "none";
	}
	 
	cancelPopUp2();
	
	
	
 // Создание таблицы с книгами
 
	createLibrary();
	
    var tableBodyEl = document.getElementById("tbody-table");
    for (var i = 0; i < Object.keys(bookList).length; i++) {
	var row = tableBodyEl.insertRow();
	var idBook = bookList[i].id;
	var titleBook = bookList[i].title;
	var authorBook = bookList[i].author;
	var yearBook = bookList[i].year;
	var coverBook = bookList[i].cover;
	var attr = "bookEdit("+i+")";
	var del = "bookDelete("+i+")"; 
	
	
	
	row.insertCell(-1).innerHTML = '<span class="idBook">' + idBook + '</span>';
	row.insertCell(-1).innerHTML = '<span class="coverBook">'+'<a href="'+bookList[i].cover+'">' + '<img src="01.jpg">' + '</a>'+'</span>';
	row.insertCell(-1).innerHTML = '<span class="titleBook">' + titleBook + '</span>' + "<br>" + '<span class="authorBook">' + authorBook + '</span>' + "<br>"+'<span class="yearBook">' + yearBook + '</span>';
	row.insertCell(-1).innerHTML = '<button class="PopUpShow" onclick="'+attr+'">' + 'Редактировать' + '</button>' + '<br>' +  '<button class="deleteBook" onclick="'+del+'">' + 'Удалить' + '</button>';
	};
	
	
};	
	
	//Открываем форму редактирования книги
	
	function bookEdit(i){	
		document.getElementById("popup1").style.display = "";
		
		//Заполняем форму редактирования книги
		
		document.updateBook.id1.setAttribute('value', bookList[i].id);
		document.updateBook.title1.setAttribute('value', bookList[i].title);
		document.updateBook.author1.setAttribute('value', bookList[i].author);
		document.updateBook.year1.setAttribute('value', bookList[i].year);
		document.updateBook.cover1.setAttribute('value', bookList[i].cover);
			
	};
	
	//Удаляем книгу из списка книг и из таблицы с книгами
	
	function bookDelete(i){
		document.getElementById("tbody-table").deleteRow(i);
		var id= i;
		deleteBook(id);
	};
	

   	



	
	
	
	
	


	
	
	
	
	

