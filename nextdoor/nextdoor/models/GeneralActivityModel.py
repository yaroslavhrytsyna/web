from django.db import models

class GeneralActivity(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
