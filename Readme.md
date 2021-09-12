## Elastic Beanstalk With CodePipeline

1. Create an Elastic Beanstalk Application
2. Modify environment keys in Software section
3. Modify load balancer/ capacity as per requirements
4. Create App
5. Now go to CodePipeline
6. Create a new code pipeline
7. Complete Source, Build, Deploy stages
8. Finish pipeline creation
9. Create a YML file for build
10. Push to Github
11. In deploy stage change BuildArtifact -> SourceArtifact to build from YML File