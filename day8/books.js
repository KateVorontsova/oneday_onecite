



var bookList = {};

 var key = 0;


function Book(item){
	this.id = item.id;
	this.cover = item.cover;
	this.title = item.title;
	this.author = item.author;
	this.year = item.year;
};





// Создание новой книги

function createBook (item){
	
	var book = new Book(item);
	bookList[item.id] = book;
		
	console.log(bookList);	
} 





// Редактирование книги

function bookUpdate(item){
	
	var book = bookList[item.id];
	if(book.cover !== item.cover) {book.cover=item.cover};
	if(book.title !== item.title) {book.title=item.title};
	if(book.author !== item.author) {book.author=item.author};
	if(book.year !== item.year) {book.year=item.year};
	console.log(bookList);	
	console.log(bookList[item.id]);
};


// Удаление книги


function deleteBook(id){
	if(bookList[id]){
		delete bookList[id];
	};
	console.log(bookList);
	
};


// Создание исходного массива книг

function createLibrary (){
	
	bookList[0] = new Book(
	{ id: 0,
      cover: 'ozon-st.cdn.ngenix.net/multimedia/1013279403.jpg',
	  title:'JavaScript and jQuery',
	  author: 'Дэвид Сойер Макфарланд',
	  year: 2016});
	  
	bookList[1] = new Book(
	{
	  id: 1,
      cover: 'https://ozon-st.cdn.ngenix.net/multimedia/1011395255.jpg',
	  title:'Изучаем программирование на JavaScript',
	  author: 'Эрик Фримен, Элизабет Робсон',
	  year: 2017
	});
	bookList[2] = new Book(
	{id: 2,	
      cover: 'https://ozon-st.cdn.ngenix.net/multimedia/1007123068.jpg',
	  title:'Секреты JavaScript ниндзя',
	  author: 'Джон Резиг, Беэр Бибо',
	  year: 2017
	});
	
	bookList[3] = new Book(
	{id: 3,	
      cover: 'https://ozon-st.cdn.ngenix.net/multimedia/1015269939.jpg',
	  title:'ES6 и не только',
	  author: 'Кайл Симпсон',
	  year: 2017
		
	});
	console.log(bookList);
} ;
