FROM openjdk:17-alpine
WORKDIR /user-service
COPY target/*.jar /user-service/app.jar
EXPOSE 9001
ENTRYPOINT ["java", "-jar", "/user-service/app.jar"]