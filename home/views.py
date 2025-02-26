from django.shortcuts import render, redirect
from home.forms import ContactForm
from django.contrib import admin
from django.core.mail import send_mail
from django.template.loader import render_to_string


admin.site.site_header = "Niranjan Admin"
admin.site.site_title = "Niranjan Admin Portal"
admin.site.index_title = "Welcome to Admin portal"

def homeView(request):
    return render(request, 'index.html')

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
           
           #auto response to the sender
            sender_html_content = render_to_string("emails/auto_response_sender.html", {"name": name})
            send_mail(
                "Thank You for Contacting Me!",
                "This is a plain text fallback message.", 
                "vamsikrishna.backend.dev@gmail.com",  
                [email],  
                fail_silently=False,
                html_message=sender_html_content,  
            )
            #auto response to the admin
            admin_html_content = render_to_string("emails/auto_response_admin.html", {"name": name, "email": email, "subject": subject, "message": message})
            send_mail(
                "New Contact Form Submission",
                "A new message was received.",
                "vamsikrishna.backend.dev@gmail.com",
                ["vamsikrishna.nagidi@gmail.com"],
                fail_silently=False,
                html_message=admin_html_content,
            )
                    
            return redirect(f'/?message=success&name={name}')
    return redirect('/?message=error')