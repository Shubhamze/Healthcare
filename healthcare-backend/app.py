from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Ensure the 'uploads' folder exists
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form
    file = request.files.get('file')
    
    if not file:
        return jsonify({'message': 'No file uploaded'}), 400
    
    # Save the uploaded file
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # Respond with the received data
    return jsonify({
        'message': 'Data received',
        'name': data.get('name'),
        'age': data.get('age'),
        'file': file.filename
    }), 200

if __name__ == '__main__':
    app.run(debug=True)

