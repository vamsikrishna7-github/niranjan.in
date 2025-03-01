Portfolio Website with Dynamic Contact Form
********************************************

Overview
********
  This is a single-page portfolio website built with a dynamic frontend and backend. 
  The frontend is developed using HTML, CSS, JavaScript, and Bootstrap, while the backend is powered by Python and Django. 
  The website features a contact form that stores user submissions in an SQLite database. 
  Upon submission, Django sends an automated confirmation email to the user and notifies the admin about the new submission.
  The admin panel is customized with a custom login page. Once logged in, the admin can view all contact submissions and delete them if necessary.

Key Features:
**************
  Dynamic Contact Form: Stores user data in the database.
  Auto-Response Emails: Sends confirmation emails to the user and admin.
  Custom Admin Panel: Allows the admin to view and manage contact submissions.
  Responsive Design: Built with Bootstrap for a seamless experience across devices.

Project Structure
*******************
    The project uses the following URL patterns:
    /
    admin/
    admin/contact-list/
    logout/
    admin/contact-delete/<int:contact_id>/
    contact/

Database
*********
  SQLite: Used as the default database for development.
  Models: A Contact model is used to store user submissions (name, email, subject, message).

Email Functionality
********************
  User Confirmation Email: "Thanks for contacting me! I will get back to you shortly."
  Admin Notification Email: "You have received a new mail from [email], [name], [subject], [message]."

Installation Guide
*******************
  Prerequisites
  Python 3.x
  pip (Python package manager)
  Virtual Environment (optional but recommended)

Steps to Set Up the Project
*****************************
  1. Clone the Repository:
    $ git clone https://github.com/vamsikrishna7-github/niranjan.in.git
    $ cd niranjan
  2. Set Up a Virtual Environment:
    $ python -m venv venv
    $ source venv/bin/activate  # On Windows: venv\Scripts\activate
  3. Install Dependencies:
    $ pip install -r requirements.txt
  4. Set Up the Database:
    $ python manage.py makemigrations 
    $ python manage.py migrate   #Apply migrations to create the database schema
  6. Create a Superuser (Admin):
    $ python manage.py createsuperuser
  7. Configure Email Settings:
    #Update the settings.py file with your email backend configuration (e.g., SMTP settings for sending emails).
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True
    EMAIL_HOST_USER = 'your-email@gmail.com'
    EMAIL_HOST_PASSWORD = 'your-email-password'
  8. Run the Development Server:
    $ python manage.py runserver 
    #if any error is encountered for port number change port number to another port ex: 555
    #Visit http://127.0.0.1:8000/ in your browser to view the website.
     
Usage
******
  User Side
  **********
    1. Visit the homepage.
    2. Fill out the contact form and click "Get in Touch."
    3. The user will receive a confirmation email, and the admin will be notified.
  Admin Side
  ***********
    1. Log in to the admin panel at http://127.0.0.1:8000/admin/.
    2. View all contact submissions at http://127.0.0.1:8000/admin/contact-list/.
    3. Delete submissions if necessary.
       
Contributing
**************
    This is an open-source project. Contributions are welcome! If you'd like to contribute, please follow these steps:
    1. Fork the repository.
    2. Create a new branch for your feature or bugfix.
    3. Commit your changes.
    4. Submit a pull request.

License
********
  This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
****************
    Vamsi Krishna: Project Developer
    Bootstrap: For the responsive design framework.
    Django: For the powerful backend framework.

Contact
*********
    For any questions or feedback, feel free to reach out:
    Email: vamsikrishna.nagidi@gmail.com
    GitHub: vamsikrishna7-github
    linkedIn: https://www.linkedin.com/in/vamsi-krishna-nagidi-742314233/