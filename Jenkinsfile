pipeline {
    agent any
    environment {
    registry = "mouaforandoll/be_vitrine"
    registryCredential = 'docker'
    dockerImage = ''
    }
    stages {
        stage('Test') {
            steps {
                echo 'test..'
          
            }
        }
        stage('Build') {
            steps {
                script {
               dockerImage = docker.build registry  + ":$BUILD_NUMBER"
                }
            }
        }  
        stage('deployement') {
            steps {
                echo 'deployement..$ ok'
                script {
              docker.withRegistry( '', registryCredential ) {
                     dockerImage.push('latest')
                  }
               
                   }
                }
                
        }
          
          stage('Cleaning Up') {
               
                steps{
                  
                  echo 'stop current   be_vitrine  '
                 
                    script {
                        
                      
                    
                     sh 'docker stop be_vitrine || true'
                     sh 'docker rm -f be_vitrine || true'
                     sh 'docker image prune -f'
                          
                        
                     }
                    
                }
        }   
        
          stage('My run prod') {
          steps {
                echo 'stardd run..'
               script {  
                      sh 'docker pull mouaforandoll/be_vitrine' 
                     sh 'docker run -d --name be_vitrine -p 8002:80 mouaforandoll/be_vitrine:latest'
                     sh "docker rmi -f mouaforandoll/be_vitrine -f"
                
                  
               
                } 
          }}
        
         }}
         
         