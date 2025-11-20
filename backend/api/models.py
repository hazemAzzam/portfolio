from django.db import models

class BaseModel(models.Model):
    createdAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updatedAt = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        abstract = True
        ordering = ['-createdAt']


# Create your models here.
class PersonalInfo(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    proffessionalTitle = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    image = models.URLField(max_length=200, null=True, blank=True)
    linkedin = models.CharField(max_length=100, null=True, blank=True)
    github = models.CharField(max_length=100, null=True, blank=True)
    
class Skill(BaseModel):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    proficiency = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    
class Project(BaseModel):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=100, default='')
    overview = models.TextField()
    role = models.CharField(max_length=100)
    technologies = models.ManyToManyField(Skill, blank=True)
    teamSize = models.IntegerField()
    startDate = models.DateField()
    endDate = models.DateField(null=True, blank=True)
    githubUrl = models.URLField(max_length=100, null=True, blank=True)
    liveUrl = models.URLField(max_length=100, null=True, blank=True)
    featured = models.BooleanField(default=False)


class ProjectAchievement(BaseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    achievement = models.TextField()



class ProjectChallenge(BaseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    challenge = models.TextField()


class ProjectImage(BaseModel):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.URLField(max_length=200)

class Message(BaseModel):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()