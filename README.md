# Assignment - 3

* Date Created: 19-03-2021
* Last Modification Date: 20-03-2021
* Website URL: https://stude-group4.herokuapp.com/
* Repository URL: https://github.com/bala-sundeep-d/Group4_StudE.git

## Authors
* [Nikunj Goenka](Nikunj.Goenka@dal.ca)
* [prashant Sarvi] (pr486824@dal.ca)
* [Bala Sundeep Krishna Dasari] (bl200240@dal.ca)
* [Harry Ben Alex Pavuluri] (hr751368@dal.ca)

---------------------------------------------------------------------

# bulk import API

POST https://stude-group4.herokuapp.com/users/
[{
    firstName: first_name_value,
    lastName: first_last_value,
    userId: first_user_id_value,
    role: first_role_value, // student or teacher
    instituteId: first_institute_id_value,
}]

----------------------------------------------------------------------

## User-id and Password to login
````
user-id: 12346
password: goenka@123
````

## List of files Created:
Owner| File Name  | Feature  |  File Path
------------- |------------- | ----------------------- | ------------- 
Nikunj Goenka|CoursePage.component.js | Landing Page  | client\src\components\coursePage\CoursePage.component.js 
Nikunj Goenka|CoursePage.style.css | Landing Page | client\src\components\coursePage\CoursePage.style.css 
Nikunj Goenka|Parentview.component.js | Parent Page | client\src\components\parentView\Parentview.component.js 
Nikunj Goenka|Parentview.style.css | Parent Page | client\src\components\parentView\Parentview.style.css 
Nikunj Goenka|TeacherComment.component.js | Teacher Comments | client\src\components\parentView\teacherComment\TeacherComment.component.js 
Nikunj Goenka|TeacherComment.style.css | Teacher Comments | client\src\components\parentView\teacherComment\TeacherComment.style.css
Nikunj Goenka|CommentBox.component.js | Teacher Comments | client\src\components\parentView\teacherComment\commentBox\CommentBox.component.js
Nikunj Goenka|CommentBox.style.css | Teacher Comments | client\src\components\parentView\teacherComment\commentBox\CommentBox.style.css
Nikunj Goenka|teacherCommentsController.js| Teacher Comments |server\app\controllers\teacherCommentsController.js
Nikunj Goenka|teacherCommentsModel.js| Teacher Comments |server\app\models\teacherCommentsModel.js
Nikunj Goenka|teacherCommentsRouter.js| Teacher Comments |server\app\routes\teacherCommentsRouter.js
Nikunj Goenka|Topnavbar.component.jsx| Top Navbar | client\src\components\topNavbar\Topnavbar.component.jsx
Nikunj Goenka|Topnavbar.style.css| Top Navbar | client\src\components\topNavbar\Topnavbar.style.css
Nikunj Goenka|Dashboard.js | Landing Page | client\src\components\dashboard\Dashboard.js
Nikunj Goenka|Dashboard.style.css | Landing Page | client\src\components\dashboard\Dashboard.style.css

## Feature Developed ##
* Nikunj Goenka 
** Teacher's Comments
** Landing Page (Secondary Feature) (in-progress)
** Landing Page (Top NavBar)



### NOTE ###
While integrating the main features we discovered that there are many background features and tasks that we need to create. These features are important to give wholesome look and complete task flow to the application. 
We decided to divide these features and develop them as a team.


### Reference  ###
1. "React-Bootstrap", React-bootstrap.github.io, 2021. [Online]. Available: https://react-bootstrap.github.io/getting-started/introduction/. [Accessed: 21- Mar- 2021]
2. "Flickr", Flickr, 2021. [Online]. Available: https://www.flickr.com/photos/unitedwaylowermainland/8771398278. [Accessed: 21- Mar- 2021]
3. "React Icons", React-icons.github.io, 2021. [Online]. Available: https://react-icons.github.io/react-icons/icons?name=bs. [Accessed: 21- Mar- 2021]
4. "How to wait for Axios data before you render it?", CodeWithNico, 2021. [Online]. Available: https://codewithnico.com/react-wait-axios-to-render/. [Accessed: 21- Mar- 2021]
5. "How To Create a Custom Scrollbar", W3schools.com, 2021. [Online]. Available: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp. [Accessed: 21- Mar- 2021]
6. "Bluebird Promises Tutorial", Guru99.com, 2021. [Online]. Available: https://www.guru99.com/bluebird-promises.html. [Accessed: 21- Mar- 2021]


