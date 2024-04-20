FROM openjdk:17-alpine
WORKDIR /business-service
COPY target/*.jar /business-service/app.jar
EXPOSE 9002
ENTRYPOINT ["java", "-jar", "/business-service/app.jar"]