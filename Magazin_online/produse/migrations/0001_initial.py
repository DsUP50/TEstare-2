# Generated by Django 4.2.2 on 2023-06-27 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nume', models.CharField(max_length=200)),
                ('descriere', models.TextField()),
                ('pret', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
