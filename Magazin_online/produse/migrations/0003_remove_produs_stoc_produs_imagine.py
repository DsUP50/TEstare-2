# Generated by Django 4.2.2 on 2023-07-01 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produse', '0002_produs_stoc'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produs',
            name='stoc',
        ),
        migrations.AddField(
            model_name='produs',
            name='imagine',
            field=models.ImageField(default='imagine_default.jpg', upload_to='produse/'),
        ),
    ]
