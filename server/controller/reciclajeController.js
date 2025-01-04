let Song = require('../models/music');

exports.addSong = async(req,res)=>{
    console.log("REQUEST RECIBIDO " +req.body)
    const {name,artist,url_video} = req.body;
    const song = new Song({ name,artist,url_video });
    try{
        await song.save();
        console.log("CANCION GUARDADA " + song)
        res.status(201).json(song);
    }
    catch(error){
        console.error(error);
        res.status(400).json({message: "Error al guardar canción"})
    }
}