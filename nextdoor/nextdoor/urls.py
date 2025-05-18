from django.urls import path
from . import views

urlpatterns = [
    path('clubs/', views.club_list_view, name='club-list'),
    path('clubs/<int:pk>/', views.club_detail_view, name='club-detail'),
    path('users/', views.user_list_view, name='user-list'),
    path('users/<int:pk>/', views.user_detail_view, name='user-detail'),
    # For reviews, if you want a separate view for listing/creating, adjust accordingly:
    path('clubs/<int:club_id>/reviews/', views.club_reviews_view, name='club-review-list'),
]
