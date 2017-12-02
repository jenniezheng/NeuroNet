import React from 'react';

export default class MachineLearning extends React.Component {
  render() {
    return (
        <div>
          <h1>Regularization</h1>
<p>
In mathematics and computer science, specially in the fields of machine learning and inverse problems, in order to solve an ill-posed problem or to prevent overfitting we use a process called regularization, which is essentially introducing additional information so that we are in a better position to make judgements.
</p>
<h1>Overfitting</h1>
<p>
An overfitted model is a statistical model that contains more parameters than can be justified by the data, whereas, an underfitted model is a model where some parameters or terms that would appear in a correctly specified model are missing. Underfitting would occur, for example, when fitting a linear model to non-linear data. Such a model will tend to have poor predictive performance. Overfitting and underfitting can occur in machine learning in particular and the phenomena are sometimes called “overtraining” and “undertraining”.
</p>
<h1>Dropout</h1>
<p>
Overfitting is a real problem when it comes to working with neural networks in real life because it is very common to unknowingly extract some of the residual variation, i.e. the noise, as if that variation represented underlying model structure. Dropout regularization technique is applied for reducing overfitting in neural networks by preventing complex co-adaptations on training data. It is a very efficient way of performing model averaging with neural networks. The term "dropout" refers to dropping out units, both hidden and visible, in a neural network.
</p>
<h1>L1 and L2 Regularization</h1>
<p>
In order to create less complex models when you have a large number of features in your dataset, we use L1 and L2 regularization techniques to address over-fitting and feature selection. A regression model that uses L1 regularization technique is called Lasso Regression and model which uses L2 is called Ridge Regression. The key difference between these two is the penalty term. Ridge regression adds “squared magnitude” of coefficient as penalty term to the loss function.

</p>
<p>


Here, if lambda is zero then you can imagine we get back OLS (ordinary least squares). However, if lambda is very large then it will add too much weight and it will lead to under-fitting. Having said that it’s important how lambda is chosen. This technique works very well to avoid over-fitting issue.
</p>
<p>
Lasso Regression (Least Absolute Shrinkage and Selection Operator) adds “absolute value of magnitude” of coefficient as penalty term to the loss function.





</p>
<p>
Again, if lambda is zero then we will get back OLS whereas very large value will make coefficients zero hence it will under-fit. The key difference between these techniques is that Lasso shrinks the less important feature’s coefficient to zero thus, removing some feature altogether. So, this works well for feature selection in case we have a huge number of features.
</p>
<h1>Conclusion</h1>

<p>
Traditional methods like cross-validation, stepwise regression to handle overfitting and perform feature selection work well with a small set of features but these techniques are a great alternative when we are dealing with a large set of features.
</p>

      </div>
    );
  }
}