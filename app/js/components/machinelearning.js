import React from 'react';
import {Next, Prev} from './slides'

class MachineLearning0 extends React.Component {
  render() {
    return (
        <div className='machinelearning'>
        <Next name='MachineLearning1'/>
             <h1> Machine Learning</h1>
             <p>The alternative name for software2.0 is machine learning.
             The term refers to how the machine seems to incrementally improve by learning.
             There's two types of machine learning, supervised and unsupervised.</p>
            </div>
            )
}
}

class MachineLearning1 extends React.Component {
  render() {
    return (

        //TODO...
        //HTML and CSS explanation about machine learning
        <div className='machinelearning'>
        <Prev name='MachineLearning0'/>
        <Next name='MachineLearning2'/>

          <h1> Supervised Machine Learning</h1>
<p>
Most of the machine learning applications are implemented through supervised machine learning applications.
</p>
<p>
In supervised machine learning, the program is given a data set of queries and the correct answer for those queries.
The machine's goal is to find the right function to map the queries (X) to the answers (Y).
This type of machine learning is called supervised, because the machine is given a 'superviser' in the form of a training set with correct answers.
</p>
<p>

<h3 className="text-center"> Y = f(X)</h3>
</p>
<h3>
Two types of Supervised Learning:
</h3>
<ol>
<li>
    Classification – When the output variable is a category like "cat" or "not cat", "happy" or "sad".
</li>
<li>
    Regression – When the output is a real value like "cost" or "weight".
</li>
</ol>


<h3>
Examples of Supervised Learning:
</h3>
<ol>
<li>
    Support vector machines for classification problems.
</li>
<li>
    Linear regression for regression problems.
</li>
</ol>
      </div>
    );
  }
}

class MachineLearning2 extends React.Component {
  render() {
    return (

        //TODO...
        //HTML and CSS explanation about machine learning
        <div className='machinelearning'>
        <Prev name='MachineLearning'/>
<h1> Unsupervised Machine Learning</h1>
<p>
In unsupervised machine learning, the program is given a set of input data with no solutions or labels. The program must make conclusions about the style and distribution of the data based on the data's structure.
</p>
<p>
This type of machine learning is unsupervised since no training set is provided. The program is left alone to find the patterns and features of the data.
   </p>

   <h3>
Examples of Unsupervised Learning:
</h3>
<ol>
<li>
    Clustering
</li>
<li>
    Anomaly Detection
</li>
<li>
    Autoencoders
</li>
</ol>
      </div>
    );
  }
}

module.exports = {
    MachineLearning0,
    MachineLearning1,
    MachineLearning2
}
