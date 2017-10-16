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

class Chapter{
  constructor({name='no name',
               icon='fa-circle-o',
              desc=''}) {
    if(desc!='') this.desc=desc;
    else this.desc=name;
    this.name=name;
    this.icon=icon;
  }
}



/*
Todo: 
pick icons for each chapter
reword each chapter
*/
const ch_intro=new Chapter({
  name:'Intro'
})

const ch_basics=new Chapter({
  name:'Basics'
})

const ch_uncertainty=new Chapter({
  name:'Uncertainty'
})

const ch_largernetworks=new Chapter({
  desc:'Larger Networks',
  name:'Larger'
})


const ch_regularization=new Chapter({
  name:'Regularization'
})

const ch_cnn=new Chapter({
  name:'CNN',
  desc:'Convolutional Neural Networks'
})


const ch_sandbox=new Chapter({
  name:'Sandbox'
})


const ch_conclusion=new Chapter({
  name:'Conclusion'
})

const ch_credits=new Chapter({
  name:'Credits'
})

const chapters=[ch_intro,ch_basics,ch_uncertainty,ch_largernetworks,ch_regularization,ch_cnn,ch_sandbox,ch_conclusion,ch_credits]

/*Todo: Sandbox Projects*/
class Project{
  constructor({name='no name',
              desc='no desc',
               url='#',
               author='no author',
              img='https://images.unsplash.com/photo-1472345113808-03a78a564cc5?dpr=1&auto=compress,format&fit=crop&w=1353&h=&q=80&cs=tinysrgb&crop='}) {
    this.desc=desc;
    this.name=name;
    this.url=url;
    this.img=img;
    this.author=author;
  }
}

const ex_project=new Project({
  name:'Example',
  desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
})

const projects=[ex_project,ex_project,ex_project,ex_project]


const Data={chapters:chapters, projects:projects,credits:credits}

export default Data;