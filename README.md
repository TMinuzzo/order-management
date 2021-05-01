# order-management

## Instructions to run locally the server

### Installing the dependencies and configuring virtual environment
- Make sure you have Python 3.9 installed
- Clone or download this repository
- Access the directory server: `cd server/`
- Create a new Python virtual environment:
`python -m virtualenv env`
- Activate the virtual environment with the powershell script (Windows): `env/Scripts/Activate.ps1`
- Install the dependencies on virtual environment: `python -m pip install -r requirements.txt`

### Configuring database and running server
- Create a local PostgreSQL database with name `postgres`, and connect with a user `user` and password `1234`, or edit the file `DATABASES` dictionary on `settings.py` to match your database configurations
- Create a user to be able to access the Django admin panel: `python manage.py createsuperuser` and enter your desired configurations.
- Create the migrations: `python manage.py makemigrations`

- Apply the migrations on database: `python manage.py migrate`
- Run the django server: `python manage.py runserver`
