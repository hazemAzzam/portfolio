from django.db import models

# Create your models here.
class PersonalInfo(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    proffessionalTitle = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    image = models.URLField(max_length=200, null=True, blank=True)
    linkedin = models.URLField(max_length=100, null=True, blank=True)
    github = models.URLField(max_length=100, null=True, blank=True)
    
class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    proficiency = models.IntegerField()
    description = models.TextField()
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    description = models.TextField()
    overview = models.TextField()
    role = models.CharField(max_length=100)
    teamSize = models.IntegerField()
    startDate = models.DateField()
    endDate = models.DateField(null=True, blank=True)
    githubUrl = models.URLField(max_length=100, null=True, blank=True)
    liveUrl = models.URLField(max_length=100, null=True, blank=True)
    featured = models.BooleanField(default=False)

class ProjectAchievement(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    achievement = models.CharField(max_length=500)

class ProjectChallenge(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    challenge = models.CharField(max_length=500)

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.URLField(max_length=200)
