pipeline {
    
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/PongKaiser/todo-backend.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh """
                        fuser -k 3000/tcp || true
                        pm2 start 'npm start'
                    """
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
