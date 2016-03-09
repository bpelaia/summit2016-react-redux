# Disclaimer
This presentation was for me a playground, so it uses different constructs in different places even if not needed or not consistent with the rest of the presentation. I was simply curious how it works.

# Spectacle
This presentation was made with Spectacle - ReactJS based Presentation Library:

- [Spectacle](https://github.com/FormidableLabs/spectacle/)
- [Spectacle Boilerplate](https://github.com/FormidableLabs/spectacle-boilerplate/)

I kept spectacle project layout as it allows to add custom components and avoid problems of some things not being exposed
by spectacle API when it is included as a library.

In order to keep merges with spectacle master branch clean, I moved presentation to 'slides' folder. Only assets folder was reused but it should be easy to resolve conflicts there :)  

I have also split presentation into subsections, what was inspired by [another presentation that I found on my way](https://github.com/MarkRedeman/mutation-testing-in-php)    

## Quick start

Deployed version of this presentation is available [on surge under http://summit2016-react-redux.surge.sh](summit2016-react-redux.surge.sh).
Please note that it might not be fully synchronized with this repo and change over time.

Cheat sheet:
- build dist version of presentation: `npm run build`
- run local server with presentation served in dev mode: `npm start`,
  * presentation will be available under: [http://localhost:3000](http://localhost:3000),
  * presenter mode: [http://localhost:3000/#/?presenter](http://localhost:3000/#/?presenter)


Have fun!  
