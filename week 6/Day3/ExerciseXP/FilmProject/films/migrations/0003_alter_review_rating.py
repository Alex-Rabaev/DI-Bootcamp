# Generated by Django 4.2.1 on 2023-06-06 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10)]),
        ),
    ]
