# Enterprise Web Development - Assignment 1.

__Name:__ Dylan French Carroll 20080672

## Overview.

[A bullet-point list of the features developed for the React SPA app (new/modified ones only for the Movies app),]

+ Popular Persons page
+ Favourite Persons page
+ TV Shows Popular
+ TV Shows Favourite
+ Persistence on favourite movies
+ Create Fantasy Movie
+ View created Fantasy movies
+ Persistence on Fantasy movie
+ Firebase AUTH with email/pw register and google sign in
+ Firebase cloudstore persistence for fantasy movies/favourite persons
+ Search functionality for movies 
+ Add search results to favourites
+ Persistence on Movie favourites

## Feature Design.

[ For each feature listed in the overview, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include captions with the images.]

e.g. 

#### The Upcoming Movies feature.

> Lists movies from the Upcoming movies endpoint of TMDB

![][image1]

#### Movies Reviews feature.

> Lists all the reviews for a particular movie (text extract only).

![][image2]

> Click the 'Full Review' link of an entry in the above list to show the full text of a review. 

![][image3]

.... other features .......

## Storybook.

[ Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][image5]

## Authentication.

[ List all the routes in your app and highlight those that are protected/private (require authentication).]

(Auth Protected)
+ /movies/favourites - Favourite movies page
+ /movies/watchlist - Movie watchlist page
+ /movies/upcoming - Upcoming movies page
+ /movies/popular - Popular movies page
+ /movies/:id - Details page for specific movie
+ /persons/popular - Popular persons page
+ /persons/:id - Details page for person
+ /persons/favourites - Favourite persons page
+ /tvshows/popular - Popular TV Shows page
+ /tvshows/favourites - FAvourite TV Shows page
+ /tvshows/:id - Details page for TV Show
+ /fantasy/create - Form to create fantasy movie
+ /fantasy/list - View all Fantasy movies
+ /search/results - View results of term search (Movies)
+ / - Home page showing discover movies
+ "*" - Redirector to default to home page /
+ /reviews/:id - Specific review page
+ /reviews/form - Route for creating review

(Unprotected)
+ /signup - Sign up component for Firebase
+ /login - Login component for Firebase
+ /logout - Logout route to logout user

#### Protected features (if relevant)

[ Briefly state other areas where you used authentication in the app, for example, to protect access to functionality, e.g. only authenticated users can 'favourite' a movie.]

#### Supabase (if relevant)

[ Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[ Specify the URL of your deployed app and include a screenshot(s) from your deployment platform (e.g. Vercal) account that verifies its use for this app. Have a preregistered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[ If you are persisting data to the Supabase backend, e.g. favourite movies, fantasy movie, include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png
