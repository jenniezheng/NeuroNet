import React from 'react';
import {Next, Prev} from './slides'

class Regularization0 extends React.Component {
  render() {
    return (
        <div>
        <Next name='Regularization1'/>

         <h1>Overfitting</h1>
         <p>
         Overfitting is when a program has too much freedom to fit the data. It may fit the training data almost perfectly yet fail to generalize
         to new data. Furthermore, it may be too sensitive to noise in the training data.
         </p>

          <h1>Regularization</h1>
<p>
Regularization is the process of reducing overfitting and helping the program generalize to new data.
</p>

 <h3>
Regularization Methods:
</h3>
<ol>
<li>
    L1/L2 Regularization
</li>
<li>
    Dropout
</li>
</ol>
      </div>
    );
  }
}


class Regularization1 extends React.Component {
  render() {
    return (
        <div>
        <Next name='Regularization2'/>
        <Prev name='Regularization'/>

<h1>L1 and L2 </h1>
<p>
L1/L2 regularization is one way of reducing overfitting. They
create a sparser model by punishing the program for larger weights.

</p>
      </div>
    );
  }
}


class Regularization2 extends React.Component {
  render() {
    return (
        <div>
        <Prev name='Regularization1'/>

        <h1>Dropout</h1>
<p>
Dropout reduces overfitting by temperarily and randomly dropping neurons (along with their connections) from the neural
network during training. This prevents neurons from relying on particular other neurons too much.
During training, dropout creates a variety of different
“thinned” networks. At test time, the full network is used. Dropout is
often more effective than other methods of regularization. </p>




      </div>
    );
  }
}

module.exports = {
    Regularization0,
    Regularization1,
    Regularization2
}
