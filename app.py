from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)
timeline_status = False
last_access_name = ""
last_access_time = ""

@app.route("/entry", methods=["POST"])
def register_entry():
    global timeline_status, last_access_name, last_access_time
    data = request.get_json()
    name = data.get("name")
    if not timeline_status:
        timeline_status = True
        last_access_name = name
        last_access_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return jsonify(status="success")
    return jsonify(status="error")

@app.route("/exit", methods=["POST"])
def register_exit():
    global timeline_status, last_access_name, last_access_time
    if timeline_status:
        timeline_status = False
        last_access_name = ""
        last_access_time = ""
        return jsonify(status="success")
    return jsonify(status="error")

@app.route("/status", methods=["GET"])
def get_timeline_status():
    global timeline_status, last_access_name, last_access_time
    return jsonify(status=timeline_status, name=last_access_name, timestamp=last_access_time)

if __name__ == "__main__":
    app.run()
