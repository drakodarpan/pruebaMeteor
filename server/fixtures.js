if( Posts.find().count() === 0 ){
    Posts.insert(
        {
            title: 'Introducing Telescope',
            url : 'http://www.google.com.mx'
        }
    );
    
    Posts.insert({
        title: 'Introducing MT',
        url: 'http://www.yahoo.com.mx'
    });
    
    Posts.insert({
        title: 'MT is the best',
        url: 'http://www.gmail.com'
    });
}