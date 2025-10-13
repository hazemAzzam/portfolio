from rest_framework import serializers
from .models import PersonalInfo, Skill, Project, ProjectAchievement, ProjectChallenge, ProjectImage


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectAchievement
        fields = '__all__'


class ProjectChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectChallenge
        fields = '__all__'


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    achievements = serializers.ListField(
        child=serializers.CharField(),
        write_only=True,
        required=False
    )
    challenges = serializers.ListField(
        child=serializers.CharField(),
        write_only=True,
        required=False
    )
    images = serializers.ListField(
        child=serializers.CharField(max_length=200),
        write_only=True,
        required=False
    )
    
    # Read-only fields for display
    achievements_list = serializers.SerializerMethodField(read_only=True)
    challenges_list = serializers.SerializerMethodField(read_only=True)
    images_list = serializers.SerializerMethodField(read_only=True)

        
    def get_achievements_list(self, obj):
        return [achievement.achievement for achievement in obj.projectachievement_set.all()]
    
    def get_challenges_list(self, obj):
        return [challenge.challenge for challenge in obj.projectchallenge_set.all()]
    
    def get_images_list(self, obj):
        return [image.image for image in obj.projectimage_set.all()]
    
    def create(self, validated_data):
        achievements_data = validated_data.pop('achievements', [])
        challenges_data = validated_data.pop('challenges', [])
        images_data = validated_data.pop('images', [])
        
        project = Project.objects.create(**validated_data)
        
        # Create achievements
        for achievement_text in achievements_data:
            ProjectAchievement.objects.create(project=project, achievement=achievement_text)
        
        # Create challenges
        for challenge_text in challenges_data:
            ProjectChallenge.objects.create(project=project, challenge=challenge_text)
        
        # Create images
        for image_url in images_data:
            ProjectImage.objects.create(project=project, image=image_url)
        
        return project
    
    def update(self, instance, validated_data):
        achievements_data = validated_data.pop('achievements', None)
        challenges_data = validated_data.pop('challenges', None)
        images_data = validated_data.pop('images', None)
        technologies_data = validated_data.pop('technologies', None)

        # Update project fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()


        # Update technologies if provided
        if technologies_data is not None:
            instance.technologies.set(technologies_data)

        # Update achievements if provided
        if achievements_data is not None:
            instance.projectachievement_set.all().delete()
            for achievement_text in achievements_data:
                ProjectAchievement.objects.create(project=instance, achievement=achievement_text)
        
        # Update challenges if provided
        if challenges_data is not None:
            instance.projectchallenge_set.all().delete()
            for challenge_text in challenges_data:
                ProjectChallenge.objects.create(project=instance, challenge=challenge_text)
        
        # Update images if provided
        if images_data is not None:
            instance.projectimage_set.all().delete()
            for image_url in images_data:
                ProjectImage.objects.create(project=instance, image=image_url)
        
        return instance


    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['technologies'] = [{'value': technology.id, 'label': technology.name} for technology in instance.technologies.all()]
        return data
    
    class Meta:
        model = Project
        fields = '__all__'
