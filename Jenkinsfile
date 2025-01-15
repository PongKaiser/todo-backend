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
                    sh 'sudo npm install'
                    sh 'sudo npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh """
                        export JENKINS_NODE_COOKIE=dontKillMe; pm2 start npm --name "todo-backend" -- start
                        pm2 save
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
