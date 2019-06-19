## Visual Music WebApp
An app that converts your favorite music pieces into visual expressions. 

Visual Music is a collaboration project managed by a group of dedicated fellow students. Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a streamed music piece. 

If the visual transcription can be at first of random assignment of colors and shapes, it shouldn't remain so, as **one of the main interest is to transcribe the emotional effects of the music piece**. Therefore, questions will araise as perception is highly cultural and language induced. It might be interesting in a second time to create various themes based on those considerations for the visual transcription.

## Applications
The applications could be :
* the possibility to screen the visual expression as background for parties, concerts and stages, 
* accessibility, by giving a visual transcription of music pieces, making them accessible to the hearing impaired,
* creation of original objects, with the possibility of a screen capture going with a downloadable HD print file, the possibility of printing, framing and offering the painting of a song to friends and family,
* tool or interesting experiment for musicologists, linguists, scientists, etc.

## Technology/Stack:
Is being defined. We need to find an API that would allow us to stream songs in our app, and from which we could grab data in a suitable way for analysis and conversion into visual output using p5.

The idea was to combine:
* React
* p5
* Soundcloud API    

===>__SoundCloud API is no longer available, we have to search for another option__        
* Figma to design the UI interface

Potential Add-On:
* [StoryBook](https://storybook.js.org/) Will let us test components individually
* [react-p5-wrapper](https://www.npmjs.com/package/react-p5-wrapper)

__Idea:__ Stream music from an API, take the data that we have and process it through p5.js. 

The readme of that project [soundcloud-visualizer](https://github.com/michaelbromley/soundcloud-visualizer) is a good explanation when using SoundCloud, which sends 2 variables, that can be parsed to create a visualization based on those.

__Examples of Soundcloud implementations:__            
https://codepen.io/DonKarlssonSan/pen/bdNBMz                
https://www.reddit.com/r/visualization/comments/54lxof/soundcloud_music_visualizer/        

### Challenges to solve to define tech/stack
#### Finding a suitable API
#### Checking potential browser implementation issues
#### How to analyse data and output visual:
Again, with Soundcloud, we were thinking of:
[React Native Soundcloud Streaming App Tutorial, part 2](https://www.youtube.com/watch?v=Fcf-tgSI3x0)

Seems like we can take waveform data we receive about a song and turn it into a drawing through some interpretation of the waveforms. 

We would need to do some processing before storing it because there will be too many points: we need to divide them into chunks and clean the data / simplify it. 

Probably the first sort of testing for example is: 
* getting / testing the api for SoundCloud   
* the next step is subdividing those responses    
* then afterwards, can we draw with those responses? 

We'll need to figure out how to play music + do visualization at the same time.

## Useful Links
[Zero to Mastery - Guidelines on open source](https://github.com/zero-to-mastery/start-here-guidelines)            
[CONTRIBUTING.md](https://github.com/zero-to-mastery/visual-music/blob/master/CONTRIBUTING.md)


## Functionalities
### Version 1.0
* 2 pages:
  * landing page
  * player page
* ?API? streaming
* Play/Stand-By
* Export and download screen capture
* One main theme for visual transcribe
* No registration
    
### Version 2.0
* New visual themes
    
### Version 3.0
* (User can upload audio files?)
* (User can input live music?)

## Release & Launch
Visual Music is being built with the intention of releasing and maintaining the project in the real world. Therefore providing contributors with a great opportunity to expand on and learn new skills, being part of a project that can be included on resumes and showed off to friends, family and potential employers.

Should be discussed and decided by the team in charge when constituted...
* ZTM Discord
* LinkedIn
* ...
