# Generated by Django 4.2.1 on 2023-06-19 22:24

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('films', '0006_alter_film_available_in_countries_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='review_author',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=datetime.date(2023, 6, 19)),
        ),
    ]
