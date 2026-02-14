const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: "private_txjik0r/f5fqDHh1dR7RCwefpOg=",
  publicKey: "public_+UqfdyTMln2Wa/k6Zws7fJoJ51A=",
  urlEndpoint: "https://ik.imagekit.io/sbafdiwda",
});

async function createPostController(req, res) {
  try {
    console.log(req.body, req.file);

    // ✅ file check
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    // ✅ upload
    const uploadedFile = await imagekit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: Date.now() + "-" + req.file.originalname,
      folder: "/posts", // optional but good practice
    });

    // ✅ response
    return res.status(200).json({
      message: "Post created",
      imageUrl: uploadedFile.url,
      fileId: uploadedFile.fileId,
    });

  } catch (error) {
    console.log("Upload Error:", error);
    return res.status(500).json({
      message: "Upload failed",
    });
  }
}

module.exports = {
  createPostController,
};
