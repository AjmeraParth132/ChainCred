# Generated by Django 5.0.6 on 2024-07-10 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('investors', '0004_investor_mobile_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='investments',
            old_name='amount_invested',
            new_name='amount',
        ),
        migrations.RenameField(
            model_name='investments',
            old_name='investment_id',
            new_name='id',
        ),
        migrations.RenameField(
            model_name='investments',
            old_name='current_valuation',
            new_name='valuation',
        ),
        migrations.RemoveField(
            model_name='investments',
            name='company_id',
        ),
        migrations.RemoveField(
            model_name='investments',
            name='investment_round',
        ),
        migrations.RemoveField(
            model_name='investments',
            name='investment_type',
        ),
        migrations.RemoveField(
            model_name='investments',
            name='return_on_investment',
        ),
        migrations.AddField(
            model_name='investments',
            name='CEO',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='investments',
            name='comapny_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='investments',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='InvestorAccessRequests',
        ),
    ]