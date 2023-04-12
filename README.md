# SeedlingHub
- This is a web application for marketing seedlings.It allows you to create, read, update and delete farmers.With your list of farmers, you are able to see the list of seedlings they have and share information about the seedlings for marketing purposes.

### Features
#### FarmersList

- Create a new farmer
- Update an existing farmer
- View a farmer with the seedlings they have
- Delete a farmer

### Techologies Used
- This application was built using the following technologies

- Ruby on Rails
- React
- CSS

### Models
- i have two models
```ruby
Seedlings belong to a Farmer.
Farmer has many Seedlings
```
![Untitled (2)](https://user-images.githubusercontent.com/99640531/231582870-f3f9d020-3266-4363-a559-a93606e44512.png)

### Getting Started

- To get started with this application, you should have Ruby and Rails installed on your local machine.

  - Clone the repository to your local machine.
  - Navigate to the project directory and run bundle install to install the necessary gems.
  - Run rails db:create and rails db:migrate to create and migrate the database.
  - Navigate to the client directory and run npm install to install the necessary npm packages.
  - Run rails s to start the Rails server and npm start to start the React server
  - Run `foreman start -f Procfile.dev` to start the React server

### License
This project is licensed under the MIT License. See the LICENSE file for more details.