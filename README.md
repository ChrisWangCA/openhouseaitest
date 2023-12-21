
# openhouseaitest

**Project Setup**

1.Clone the repository

2.install dependencies
`npm install`

3.start the development server
`npm start`


**NOTE**<br><br>
**CommunityList.tsx**:A React component that renders the list of community data.<br><br>
**CommunityListContainer.tsx**: It's responsible for fetching the data from the provided endpoints, managing state, and passing the community data down to the CommunityList component.  <br><br>
**apiServices.ts**:This file contains functions for making API calls to fetch data from the given RESTful endpoints.  <br><br>
**communityTypes.ts**:This file likely defines types for the community&home data.   <br><br>
**getAvgPrice.ts**:To calculate the average price of homes within a community.  <br><br>
**setupProxy.js**:This file is used to configure a proxy for local development, to deal with CORS issues.  <br><br>

It will show other images if there is no url for the image.

If given more time, how would you improve the quality of your application? Would you implement anything differently? 

1.Adding features like filters or search functionality to quickly find communities.

2.Fetch images from the search API if the image does not exist.

3.Implementing lazy loading for images to improve page load times.

4.Improving error handling for network issues or bad responses from the API.

5.Providing clear notifications for loading states, errors, and successful operations.

6.Writing unit tests for key components and functions.

