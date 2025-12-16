@Library('jenkins-shared-lib') _

pipeline {
    agent any

    environment {
        // GitHub credentials ID configurada en Jenkins
        GIT_CREDENTIALS = 'github-token-id'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout con credenciales para permitir status updates
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/tu_usuario/tu_repo_node.git',
                        credentialsId: "${GIT_CREDENTIALS}"
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