
from django.urls import path
from .views import NotesListCreate,NoteDelete

urlpatterns = [
    path("notes/", NotesListCreate.as_view(), name="notes-list"),
    path("notes/delete/<int:pk>/", NoteDelete.as_view(), name="note-delete"),
]
