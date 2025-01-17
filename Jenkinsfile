pipeline {
    
    agent any

    tools {
        nodejs "NodeJS"
    }
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
                    def pm2Installed = sh(script: 'command -v pm2', returnStatus: true) == 0
                    if (!pm2Installed){
                        sh 'npm install -g pm2'
                    }
                    sh """
                        export JENKINS_NODE_COOKIE=dontKillMe; pm2 start npm --name "todo-backend" -- start
                        pm2 save
                        npm start
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
