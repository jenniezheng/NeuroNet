import numpy as np
import h5py
import scipy
from scipy import ndimage
from load import load_dataset


#	DATASET LOAD
train_set_x_orig, train_set_y = load_dataset()


#	IMAGE PREPROCESSING
train_set_x_flatten = train_set_x_orig.reshape(train_set_x_orig.shape[0], -1).T

train_set_x = train_set_x_flatten/255.


def sigmoid(z):
		s = 1/(1 + np.exp(-z))
		return s

def initialize_with_zeros(dim):
		w = np.zeros((dim, 1))
		b = 0

		return w, b

def propagate(w, b, X, Y):
	m = X.shape[1]
	Z = np.dot(w.T, X) + b
	A = sigmoid(Z)                               
	cost =  -1*(1/m)*(np.sum((np.dot(Y, np.log(A).T) + np.dot((1-Y), np.log(1-A).T))))    

	dz = A - Y
	dw = (1./m)*(np.dot(X, dz.T))
	db = (1./m)*(np.sum(dz))

	cost = np.squeeze(cost)

	grads = {"dw": dw,
	          "db": db}
	    
	return grads, cost

def optimize(w, b, X, Y, num_iterations, learning_rate):
	costs = []

	for i in range(num_iterations):
	       
		grads, cost = propagate(w, b, X, Y)
		dw = grads["dw"]
		db = grads["db"]

		w = w - learning_rate*dw
		b = b - learning_rate*db

		if i % 100 == 0:
			costs.append(cost)
	    
	params = {"w": w,
	          "b": b}
	    
	grads = {"dw": dw,
	         "db": db}
	    
	return params, grads, costs

def model(X_train, Y_train, num_iterations = 2000, learning_rate = 0.5):

	    w, b = initialize_with_zeros(X_train.shape[0])

	    parameters, grads, costs = optimize(w, b, X_train, Y_train, num_iterations, learning_rate)
	    
	    # Retrieve parameters w and b from dictionary "parameters"
	    w = parameters["w"]
	    b = parameters["b"]
	    
	    d = {"costs": costs,
	         "w" : w, 
	         "b" : b,
	         "learning_rate" : learning_rate,
	         "num_iterations": num_iterations}
	    
	    return d



def predict(X):
	d = model(train_set_x, train_set_y, num_iterations = 2000, learning_rate = 0.005)
	m = X.shape[1]
	Y_prediction = np.zeros((1,m))
	w = d["w"].reshape(X.shape[0], 1)

	Z = np.dot(w.T, X) + d["b"]
	A = sigmoid(Z)

	for i in range(A.shape[1]):
		if (A[0, i] <= 0.5):
			Y_prediction[0,i] = 0

		else:
			Y_prediction[0,i] = 1;

	return Y_prediction
