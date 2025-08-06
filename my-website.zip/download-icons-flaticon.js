const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join(__dirname, "images", "icons");
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const icons = [
  ["project1-1.png", "https://cdn-icons-png.flaticon.com/512/919/919828.png"],
  ["project1-2.png", "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"],
  ["project1-3.png", "https://cdn-icons-png.flaticon.com/512/306/306473.png"],

  ["project2-1.png", "https://cdn-icons-png.flaticon.com/512/1828/1828817.png"],
  ["project2-2.png", "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"],
  ["project2-3.png", "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"],

  ["project3-1.png", "https://cdn-icons-png.flaticon.com/512/5087/5087579.png"],
  ["project3-2.png", "https://cdn-icons-png.flaticon.com/512/5087/5087607.png"],
  ["project3-3.png", "https://cdn-icons-png.flaticon.com/512/5087/5087592.png"],

  ["project4-1.png", "https://cdn-icons-png.flaticon.com/512/2942/2942789.png"],
  ["project4-2.png", "https://cdn-icons-png.flaticon.com/512/2942/2942810.png"],
  ["project4-3.png", "https://cdn-icons-png.flaticon.com/512/2942/2942759.png"],

  ["project5-1.png", "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"],
  ["project5-2.png", "https://cdn-icons-png.flaticon.com/512/3177/3177367.png"],
  ["project5-3.png", "https://cdn-icons-png.flaticon.com/512/3177/3177398.png"],

  ["project6-1.png", "https://cdn-icons-png.flaticon.com/512/3344/3344334.png"],
  ["project6-2.png", "https://cdn-icons-png.flaticon.com/512/3344/3344358.png"],
  ["project6-3.png", "https://cdn-icons-png.flaticon.com/512/3344/3344372.png"],

  ["project7-1.png", "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"],
  ["project7-2.png", "https://cdn-icons-png.flaticon.com/512/3081/3081554.png"],
  ["project7-3.png", "https://cdn-icons-png.flaticon.com/512/3081/3081562.png"],

  ["project8-1.png", "https://cdn-icons-png.flaticon.com/512/3039/3039436.png"],
  ["project8-2.png", "https://cdn-icons-png.flaticon.com/512/3039/3039462.png"],
  ["project8-3.png", "https://cdn-icons-png.flaticon.com/512/3039/3039486.png"],

  ["project9-1.png", "https://cdn-icons-png.flaticon.com/512/747/747376.png"],
  ["project9-2.png", "https://cdn-icons-png.flaticon.com/512/747/747393.png"],
  ["project9-3.png", "https://cdn-icons-png.flaticon.com/512/747/747345.png"],

  ["project10-1.png", "https://cdn-icons-png.flaticon.com/512/3314/3314468.png"],
  ["project10-2.png", "https://cdn-icons-png.flaticon.com/512/3314/3314481.png"],
  ["project10-3.png", "https://cdn-icons-png.flaticon.com/512/3314/3314473.png"],

  ["project11-1.png", "https://cdn-icons-png.flaticon.com/512/1116/1116453.png"],
  ["project11-2.png", "https://cdn-icons-png.flaticon.com/512/1116/1116466.png"],
  ["project11-3.png", "https://cdn-icons-png.flaticon.com/512/1116/1116477.png"],

  ["project12-1.png", "https://cdn-icons-png.flaticon.com/512/4472/4472586.png"],
  ["project12-2.png", "https://cdn-icons-png.flaticon.com/512/4472/4472544.png"],
  ["project12-3.png", "https://cdn-icons-png.flaticon.com/512/4472/4472558.png"]
];

function downloadImage(filename, url) {
  const filePath = path.join(dir, filename);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✅ تم تحميل: ${filename}`);
      });
    } else {
      console.log(`❌ فشل التحميل: ${filename} - Status: ${res.statusCode}`);
    }
  }).on("error", (err) => {
    console.log(`⚠️ خطأ: ${filename} - ${err.message}`);
  });
}

icons.forEach(([name, url]) => downloadImage(name, url));
