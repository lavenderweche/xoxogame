# OVERVIEW

This is a game of X and Os or also known as Tic Tac Toe. The simple game has been created for my JavaScript module project submission. 
It consists of two players who have to get 3 X's or O's in a row (including a diagonal row), with X being the first player. 


# X AND O GAME
This is a game of X and Os or also known as Tic Tac Toe. The simple game has been created for my JavaScript module project submission. 
It consists of two players who have to get 3 X's or O's in a row (including a diagonal row), with X being the first player. 
![alt text](<Start Screen.png>)

## Live Site
The link to the deployed site is below

(https://lavenderweche.github.io/xoxogame/)

## Repository
The link to the repository is below

(https://github.com/lavenderweche/xoxogame)

## Author

Lavender Nelly Nyakowa

## Table of Contents
🚀 **merit & beyond**

Generate after readme is complete by copying and pasting your readme from this point & below into this tool:
- [mardown table of contents generator](https://ecotrust-canada.github.io/markdown-toc/)
**NOTE:** It does have some bugs if you have dashes or trailing spaces in your headers

# UX

## Target Audience
This is a very simple game to be used to pass time. You could be on a bus, train or in the park looking for something to keep you busy, and this would be the perfect game for that. It takes a very short time to play it but, would definitely keep you busy for a while. 
It can also be used by children to keep them busy and used to develop their brains by trying to make them think logically so as to win the game.

## Project Goals

- This site presents a game of X and O
- I am currently trying to build my HTML, CSS and JavaScript skills and the game contained a combination of all.

### Site User Stories
🚀 **merit & beyond**

### Website Owner Stories
🚀 **merit & beyond**

### Developer Stories
🚀 **merit & beyond**

## Design Choices and Colors 

Since the site only comprises of a small box with user entries requires. The font sizes used are big to allow visually impared users to interact with the site at ease. 
I kept this very simple when it came to the colours because learning from my previous projecty, "less seems to be more in UI".
The color choice of the font is orange, because as I was reserching, the orange color used was one of the color blind friendly choices.
![alt text](<Color Palette.png>) from the https://www.color-hex.com/color-palette/1007680 site.

The game does not require much when it comes to the positioning, so I ensured that the entry boxes are in the centre of the page.

# Features
- **The entry box:** the game players can play the game by clicking on the box that they would like to make the entry.
- **First Player:** the first player is the X player, this is because just like the name suggests "X and O", the game has to start with the X player followed by the O player.
- **Validation:** the validation is done to check who has won, by checking the positions/boxes which contain the entry and determine whether there are any entries that have been put in a row. The winner is whoever gets to 3 Xs OR Os in a straight or diagonal row.
- **Results:** when one of the player wins, the results are displayed on the screen.

## Implemented Features
🚨**Required** 

The implemented features are more or less the same as the ones above under the features section. The focus for this game was mostly on the JavaScript logic so most of the UI features from the other HTML and CSS modules were not implemented in this. 


## Future Features

In the future, I would like to implement more features. See below.

- Play online with other players.
- Expand on the user interfacef so that it is more appealing to children too


## Testing

1. Validation of the entries: tested that the winner can actually be determined by the entries that the player inputs.
2. Responsiveness: the game responds to the decreasing of the screen
3. Game results: the game results show up when a user wins.


### CSS Validation

![alt text](<CSS validator results.png>)

### HTML Validation


If you only have one HTML file for your project, you only need to run this once for your deployed url, but if you have different files even for a thankyou or 404, run it by direct input per file or by deployed url per file.

- include a screenshot for each HTML file with the Blue Nu Html checker down to the blue checking complete bit. It's ok to have info and warnings. 
- You may need a scrolling screenshot to capture this one. I tend to use the [GoFullPage extension in chrome](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl):

[HTML Validator](https://validator.w3.org/)

**index.html**
![img.png](documentation/images/index-html-validation.png)

**404.html**
![img.png](documentation/images/404-html-validation.png)

## Compatibility and Responsive Testing
🚨**Required** 

Minimally you should use dev tools and emulators to try to test you site on various screen sizes and browsers and note it in a table:

I ensured my site was worked well, and looked nice on a variety of devices & browsers as noted in the table below:

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog6            | chrome 78   | android 8  | XS 360 x 640  |
| browser stack: iPhone5s       | safari  13  | iOs        | XS 320 x 568  |
| dev tools emulator: pixel 2   | firefox  69 | android 8  | SM 411 x 731  |
| browserstack: iPhone 10x      | Chrome 78   | iOs 11     | SM 375 x 812  |
| browserstack: nexus 7 - vert  | Chrome 78   | android 7  | M 600 x 960   |
| real tablet: ipad mini - vert | safari  13  | iOs 6      | M 768 x 1024  |
| browserstack: nexus 7 - horiz | firefox 69  | android 7  | LG 960 x 600  |
| chrome emulator: ipad - horiz | safari 13   | iOs        | LG 1024 x 768 |
| browserstack windows PC       | Chrome 78   | windows 10 | XL 1920 x 946 |
| real computer: mac book pro   | safari 12.1 | Mohave     | XL 1400 x 766 |
| browserstack windows pc       | IE Edge 88  | windows 10 | XL 1920 x 964 |


🚀 **merit & beyond**
Document why you chose the devices:

1. Visit https://gs.statcounter.com/browser-market-share to figure out the most popular browsers & operating system combos seen across the web for the geographic region, and platform(s) and screen sizes you expect your users to belong to. 

2. Include a sentence about why you chose the combinations you did.

3. Create a table that lists out what devices, browsers, and operating system you tested your application on and a brief description of why you chose the mixture you did. The point is to prove that you looked at the site across various browsers, operating systems, and viewport breakpoints.

4. if you can't find the browser/device/OS combinations you want on Browserstack with your GitHub student webpack (or you didn't activate that in time), note what you'd ideally test on then what you ended up testing on as a compromise. 

5. Build a table to summarize the choices you made [markdown table generator](https://www.tablesgenerator.com/markdown_tables)

The combinations above were chosen because of the following information I gathered  from [ga.statcounter.com]( https://gs.statcounter.com/browser-market-share) for the US from Aug-Oct 2021:
**browser Version Market Share**:
  - safari iphone: 26.32%
  - chrome for android: 21.32%
  - Chrome 105.0: 15.77%
  - Chrome 104.0: 6.28%
  - Edge 105: 4.99%
  - Safari 15.6 3.76%
**browser Market Share**
  - chrome: 50.28%
  - Safari: 34.65%
  - Edge: 6.37%
  - Firefox: 3.52%
  - Samsung Internet: 2.04%
  - Opera: 0.89%
**platform breakdown**
  - mobile: 51.26%
  - desktop: 45.73%
  - tablet: 2.97%
  - console: 0.03%

## Manual Testing
🚨**Required** 

For any scenarios that have not been automated, test the user stories/features manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios in markdown such as:

**Manual Testing For Contact Form**
1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

Or you can use markdown check boxes and write them up per feature:

**Manual Testing For Contact Form**
- [x] try to submit 
- [x] Try to submit the empty form and verify that an error message about the required fields appears
- [x] Try to submit the form with an invalid email address and verify that a relevant error message appears
- [x] Try to submit the form with all inputs valid and verify that a success message appears.
- [x] no console errors
- [x] submit goes to code institute data dump page in new tab
- [x] looks good on mobile (one column)
- [x] looks good on tablet (two columns)
- [x] looks good on desktop (two columns but not SUPER HUGE)

Or you can use a spreadsheet
    
Here is a [Manual Testing Template](https://docs.google.com/spreadsheets/d/1vc1IVL-ydQwWeWMqnk_GRox6HE6qxDLpchGse8Crayo/edit#gid=296578096) that you can use as a starting point to keep track of your testing efforts. Make a copy of it in your own account and update as needed to reflect the browsers you are testing and features.  

It's ok to spot check specific functionality across devices and browsers but each page should be viewed as a whole for each device/browser combo at least once.

A quick way to check if items are exceeding the screen width of a project is to run this javascript in the console for various screen emulations:

```
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'),function(el){if(el.offsetWidth > docWidth){console.log(el);}});
```

## Defect Tracking
🚨**Required** 

Try to create issues in real time as it better reflects the daily life of a developer.

The easiest way to track defects is by using GITHUB's Issues to track these as it's really easy to copy/paste screenshots in and then write up how you closed them. At this stage you don't need a custom template or labels, that comes in P4.

Here's a quick [overview of creating GitHub issues](Defects.md)

You can also just bullet point them here, or create a google spreadsheet and link to that here.

## Defects of Note
🚀 **merit & beyond**

Some defects are more pesky than others. Highlight 3-5 of the bugs that drove you the most nuts and link to them directly here. The accessors really like to know the struggle is real and that by doing this you picked up more skills.


## Outstanding Defects
🚨**Required** 

It's ok to not resolve all the defects you found as long as:
- it does not impact a user from completing a vital function on the website
- it only affects a very small subset of users
- is an extreme edge case that very few users would try
- there is an open issue against a framework, browser or technology used

If you know of something that isn't quite right, create an issue and link to it here and explain why you chose not to resolve it. 

Sometimes it's as simple, word wrapping issue that makes the site look odd at a certain screensize that you just didn't have time to fix due to the impending deadline it's best to mention it but note why you allowed it to go live: "Yes it looks odd, but it doesn't impact core functionality of the site." than to let the accessors think you didn't notice it. 

## Core Web Vitals
🚀 **merit & beyond**
SEO is greatly impacted by your core web vitals. The readout from https://web.dev/measure/ which is essentially a lighthouse audit gives your site scores in 4 categories. Ideally you want your site to be in the green for all 4 scores. web.dev has dedicated servers to test deployed sites without extensions that skew the results, so it's best to get results from this site.
 You should talk about the results for each section pay attention to 


## Accessibility Testing
🚨**Required** 

Accessibility testing is aimed to make sure that those with visual or physical disabilities can still browse your website. Some users have had strokes or accidents that make it difficult to use a mouse, so they use keyboard keys to tab through sites. Others use screen readers that rely on HTML tags to help the user navigate quickly through the site to find information they want, others have color blindness or contrast issues. It's the law to provide services 
Here's a [site](https://www.w3.org/WAI/fundamentals/accessibility-intro/#:~:text=Accessibility%20is%20Important%20for%20Individuals%2C%20Businesses%2C%20Society,-The%20Web%20is&text=That%20is%2C%20the%20accessibility%20barriers,older%20people) where you can learn more about accessibility and the internet.

### Accessibility Audits
🚨**Required** 

Accessibility audits run through the HTML and determine if the parts of the WCAG (web content accessibility guidelines ) that are implemented through HTML tags and attributes are present. They can do some checking for low vision/contrast stuff too.

You should run your deployed website pages through  at least on auditing tool. lighthouse's audit to check performance, accessibility, best practices and SEO scores. You should aim to get 85 or higher score on accessibility. 

**You should fix issues associated with:**
- contrast 
- aria labels
- alt text
- large images
- skewed images

**Lighthouse**
https://web.dev/measure/  If you have lower scores, read the report and follow the links to address the flagged issues. You can run this tool from Chrome Dev Tools too against your local machine, but chrome extensions can sometimes give you missing alt text on things like the grammarly plug in tracking pixel.

You want a score in the green for accessibility and should look at ways to get it to 100.



**[WAVE chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) extension**
Wave is developed by webaim.org and does a bit better at contrast issues and uses 2.1 guidelines

**Contrast Checkers**
- https://webaim.org/resources/contrastchecker/
- https://color.a11y.com/

### Keyboard Navigation
🚀 **merit & beyond**

Another way to accessibility test your site is to try to click on the browser URL and see what happens if you use the tab, arrow and enter keys. Does it work well or does the user get stuck? Check this in a couple browsers as the focus & active outlines are typically styled by the browser

The expected results for various keyboard entries and field types can be found [here](https://webaim.org/techniques/keyboard/#testing)

You can take a video of this testing if you want and convert it to a gif and paste that into your readme. Record something to yourself in a Slack direct message, then download it. Then you can use https://cloudconvert.com/mp4-to-gif to convert the mp4 to a gif and just paste it into the readme via GiHu, and it'll resolve itself.


### Chrome Vox Reader
🚀 **merit & beyond**

If you are really ambitious, you can use the [VoxReader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) extension in chrome to see what your site sounds like on a screen reader. It really drives home the need for good aria-labels & semantic HTML.

# Technologies Used
🚀 **merit & beyond**

This section just summarizers tools and programming languages you used.

## Languages
🚀 **merit & beyond**

-write bullet points for the languages you used (HTML & CSS)

## Frameworks, Libraries & Programs Used
🚀 **merit & beyond**

List out the tools you used with a link and a short description (this helps others figure out where to get the bonus points & reminds you what you used for your next project
- Balsamiq
- Coolors.co
- fontawesome
- gitpod
- github
- google fonts
- font awesome
- amiresponsive
- table of contents creator
- markdown table generator


# Deployment
🚨**Required** 

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages).

-Enumerate steps and use screenshots to make the instructions are clear.

You may want to re-watch the [initial deployment in gitpod video](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/9b06129195c64fada6783de9cfe82d60/) when writing up this section.

## Deploy to GitHub Pages
🚨**Required** 

Write out steps you would take and test them to deploy your code to GitHub Pages, include screenshots if you think they would make the process easier.

## Forking The Repository
🚀 **merit & beyond**

A fork creates a completely independent copy of Git repository. In contrast to a fork, a Git clone creates a linked copy that will continue to synchronize with the target repository, so if you want to ensure other people don't commit to your public repo, you might want to tell them to fork the repository :) 

## Run Locally With GitPod
🚀 **merit & beyond**

Enumerate and write the steps of how to run a project locally via gitPod. Include Screenshots to maximize the impact of the instructions.

# Credits
🚨**Required** 

To avoid plagiarism amd copyright infringement, you should mention any other projects, stackoverflow, videos, blogs, etc. that you used to gather imagery or ideas for your code even if you used it as a starting point and modified things. Giving credit to other people's efforts and ideas that saved you time acknowledges the hard work others did.  The accessors expect something here, there is no way you didn't have to get help on making such a nice project.

## Content
🚨**Required** 

Use bullet points to list out sites you copied text from and cross-reference where those show up on your site. If you truly are an expert in the content you provided, say that due to your exposure/experience of the topic covered, you created the content on your own.

## Media
🚨**Required** 

Make a list of sites you used images, icons & youtube, & audio files from. If you used several sites try to match up each image to the correct site. This includes attribution for icons if they came from font awesome or other sites, give them credit. If you took the images yourself, give yourself credit.

You should not be using images taken from copyrighted sites, but only royalty free ones. Try typing `!copyright` in slack and see what help it gives you for this topic.

## Acknowledgments
🚀 **merit & beyond**

This is the section where you refer to code examples, mentors, blogs, stack overflow answers and videos that helped you accomplish your end project. Even if it's an idea that you updated you should note the site and why it was important to your completed project.

If you used a CodeInstitute Example project as a starting point. Make note of that here.
