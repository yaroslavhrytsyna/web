# Generated by Django 5.1.3 on 2025-05-05 15:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nextdoor', '0002_city_generalactivity_region_club_house_club_city_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='club',
            name='location',
        ),
    ]
