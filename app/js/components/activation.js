import React from 'react';
import {Next, Prev} from './slides'

class Activation0 extends React.Component {
  render() {
    return (
        <div>
          <h1>Activation</h1>
          <Next name='ActivationFunctions1'/>
          <p> The activation function defines how a neuron should respond when given a group of inputs and weights.</p>
          <center><p>Z = bias + weight1*x1 + weight2*x2 + weight3*x3 </p>
          <p>Activation = function(Z) </p></center>
           <p> Next is a graphical representation of activation functions. Your job is to change the weight of inputs X and Y in order to correctly place all the data points.</p>

             </div>
    );
  }
}

class Activation1 extends React.Component {
  render() {
    return (
        <div>
        <Prev name='ActivationFunctions'/>
         <iframe width='300%' height='1000px' src="./weightsApp/index.html"></iframe>
        </div>
    );
  }
}

module.exports = {
    Activation0,
    Activation1
}
