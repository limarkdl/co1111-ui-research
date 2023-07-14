# UI RESEARCH
UCLAN Project. This is an assignent for CO1111 (Computing Challenge, 2022-2023), a research project to understand meaning of non-zero progress bar.

 
## Idea
This is the final task for the 2nd year, in which you need to create a product and use A/B testing to confirm or disprove the hypothesis about the organization of UI/UX. In my case, I chose the hypothesis that a progress bar that starts at a non-zero value gives confidence to the user and reassures him, as if the end is near and he is doing well. For my research, I created a quiz where the progress bar is used very often. I made two different 'Quiz' elements, the options of which are selected with 50% probability, thanks to which I received feedback both for the progress of the bar from a non-zero value and from zero.

> P.S. Since I'm an international student, I've decided to make this research for EN/RU users. This allowed me to extend my testing group.

> P.P.S. At the time of creation, I had no experience with i18next, so to speed up the development process, I've decided not to use this library this time. 


<details><summary><h3>Stack</h3></summary>

 ##### Hosting
  
  ![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=for-the-badge)

  ##### Frontend
  ![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=for-the-badge)
   ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white) 
  ![TailWind CSS](https://img.shields.io/badge/-TailWind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 

  ##### Backend
  ![Google Apps Script Badge](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?logo=googleappsscript&logoColor=fff&style=for-the-badge)
  ![Google Sheets Badge](https://img.shields.io/badge/Google%20Sheets-34A853?logo=googlesheets&logoColor=fff&style=for-the-badge)



</details>


<details>
  <summary><h3>Appearance</h3></summary>
  
##### Main

  ![Main Page](https://github.com/limarkdl/ui-research/assets/116545670/870acb8a-a1fd-4dbb-9ea0-846d4691c75e)

##### Quiz

  ![Quiz](https://github.com/limarkdl/ui-research/assets/116545670/f89edf76-0573-401e-a10a-c1e55f521321)


##### Quiz completed
  
  ![Quiz completed](https://github.com/limarkdl/ui-research/assets/116545670/4bd4ebac-4d16-4b67-957b-2dfc7fd702a4)

##### Questionnaire

  ![Questionnaire](https://github.com/limarkdl/ui-research/assets/116545670/f598f4c9-c15a-4804-8a32-a5b07b7c66fb)
##### Complete
  
  ![Complete](https://github.com/limarkdl/ui-research/assets/116545670/455776e7-97c0-4632-a32c-efa113b1e7a7)
  
</details>


## Analysis
### Screenshot of Google Sheet with received data:
![2023-07-14_03-41-06](https://github.com/limarkdl/ui-research/assets/116545670/7cd186c2-a573-4ae5-ab2d-d519b6954d6e)

### The pairplot visualizes pairwise relationships in the dataset:
![image](https://github.com/limarkdl/ui-research/assets/116545670/97b45b89-069f-472c-b6f5-59d97122458e)

### Observations
1. Looking at the data, it's hard to see a clear difference between the "Start from Zero" and "Not start from Zero" groups for most things we're studying. This means that where the progress bar starts might not have a big influence on these things.

2. But, when we look at the "Ease of Use of Progress Bar" compared to other things, we start to see some possible differences. It appears that the group who started from zero tends to find the progress bar more user-friendly, especially when they're not feeling bored or depressed.

3. For feelings of interest, confidence, and quiz scores, both groups are quite alike. This hints that the starting point of the progress bar might not have a big impact on these areas.

4. When it comes to feelings of boredom and depression, we see slight differences. The group that didn't start from zero seems to feel a bit more bored and depressed. This could mean that starting the progress bar somewhere other than zero might make people feel slightly more bored and sad.

##  Conclusion

### Participants found the progress bar that starts from zero more interesting (higher Interest Feelings) and convenient (higher Convenience of Progress Bar rating).


### Participants scored higher in the quiz when the progress bar did not start from zero.
