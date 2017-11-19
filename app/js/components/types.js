import React, { Component } from 'react';


class Types extends Component {
    //TODO
    //For each type...
    //1. Brief description of structure
    //2. Brief description of applications
    //3. Image
   render() {
    //Notes...
    //nice resource: http://www.asimovinstitute.org/neural-network-zoo/
    //images are stored in /dist/images folder
    //webpack server not yet configured to load images
    return (
     <div>
        <div>

            <img height="50%" width="50%" src='/images/feedforward.png'></img>
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