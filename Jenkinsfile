pipeline {
  agent any
  stages {
    stage('setup') {
      steps {
        sh 'npm ci'
      }
    }

    stage('check') {
      parallel {
        stage('lint:ts') {
          steps {
            sh 'nx run-many --target=lint'
          }
        }

        stage('lint:styles') {
          steps {
            sh 'nx run-many --target=stylelint'
          }
        }

        stage('npm audit') {
          steps {
            sh 'npm audit'
          }
        }

      }
    }

    stage('test') {
      steps {
        sh 'nx run-many --target=test'
      }
    }

    stage('build') {
      steps {
        sh 'nx build'
      }
    }

  }
  environment {
    ENV = 'production'
  }
}