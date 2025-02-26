from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Contact

# Unregister the default Group and User models to avoid conflicts
admin.site.unregister(Group)
admin.site.unregister(User)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'subject', 'message', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject')
    ordering = ('-created_at',)