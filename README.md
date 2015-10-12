# kissCMS

At present this is a project in which I am learning how to develop a node based website / app with a admin backend, an api, and a front end.  It will be isomorphic and based on feathers.js (feathers is a bit like Sails or Derby only simpler) using riot.js as the framework (riot is a bit like react, only simpler.). Feathers also makes it "real time" via socket.io or primus, though I'm not sure how important that is.

The data will be stored in NEDB - a file based api -  which means you don't have to run a database server.  I think this the optimal solution for most small to medium sized websites. However, feathers makes it very easy to swap NEDB for a database such as Mongodb, so that option is always open.

I personally like riot.js but it should be easy to swap this for react or handlebars or whatever.

My ambition is to make this a CMS - in other words a skeleton app that can easily be adapted, extended, temp lated. Although this sounds grandiose, I actually think its quite possible because there are so many great frameworks on NPM that you can build on.  It's more about the architecture and stringing all the bits and pieces together the right way. I'm trying to write as little code as possible.

In the process of doing this, I'm going to try can think  how it would be easiest to swap out each part.  So I am bearing in mind how to make it easy to add to or change the routes  or swap out the front end theme, or add fields to the API and modify the back-end screens.   There need to be helper functions, good docs, and a shortish config file with a few variables (such as the theme name)

For image handling, I'm planning to use Pica.js which will resize images in the browser ultra fast.

I reckon the API can be as rich as WordPress.  It's just a matter of plugging away at it and adding the fields and metadata into the admin screen. The backend can be nice to use for the editorial team. To be honest, I think there is scope to make it  cleaner and less cluttered than WordPress.

The post screens can use markdown. I'd like it to work like the latest version of WordPress, so that as soon as you hit enter, the markdown turns into html and you can see how it looks. There can be some simple edit buttons with  document.execCommand.  I think the post screens should look clean like Google Docs (more the iPad version than the desktop version). It's important for the backend to look attractive and be intuitive for the user.

Ultimately, we could even make the front end editable via contenteditable.

Authentication will probably use Passport.

When it comes to adding themes or changing things around the developer will have to do this via a text editor rather than an admin screen. My job is to make helper functions and write good documentation that makes modification as easy as possible. It should also be possible to publish themes and modifications on NPM. Using them should be a matter of changing a few lines in the server.app or the config file.


