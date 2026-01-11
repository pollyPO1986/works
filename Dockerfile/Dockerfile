# 使用 Node 10.24.1 作為基底
FROM node:10.24.1

# 建立工作目錄
WORKDIR /app

# 安裝全域工具 Gulp 和 Bower
# 注意：雖然 package.json 裡可能有寫，但全域安裝方便 CLI 操作
RUN npm install -g gulp@3.9.1 bower@1.8.8

# 為了應對舊版 node-gyp 可能需要的編譯工具 (Python 2, Make, GCC)
# Node 10 的 image 通常已包含 Python 2，但為了保險起見可以檢查
# 如果是 node-sass 編譯失敗，通常是因為缺少這些
RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list && \
    echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list && \
    apt-get -o Acquire::Check-Valid-Until=false update && \
    apt-get -o Acquire::Check-Valid-Until=false install -y \
    python \
    make \
    g++ \
    git \
    && rm -rf /var/lib/apt/lists/*

# 複製 package 設定檔
COPY package*.json bower.json .bowerrc* ./

# 安裝依賴
# --unsafe-perm 解決 Docker 內 root 權限導致的某些 script 執行失敗問題
RUN npm install --unsafe-perm && bower install --allow-root

# 複製其餘程式碼
COPY . .

# 預設指令 (根據你的專案調整，例如 gulp serve 或 npm start)
CMD ["gulp"]
