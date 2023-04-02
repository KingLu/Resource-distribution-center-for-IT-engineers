from flask import Flask, render_template, send_from_directory, request
import os

app = Flask(__name__)

IMAGES_DIR = "images"  # 图片存放目录
app.config['IMAGES_DIR'] = IMAGES_DIR  # 添加到应用的配置中

@app.route('/')
def index():
    images = os.listdir(IMAGES_DIR)  # 获取所有图片文件名
    return render_template('index.html', images=images)

@app.route('/images/<path:filename>')
def images(filename):
    return send_from_directory(IMAGES_DIR, filename)

@app.route('/image/<path:filename>')
def image_detail(filename):
    image_files = os.listdir(app.config['IMAGES_DIR'])
    return render_template('image_detail.html', image=filename, images=image_files)

if __name__ == '__main__':
    app.run(debug=True)
