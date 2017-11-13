""" An implementation of the paper "A Neural Algorithm of Artistic Style" by Gatys et al. in TensorFlow.
Author: Chip Huyen (huyenn@stanford.edu)
Prepared for the class CS 20SI: "TensorFlow for Deep Learning Research"
For more details, please read the assignment handout:
http://web.stanford.edu/class/cs20si/assignments/a2.pdf
Modified: Haoyu Yun
"""
from __future__ import print_function # Python 3 print

import os
import time
import numpy as np
import tensorflow as tf
import vgg_model
import utils

# parameters to manage experiments
STYLE = 'starry_night'
CONTENT = 'nachenberg_dinner'
STYLE_IMAGE = 'styles/' + STYLE + '.jpg'
CONTENT_IMAGE = 'content/' + CONTENT + '.jpg'
IMAGE_HEIGHT = 250
IMAGE_WIDTH = 333
NOISE_RATIO = 0.6 # percentage of weight of the noise for intermixing with the content image

# Layers used for style features. You can change this.
STYLE_LAYERS = ['conv1_1', 'conv2_1', 'conv3_1', 'conv4_1', 'conv5_1']
W = [0.5, 1.0, 1.5, 3.0, 4.0] # give more weights to deeper layers.

# Layer used for content features. You can change this.
CONTENT_LAYER = 'conv4_2'

ITERS = 300
LR = 2.0

MEAN_PIXELS = np.array([123.68, 116.779, 103.939]).reshape((1,1,1,3))
""" MEAN_PIXELS is defined according to description on their github:
https://gist.github.com/ksimonyan/211839e770f7b538e2d8
'In the paper, the model is denoted as the configuration D trained with scale jittering. 
The input images should be zero-centered by mean pixel (rather than mean image) subtraction. 
Namely, the following BGR values should be subtracted: [103.939, 116.779, 123.68].'
"""

# VGG-19 parameters file
VGG_DOWNLOAD_LINK = 'http://www.vlfeat.org/matconvnet/models/imagenet-vgg-verydeep-19.mat'
VGG_MODEL = 'imagenet-vgg-verydeep-19.mat'
EXPECTED_BYTES = 534904783

def _create_content_loss(p, f):
    """ Calculate the loss between the feature representation of the
    content image and the generated image.
    
    Inputs: 
        p, f are just P, F in the paper 
        (read the assignment handout if you're confused)
        Note: we won't use the coefficient 0.5 as defined in the paper
        but the coefficient as defined in the assignment handout.
    Output:
        the content loss
    """
    #return 0.5 * tf.reduce_sum( (f-p) ** 2)
    return 1/(4*p.size) * tf.reduce_sum( (f - p) ** 2)

def _gram_matrix(F, N, M):
    """ Create and return the gram matrix for tensor F
    """
    # reshape F to 2-D tensor M*N
    F = tf.reshape(F, (M, N))
    # take dot product of 2D tensor with its transpose
    return tf.matmul(tf.transpose(F), F)

def _single_style_loss(a, g):
    """ Calculate the style loss at a certain layer
    Inputs:
        a is the feature representation of the real image
        g is the feature representation of the generated image
    Output:
        the style loss at a certain layer (which is E_l in the paper)
    """
    N = a.shape[3] # number of filters, 4th dim
    # product of first two dims of feature map (2nd, 3rd in tensor)
    M = a.shape[1] * a.shape[2]
    # find gram matrices for a and g
    A = _gram_matrix(a, N, M)
    G = _gram_matrix(g, N, M)
    
    E_l = tf.reduce_sum((G - A) ** 2 / ((2*N*M)**2))
    return E_l

def _create_style_loss(A, model):
    """ Return the total style loss
    """
    n_layers = len(STYLE_LAYERS)
    E = [_single_style_loss(A[i], model[STYLE_LAYERS[i]]) for i in range(n_layers)]
    
    return sum([W[i]*E[i] for i in range(n_layers)])

def _create_losses(model, input_image, content_image, style_image):
    with tf.variable_scope('loss') as scope:
        with tf.Session() as sess:
            sess.run(input_image.assign(content_image)) # assign content image to the input variable
            p = sess.run(model[CONTENT_LAYER])
        # activations in the layer in CONTENT_LAYER
        content_loss = _create_content_loss(p, model[CONTENT_LAYER])

        with tf.Session() as sess:
            sess.run(input_image.assign(style_image))
            A = sess.run([model[layer_name] for layer_name in STYLE_LAYERS])     
        # activations in the layers in STYLE_LAYER                        
        style_loss = _create_style_loss(A, model)

        total_loss = content_loss * CONTENT_WEIGHT + style_loss * STYLE_WEIGHT

    return content_loss, style_loss, total_loss

def _create_summary(model):
    """ Create summary ops necessary
    """
    with tf.name_scope('summaries'):
        tf.summary.scalar('content loss', model['content_loss'])
        tf.summary.scalar('style loss', model['style_loss'])
        tf.summary.scalar('total loss', model['total_loss'])
        tf.summary.histogram('histogram content loss', model['content_loss'])
        tf.summary.histogram('histogram style loss', model['style_loss'])
        tf.summary.histogram('histogram total loss', model['total_loss'])
        return tf.summary.merge_all()    
    
def train(model, generated_image, initial_image):
    """ Train your model.
    """
    skip_step = 1
    with tf.Session() as sess:
        saver = tf.train.Saver()

        sess.run(tf.global_variables_initializer())
        writer = tf.summary.FileWriter('graphs', sess.graph)

        sess.run(generated_image.assign(initial_image))
        ckpt = tf.train.get_checkpoint_state(os.path.dirname('checkpoints/checkpoint'))
        if ckpt and ckpt.model_checkpoint_path:
            saver.restore(sess, ckpt.model_checkpoint_path)
        initial_step = model['global_step'].eval()
        
        start_time = time.time()
        for index in range(initial_step, ITERS):
            if index >= 5 and index < 20:
                skip_step = 10
            elif index >= 20:
                skip_step = 20
            
            sess.run(model['optimizer'])
            if (index + 1) % skip_step == 0:

                gen_image, total_loss, summary = sess.run([generated_image, model['total_loss'], model['summary_op']])

                gen_image = gen_image + MEAN_PIXELS
                writer.add_summary(summary, global_step=index)
                print('Step {}\n   Sum: {:5.1f}'.format(index + 1, np.sum(gen_image)))
                print('   Loss: {:5.1f}'.format(total_loss))
                print('   Time: {}'.format(time.time() - start_time))
                start_time = time.time()

                filename = 'outputs/%d.png' % (index)
                utils.save_image(filename, gen_image)

                if (index + 1) % 20 == 0:
                    saver.save(sess, 'checkpoints/style_transfer', index)

def main():
    with tf.variable_scope('input') as scope:
        # use variable instead of placeholder because we're training the intial image to make it
        # look like both the content image and the style image
        input_image = tf.Variable(np.zeros([1, IMAGE_HEIGHT, IMAGE_WIDTH, 3]), dtype=tf.float32)
    
    utils.download(VGG_DOWNLOAD_LINK, VGG_MODEL, EXPECTED_BYTES)
    model = vgg_model.load_vgg(VGG_MODEL, input_image)
    model['global_step'] = tf.Variable(0, dtype=tf.int32, trainable=False, name='global_step')
    
    content_image = utils.get_resized_image(CONTENT_IMAGE, IMAGE_HEIGHT, IMAGE_WIDTH)
    content_image = content_image - MEAN_PIXELS
    style_image = utils.get_resized_image(STYLE_IMAGE, IMAGE_HEIGHT, IMAGE_WIDTH)
    style_image = style_image - MEAN_PIXELS

    model['content_loss'], model['style_loss'], model['total_loss'] = _create_losses(model, 
                                                    input_image, content_image, style_image)
    model['optimizer'] = tf.train.AdamOptimizer(learning_rate=LR).minimize(model['total_loss'], global_step=model['global_step'])
    model['summary_op'] = _create_summary(model)

    initial_image = utils.generate_noise_image(content_image, IMAGE_HEIGHT, IMAGE_WIDTH, NOISE_RATIO)
    
    train(model, input_image, initial_image)

if __name__ == '__main__':
    main()
