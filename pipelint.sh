#/usr/bin/env bash
JENKINS_PORT=8080;
JENKINS_HOST=localhost;
ssh -p $JENKINS_PORT $JENKINS_HOST declarative-linter < Jenkinsfile