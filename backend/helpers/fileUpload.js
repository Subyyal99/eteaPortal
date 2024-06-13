/**
 * including middleware library to help uploading
 */
const multer = require("multer");
/**
 * multer disk storage to help upload file
 */
const fileStorage = multer.diskStorage({
  /**
   * destination of where to upload the file according to conditions
   * @param {*} req the request
   * @param {*} file file to upload 
   * @param {*} cb function to upload
   */
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, "uploads/profilePics/");
    } else if (file.fieldname === "attachment") {
      cb(null, "uploads/taskFiles/");
    }
  },
  /**
   * setting the name of the uploaded file
   * @param {*} req req to upload
   * @param {*} file file to upload
   * @param {*} cb function to upload
   */
  filename: (req, file, cb) => {
    const unixTimestamp = Math.floor(Date.now() / 1000);
    cb(
      null,
      unixTimestamp + "-" + file.originalname.replace(/\s+/g, "")
    );
  },
});
const fileFilter = (req, file, cb) => {
  // if (!file.originalname.match(/\.(png|jpg|jpeg|PNG|JPEG|JPG)$/)) {
  //   return cb(new Error("You can upload only image files!"), false);
  // }
  cb(null, true);
};
/**
 * Documentaion for an Controller Object
 * multer Object is exported to be used in other files
 * @file_upload
 */
module.exports = multer({
  fileFilter,
  storage: fileStorage,
});