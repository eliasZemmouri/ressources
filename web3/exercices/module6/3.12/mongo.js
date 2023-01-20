const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
  })
let url;
const Contact = new mongoose.model('Contact',contactSchema)

if(process.argv.length >= 3){
    url = `mongodb+srv://daniel:${process.argv[2]}@cluster0.cp6pwdg.mongodb.net/phoneBook?retryWrites=true&w=majority`
}

if (process.argv.length == 3) {
    show();
}else if(process.argv.length == 5){
    add(process.argv[3],process.argv[4]);
    
}else{
    console.log("vos informations ne sont pas correct");
}



function add  (name,number){
   console.log("add methode");
   console.log(url);
    mongoose
    .connect(url)
  .then((result) => {
    console.log('connected')

    const contact = new Contact({
      name: name,
      number: number,
    })

    return contact.save()
  })
  .then(() => {
    console.log(`added ${process.argv[3]} number ${process.argv[4] }to phonebook`)
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))

}

function show (){
    mongoose
  .connect(url)
  .then((result) => {
    console.log('phonebook :')

    Contact.find({}).then(result => {
        result.forEach(note => {
          console.log(note.name," ",note.number);
        })
        mongoose.connection.close()
      })
  })

}