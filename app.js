const express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/download', async (req, res) => {
  const videoURL = req.query.url;

  try {
    const info = await ytdl.getInfo(videoURL);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

    res.header('Content-Disposition', 'attachment; filename="audio.wav"');
    ytdl(videoURL, { format: format }).pipe(res);
  } catch (error) {
    console.error('Error al obtener información del video:', error);
    res.status(500).send('Error al obtener información del video');
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
