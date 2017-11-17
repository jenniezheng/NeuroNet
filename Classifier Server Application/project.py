import os
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import numpy as np
import scipy
from scipy import ndimage
from lr_utilities import *


#	USER UPLOADED IMAGES ARE STORED IN THE UPLOADS FOLDER
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


#	Trained weights and biases
d = trained_weights()

#	Index Route
@app.route('/')
@app.route('/hello')
def HelloWorld():
	return "Hello World"


#	USER IMAGE UPLOAD
@app.route('/image/new', methods=['GET', 'POST'])
def upload_file():
	if request.method == 'POST':
		file = request.files['file']
		filename = secure_filename(file.filename)
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		
		#	SIZE OF IMAGE REQUIRED
		numpx = 64

		#	IMAGE PREPROCESSING
		image = np.array(ndimage.imread("uploads/" + filename, flatten=False))
		my_image = scipy.misc.imresize(image, size=(numpx,numpx)).reshape((1, numpx*numpx*3)).T
		my_predicted_image = predict(my_image,d)
		classes = {1 : "a cat", 0 : "that it is not a cat"}
		result = classes[int(np.squeeze(my_predicted_image))]
		return render_template('result.html', result=result)

	else:
		return render_template('form.html')


if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0', port=3000)