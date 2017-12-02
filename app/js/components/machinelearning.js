import React from 'react';

export default class MachineLearning extends React.Component {
  render() {
    return (
        //TODO...
        //HTML and CSS explanation about machine learning
        <div>
          <h1> Supervised Machine Learning</h1>
<p>
Most of the machine learning applications are implemented through supervised machine learning applications.
</p>
<p>
In supervised machine learning, you pass in an input variable (X) and an output variable (Y), which uses an algorithm to find the mapping relation between the two variables.
The goal is to approximate a mapping function between the input and the output variable. This type of machine learning is called categorized as supervised machine learning, as it is the process of generating an algorithm through the use of a training set, which can be considered analogous to having a 'supervisor'.
</p>
<p>

<h3> Y = f(X)</h3>
</p>
<p>
Supervised machine learning can be further subdivided into two categories –
</p>

<p>
Categorized – A Supervised ML problem is classified when the output variable is a category, like "red"or "blue" or "healthy" or "not healthy".
</p>
<p>
Regression – A regression problem is a problem in which the output includes real values, such as "height", "weight", or "dollars".
</p>
<p>
Some classic examples of supervised machine learning algorithm:-
1) Support vector machines for classification problems.
2) Linear regression for regression problems.
</p>

<h1> Unsupervised Machine Learning</h1>

<p>
In this type of machine learning, all the data is unlabelled and the algorithms learn to develop structure from the input data is provided to the system. Comparing to the  above definition of supervised machine learning, we can infer that in unsupervised machine learning, there is only input data (X) and no corresponding output variable that is provided. The goal of the system is to model the distribution of the data in order to study the data.
</p>
<p>
This type of machine learning is categorized as unsupervised as there is no training set that is provided. ML Algorithms are left alone to find the interesting features of the data and present them.
   </p>
      </div>
    );
  }
}