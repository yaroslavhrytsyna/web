from django.db import models

class Region(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=100)
    region = models.ForeignKey(Region, on_delete=models.CASCADE, related_name='cities')

    class Meta:
        unique_together = ('name', 'region')

    def __str__(self):
        return f"{self.name} ({self.region})"


class Street(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='streets')

    class Meta:
        unique_together = ('name', 'city')

    def __str__(self):
        return f"{self.name}, {self.city}"
