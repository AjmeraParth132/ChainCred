# Generated by Django 5.0.6 on 2024-07-03 01:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0007_merge_20240703_0713'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='mobile_number',
        ),
    ]
