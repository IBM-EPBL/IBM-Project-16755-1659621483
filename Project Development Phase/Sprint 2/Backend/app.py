import os
import pickle
from flask import (Flask, Response, json, jsonify, make_response,
                   render_template, request)
from flask_cors import CORS
import sklearn
app = Flask(__name__)
CORS(app)
model = pickle.load(open('model.pkl', 'rb'))


class UserAuthUtil:

    @app.route("/predict", methods=['POST'])
    def predict():
            params=request.json
            result = model.predict([[int(params['gre']),int( params['toefl']), int(params['university']),int(params['sop']),int(params['lor']),int(params['cgpa'])]])
            return Response(response=json.dumps({'prediction': result[0]}), status=200, mimetype="application/json")

if __name__ == '__main__':
    app.run(port=8000)
