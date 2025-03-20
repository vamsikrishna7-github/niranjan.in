from django.shortcuts import get_object_or_404, render, redirect
from home.forms import ContactForm
from django.contrib import admin
from django.core.mail import send_mail
from django.template.loader import render_to_string

from home.models import Contact
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login, logout



# admin.site.site_header = "Niranjan Admin"
# admin.site.site_title = "Niranjan Admin Portal"
# admin.site.index_title = "Welcome to Admin portal"

def homeView(request):
    form = ContactForm()
    return render(request, 'index.html', {'form': form})

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
           
           #auto response to the sender
            sender_html_content = render_to_string("emails/auto_response_sender.html", {"name": name})
            send_mail(
                "Thank You for Contacting Me!",
                "This is a plain text fallback message.", 
                "cloudworld.a@gmail.com",  
                [email],  
                fail_silently=False,
                html_message=sender_html_content,  
            )
            #auto response to the admin
            admin_html_content = render_to_string("emails/auto_response_admin.html", {"name": name, "email": email, 'phone':phone, "subject": subject, "message": message})
            send_mail(
                "New Contact Form Submission",
                "A new message was received.",
                "cloudworld.a@gmail.com",
                ["niranjancloud9@gmail.com"],
                fail_silently=False,
                html_message=admin_html_content,
            )
                    
            return redirect(f'/?message=success&name={name}')
        else:
            return redirect('/?message=error')

@login_required
def contact_list(request):
    contacts = Contact.objects.all().order_by('-created_at')
    return render(request, "admin/base_site.html", {"contacts": contacts})

def custom_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("contact_list") 
        else:
            return render(request, "admin/login.html", {"error": "Invalid username or password"})
    if request.user.is_authenticated:
        return redirect("contact_list")
    else:
        return render(request, "admin/login.html")


def custom_logout(request):
    logout(request)
    return redirect("custom_login")

@login_required
def delete_contact(request, contact_id):
    contact = get_object_or_404(Contact, id=contact_id)
    contact.delete()
    return redirect("contact_list")