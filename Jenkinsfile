pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git branch: "${params.Branch}", url: 'https://github.com/dahmic1907/Auction-App-testing.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test smoke.test.ts'
      }
    }      
  }
}
