import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random) * 10000 +
        "_" +
        file.originalname
    );
  },
});

//export multer middleware
export const patientMulter = multer({ storage }).single("patientphoto");
export const doctorMulter = multer({ storage }).single("doctorphoto");
export const teacherMulter = multer({ storage }).single("teacherphoto");
export const noticeMulter = multer({ storage }).single("noticephoto");
