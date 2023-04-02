# 使用官方的Python基础镜像
# docker build -t huojia .
FROM python:3.11-alpine

# 设置工作目录
WORKDIR /app

# 将项目所需的依赖信息复制到容器中
COPY requirements.txt ./

# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 将项目源代码复制到容器中
COPY . .

# 暴露端口，这里使用Flask默认的5000端口
EXPOSE 5000

# 启动Flask应用
CMD ["flask", "run", "--host=0.0.0.0"]
