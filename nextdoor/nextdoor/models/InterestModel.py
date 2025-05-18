from django.db import models
from .GeneralActivityModel import GeneralActivity

class Interest(models.Model):
    name = models.CharField(max_length=255, unique=True)
    general_activity = models.ForeignKey(GeneralActivity, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name