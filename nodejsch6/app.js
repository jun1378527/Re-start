const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const indexRouter = require("./routes"); //routes 폴더의 index
const userRouter = require("./routes/user"); //routes 폴더의 user.js

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/", indexRouter);
app.use("/user", userRouter);

// 쿠키 파싱 미들웨어에 비밀 키 추가
app.use(cookieParser(process.env.COOKIE_SECRET || "default_secret_key"));

app.get("/cookie_set", (req, res) => {
  res.cookie("username", "june2it", {
    expires: new Date(Date.now() + 30000),
    httpOnly: true,
    secure: true, // 로컬에서 secure 쿠키가 작동하는지 확인
    signed: true,
  });
  res.send("쿠키를 세팅했음");
});

// 세션 설정
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: { httpOnly: true, secure: false },
    name: "session-cookie",
  })
);

// multer 설정
try {
  fs.readdirSync("uploads");
} catch (err) {
  fs.mkdirSync("uploads"); // upload받을 폴더가 없을 시 서버에 폴더 생성
}

const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, "uploads/"); // 업로드 폴더로
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    done(null, path.basename(file.originalname, ext) + Date.now() + ext);
  },
});

const upload = multer({
  storage: storage, // 저장할 곳
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 사이즈 한계 용량
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 모든 요청에 대해 로그를 출력하는 미들웨어
app.use(morgan("dev"));

// JSON 형식의 요청 본문을 파싱하는 미들웨어
app.use(express.json());

// URL-encoded 형식의 요청 본문을 파싱하는 미들웨어
app.use(express.urlencoded({ extended: false }));

// 루트 페이지 라우트 핸들러
app.get("/", (req, res) => {
  res.send("안녕 난 Express야 만나서 반가워");
});

// /html 페이지 라우트 핸들러
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "res_html.html"));
});

// /cookie_get 페이지 라우트 핸들러 - 쿠키 읽기
app.get("/cookie_get", (req, res) => {
  const signedCookies = req.signedCookies;
  res.json(signedCookies);
});

// /cookie_reset 페이지 라우트 핸들러 - 쿠키 삭제
app.get("/cookie_reset", (req, res) => {
  res.clearCookie("username");
  res.send("쿠키를 삭제했음");
});

// 파일 업로드 폼 페이지 제공
app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});

// 파일 업로드 라우트 (단일 파일 업로드)
app.post("/upload", upload.single("image"), (req, res) => {
  const title = req.body.title;
  const image = req.file;

  console.log("Title:", title);
  console.log("File:", image);

  if (!image) {
    return res.status(400).send("파일 없어요.");
  }

  res.send(`File uploaded: ${image.filename}, Title: ${title}`);
});

// 파일 업로드 폼 페이지 제공 (다중 파일 업로드)
app.get("/upload2", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart2.html"));
});

// 파일 업로드 라우트 (다중 파일 업로드)
app.post("/upload2", upload.array("many"), (req, res) => {
  const title = req.body.title;
  const files = req.files; // 여러 파일을 처리하기 위해 req.files 사용

  console.log("Title:", title);
  console.log("Files:", files);

  if (!files || files.length === 0) {
    return res.status(400).send("파일 없어요.");
  }

  res.send(
    `Files uploaded: ${files
      .map((file) => file.filename)
      .join(", ")}, Title: ${title}`
  );
});

// 파일 업로드 폼 페이지 제공 (두 개의 파일 필드)
app.get("/upload3", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart3.html"));
});

// 파일 업로드 라우트 (두 개의 파일 필드)
app.post(
  "/upload3",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  (req, res) => {
    const title = req.body.title;
    const files = req.files;

    console.log("Title:", title);
    console.log("Files:", files);

    if (!files || (!files.image1 && !files.image2)) {
      return res.status(400).send("파일 없어요.");
    }

    res.send(
      `Files uploaded: ${Object.keys(files)
        .map((key) => files[key].map((file) => file.filename).join(", "))
        .join(", ")}, Title: ${title}`
    );
  }
);

// /myerror 페이지 라우트 핸들러 - 일부러 에러 발생
app.get("/myerror", (req, res, next) => {
  console.log("일부러 에러 내는 실험 중");
  next(new Error("에러 에러 에러!")); // 오류를 발생시키고 next(err)로 전달
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.message); // 에러 메시지 출력
  res.status(500).send(err.message); // 클라이언트에게 에러 메시지 전달
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`서버가 이 포트에서 실행 중입니다: ${app.get("port")}`);
});
