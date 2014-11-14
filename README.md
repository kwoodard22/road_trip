Road Trip
=======

### Overview

**Road Trip** is an interactive web application that allows users to test their knowledge of the US States in a race across the country. Users are encouraged to answer questions with percision to increase their score and beat  other competators for leaderboard domination.

**Road Trip** is a Ruby on Rails project completed as part of the September 2014 Web Development Immersive course at General Assembly. It was developed as a group project over a 5 day period by the following developers:

Daniell Bonilla   
Matthew Molli    
Paul Turaew    
Kelsey Woodard

### Background
**Road Trip** gamifies the learning process. By adding competative and interactive elements to memorization of basic facts, it aims to increase the user's overall comprehension.  

### User Stories / Expectations
*Top Level*

* A user should be able to complete multiple levels of **Road Trip** at varying levels of difficulty (i.e. complete different routes - being exposed to different series of questions).
* While playing the game, a user should see background images move along with the moving vehicle.
* A user can message other users to challenge and taunt them to beat their scores.

*Details*

* A user should land on a welcome page that will allow them to read about **Road Trip** and *sign in*, *register* or *play* as a visitor.
* Only registered users are allowed to save their scores and message other registered users in **Road Trip**.
* A user who has already registered can sign in and view leaderboard or take a new trip.
* Upon registration, a user will provide:
    * Email (required); 
    * Username (required); and
    * Password (required).
* Once signed in, a user can sign out.
* Once signed in, a user should be directed to the *play screen* and take a trip (play the game).
* Upon starting a trip, the user will see a new image of a state they are traveling through.
* A user's vehicle will travel across the bottom of the play screen at a set speed.
* When a user's vehicle reaches the center of the play screen, it will stop and trigger a question to pop up in the middle of the screen.
* If the user answers correctly, his/her score increases.
* If the user exhausts all possible answers without answering correctly, his/her score will not increase (or decrease).
* The user will not be allowed to progress in the race until:
    * The correct answer is received; or
    * The user runs out of answer options (multiple choice).
* At the end of the trip, the user will see his/her score and the overall leaderboard.

### Visuals
[Click for Wireframes](https://github.com_______) 

[Click for ERD](https://github.com/__________)


### Technologies Used
* Ruby 2.1.2
* JavaScript 1.8.5
* jQuery 2.1.1
* Ruby on Rails 4.1.6
* PostgreSQL Database
* Authentication using Devise gem
* Additional gems used:
    * Simplecov;
    * 12_factor;
    * Rspec, Capybara, and Jasmine testing