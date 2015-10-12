# kissCMS

At present this is a project in which I am learning how to develop a node based website / app with a admin backend, an api, and a front end. It will be isomorphic and based on Feathers.js (Feathers is a bit like Sails or Derby only simpler) using Riot js as the framework (Riot is a bit like React, only simpler.). Feathers also makes it "real time" via socket.io or primus, though I'm not sure how important that is.

The data will be stored in NEDB - a file based api - which means you don't have to run a database server. I think this the optimal solution for most small to medium sized websites. However, Feathers makes it very easy to swap NEDB for a database such as Mongodb, so that option is always open.

I personally like Riot but it should be easy to swap this for React or Handlebars or whatever.

My ambition is to make this a CMS - in other words a skeleton app that can easily be adapted, extended, templated. Although this plan sounds grandiose, I actually think it's quite possible because there are so many great frameworks on NPM that you can build on. It's more about getting the best architecture and stringing all the bits and pieces together the right way. I'm trying to write as little code as possible.

In the process of doing this, I'm thinking how to make it easy to swap out each part. The architecture has to make it simple to add to or change the routes, or swap out the front end theme, use any template system or framework, add fields to the API and modify the back-end screens. There need to be helper functions, good docs, and a shortish config file with a few variables (such as the current theme name).

For image handling, I'm planning to use Pica.js which will resize images in the browser ultra fast.

I reckon the rest API can be as rich as WordPress. It's just a matter of plugging away at it and adding the fields and metadata into the admin screen.

The post screens can use Markdown. I'd like it to work like the latest version of WordPress, so that as soon as you hit enter, the markdown turns into html and you can see how it looks. There can be some simple edit buttons with document.execCommand. I think the post screens should look clean like Google Docs (more the iPad version than the desktop version). It's important for the backend to look attractive and be intuitive for the user. It also has to be tablet friendly.

Ultimately, we could even make posts editable via the frontend (using contenteditable).

Authentication will probably use Passport.

When it comes to adding themes or changing things around the developer will have to do this via a text editor rather than an admin screen. My job is to make helper functions and write good documentation. It should also be possible to publish themes and modifications on NPM. Using them should be a matter of changing a few lines in the server.js file or the config file.

This is the CMS that I would personally like to have: one that has far less overload on the server and the brain than WordPress. It helps you get a website up and running fast, and you can adapt and tweak it to your heart's content. The front and backend share most of the code. If I can get it to the stage where a few other people use it / contribute to it, that would be amazing, but right now it's just a twinkle in my eye.


