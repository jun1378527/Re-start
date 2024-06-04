const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 데이터베이스 연결 확인
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize = sequelize;

const basename = path.basename(__filename);
fs.readdirSync(__dirname) // 현재 폴더의 모든 파일을 조회
  .filter(file => {
    // 숨김 파일, index.js, js 확장자가 아닌 파일 필터링
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    // 해당 파일의 모델 불러와서 init
    const model = require(path.join(__dirname, file));
    console.log(`${file} model loaded`);
    db[model.name] = model;
    // model.init(sequelize); // init 메서드를 사용하여 모델 초기화
    if (model.initiate) {
      model.initiate(sequelize);
    } else if (model.init) {
      model.init(sequelize);
    } else {
      console.warn(
        `Model ${model.name} does not have an initiate or init method.`
      );
    }
  });

Object.keys(db).forEach(modelName => {
  // associate 호출
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
