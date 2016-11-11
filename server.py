from flask import Flask, json, jsonify
app = Flask(__name__)

@app.route("/strawpolls")
def hello():
    return jsonify(json.load(open("static/strawpolls.json")))

@app.route("/")
def root():
    return open("static/index.html").read()

if __name__ == "__main__":
    app.run()
