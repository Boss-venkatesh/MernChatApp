const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://mernchat:xGJcNoIeQXdJMQ1Q@cluster0.swzk6nw.mongodb.net/chatMernapp?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
