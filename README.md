# Enterprise Web Development - Assignment 1.

__Name:__ Dylan French Carroll 20080672

## Overview.

+ Popular Persons page
+ Favourite Persons page
+ TV Shows Popular
+ TV Shows Favourite
+ Create Fantasy Movie
+ View created Fantasy movies
+ Persistence on Fantasy movie
+ Firebase AUTH with email/pw register and google sign in
+ Firebase cloudstore persistence for fantasy movies/favourite Movies
+ Search functionality for movies 
+ Add search results to favourites
+ Persistence on Movie favourites
+ Pagination on all pages
+ Order of favourites

## Feature Design.


#### The Popular Persons feature

> Lists people from the popular persons endpoint of TMDB
![][popular_persons]



#### The Favourite Persons feature

> Lists favourite people from the users
![][fav_persons]



#### The Popular TV Shows feature

> Lists people from the popular TV shows endpoint of TMDB
![][popular_tv]



#### The Favourite TV Shows feature

> Lists favourite TV shows from the users
![][fav_tv]



#### The Create Fantasy Movie feature

> Form to enter Fantasy movie details
![][fantasy_create]



#### The View Fantasy Movies feature

> Page to view Fantasy movies
![][fantasy_view]



#### The Fantasy Movie Persistence feature

> Screenshot of fantasy movie details saved in DB
![][fantasy_persist]



#### The Movie Search + Favourite feature

> Page that shows search results and ability to favourite them
![][search_movie]



#### The Movie Favourites Persistence feature

> Screenshot to show Movie ID's favourited in DB
![][fav_movie_db]



#### The favourites order feature

> Screenshot showing the buttons to reorder favourites in UI
![][fav_order]



#### The Pagination feature

> Shows the pagination feature
![][pagination]


## Authentication.

#### (Auth Protected)
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

#### (Unprotected)
+ /signup - Sign up component for Firebase
+ /login - Login component for Firebase
+ /logout - Logout route to logout user

## Deployment.

https://web-dev-masters.vercel.app/

You can log in with google or you can register with an email and password. A temporary one have been set up already.

Username: test@test.com - Password: test12


## Persistence + Auth.

Firebase Domain registered: 
![][firebase_domain]

Proof of users registered to the app:
![][firebase_auth_users]


Proof of data stored in Cloudstore:
![][firebase_cloudstore]

## Additional Information

Usage of Firebase instead of supabase as I had preferred using this service as I know I get full control of every aspect of the AUTH/Persistence with many different products available in Firebase. 

[firebase_domain]: ./images/firebase_domain.png
[firebase_auth_users]: ./images/firebase_auth_users.png
[firebase_cloudstore]: ./images/firebase_cloudstore.png
[fantasy_create]: ./images/fantasy_create.png
[fantasy_persist]: ./images/fantasy_persist.png
[fantasy_view]: ./images/fantasy_view.png
[fav_movie_db]: ./images/fav_movie_db.png
[fav_movies]: ./images/fav_movies.png
[fav_order]: ./images/fav_order.png
[fav_persons]: ./images/fav_persons.png
[fav_tv]: ./images/fav_tv.png
[homepage]: ./images/homepage.png
[pagination]: ./images/pagination.png
[popular_persons]: ./images/popular_persons.png
[popular_tv]: ./images/popular_tv.png
[search_movie]: ./images/search_movie.png
