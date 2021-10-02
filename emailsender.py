import random
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

"""
I wanted to do the regex part(for email validation) but like I feel we should finish the frontend first.
"""

"""
Also We need to make a send-only email that would send it to the website user email
"""

"""
Creating a random six digit code that the user will have to input to confirm their appointment.
"""
b= random.randint(100000, 999999)
"""This is the function itself"""


def send_email(sender_email, password, receiver_email):
    message = MIMEMultipart("alternative")
    message["Subject"] = "Confirmation Code"
    message["From"] = sender_email
    message["To"] = receiver_email

    """ It makes two cases for the email. One with HTML and the text one (in case the HTML one doesnt work)"""
    text = """\
    Hi,
    Nice to meet you
    Your code is: """ + b + "."
    html = """\
    <html>
      <body>
        <p>Hi,<br>
           Nice to meet you<br>
           Your code is <br> 
           <<br><h1>{b}</h1><br>
        </p>
      </body>
    </html>
    """.format(b=b)

    """It turns these into plain/html MIMEText objects"""
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    """This part add the HTML/plain-text parts to MIMEMultipart message.
    The email client will try to render the last part first"""
    message.attach(part1)
    message.attach(part2)

    """ Create secure connection with server and send email"""
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )