- Heroku deployed link: https://stude-group4.herokuapp.com/login

- Github link: https://github.com/bala-sundeep-d/Group4_StudE

-------------------------------------------------------------------

# Files created by Harry Ben Alex Pavuluri:

1. StudE/client/src/components/Discussions/Comments.js (component) Re-usable component of discussions for showing list of comments

2. StudE/client/src/components/Discussions/Comments.css (css) Re-usable component of discussions for showing list of comments

3. StudE/client/src/components/Discussions/Discussions.css (css) Re-usable component of discussions for showing list of comments

4. StudE/client/src/components/Discussions/Discussions.js (component) Re-usable component of discussions for showing list of comments

5. StudE/client/src/components/Discussions/NewComment.js (component) Re-usable component of discussions for showing list of comments

6. StudE/client/src/components/Discussions/NewForum.css (css) Re-usable component of discussions for creating new discussion forum

7. StudE/client/src/components/Discussions/NewForum.js (component) Re-usable component of discussions for creating new discussion forum

8. StudE/client/src/components/Discussions/PostModal.js (component) Re-usable component of discussions for showing a modal box

9. StudE/client/src/components/Notes/NewNotes.js (component) Re-usable component of notes for creating new notes

10. StudE/client/src/components/Notes/Note.js (component) Re-usable component of notes for showing a particular note

11. StudE/client/src/components/Notes/Notes.css (css) Re-usable component of notes for showing list of all notes

12. StudE/client/src/components/Notes/Notes.js (component) Re-usable component of notes for showing list of all notes

13. Line Number: 23 and 26 in StudE/client/src/components/navTabs/NavTabs.components. - Implementing links for discussions

14. StudE/server/app/controllers/commentController.js - API endpoints for comments

15. StudE/server/app/controllers/discussionController.js - API endpoints for discussions

16. StudE/server/app/models/commentModel.js - Mongo Schema of discussions collection

17. StudE/server/app/models/discussionModel.js - Mongo Schema of discussions collection

18. StudE/server/app/routes/commentRouter.js - Router middleware for comments

19. StudE/server/app/routes/discussionRouter.js - Router middleware for discussions

20. Line Number: 6, 7, 12 and 13 in StudE/server/app/routes/index.js - Router middleware for request APIs

---------------------------------------------------------------------

# Feature: Discussion Forums

Discussion forums allows users to create a new discussions or comment on an existing forums.

* SERVER-SIDE

- API to post discussions of the users. This endpoint accepts array of JSON as input and create user discussions in DB.
- API to get discussions of the users.
- API to put discussions of the users. This endpoint accepts array of JSON as input and update user discussions in DB.

* CLIENT-SIDE

- Interactive and responsive discussion form.
- Designed comments component to be used for showing list of users commented.

----------------------------------------------------------------------

# Sub tasks:

- creating boilerplate code for backend and frontend
- Designed modular routing approach for better readability and re-usability
- Database setup using mongoose [3] and MongoDB Atlas [4] library for integrating MongoDB with NodeJS

------------------------------------------------------------------------

# REFERENCES:

[1] "bcryptjs", npm, 2021. [Online]. Available: https://www.npmjs.com/package/bcryptjs. [Accessed: 19- Mar- 2021].
[2] "JWT.IO", Jwt.io, 2021. [Online]. Available: https://jwt.io/. [Accessed: 19- Mar- 2021].
[3] "Mongoose v5.12.1: API docs", Mongoosejs.com, 2021. [Online]. Available: https://mongoosejs.com/docs/api.html. [Accessed: 20- Mar- 2021].
[4] "Managed MongoDB Hosting | Database-as-a-Service", MongoDB, 2021. [Online]. Available: https://www.mongodb.com/cloud/atlas. [Accessed: 20- Mar- 2021].