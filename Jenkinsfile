pipeline {
    agent any

    environment {
        MONGO_URI = 'mongodb://localhost:27017/'
    }
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/PongKaiser/todo-backend.git']]])
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Deployment logic here
                    // This could be SSH to a server, deploying to a cloud service, etc.
                    // Example: Deploy scripts or configuration files might be needed
                    // sh './deploy.sh'
                    echo 'Deploying to Production...'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}