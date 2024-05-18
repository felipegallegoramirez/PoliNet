const admin = require("firebase-admin");
const serviceAccount = JSON.parse(Buffer.from(process.env.CREDENTIAL_FIREBASE, 'base64').toString('ascii'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://images-polinet.appspot.com"
  });
  
  const bucket = admin.storage().bucket();
  
  async function uploadImage(name) {
    try {
        const [ file ] = await bucket.upload(`${__dirname}/../storage/${name}`, {
        destination: `images/${name}`,
      });
      await file.makePublic();
      console.log("Imagen subida exitosamente.");
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  }

module.exports = { uploadImage }