import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ExternalLink, Github, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageWithFallBack } from "./ui/ImageWithFallBack";
import { ProjectType, SkillOptionType } from "@/types";

interface ProjectDetailProps {
  project: ProjectType;
  children: React.ReactNode;
}

export function ProjectDetail({ project, children }: ProjectDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const getProjectDuration = () => {
    const start = formatDate(project.startDate);
    const end = project.endDate ? formatDate(project.endDate) : "Present";
    return `${start} - ${end}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl! max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images_list.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <ImageWithFallBack
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 md:h-100 object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images_list.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {project.challenges_list &&
                project.challenges_list.length > 0 && (
                  <div>
                    <h3 className="text-lg mb-2">Key Challenges</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {project.challenges_list.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {project.achievements_list &&
                project.achievements_list.length > 0 && (
                  <div>
                    <h3 className="text-lg mb-2">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {project.achievements_list.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Timeline:</span>
                  </div>
                  <p className="text-sm">{getProjectDuration()}</p>

                  <div className="text-sm">
                    <span className="text-muted-foreground">Role:</span>
                    <p>{project.role}</p>
                  </div>

                  <div className="text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <p>{project.category}</p>
                  </div>

                  {project.teamSize && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Team Size:</span>
                      <p>
                        {project.teamSize}{" "}
                        {project.teamSize === 1 ? "person" : "people"}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div>
                <h4 className="text-sm mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1">
                  {project?.technologies?.map((tech: SkillOptionType) => (
                    <Badge
                      key={tech.value}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {project.liveUrl && (
                  <Button asChild className="w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
