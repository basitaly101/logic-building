import express from 'express';

const app = express();
app.use(express.json());
const notes = [];

// creating api to add a note
app.post('/notes' , (req, res) => {
   const {title , description } = req.body;
   
//    validation 
if(!title || !description){
res.send(400).json({error: "Title and Description are required"})
}
const result = {title , description}

notes.push(result);
res.status(201).json({ 
        message: 'Note added successfully', 
        note: result
    });

});

// creating api to get all notes
app.get('/notes' , (req, res) => {
    res.json(notes);
    res.status(200).json({message: 'Notes retrieved successfully'});
});
// creating api for delete notes 
app.delete('/notes/:index' , (req, res) => {
const index = parseInt(req.params.index)

if(isNaN(index || index < 0 || index >= notes.length)){
return res.status(404).json({ error: "Note not found at this index" });
}
const noteDeleted = notes.splice(index, 1)
res.status(200).json({ 
        message: 'Note deleted successfully',
        deleted: noteDeleted[0]
    });


});

// creating api for update notes
app.patch('/notes/:index' , (req, res) => {
    const index = req.params.index;
    notes[index] = req.body;
    res.status(200).json({message: 'Note updated successfully'});
});

export default app;