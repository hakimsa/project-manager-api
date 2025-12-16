@Library('jenkins-shared-lib') _

pipeline {
    agent any

       environment {
        // Solo se referencia el ID, nunca el token
        GIT_CREDENTIALS = 'github-token-id'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/hakimsa/project-manager-api.git',
                        credentialsId: "${env.GIT_CREDENTIALS}"
                    ]]
                ])
            }
        }

        stage('Run CI Pipeline') {
            steps {
                // Llamada a la Shared Library con parámetros
                ciPipeline(
                    buildType: 'node',
                    buildCmd: 'npm install && npm run build:prod',
                    env: 'dev'
                )
            }
        }
    }
}