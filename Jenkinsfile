
@Library('jenkins-shared-lib') _

pipeline {
    agent any

    stages {
        stage('Run CI Pipeline') {
            steps {
                script {
                    ciPipeline(
                        buildType: 'node',
                        buildCmd: 'npm ci && npm run build:prod'
                    )
                }
            }
        }
    }
}
