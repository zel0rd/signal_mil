from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route("/")
def root():
    return redirect('/index')


@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/index_admin")
def index_admin():
    return render_template('index_admin.html')


@app.route("/login")
def login():
    return render_template('login.html')


@app.route("/admin")
def admin():
    return render_template('admin.html')


if __name__ == "__main__":
    app.env = "development"
    app.run(host="0.0.0.0", port=80, debug=True)
