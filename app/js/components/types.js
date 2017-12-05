import React, { Component } from 'react';
import {Next, Prev} from './slides'


class Typen1 extends Component {
   render() {
    return (
     <div className='type firstType'>
        <Next name='Types0'/>
        <center>
        <h3> A basic neural network has three sections </h3>
        <p> Example Goal: Predict Test Scores Based on Sleep and Study </p>
         </center>
            <img src='./images/structure.svg'></img>
      </div>
    );
  }
}

class Type0 extends Component {
   render() {
    return (
     <div className='type'>
     <Prev name='Types'/>
        <Next name='Types1'/>
            <img height="50%" width="50%" src='./images/feedforward.png'></img>
            <h3> Feed Forward Network </h3>
            <p>A feed forward neural network is a network in which data is passed from the input layer,
                through hidden layers, and finally to the output layer. A feed forward network does not have
                cycles, meaning data is always <i>fed forward</i>. The learning happens though back propagation, with
                pairs of input/output data is fed into the network; this is called <i>supervised learning.</i>
                </p>


            <p>
                Applications for feed forward networks are mainly classification tasks, such as classifying handwriting.
            </p>

      </div>
    );
  }
}



class Type1 extends Component {
   render() {
    return (
     <div className='type'>
     <Next name='Types2'/>
     <Prev name='Types0'/>
            <img height="50%" width="50%" src='./images/convolutional.png'></img>
            <h3> Convolutional Network</h3>

            <p>The structure of a convolutional neural network begins with a <i>scanning layer</i>
                which represents a portion of an image. The data is then fed to convolutional layers, in which
                the nodes are only connected to nearby nodes. There are also pooling layers, which filter out
                specific details in images (pooling together pixels with the most amount of red, etc.).
            </p>


            <p>
            Application for CNNs are mainly in image processing: recognizing on-screen patterns to play video
                games, finding cars in complicated images, and even learning how to cook from watching YouTube videos.

             </p>
      </div>
    );
  }
}


class Type2 extends Component {
   render() {
    return (
     <div className='type'>
     <Next name='Types3'/>
     <Prev name='Types1'/>
            <img height="50%" width="50%" src='./images/recurrent.png'></img>

             <h3> Recurrent Neural Network</h3>

             <p>A recurrent neural network, or RNN, is essentially the same as a feed forward network,
                but is able to have neurons draw data from <i>themselves</i> in previous iterations.
                Therefore, the order of data in the input later has an effect on the output. Therefore,
                RNNs are useful only for non-time-dependent datasets.

               </p>
               <p>

                Generally, RNNs are applicable in completing or advancing current information, such as autocomplete in
                texting applications.
             </p>
      </div>
    );
  }
}


class Type3 extends Component {
   render() {
    return (
     <div className='type'>
     <Prev name='Types2'/>
            <img height="30%" width="30%" src='./images/autoencoders.png'></img>
            <h3> Autoencoders </h3>

             <p>Autoencoders are similar to feed forward neural networks in that information is only
                passed forward from the input layer to the ouput layer; however, autoencoders have
                fewer middle input layers than the output or input layers. Therefore, the structure
                resembles an hourglass. Data is encoded from the input layer to the hidden layers, which
                contain the code, and decoded to the output layers.
                </p>
             <p>
                Autoencoders are very useful for natural language processing. They are also used in data
                compression algorithms and for pretraining other, more complicated, neural networks.
             </p>

      </div>
    );
  }
}



module.exports = {
    Type0,
    Type1,
    Type2,
    Type3,
    Typen1
}
