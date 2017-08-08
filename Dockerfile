FROM tomcat:8.0.45-jre8
WORKDIR /usr/local/tomcat
COPY target/*.war webapps
CMD ["catalina.sh", "run"]
