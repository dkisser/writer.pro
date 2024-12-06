const firebaseConfig = {
    apiKey: "AIzaSyCbNQC0VB8JHDA9-5P1pnrVkWS7XAxm8lQ",
    authDomain: "aigc-network.firebaseapp.com",
    projectId: "aigc-network",
    storageBucket: "aigc-network.firebasestorage.app",
    messagingSenderId: "721885124722",
    appId: "1:721885124722:web:efc2f558f594a667608aeb"
};


const writerPro = {
    tenantCode: 'us',
    firebaseConfig: firebaseConfig,
    loginSuccessPage: '/essay-writer',
    productionDomain: 'https://aiwriter.pro/srv',
    developmentDomain: 'http://localhost:8080/srv',
    hkProxyDomain: 'https://hk.aiwriter.pro/srv'
    
};

export default writerPro;

