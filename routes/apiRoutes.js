const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = path.join(__dirname,'../db/db.json')

router.get('/api/notes', (req, res) =>{

  fs.readFile(db, 'utf8',(err, data) =>{
    if (err) {
        console.log(err)
    } 
    const notes = JSON.parse(data);
    res.json(notes)
});   
})

router.post('/api/notes',(req, res) => {
  fs.readFile(db, 'utf8',(err, data) =>{
    if (err) {
      console.log(err)
    } 
    const notes = JSON.parse(data);
    const createNote = req.body
    createNote.id = uuidv4();
    notes.push(req.body);
    
    fs.writeFile(db, JSON.stringify(notes), (err) => {
      if (err) throw err;
        console.log('The file has been saved!');
        res.send('file saved')
  });
    });
  
})

router.delete('/api/notes/:id', (req, res)=> {
noteDel = req.params.id
fs.readFile(db, 'utf8',(err, data) =>{
  if (err) {
    console.log(err)
  }
const notes = JSON.parse(data);
res.json(notes)

for (let i =0; i < notes.length; i++) {
  if (notes[i].id === noteDel){
    notes.splice([i],1)
    console.log(notes)
    fs.writeFile(db, JSON.stringify(notes), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      res.end()
    });
  }
}

})

})
module.exports = router;