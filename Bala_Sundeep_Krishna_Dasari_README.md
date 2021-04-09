- Heroku deployed link: https://stude-group4.herokuapp.com/login

- Github link: https://github.com/bala-sundeep-d/Group4_StudE

-------------------------------------------------------------------

# Files created by Bala Sundeep Krishna Dasari:

1. \client\.env - client-side configuration variables

2. \client\src\components\card\Card.css - (css) Re-usable component of cards for showing list of subjects and chapters

3. \client\src\components\card\Card.js - (component) Re-usable component of cards for showing list of subjects and chapters

4. \client\src\components\card\CardBody.js - (sub-component) Re-usable component of cards for showing list of subjects and chapters

5. \client\src\components\card\CardHeader.js - (sub-component) Re-usable component of cards for showing list of subjects and chapters

6. \client\src\components\coursePage\chapters\Chapters.component.js - (component) component for showing list of chapters
7. \client\src\components\login\Login.js - (component) login page

8. \client\src\components\login\Login.style.css - (css) login page

9. \client\src\components\logout\Logout.js - (component) logout button

10. \client\src\components\logout\logout.style.css - (css) logout button

11. \client\src\components\App.js - (routing) client-side authentication

12. \server\.env - server-side configuration variables

13. \server\server.js - authorization, authentication, express middleware and routing

14. \server\app\middleware\authentication.js - authentication middleware

15. \server\app\controllers\userController.js - API endpoints for user import, login, logout, and listing users

16. \server\app\models\userModel.js - Mongo Schema of User collection

17. \server\app\routes\authRouter.js - Router middleware for authentication

18. \server\app\routes\index.js - Global mounted router for other routers

19. \server\app\routes\userRouter.js - Router middleware for user APIs

---------------------------------------------------------------------

# Feature: PROFILE MANAGEMENT

Profile Management feature is used for authentication, user-import, authorization, routing middleware, and logout.
bcrypt [1] is used for hashing (encrypting) passwords as a part of autherization and authentication.
JWT [2] and cookies are used for user authentication.

* SERVER-SIDE

- API to bulk import users. This endpoint accepts array of JSON as input and create user records in DB.
- Passwords are generated during import using bcrypt [1]. Hashed passwords are stored in DB for ensuring data security and integrity.
- User Authentication using JWT [2] tokenization mechanism and cookies. Whenever user logs in, a JSON Web Token is created with encryption and passed to browser as a cookie.
- User Autherization using the encrypted JWT. Every time a request comes to the server, the JWT is fetched from cookies, decrypted and validated using our authentication middleware.
- A valid token authorized by our middleware will successfully forward the request.

* CLIENT-SIDE

- Interactive and responsive login form.
- Cookie management and routing basic structure
- Designed card component to be used for showing list of subjects and chapters.
- Simple and responsive logout button.

----------------------------------------------------------------------

# bulk import API

POST /users/
[{
    firstName: first_name_value,
    lastName: first_last_value,
    userId: first_user_id_value,
    role: first_role_value, // student or teacher
    instituteId: first_institute_id_value,
}]

----------------------------------------------------------------------

# Sub tasks:

- Managing deployments on heroku
- creating boilerplate code for backend and frontend
- creating configurable variables for different environments in our application
- Express middleware for authentication, authorization and modular routing
- Designed modular routing approach for better readability and re-usability
- Database setup using MongoDB Atlas [3] and mongoose [4] library for integrating MongoDB with NodeJS
- Designed encryption and hashing mechanisms for security and autherization

------------------------------------------------------------------------

# REFERENCES:

[1] "bcryptjs", npm, 2021. [Online]. Available: https://www.npmjs.com/package/bcryptjs. [Accessed: 20- Mar- 2021].
[2] "JWT.IO", Jwt.io, 2021. [Online]. Available: https://jwt.io/. [Accessed: 20- Mar- 2021].
[3] "Managed MongoDB Hosting | Database-as-a-Service", MongoDB, 2021. [Online]. Available: https://www.mongodb.com/cloud/atlas. [Accessed: 20- Mar- 2021].
[4] "Mongoose v5.12.1: API docs", Mongoosejs.com, 2021. [Online]. Available: https://mongoosejs.com/docs/api.html. [Accessed: 20- Mar- 2021].
