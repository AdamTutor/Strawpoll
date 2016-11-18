from flask import Flask, json, jsonify
app = Flask(__name__)

@app.route("/strawpolls")
def polls():
    return jsonify(json.load(open("static/strawpolls.json")))

@app.route("/strawpolls/<int:id>")
def votes(id):
    polls = json.load(open("static/strawpolls.json"))
    return jsonify(polls['data'][id])

@app.route("/")
def root():
    return open("static/index.html").read()


@app.route("/strawpolls/<int:id>/vote/<choice>", methods=["POST"])
def vote(id, choice):
    polls = json.load(open("static/strawpolls.json"))
    polls['data'][id]['choices'][choice] += 1
    json.dump(polls, open("static/strawpolls.json", "w"))
    return jsonify(polls['data'][id])


@app.route("/<page>")
def other(page):
    print(page)
    content = open("static/{}.html".format(page)).read()
    print(content)
    return content


if __name__ == "__main__":
    app.run()
