# Contributing to Visual Music

## First steps
__Wanted : contributors!__                           
Does the project appeal to you? Contact us on Discord and we'll provide the link to the __Trello board__! :smiley:

Team Lead:     
* Lead: [lucierabahi](https://github.com/lucierabahi)
* Tech Advisor: [justinwlin](https://github.com/justinwlin)
* Frontend Lead: [YogiHa](https://github.com/YogiHa)
* Design Lead: [abneha04](https://github.com/abneha04)   
* Backend Lead: ?      
* QA Lead: ?                      
*quality insurance: to check the code for issues before a PR can be merged*

__We recognize all contributors__
Contributions can be:
Answering questions, bug reports, code, documentation, content, design, PR reviews, ideas & planning, translation, tests, tutorials, etc.     

### When contributing to this repository, check the Trello board for available tasks.    
### If the task is:
* __Available__: Go ahead and *claim the task*, and proceed to work on a PR
* __Claimed__: If someone else has claimed the task, speak with them or one of the project admin. *PRs will only be accepted from the person that claimed that task.*
* __Non-Existant__: If the feature does not appear on trello, *discuss it on Discord or speak with a project admin*.

The above is to ensure, everyone has the chance to get involved without waiting their time or rushing to add the feature.

Please also note we have a [code of conduct](https://github.com/zero-to-mastery/visual-music/blob/master/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Visual Music Process
### REFERENCE
Infos on technology and timeline, useful references for the team.

### Icebox
Backlog of pending items, which might mean:
* bugs,
* future planned features,
* blockers (meaning a particular task is holding everything else up, or the task doesn't need to be completed then and there),
* etc.

### Tasks Selected
Current things that are approved to work on and can be assigned or claimed.

### In Progress
Self-explanatory. Drag your task into this section, when you start working on it.
NOTE: Always create a new branch when working on a task!

### Review
This is where tasks are placed whilst the PR has been submitted and is awaiting approval. Once the code has been reviewed, it will be merged and the card can be archived.


## Contributing
We use Trello for task management. If you want to contribute, contact a project admin through Discord (we have a dedicated channel for the project __#visual-music__), an invitation to join the team on Trello we'll be given to you. Feel free to write the team some lines so the contributors get to know each other, add your name on the CONTRIBUTORS.md list and... you're good to go! 

## Working on Code
* Pick a listed task from the __Tasks selected__ area, assign it to yourself by editing your name into the card
* Or suggest a task on the #visual-music channel on Discord, that you can as well claim once approved, and start working on it
* If you want to work on an ongoing task, get permission from the person whose task is assigned to
* Start a new branch or fork and start coding
* Always let others in Discord know what you are working on

### Tip: think in components
The application will be developed using the React library, Figma for design and p5 for music visualization. It is suitable to think in components, meaning small units with precise functionalities that are reusable.     

Example of a basic page, based on components, using those three tools:

                  {
                  	import React from 'react';
                    import P5Wrapper from 'react-p5-wrapper';
                    import sketch from '~/sketch';
                    import FigmaComponent from '~/FigmaComponent.svg';

                    export default function BasicExample() {
                        	return( 
                            <div>
		                 	      	<P5Wrapper sketch={sketch}/>
		                 	      	<img src={FigmaComponent}/>
		                 		   </div>)
                                     }
                            }

### Running the project on your local machine
To avoid complex configuration, the backend of our application is running under Docker Compose.
Installation:           
https://docs.docker.com/compose/install/

after installing and cloning the repo -

1. On the terminal:  
   $ cd visual-music/server     

   $ npm install     

   $ docker-compose up       

2. In a new terminal:                    

   $ cd visual-music  

   $ npm install     
   
   $ npm start  
 
## Adding Library
If you have any library that you want to use, please discuss it with the team first, as we want to avoid using different libraries that do the same thing.

# Resources
## p5.js for music visualization examples: 
* https://www.youtube.com/watch?v=2O3nm0Nvbi4
* https://www.youtube.com/watch?v=jEwAMgcCgOA
* [How to save frames in p5](http://p5js.org/reference/#/p5/saveFrames)

## Similar projects
* [Preziotte Party Mode](https://preziotte.com/partymode/)        
  * GitHub repo: https://github.com/preziotte/party-mode           
* [React music player](https://ashinzekene.github.io/react-music-player/)        
  * GitHub repo: https://github.com/ashinzekene/react-music-player       
* [Poibella SoundCloud visualizer](http://poibella.org/viz2/soundcloudvision/)   
  * GitHub repo: https://github.com/sfmiller940/soundcloudvision    
  
## Released Music Visualizers
[Mazetools Soniface](https://www.mazetools.com/)        
[Harmogram](https://harmogram.com/)       
[Dadim](https://do.adive.in/music/99)    

## Technology / Stack
* [Using p5 with React](https://discourse.processing.org/t/using-react-with-p5-js-es6-support/3298)
* [Figma](https://www.figma.com/) 
  * https://www.youtube.com/watch?v=PaPIsyO1t3Q         
  * https://youtu.be/3q3FV65ZrUs     
* [p5.js](http://p5js.org/)    
  * https://www.youtube.com/watch?v=8j0UDiN7my4     
  * https://p5js.org/learn/             
* [Storybook](https://storybook.js.org/)            
  * https://www.youtube.com/watch?time_continue=106&v=p-LFh5Y89eM     
  * https://www.learnstorybook.com/      
* [React](https://reactjs.org/)          
  * https://reactjs.org/tutorial/tutorial.html         
  * https://reactjs.org/community/courses.html   
* [Docker](https://www.docker.com/)      
  * https://www.youtube.com/watch?v=C6LtRb1OJuw&app=desktop        
 
## Miscellaneous
### Digital Signal Processing theory:
* https://www.youtube.com/watch?v=HJ_-5mqUZ70 
* https://www.youtube.com/watch?v=spUNpyF58BY
 
### Music visualization theory:        
[World Music Instrument Models and Theory Tools](https://www.facebook.com/WorldMusicInstrumentsAndTheory/)       
[Visual Future of Music - Theory tools](https://visualfutureofmusic.blogspot.com/p/matrices-frequency-atlas.html)   
[Andrew Douglas Hope's article](https://github.com/zero-to-mastery/visual-music/blob/master/Andrew-Douglas-Hope.md)   from [Quora](https://www.quora.com/What-are-ways-of-visualizing-music)  

### About the influence of language of perception:       
[Lera Boroditsky on Ted](https://www.youtube.com/watch?v=RKK7wGAYP6k)  
