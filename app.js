const ytdl = require('ytdl-core');

module.exports = async (req, res) => {
  const { url } = req.query;

  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

    res.setHeader('Content-Disposition', 'attachment; filename="audio.wav"');
    ytdl(url, { format: format }).pipe(res);
  } catch (error) {
    console.error('Error al obtener información del video:', error);
    res.status(500).send('Error al obtener información del video');
  }
};

