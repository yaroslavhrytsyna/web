from django.db import models
from .InterestModel import Interest
from .LocationModel import Region, City, Street
from .GeneralActivityModel import GeneralActivity

class Club(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    min_age = models.IntegerField()
    max_age = models.IntegerField()
    general_info = models.TextField(blank=True, null=True)
    contact_info = models.CharField(max_length=255, blank=True, null=True)
    interests = models.ManyToManyField(Interest)
    region = models.ForeignKey(Region, on_delete=models.SET_NULL, null=True, blank=True)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True, blank=True)
    street = models.ForeignKey(Street, on_delete=models.SET_NULL, null=True, blank=True)
    house = models.CharField(max_length=50, blank=True, null=True)

    general_activity = models.ForeignKey(GeneralActivity, on_delete=models.SET_NULL, null=True, blank=True)


    def __str__(self):
        return self.name

    def average_rating(self):
        reviews = self.review_set.all()
        if reviews.exists():
            return sum(review.rating for review in reviews) / reviews.count()
        return "Відгуків ще немає"