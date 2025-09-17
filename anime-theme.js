/* ===== 自定义字体 ===== */
const style = document.createElement("style");
style.innerHTML = `
@font-face {
  font-family: 'ACG';
  src: url('https://jsd.cdn.zzko.cn/gh/54ayao/ACG@main/static/fonts/1666963922.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* ===== 默认二次元主题 ===== */
body.theme-anime {
  font-family: 'ACG', sans-serif;
  background-image: url('https://api.ixiaowai.cn/api/api.php');
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  text-shadow: 0 0 5px rgba(255,255,255,0.6);
}
body.theme-anime .card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  border: 2px solid rgba(255, 192, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(255, 100, 200, 0.5), 0 0 30px rgba(100, 200, 255, 0.3);
}
body.theme-anime .card-title, 
body.theme-anime h1, h2, h3 {
  background-image: linear-gradient(90deg, #ff7eb6, #72f5ff, #c084fc, #ff7eb6);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-move 8s linear infinite;
  font-weight: bold;
}

/* ===== 暗色二次元主题 ===== */
body.theme-dark-anime {
  font-family: 'ACG', sans-serif;
  background-image: url('https://api.ixiaowai.cn/gqapi/gqapi.php');
  background-size: cover;
  background-attachment: fixed;
  color: #e0e0ff;
  text-shadow: 0 0 5px rgba(180, 150, 255, 0.6);
}
body.theme-dark-anime .card {
  background: rgba(20, 20, 40, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(200, 100, 255, 0.5);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(200, 100, 255, 0.4), 0 0 40px rgba(80, 200, 255, 0.2);
}
body.theme-dark-anime .card-title,
body.theme-dark-anime h1, h2, h3 {
  background-image: linear-gradient(90deg, #ff79c6, #bd93f9, #8be9fd, #ff79c6);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-move 8s linear infinite;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(200, 150, 255, 0.8);
}

/* ===== 浅色二次元主题 ===== */
body.theme-light-anime {
  font-family: 'ACG', sans-serif;
  background-image: url('https://api.ixiaowai.cn/api/api.php');
  background-size: cover;
  background-attachment: fixed;
  color: #444;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
}
body.theme-light-anime .card {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  border: 2px solid rgba(180, 220, 255, 0.6);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 15px rgba(255, 180, 220, 0.4), 0 0 25px rgba(150, 200, 255, 0.3);
}
body.theme-light-anime .card-title,
body.theme-light-anime h1, h2, h3 {
  background-image: linear-gradient(90deg, #ffb6c1, #87cefa, #dda0dd, #ffb6c1);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-move 10s linear infinite;
  font-weight: bold;
  text-shadow: none;
}

/* ===== 通用按钮、渐变动画 ===== */
button, .btn {
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
body.theme-anime button, .btn {
  background: linear-gradient(135deg, #ff7eb6, #72f5ff);
}
body.theme-dark-anime button, .btn {
  background: linear-gradient(135deg, #ff79c6, #8be9fd);
}
body.theme-light-anime button, .btn {
  background: linear-gradient(135deg, #ffb6c1, #87cefa);
}
button:hover, .btn:hover {
  transform: scale(1.05);
}

/* 渐变动画 */
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(style);

/* ===== 主题切换按钮 ===== */
const themes = ["theme-anime", "theme-dark-anime", "theme-light-anime"];
let currentIndex = 0;

// 读取本地存储的主题
const savedTheme = localStorage.getItem("uptime-kuma-theme");
if (savedTheme && themes.includes(savedTheme)) {
  document.body.classList.add(savedTheme);
  currentIndex = themes.indexOf(savedTheme);
} else {
  document.body.classList.add(themes[0]);
  localStorage.setItem("uptime-kuma-theme", themes[0]);
}

// 创建切换按钮
const switchBtn = document.createElement("div");
switchBtn.innerHTML = "🎨";
switchBtn.style.position = "fixed";
switchBtn.style.bottom = "20px";
switchBtn.style.right = "20px";
switchBtn.style.width = "50px";
switchBtn.style.height = "50px";
switchBtn.style.borderRadius = "50%";
switchBtn.style.background = "linear-gradient(135deg, #ff7eb6, #72f5ff)";
switchBtn.style.display = "flex";
switchBtn.style.alignItems = "center";
switchBtn.style.justifyContent = "center";
switchBtn.style.fontSize = "24px";
switchBtn.style.color = "#fff";
switchBtn.style.cursor = "pointer";
switchBtn.style.zIndex = "9999";
switchBtn.style.boxShadow = "0 0 15px rgba(255, 120, 200, 0.8)";
switchBtn.style.transition = "all 0.3s ease";

// 点击切换主题
switchBtn.onclick = () => {
  document.body.classList.remove(themes[currentIndex]);
  currentIndex = (currentIndex + 1) % themes.length;
  document.body.classList.add(themes[currentIndex]);
  localStorage.setItem("uptime-kuma-theme", themes[currentIndex]);

  // 切换按钮渐变颜色跟随主题
  if (themes[currentIndex] === "theme-anime") {
    switchBtn.style.background = "linear-gradient(135deg, #ff7eb6, #72f5ff)";
  } else if (themes[currentIndex] === "theme-dark-anime") {
    switchBtn.style.background = "linear-gradient(135deg, #ff79c6, #8be9fd)";
  } else {
    switchBtn.style.background = "linear-gradient(135deg, #ffb6c1, #87cefa)";
  }
};

// 插入按钮
document.body.appendChild(switchBtn);
