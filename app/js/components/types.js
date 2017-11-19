import React, { Component } from 'react';


class Types extends Component {
    //TODO
    //if possible, convert to slides
    //Brief description of each type with explanation
   render() {
    //note images are stored in dist folder
    //nice resource: http://www.asimovinstitute.org/neural-network-zoo/
    //images can be viewed after running webpack, but not with yarn start
    return (
     <div>
        <div>

            <img height="50%" width="50%" src='images/feedforward.png'></img>
            <h3> Feed Forward Network </h3>
            <p>Explanation</p>
          </div>

           <div>
             <h3> Convolutional Network</h3>
          </div>

          <div>
             <h3> Recurrent Neural Network</h3>
          </div>

          <div>
             <h3> Autoencoders </h3>
          </div>
      </div>
    );
  }
}


export default Types;