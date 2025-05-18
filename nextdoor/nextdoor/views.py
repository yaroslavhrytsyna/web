from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from .models import Club, User, Review
from .forms import ReviewForm  # We'll define this form for reviews

# List all clubs
def club_list_view(request):
    clubs = Club.objects.all()
    return render(request, 'club_list.html', {'clubs': clubs})

# Club detail + reviews + form to add a review
def club_detail_view(request, pk):
    club = get_object_or_404(Club, pk=pk)
    reviews = club.review_set.all()

    if request.method == 'POST':
        if request.user.is_authenticated:
            form = ReviewForm(request.POST)
            if form.is_valid():
                review = form.save(commit=False)
                review.user = request.user
                review.club = club  # Make sure Review model has a ForeignKey to Club
                review.save()
                return redirect('club-detail', pk=club.pk)
        else:
            return redirect('login')
    else:
        form = ReviewForm()

    context = {
        'club': club,
        'reviews': reviews,
        'form': form,
    }
    return render(request, 'club_detail.html', context)

# List all users (admin only)
@staff_member_required
def user_list_view(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

# User detail (authenticated users only)
@login_required
def user_detail_view(request, pk):
    user = get_object_or_404(User, pk=pk)
    return render(request, 'user_detail.html', {'user': user})

# List reviews for a club (optional separate page)
def club_reviews_view(request, club_id):
    club = get_object_or_404(Club, pk=club_id)
    reviews = club.review_set.all()
    return render(request, 'review_list.html', {'club': club, 'reviews': reviews})
