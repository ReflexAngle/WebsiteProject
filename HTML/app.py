from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message
import os
import smtplib


# will handle the email form
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('mian.html')

app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT') or 587)
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER')
app.config['MAIL_USE_SSL'] = os.environ.get('MAIL_USE_SSL', 'False').lower() == 'true'



mailing = Mail(app)

@app.route('/submit-form', methods=['POST'])

def submit_form():
    try:
        data = request.form
        name = data.get('name', '')
        email = data.get('email', '')
        message = data.get('message', '')

        # checks is the input is valid
        if not name or not email or not message:
            return jsonify({'error': 'All fields are required'}), 400
        
        # creates the acutal message
        mess = Message("Cantact from submission",
                    sender=app.config['MAIL_DEFAULT_SENDER'],
                    recipients=[app.environ.get('ReCIPIENT_EMAIL')])
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