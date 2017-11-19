import React from 'react';

/*Please give yourself credit for the stuff you do!
We can make it more concise at the end, but for now
use this to track what everyone does.*/
const code_credit=[
  'NavBar By Jennie Zheng',
  'blandit diam vel, mattis arcu',
  'Morbi auctor leo congue',
  'Aliquam vel risus at libero'
]
const lesson_credit=[
  'Dropout Page by No Name',
  'blandit diam vel, mattis arcu',
  'Morbi auctor leo congue',
  'Aliquam vel risus at libero'
]
const design_credit=[
  'Animal Pictures by No Name and No Name',
  'blandit diam vel, mattis arcu',
  'Morbi auctor leo congue',
  'Aliquam vel risus at libero'
]
const credits={code:code_credit,lesson:lesson_credit,design:design_credit}

export default class Credits extends React.Component {
  render(){
    return (
      <div id='credits'>
      <h1>Code</h1>
         {
          credits.code.map(function(line){
            return (<h3>{line}</h3>)
          })
        }
      <h1>Lessons</h1>
        {
          credits.lesson.map(function(line){
            return (<h3>{line}</h3>)
          })
        }
      <h1>Design</h1>
        {
          credits.design.map(function(line){
            return (<h3>{line}</h3>)
          })
        }
        </div>
    )
  }
}
