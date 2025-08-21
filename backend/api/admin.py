from django.contrib import admin
from .models import Notes
# Register your models here.
admin.site.site_header = "NotesManager Admin"
admin.site.site_title = "NotesManager Admin Portal"
admin.site.index_title = "Welcome to NotesManager Admin"

admin.site.register(Notes)