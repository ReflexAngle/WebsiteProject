from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message
import os
import smtplib



# will handle the email form
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('mian.html')

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'your email address'
app.config['MAIL_PASSWORD'] = 'app password'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_DEFAULT_SENDER'] = 'your email address'
app.config['MAIL_USE_SSL'] = False

# app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
# app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT') or 587)
# app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
# app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
# app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'True').lower() == 'true'
# app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER')
# app.config['MAIL_USE_SSL'] = os.environ.get('MAIL_USE_SSL', 'False').lower() == 'true'

mailing = Mail(app)
# if all(app.config.get(key) for key in ['MAIL_SERVER', 'MAIL_PORT', 'MAIL_USERNAME', 'MAIL_PASSWORD', 'MAIL_DEFAULT_SENDER', 'RECIPIENT_EMAIL']):
#     mailing = Mail(app)
# else:
#     print("Email configuration is incomplete. Email sending will be disabled.")
#     mailing = None # Set mailing to None if config is incomplete

@app.route('/submit-form', methods=['POST'])

def submit_form():
    try:
        data = request.form
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        # checks is the input is valid
        if not name or not email or not message:
            return jsonify({'error': 'All fields are required'}), 400
        
        # creates the acutal message
        mess = Message("Contact from submission",
                    sender=app.config['MAIL_DEFAULT_SENDER'],
                    recipients=['your email address'])  
        mess.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

        mailing.send(mess)

        return jsonify({'success': 'Form submitted successfully'}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while sending the email'}), 500
    
# REMOVE debug=True
# REMOVE debug=True
# REMOVE debug=True
# REMOVE debug=True
# REMOVE debug=True
# REMOVE debug=True
# REMOVE debug=True
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
# REMOVE debug=True