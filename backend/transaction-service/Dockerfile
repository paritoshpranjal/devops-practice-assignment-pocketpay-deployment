FROM openjdk:17-alpine
WORKDIR /transaction-service
COPY target/*.jar /transaction-service/app.jar
EXPOSE 9003
ENTRYPOINT ["java", "-jar", "/transaction-service/app.jar"]