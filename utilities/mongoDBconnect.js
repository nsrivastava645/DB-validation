(function(){

	var aFunction = function(){
	  const mongoose = require('mongoose');

    mongoose.connect('mongodb+srv://dbUser:dbPassword@cluster0.fhz1z.mongodb.net/farmingAppKhetiDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));



    db.once('open', function(){
       console.log('Connected to database :: MongoDB');
    });
		return db; //this value will replace the function variable
	};

	return aFunction;
})();